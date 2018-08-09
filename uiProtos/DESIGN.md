# UI design log 

## Revisions
- [Rev 1 –– 9 Aug 2018](#rev 1)

## Revision notes

### Rev 1
#### Notes and description of work
- App breaks down into two main types of UI 1) fixed chart UI (used in Sessions and Time sections)
  and 2) filterable chart UI (used in event duration and event concurrency sections). This prototype 
  includes one example of each layout. 
- For the sake of speed I didn't override any of the default colors from UIKit. The result is awful,
  but it was fast. Building a color pallet for ShineyLoadTest will be addressed in later revisions.
- Top bar will be a good place for "universal" actions (e.g. save results) that are not dependant on
  what is being displayed. If there are none of these actions this bar can be removed and the logo 
  can be folded into the side control bar.
- I based the changes to the visualizations themselves on a limted knowledge of what GGPlot is 
  capible of, and seeing that in the existing app the all the of charts were static images. Breaking 
  each descrete chart into it's own image allows us to create a more responsive layout of the
  information, making it easier to digest across multiple viewport sizes. 
- In particular I think the Sessions viz would benefit greatly from being an interactive unit instead
  of a static image, hover over states for each unit of work with more detailed information could 
  make this an even more powerful report. 
- The table tab is still missing, and will be the next addition to the prototype. 
- Some details are still missing: locking the left column so the menu never scrolls when the right 
  column scrolls, better placement of the key in the Sessions viz, etc. 