
gsap.to("#box1",{
    x:500,
    duration:3,
    delay:1,
    backgroundColor:"red",
    opacity:0,

})

/* select element using its name like #box .box
  
   gsap have two methods 
      gsap.to("elm",{animation object in key value pairs})
          
         gsap.to => start to stop animation perform
         gsap.from => stop to start animation perform
        
         we use CSS proparty in gsap object 
        in camalecase
          like 
             backgroundColor:red,

*/


gsap.from("#box2",{
    x:500,
    duration:3,
    delay:1,
    backgroundColor:"red",
    opacity:0,
})

/* 
   in gsap.from
        box2 come from 500 px to its intiall position
          opacity change from 0 to1 
         background color goes to red to its intiall color that is yellow     
*/