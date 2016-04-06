# React example 101 - January 2016

Working through some react code example code.

# Getting started

First install the node packages with:

>npm install

Now build the app with

>npm run go

# Using a module manager - Browserify or Webpack?

Using babel to :

- compile from jsx to java-script
- compile to es2015

Using Browserify to :


- Manage modules

The biggest issue here is that it's so easy to make a mistake and not find it until run time.

Forgetting to export or getting the path wrong somewhere.

Can be difficult to debug.

1. Export everything!!!

# Using watchify

You have a number of options on how you are going to compile your react files.

- Setup you ide to do the compile each time you change a file.
- Monitor the file system and compile each time.

Check out atom build system.

of

Install watchify.

Watchify  takes the same command line args as browserify, but it just watches for
changes, and then compiles automatically. It's cool.


# Auto browser re-load

Going one step further get you browser to auto re-load the page on changes.
