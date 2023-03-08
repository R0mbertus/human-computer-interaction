# human-computer-interaction
Repo for Human Computer Interaction code @ VU

## Installation and running the project
To install the needed dependecies the first timedo `npm install` to setup the 
project for the first time.  
Then you can do `npm run build` to compile the `postcss/styles.css` file to 
`docs/styles.css` or alternatively use `npm run watch` to have the 
`postcss/styles.css` autocompile when the file changes.  
I recommend installing the following extensions for vscode:
* **PostCSS Language Support**, otherwise the `styles.css` will give you errors
*(nested tags will look a bit weird with syntax highlighting)*
* **Live Server**, to host the website locally *(start on index.html)*

## Editing your page
Any HTML for your page can be put inside the html file with your page name that
is in `docs/pages/`, any javascript you need for your page can be put in the js
file with your page name.  
The `docs/pages/` ~~currently only has the `hello` and `world` pages to show 
example execution from one page to another,~~ but you can just add your own page
files and add that to the pages array in `docs/index.js` 
(like `'pages/pagenamehere'`). Any css editing can be done in the 
`postcss/styles.css`, just create a selector of your id and put all your page 
specific css in there.  
Some options for subpages:
* Use Zain's method from the lo-fi project, having different div's in the same
html that you hide or show using javascript.
* create a new html and javascript file for this subpage and add it to the pages
array in `docs/index.js`.
* probably some other ways, just message in the discord chat

Of course, if you have any questions about this *special* solution ask away in
the discord chat.
