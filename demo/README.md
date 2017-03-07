# demo

In this directory you will find two demo pages ([`fast.html`](./fast.html) and [`slow.html`](./slow.html)) that will allow you to compare the speed of the streaming API versus a traditional API. This demo may also give you some ideas for your own experiments.

## Getting started

First things first, install the npm packages needed for both the server and the demo.

One directory up from this README, at the root of this repo, run:

```
npm install
```

Then, back within this `demo` directory, run:

```
npm install
```

Next, we will setup a PostgreSQL database, and populate it with dummy data.

## Installing PostgreSQL

Before we can begin, PostgreSQL needs to be installed on your machine.

For macOS, you can use the [Homebrew](https://brew.sh/) package manager to install PostgreSQL; if you don't already have Homebrew, install it now by issuing the following command in your command-line terminal:

```homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next, tell Homebrew to install PostgreSQL:

```
brew install postgresql
```

For other operating systems, reference the [PostgreSQL wiki](https://wiki.postgresql.org/wiki/Detailed_installation_guides).

## Creating a PostgreSQL database

If on macOS, make sure brew services can start PostgreSQL:

```
brew tap homebrew/services
brew services start postgresql
```

If the command was successful, stop PostgreSQL:

```
brew services stop postgresql
```

**Note**: The next steps apply to all operating systems.

Create a database for your machine's user:

```shell
createdb $(whoami)
```

Create a database called "todos":

```shell
psql
postgres=# CREATE DATABASE todos;
postgres=# \c todos;
todos=#
```

Create a table called "todos" with two columns, "id" and "text":

```shell
todos=# create table todos (id int not null, text varchar(100), emoji varchar(10));
todos=# select * from todos;
```

Next we will run a shell script to populate the database with a bunch of random TODOs.

## Populating the PostgreSQL

Run the [`createdb.sh`](./createdb.sh) script in the `demo` directory (this may take several minutes to complete):

```shell
sh createdb.sh
```

## Viewing the demo

Finally, to see the demo, navigate to the root of this repo (one directory up), and run:

```
npm start
```

Once the server is running, visit the following URLs in your favorite web browser:

**Fast (streaming API)**: <http://localhost:8080/fast.html>

**Slow (traditional API)**: <http://localhost:8080/slow.html>

You should notice a substantial speed difference between the `fast.html` and `slow.html` pages.

A recording of the side-by-side comparison is available at the [DoneJS YouTube channel](https://www.youtube.com/channel/UCEnTQUfJi0L6l7g8IRuaVkg):

[![Streaming speed test](https://img.youtube.com/vi/dhVpzlbdS2g/0.jpg)](https://www.youtube.com/watch?v=dhVpzlbdS2g)

