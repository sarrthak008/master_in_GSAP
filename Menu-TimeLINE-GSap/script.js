let TimeLine = gsap.timeline()

   //

   TimeLine.from("#menu-bar",{
    x:550,
    duration:0.5,
    delay:0.1,
    opacity:0
   })

   TimeLine.from("ul li",{
    x:10,
    duration:0.5,
    opacity:0,
    stagger:0.2
   })

   TimeLine.pause()

   document.querySelector('#right img').addEventListener('click',()=>{
         TimeLine.play()
   })

   document.querySelector("#cross img").addEventListener("click",()=>{
       TimeLine.reverse()
   })


   /*
   
     In this code i leaarn some functions of time line
       Timeline have some function
         Timeline.pause() => that pause the time line
         Timeline.play() => that play the timeline
         Timeline.restart() => restart the time line
         Timeline.reverse() => reverse the time line

      if we want play two animation in same time in timeline

         Timeline.to(".elm1",{
            /animaton code.....
         },x)
    
         Timeline.to(".elm2",{
            /animation code....
         },x)

      }x ===> elements animate in same time....
   */


      /*
         time line also provide some extra funcitons like

         onComplete(),
         OnReverseComplet(),
         

         GO TO GSAP DOCUMENTATION IS THE BEST PLATFORM TO LEARN GSAP.....

      */