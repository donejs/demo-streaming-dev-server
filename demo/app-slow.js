var connect = require("can-connect/all");
var DefineMap = require("can-define/map/map");
var DefineList = require("can-define/list/list");
var view = require("./view.stache");

var Todo = DefineMap.extend({});

Todo.List = DefineList.extend({});
Todo.connection = connect(["constructor", "can/map", "constructor/store",
	"data/callbacks", "data/parse", "data/url", "constructor/callbacks-once"], {
	Map: Todo,
	List: Todo.List,
	name: "todo",
	url: "/api/todos.json"
});

var ViewModel = DefineMap.extend({
	todosPromise: {
		get: function(){
			return Todo.getList({});
		}
	},
	todos: {
		get: function(last, resolve){
			this.todosPromise.then(resolve);
		}
	},
	e: function(hex) {
		return hex+";"
	}
});

var fragment = view(new ViewModel());
document.querySelector("#app").appendChild(fragment);
