AOS.init({
  disable: 'mobile',
  once:true
});

AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  }
});
$(".gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
 
  Fancybox.bind('[data-fancybox="gallery"]', {
    //
  });  
  Fancybox.bind('[data-fancybox="gallery1"]', {
    //
  });  