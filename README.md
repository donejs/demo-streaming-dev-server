# donejs-streaming-dev-server

This is a development server to aid with building streaming tools for web browsers. Running this server will give you a static file server and an API that will deliver todos in [ndjson](http://ndjson.org/) format.

## Install

Install with:

```shell
npm install donejs-streaming-dev-server
```
Install Homebrew to install postgresql database, if you already have homebrew, skip this step.
```homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

install PostgreSQL with HomeBrew
```
brew install postgresql
```

And then in your package.json scripts add this script:

```json
{
	"scripts": {
		...
		"start": "donejs-streaming-dev-server"
	}
}
```

Alternative you can install globally:

```shell
npm install -g donejs-streaming-dev-server
```

# Create a database

Start PostgreSQL by Brew Service

```shell
brew tap homebrew/services
brew services start postgresql
```

Stop PostgreSQL
```shell
brew services stop postgresql
```

Create user database

```shell
createdb $(whoami)
```

Create Database todos
```shell
psql
postgres=# CREATE DATABASE todos;
postgres=# \c todos;
todos=#
```

Create Table todos with two columns: id and text

```shell
todos=# create table todos (id int not null, text varchar(100));
todos=# select * from todos;
```

Run createdb.sh in the directory(may cost several minutes to finish that)

```shell
sh createdb.sh
```



# Running

If you added donejs-streaming-dev-server as an NPM script you can run it with `npm start`.

If installed globally run `donejs-streaming-dev-server`.
