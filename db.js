const fs = require('fs');
const Readable = require('stream').Readable;

const jsonString = fs.readFileSync(__dirname + "/fixtures.json", "utf8");

class Database extends Readable {
	constructor(ms) {
		super({ objectMode: true });

		this.ms = ms;
		this.data = JSON.parse(jsonString);
	}

	_read() {
		var todo = this.data.todos.shift();

		if(!todo) {
			this.push(null);
			return;
		}

		setTimeout(() => {
			this.push(todo);
		}, this.ms);
	}
}

module.exports = function(ms = 2000) {
	return new Database(ms);
};
