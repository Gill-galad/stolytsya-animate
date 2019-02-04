
let tl = new TimelineMax();

tl
    .from( $('.line-s'), 2, {
        rotation: -18,
        transformOrigin: "100% 100%"
    } )
    .from( $('.line-t'), 2,{
        rotation: 18,
        transformOrigin: "100% 50%"
    },'-=2')
    .from( $('.line-o'), 2, {
        rotation: -18,
        transformOrigin: "100% 50%"
    }, '-=2')
    .from( $('.line-l'), 2, {
        rotation: 18,
        transformOrigin: "100% 50%"
    }, '-=2');
