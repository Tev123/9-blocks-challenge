var drawing = SVG('drawing-area');
var moveBee = function(mouseEvent) {
  console.log(mouseEvent.x, mouseEvent.y);
    beeGroup.center (mouseEvent.x, mouseEvent.y)
    
}
var drawFlower = function(x, y, pedalColor, stemColor){
    var flowerGroup = drawing.group()
        .on('mousemove  ', moveBee)
        .center(x, y)
    
    drawing
      .rect(150,200)
      .fill('#aafaaa')
      .center(100, 135)
      .addTo(flowerGroup)
    

    drawing
      .rect(10, 100)
      .fill(stemColor)
      .center(100, 175)
      .addTo(flowerGroup)

    drawing
      .ellipse(50, 50)
      .fill(pedalColor)
      .center(100, 70)
      .rotate(93)
      .addTo(flowerGroup)

    drawing
      .ellipse(50, 50)
      .fill(pedalColor)
      .center(130, 100)
      .rotate(93)
      .addTo(flowerGroup)

    drawing
      .ellipse(50, 50)
      .fill(pedalColor)
      .center(100, 125)
      .rotate(93)
      .addTo(flowerGroup)

    drawing
      .ellipse(50, 50)
      .fill(pedalColor)
      .center(70, 100)
      .rotate(93)
      .addTo(flowerGroup)

    drawing
      .ellipse(50, 50)
      .fill('yellow')
      .center(100, 100)
      .rotate(93)
      .addTo(flowerGroup)
    
}

    drawFlower(0, 220,'purple','pink')
drawFlower(0, 440,"pink",'purple')
    drawFlower(0, 0,"red",'black')
drawFlower(400, 440,"black",'red')
    drawFlower(400, 220,"green",'orange')
drawFlower(400, 0,"orange",'green')
    drawFlower(800, 440,"blue",'grey')
drawFlower(800, 220,"grey",'blue')
    drawFlower(800, 0, "skyblue",'brown')

var beeGroup = drawing.group();

// the bee's body
drawing
  .ellipse(50,39)
  .fill('grey')
  .stroke('black')
  .center(35,0)
  .rotate(35)
  .addTo(beeGroup);
drawing
  .ellipse(50,39)
  .fill('grey')
  .stroke('black')
  .center(67,0)
  .rotate(145)
  .addTo(beeGroup)
drawing
  .ellipse(50,39)
  .fill('grey')
  .stroke('black')
  .center(35,25)
  .rotate(145)
  .addTo(beeGroup)
drawing
  .ellipse(50,39)
  .fill('grey')
  .stroke('black')
  .center(65,25)
  .rotate(35)
  .addTo(beeGroup);

drawing
  .ellipse(100, 30)
  .fill('yellow')
  .addTo(beeGroup);
drawing
  .rect(5,30)
  .fill('black')
  .center(50,15)
  .addTo(beeGroup);
drawing
  .rect(5,30)
  .fill('black')
  .center(70,15)
  .addTo(beeGroup);
drawing
  .rect(5,28)
  .fill('black')
  .center(30,15)
  .addTo(beeGroup);
drawing
  .ellipse(5,5)
  .fill('white')
  .stroke('black')
  .center(90,20)
  .rotate(35)
  .addTo(beeGroup);
drawing
  .ellipse(5,5)
  .fill('white')
  .stroke('black')
  .center(90,10)
  .rotate(35)
  .addTo(beeGroup);
drawing
  .line( 95, 20, 110, 25)
  .stroke('black')
  .addTo(beeGroup);
drawing
  .line( 95, 10, 110, 5)
  .stroke('black')
  .addTo(beeGroup);

   
    

