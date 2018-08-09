# SLT UI Prototypes

Latest revision notes are in [DESIGN.md](./DESIGN.md)

## How to view
All the compiled files are in /dist, just open the html file you want in a browser and it will all 
just work.

## How to build
- `yarn install` the dependencies from npm.
- `yarn start` starts the build server, everything will be built on load *.hbs and *.scss will be 
  rebuilt when changes are detected. Adding files to the assets folder to be copied requires 
  restarting the server. 

## Folder layout
- `assets` -- All non-handlebars assets go here. JS, Sass, images..all of it, right here.
- `components` -- reusable chunks of code I'm compiling for part of the larger ShinyUI project live here
- `layouts` -- This holds the base templates each "page" gets rendered into. 
- `pages` -- Each prototype lives here as a partial that is the entire contents of that app's `<body>`
Yay! easy components -> flat HTML files!
