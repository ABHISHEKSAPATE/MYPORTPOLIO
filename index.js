$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});



const sr = ScrollReveal ({ distance: '40px', duration: 2500,  });



sr.reveal('.img1', {delay: 200, origin: 'right'})
sr.reveal('.txt1', {delay: 200, origin: 'left'})