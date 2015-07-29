boilerplate: angularjs
======================

**Q:** Why not [Yeoman](http://yeoman.io)?
**A:** Same reasons why there's [Fireshell](http://getfireshell.com).

Getting Started
-----

**Project Dependencies**

Dependencies and DevDependencies are listed in `package.json`

```bash
$ npm install && npm start # install dependencies and start nodeserver
```

**Front-end Packages**

Front-end packages are installed in `/application/assets/lib/` we consume those
from that directory during development. See [Grunt Tasks](#grunt-tasks) how
distribution (or production-build) is built.

```bash
$ bower install
```

### Project structure

```bash
boilerplate
├── _build                  # production build
├── application             # angularjs app here
|   └── app                 # main app goes here
|   |   ├── scripts
|   |   └── views
│   ├── assets              # application assets go here
|   |   ├── lib             # bower components are installed here
│   |   ├── css
│   |   ├── fonts
|   |   └──  img
|   ├── module              # application modules go here
|   |   └── module_name
|   |       ├── scripts     # module scripts here
|   |       └── views       # module html views here
|   └── index.html
├── server
├── src                     # directory where
├── test                    # angularjs app test cases here
|   ├── e2e                 # e2e tests here
|   └── spec                # unit tests here
├── .bowerrc
├── .gitignore
├── .jshintrc
├── .nodemonignore
├── bower.json
├── Gruntfile.js
├── karma.conf.js
├── package.json
└── README.md
```


Grunt Tasks
-----

```bash
$ grunt # does nothing at the moment ;p
```

Run tests for all `.js` files inside `app/**/*.js`, you might have to manually
add your modules to `karma.conf.js`'s list of file/patterns to load.

```bash
$ grunt test
```

Build your app for production/distribution: tasks are listed in the `Gruntfile.js`

```bash
$ grunt build
```


Apache
-----

Running the app with Apache: I decided to not add this `.htaccess` but just in
case some folks would like to run their AngularJS app via apache, here it is:

```bash

# RewriteEngine for AngularJS HTML5 Mode
# provided by locationProvider
# ---------------------------------------------------------------------------

<IfModule mod_rewrite.c>
  RewriteEngine on

  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Rewrite everything else to index.html to allow html5 state links
  RewriteRule ^ index.html [L]
</IfModule>
```

you may refer to [h5bp .htaccess](https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess)
for more/advance options.
