# information about each file & || folder

- node_modules                     | important (but not needed for uploading)

>----------- public Folder          |!very important------------------------------------------------

- favicon.ico                      |if needed
<[is used as an icon in the browser tab, bookmarks, and other places. When a user visits your website.]>

- index.html                       |important
<[includes the basic layout and structure of the app's user interface.]>

- manifest.json                    |can remove file

<[provides a standardized way to package and distribute web apps on various platforms, including desktop and mobile devices. (icon on the home screen, offline support, and push notifications).]>

- robots.txt                       |can remove file
<[used to give instructions to search engine crawlers about which pages or sections of your website should be indexed or excluded from indexing (basically a file that is used as a security measure for the website/app).]>

>-----------  src Folder            |!very important------------------------------------------------

- App.css                          |importnant (name can be changed)
<[your already knwo what this is, and is used within App.js]>
- App.js                           |!very important
<[defines the root component of your React application which describes the structure and behavior of the app's user interface.]>

- index.js                         |!very important
<[renders the app.js files attributes as root to be runned from index.html]>
- reportWebVitals.js               |can remove file
<[used to track and report on certain metrics related to the performance of your web application, such as page load time, time to first byte, and more. (on default sends the data to Google Analytics service).]>

>-------------- other files outside of the listed folders --------------------------------

- .gitignore                       |Necessary file
<[choose which files can be ignored when..  ]>

- package-lock.json                |Necessary file
<[defiens what files and folders within node_modules needs to be downloaded from npm i]>

- package.json                     |Necessary file
<[unsure]>

this is a README.md file that lists out the files used in this template

>what not to do:

editing these files:

1. manifest.json
2. node_modules folder
3. reportWebVitals.js
4. package-lock.json
5. package.json

where to add the html code:

While you can technically add HTML code directly into the index.html file, it's generally not recommended as it defeats the purpose of using React as a library for building user interfaces in a component-based architecture.

Instead, the index.html file should only contain the basic layout and structure of the app's user interface, such as the main div element with an id of root that serves as the mounting point for the app's React components.
