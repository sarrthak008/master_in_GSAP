window.addEventListener('wheel',(e)=>{

    //e.deltaY give scroll value

    if(e.deltaY>0){
        gsap.to(".marqe",{
            transform: `translateX(0%)`,
            duration:2,
            ease:'none',
            repeat:-1
        })
 
        gsap.to(".marqe img",{
            rotate:'-180'
        })

    }else{
        gsap.to(".marqe",{
            transform: `translateX(-200%)`,
            duration:2,
            ease:'none',
            repeat:-1
        })

        gsap.to(".marqe img",{
            rotate:'0'
        })
    }

})


/*
there i learn some new proaprtie of gsap and css

in gsap to run animation iinfinite tiem we use

repeat:-1

whell events works on scrolling..

and in css
  flex-shirnk stop to shrinking childes
   
  background-attachment: fixed

  fixed the bg image...

*/