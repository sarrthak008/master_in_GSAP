
/*

calculating all animation time = delay + Duration is calculating and create next animation 
create its complicated
   thats why gsap provide gsap.time line for run animation one by one

*/



/* gsap.to(".box1",{
    y:100,
    x:100,
    delay:2,
    duration:4
})


gsap.to(".box2",{
    y:100,
    x:100,
    delay:6,
    duration:4
})

gsap.to(".box3",{
    y:100,
    x:100,
    delay:10,
    duration:4
}) */



var MyTimeLine = gsap.timeline()

 MyTimeLine.to(".box1",{
      x:500,
      y:50,
      rotate:360,
      duration:4,
      delay:1
 })

 MyTimeLine.from(".box2",{
    x:500,
    rotate:40,
    duration:2,
    delay:1
 })


 MyTimeLine.to(".box3",{
    x:500,
    rotate:40,
    duration:2,
    delay:1,
    backgroundColor:'pink'
 })