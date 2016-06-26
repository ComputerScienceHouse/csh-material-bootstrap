CSH Material Bootstrap
=======================

A material theme for [Bootstrap](http://getbootstrap.com) for use on [Computer Science House](http://csh.rit.edu) websites.

Usage
------
You can choose to install this package with Bower, or simply download the current version of the stylesheet. In both cases, you must still include Bootstrap's JavaScript file to have functional dropdowns, modals, etc.

#### Installation with Bower
CSH Material Bootstrap is available via Bower. Simply run the following command to add the package to your project:

```
bower install --save csh-material-bootstrap
```

#### Manual Installation
Download `dist/csh-material-bootstrap.min.css` and replace Bootstrap's default stylesheet.

You can also import the theme into your styles using SASS.

```
@import "csh-material-bootstrap/sass/variables";
@import "bootstrap-sass/assets/stylesheets/bootstrap";
@import "csh-material-bootstrap/sass/csh-material-bootstrap";
```

Development
------------
You must have Node and Grunt CLI installed. To install Grunt CLI, run: `npm install -g grunt-cli`. Once you have those tools installed, clone this repo and run the following commands to install dependencies:

```
npm install
bower install
```

Once all of the dependencies are installed, run `grunt build` to build the theme (artifacts will be dropped in `./dist`), or simply `grunt` to start a live reload server for development.


Contributing
-------------
**Issues:** Provide a detailed report of any bugs you encounter and open an issue on [GitHub](https://github.com/ComputerScienceHouse/csh-material-bootstrap/issues). Screenshots are appreciated!

**Code:** Fork this repo, make a fix, and submit it as a pull request.
