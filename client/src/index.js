
//auto include all files in this folder (src)
//otherwise we had to manually import all the files: import X from './module/x.js' 
var context = require.context('./', true, /\.(js|jsx|css|scss)$/);
var files = {};

context.keys().forEach((filename) => {
    console.log(filename);
    files[filename] = context(filename);
});


//TODO find a way to create the main HTML elements and chain the components rendering

