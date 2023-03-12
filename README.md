# human-computer-interaction
Repo for Human Computer Interaction code @ VU

## Link to website
https://r0mbertus.github.io/human-computer-interaction/

## Running the project
If you want to run the project locally, instead of using the github pages, 
there are a few options:
* Open a terminal in the `docs/` directory, run `python3 -m http.server 8000`
and go to http://0.0.0.0:8000/
* Use the Visual Studio Code **Live Server** extension and hosting the 
index.html file

## Installing the project
To install the needed project dependecies the first time do `npm install`.  
Then you can do `npm run build` to compile the `postcss/styles.css` file to 
`docs/styles.css` or alternatively use `npm run watch` to have the 
`postcss/styles.css` autocompile when it changes.  
It's recommend installing the following extensions for vscode:
* **[PostCSS Intellisense and Highlighting](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-postcss)**, 
otherwise the `styles.css` will give you errors
* **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**, 
to host the website locally during development *(start on index.html)*

## IMPORTANT FOR CONTRIBUTING
* Put your css in `postcss/styles.css`, not `docs/styles.css`
* run `npm run watch` to have the postcss autocompile down to css
* **ALWAYS** fetch before doing anything

## Editing your page
Any HTML and Javascript for your page can be put inside a respective file with 
your page name that is in `docs/pages/` or any subdirectories in there. 
then you can load that page using `loadPage("pathToFileFromDocs/yourPageName")`.
Any CSS needs to be put in `postcss/styles.css`, just create a selector of your 
id and put all your page specific css in there.  
