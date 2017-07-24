var connect = require("can-connect/all");
var DefineMap = require("can-define/map/map");
var DefineList = require("can-define/list/list");
var ndjson = require("can-connect-ndjson");
var view = require("./view.stache");
var config = require("./config");

var Todo = DefineMap.extend({});

Todo.List = DefineList.extend({});
Todo.connection = connect(["constructor", "can/map", "constructor/store",
	"data/callbacks", "data/parse", "data/url", "constructor/callbacks-once", ndjson], {
	Map: Todo,
	List: Todo.List,
	name: "todo",
	url: "/api/todos.json",
	ndjson: "/api/todos.ndjson"
});

var ViewModel = DefineMap.extend({
	todosPromise: {
		get: function(){
			return Todo.getList({});
		}
	},
	todos: {
		get: function(last, resolve){
			console.time("first");
			console.time("total");

			this.todosPromise.then(function(list) {
				list.on("length", function(ev, len){
					if(len === 1) {
						console.timeEnd("first");
					} else if(len === config.count) {
						console.timeEnd("total");
					}
				});
			
				resolve(list);
			});
		}
	}
});

var fragment = view(new ViewModel());
document.querySelector("#app").appendChild(fragment);
