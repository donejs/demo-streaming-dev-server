
var render = can.stache.from("todosTemplate");

var Todo = can.DefineMap.extend({});

Todo.List = can.DefineList.extend({});
Todo.connection = can.connect(["constructor", "can/map", "constructor/store",
	"data/callbacks", "data/parse", "data/url", "constructor/callbacks-once"], {
	Map: Todo,
	List: Todo.List,
	name: "todo",
	url: "/apis/todos.ndjson"
});

var ViewModel = can.DefineMap.extend({
	todosPromise: {
		get: function(){
			return Todo.getList({});
		}
	},
	todos: {
		get: function(last, resolve){
			this.todosPromise.then(resolve);
		}
	}
});

var fragment = render(new ViewModel());
document.querySelector("#app").appendChild(fragment);
