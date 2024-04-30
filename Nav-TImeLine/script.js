var timeLine = gsap.timeline()

timeLine.from('#left',{
    y:-40,
    duration:0.8,
    delay:0.5,
    opacity:0
})

timeLine.from('#right h3',{
    y:-40,
    duration:0.8,
    opacity:0,
    stagger:0.5
})

timeLine.from("#main h1",{
    y:100,
    duration:0.8,
    opacity:0,
})

//what learn new 
//  stagger =>  stagger animamte child one by one......