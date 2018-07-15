var picClassify=['p2-7.jpg','p2-8.jpg','p2-10.jpg','p2-9.jpg','p2-11.jpg','p2-12.jpg','p2-13.jpg','p2-14.jpg','p2-15.jpg','p2-16.jpg','p2-17.jpg','p2-18.jpg','p2-19.jpg','p2-20.jpg']
$('.Classify div').each(function(n){
  $(this).css("background-image","url(../images/"+picClassify[n]+")")
  .css({
    "background-size":"240px 80px",
    "background-repeat":"no-repeat",
    "background-size":"240px 140px"
  })
})
