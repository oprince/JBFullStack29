# JBFullStack29

# Ex 3: mouse events

Test mouse events order:

- Attach event handler for the following mouse events :
  - mousedown / mouseup 
  - mouseover / mouseout
  - mousemove
  - click
  - dblclick
  - contextmenu
- Learn the events order by printing them to the console.
- Add an HTML element that will show (x,y) coordinates of a point which user clicks on the canvas

# Exercise 7 (Advanced):

Draw on canvas with mouse:

Change the [initial code sample](canvas_draw_with_mouse.html) to use the following classes:
- Line – base class with empty draw() method. Subclasses will implement draw() method, and encapsulate their specific fields:
  - Straight
  - Arc
  - bezierCurve
  - quadraticCurve
- Start with Arc and Straight, leave the curves for later phase.
- Design and implement the Arc variables needed for drawing. Are these going to be provided by user, or constant variables (“hard coded”) ? Best to start with constants, and check later if can be a dynamic user input.
  - Radius
  - Start angle
  - End angle
  - Direction
- Add color selection element.
- Add line width selection element.
- Implement the cleanCanvas() function
