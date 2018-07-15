$(function(){
  $('.allradio').css({
    'color':'black',
    'text-decoration':'none',
    'border-bottom': '2px solid black',
    'padding-bottom':'10px'
  })
}) 
var images=["../images/p307.JPG","../images/p308.jpg","../images/p309.jpg",
"../images/p313.JPG","../images/p314.JPG","../images/p315.JPG",
"../images/p316.png","../images/p318.png","../images/p319.jpg",
"../images/p320.jpg","../images/p317.png","../images/p321.jpg"]
$('.pict').each(function(n){
  $(this).css({
    'width':'300px',
    'height' : '300px',
    'background-image':"url('"+images[n]+"')",
    'background-size' : '300px'
  })
})
