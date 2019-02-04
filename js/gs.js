
let tl = new TimelineMax();

tl
    .from( $('.line-s'), 2, {
        rotation: -18,
        transformOrigin: "100% 100%"
    } )
    .from( $(".line-t"), 2,{
        rotation: 18,
        transformOrigin: "100% 50%"
    },"-=1.5")
    .from( $(".line-i"), 2, {
        y: "100%"
    });
