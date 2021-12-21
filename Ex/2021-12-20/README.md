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

# Ex 4: draw shapes

Draw rectangle on canvas:

Change the fillBackground() method at the [sample we have reviewed](canvas_draw_shapes.html) to paint all canvas area in yellow.

- Add a button that will draw rectangle outlines one inside another, as shown in this sample:
  - Use a loop that will calculate the rectangle coordinates, size, and color. 
  - The color options should be represented in an array.
  - Represent the rectangle to be painted using an object.
  - Pass the rectangle object to drawRectangle() function
  - Add input field were number of rectangles should be entered by the user.
  
  
![image](https://user-images.githubusercontent.com/12232897/146805665-ec904b2e-e0e0-4f41-adab-22304287f975.png)

Advanced: 

- Add “linear gradient” button that will paint the canvas with linear gradient – from left red to middle green, and right blue.
- Add “radial gradient” button that will paint the canvas with radial gradient at the middle of canvas – from inner red to middle green to outer blue. 
- Add input field were the radial gradiant inner and outer radius is entered by user

# Ex 5: draw with mouse

Add `click` event handler to the canvas.
- When user clicks on the Canvas, draw a small rectangle `(width: 10, height: 10)`. 
- The rectangle coordinates `(x,y)` should be set according to the mouse position, as follows:

`x = event.clientX - canvas.offsetLeft`
`y = event.clientY - canvas.offsetTop`


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
