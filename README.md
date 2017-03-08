# donejs-streaming-dev-server

Before you can develop apps or tools that consume [streaming data](https://github.com/donejs/donejs/issues/834), you need a service that streams data in chunks.

This npm package bootstraps a **local node server** to act as a static file server while also providing an API to facilitate streaming data from a PostgreSQL database in [ndjson](http://ndjson.org/) format.

It's a great starting point for your next streaming data JavaScript project.

To see a working comparison of the speed increase when streaming database data versus using a traditional API, clone this repo to your machine and visit the [`demo`](./demo) folder for further instructions.

To start using `donejs-streaming-dev-server` in your own app, add it to your project and run it as outlined below.

## Adding `donejs-streaming-dev-server` to your project

Install the package locally:

```
npm install donejs-streaming-dev-server
```

In the `scripts` section of your app's `package.json`, add the following:

```json
{
	"scripts": {
		...
		"start": "donejs-streaming-dev-server"
	}
}
```

Alternatively, you can do a global install:

```
npm install -g donejs-streaming-dev-server
```

## Running the streaming dev server

If you added `donejs-streaming-dev-server` as an npm script, you can run it with `npm start`.

If you have installed `donejs-streaming-dev-server` globally, run it with `donejs-streaming-dev-server`.

