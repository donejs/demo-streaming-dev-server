console.time("total");

fetch("/api/todos.json").then(function(response){
	return response.json();
})
.then(function(todos){
	console.timeEnd("total");
	console.log("Items", todos.length);
});
