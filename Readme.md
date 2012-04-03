# Html file loader

Create the http server & listening our port.
If you changed html file , loader is reload it.


## How to use

First attach `loader.js` in your project folder.

Next, require `./loader`:

```js
var loader = require('./loader');
```

Next, set html_file and listening port:

```js
var html_file = 'index.html';
var port = 9000;
	loader.reading_file(html_file,port);  
```

........................................


## License 


Copyright (c) 2011 Vasiliy Shevchuk &lt;vasiliyhop@gmail.com&gt;


