# donejs-streaming-dev-server

This is a development server to aid with building streaming tools for web browsers. Running this server will give you a static file server and an API that will deliver todos in [ndjson](http://ndjson.org/) format.

## Install

Install with:

```shell
npm install donejs-streaming-dev-server
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

# Running

If you added donejs-streaming-dev-server as an NPM script you can run it with `npm start`.

If installed globally run `donejs-streaming-dev-server`.
