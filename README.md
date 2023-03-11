# human-computer-interaction
Repo for Human Computer Interaction code @ VU

## Link to website
https://r0mbertus.github.io/human-computer-interaction/

## IMPORTANT
* Put your css in `postcss/styles.css`, not `docs/styles.css`
* run `npm run watch` to have the postcss autocompile down to css
* **ALWAYS** fetch before doing anything

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
file with your page name in the same place. then you can load that page 
using `loadPage("yourPageName")`  
You can put your css in `postcss/styles.css`, just create a selector of your 
id and put all your page specific css in there.  
Some options for subpages:
* Use Zain's method from the lo-fi project, having different div's in the same
html that you hide or show using javascript.
* create a new html and javascript file for this subpage and add it to the pages
array in `docs/index.js`.
* probably some other ways, just message in the discord chat

Of course, if you have any questions about this *special* solution ask away in
the discord chat.
