CSH Material Bootstrap
=======================

A [Bootstrap](http://getbootstrap.com) material theme designed for use on [Computer Science House](http://csh.rit.edu) websites. Based on [Materia](https://bootswatch.com/materia) by [Bootswatch](https://bootswatch.com).

Demo
----

A live demo of this theme that showcases most components can be found [here](https://s3.csh.rit.edu/csh-material-bootstrap/4.3.1/index.html).

Usage
------
You can choose to install this package with NPM, or simply include the CDN links on your webpage. In both cases, you must still include Bootstrap's required JavaScript libraries to have functional dropdowns, modals, etc. unless you are using an alternative implementation (e.g. [Reactstrap](http://reactstrap.github.io)).

#### Installation
CSH Material Bootstrap is available via NPM. This method is recommended for modern web applications. Simply run the following command to add the package to your project:

```
npm install --save csh-material-bootstrap
```

You can then include the stylesheet into your bundled project:

```
import 'csh-material-bootstrap/dist/csh-material-bootstrap.css';
```

Or with SCSS:

```
@import "node_modules/csh-material-bootstrap/src/csh-material-bootstrap.scss";
```

#### CDN
Use CSH Material Bootstrap without a package manager.

###### CSS

```
<link rel="stylesheet" href="https://s3.csh.rit.edu/csh-material-bootstrap/4.3.1/dist/csh-material-bootstrap.min.css" media="screen">
```

###### JS, Popper.js, and jQuery

```
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

Development
------------
You must have [Node 6 or higher](https://nodejs.org) and NPM or [Yarn](https://yarnpkg.com) installed.

Once you have those tools installed, clone this repo and run the following command to install dependencies:

```
npm install
```

Or, with Yarn:

```
yarn
```

Once all of the dependencies are installed, run `npm build` to build the stylesheet (artifacts will be dropped in `./dist`), or `npm start` to watch the source files for development.


Contributing
-------------
**Issues:** Provide a detailed report of any bugs you encounter and open an issue on [GitHub](https://github.com/ComputerScienceHouse/csh-material-bootstrap/issues). Screenshots are appreciated!

**Code:** Fork this repo, make a fix, and submit it as a pull request.
