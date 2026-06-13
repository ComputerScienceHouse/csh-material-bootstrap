CSH Material Bootstrap
=======================

A [Bootstrap](http://getbootstrap.com) material theme designed for use on [Computer Science House](http://csh.rit.edu) websites.

Demo
----

A live demo of this theme that showcases most components can be found [here](https://s3.csh.rit.edu/csh-material-bootstrap/5.3.9/index.html).

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
import 'csh-material-bootstrap/css';
```

Or with SCSS:

```
@use 'pkg:csh-material-bootstrap';
# or 
@import 'csh-material-bootstrap'; # ??? idk I haven't tested this, use the @use one, @import is deprecated
```

#### CDN
Use CSH Material Bootstrap without a package manager.

###### CSS

```
 <link rel="stylesheet" href="https://assets.csh.rit.edu/csh-material-bootstrap/5.3.9/dist/css/csh-material-bootstrap.min.css" media="screen">
```

###### JS

```
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
  crossorigin="anonymous"></script>
```

#### Themes
To use different themes and enable theme switching on your website, you must include `colors-modes.js`. See [the website](https://assets.csh.rit.edu/csh-material-bootstrap/5.3.9/index.html#theme-switchers) for more details

Development
------------
You must have [Node](https://nodejs.org) and NPM installed.

Once you have those tools installed, clone this repo and run the following command to install dependencies:

```
npm install
```

Once all of the dependencies are installed, run `npm compile` to build the stylesheet (artifacts will be dropped in `./dist`).
If you wish to work on the docs, run `npm run dev`, which will launch a websever with Vite on port 5173 to watch the changes. 
This uses `nodemon` to watch for css changes too, so you can update css without having to recompile!

Contributing
-------------
**Issues:** Provide a detailed report of any bugs you encounter and open an issue on [GitHub](https://github.com/ComputerScienceHouse/csh-material-bootstrap/issues). Screenshots are appreciated!

**Code:** Fork this repo, make a fix, and submit it as a pull request.
