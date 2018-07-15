$(function(){
  $('.pick').css({
    'color':'black',
    'text-decoration':'none',
    'border-bottom': '2px solid black',
    'padding-bottom':'10px'
  })
}) 
 var imgs=['../images/p303.gif','../images/p302.jpeg','../images/p301.jpg'
 ,'../images/p304.jpg',"../images/p305.jpg","../images/p306.jpg",
 "../images/p310.jpeg","../images/p311.jpg","../images/p312.jpg"]
 $('.pic').each(function(n){
  $(this).css({
    'width':'300px',
    'height' : '300px',
    'background-image':"url('"+imgs[n]+"')",
    'background-size' : '300px'
  })      
  $(this).mouseover(function(){
    $(this).stop().animate({
      'background-size':'320px',
    },300);
  })
  $(this).mouseout(function(){
    $(this).stop().animate({
      'background-size':'300px'
    },300);
  })
})
 var images=["../images/p307.JPG","../images/p308.jpg","../images/p309.jpg"]
 $('.pict').each(function(n){
  $(this).css({
    'width':'300px',
    'height' : '300px',
    'background-image':"url('"+images[n]+"')",
    'background-size' : '300px'
  })
})
