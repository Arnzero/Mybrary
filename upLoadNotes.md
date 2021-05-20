filepond
to download our files 

course #4
<!-- add to document <head> -->
<link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet" />

<!-- add before </body> -->
<script defer src="https://unpkg.com/filepond/dist/filepond.js"></script>


var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

Seems like big files will make the payload too big!