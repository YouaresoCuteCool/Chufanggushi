var flag=true;
$(".paorpl").click(function(){
    if(flag){
    	$(".ing").text('播放ing');
        $(".paorpl").css({
    	'background-image':'url("../images/radio-play.png")'
        })
        
    }else{
    	$(".paorpl").css({
    	'background-image':'url("../images/radio-pause.png")'
        })
        $(".ing").text('暂停ing');
    }
    flag=!flag;
})
$(".like").click(function(){
    if(flag){   
        $(".like").css({
    	'background-image':'url("../images/like.png")'
        })        
    }else{
    	$(".like").css({
    	'background-image':'url("../images/likeH.png")'
        })
    }
    flag=!flag;
})
$(".share").click(function(){
	$('.sharemenu').css({
		'display':'block'
	})
	$('.sina').mouseover(function(){
		$('.sina').css({
			'background-image':'url(../images/share-sina.png)' 
		})
	})
	$('.sina').mouseout(function(){
		$('.sina').css({
			'background-image':'url(../images/foot-sinaH.png)' 
		})
	})
	$('.wechat').mouseover(function(){
		$('.wechat').css({
			'background-image':'url(../images/share-wechat.png)' 
		})
	})
	$('.wechat').mouseout(function(){
		$('.wechat').css({
			'background-image':'url(../images/foot-wechat.png)' 
		})
	})
})
var flag1=0;
var y=new Date().getFullYear();
var m=(new Date().getMonth() )+1;
console.log(m);
var d=new Date().getDate();
var uname="我的猫咪叫果果";
$('.publish').click(function(){
	if($('.content').val().length==0){
		$('.error').fadeIn(600).fadeOut(2000);
    	}else{
    		var ucontent=$('.content').val();
    		var mycomment=$('<div id="mysection">\
			<img src="../images/p114.jpeg" alt="" id="im">\
			<div class="says">\
				<a href="">'+uname+'</a><span>'+y+"-"+m+"-"+d+'</span>\
				<div class="play">\
				<a class="delete">删除</a>\
				<span><div class="praise"></div>\
				</span>\
				|<span  class="reply" >回复</span></div>\
				<br><br>\
				'+ucontent+'\
                <div class="replycontent"></div>\
				<div class="replyborder">\
                 <textarea class="replybox"></textarea><br>\
                 <div class="send">发送</div>\
                 <div class="cancel">取消</div>\
				 </div>\
			</div>\
			</div>')
		$('.allcom').prepend(mycomment);
         $('#im').css({
            'width':' 40px',
            'height':'40px',
            'border-radius': '40px',
            'margin-bottom': '100px'
        })
		$('.content').val("");
        console.log($('#mysection'));
         $('.delete').css({
             	'display':'none',
             	'color':'#dddddd'
             })
         $('#mysection').mouseover(function(){
             $(this).find('.delete').css({
             	'display':'inline-block',
             	'color':'#dddddd'
             }) 
                    
        })
       $('.delete').click(function(){
        	 $(this).parent().parent().parent().remove();
        })     
        $('#mysection').mouseout(function(){
             $(this).find('.delete').css({
             	'display':'none'
             })
        })

$(".praise").click(function(){
    //if($(this).css({'background-image':'url("../images/praise.png")'})){
        if(flag1%2 ==0){
         $(this).css({
                'background-image':'url("../images/praiseH.png")'
           }) 
        }else{
    //else if($(this).css({'background-image':'url("../images/praiseH.png")'})){
         $(this).css({
                'background-image':'url("../images/praise.png")'
           }) 
        }
        flag1++;
      })

$(".reply").click(function(){
   if(flag){
        console.log($(this).parent().next().next().next());
         $(this).parent().next().next().next().next().css({
                 'display':'block'
             })
          $(this).parent().parent().parent().css({
                'height':'240px' 
             })
          $(this).parent().next().next().next().next()

    }else{
         $(this).parent().next().next().next().next().css({
                 'display':'none'
             })
         $(this).parent().parent().parent().css({
                'height':'170px'
             }) 
    }
    flag=!flag;
})
$('.cancel').click(function(){
   $('.replyborder').css({
     'display':'none'
   })
   $('.section').css({
    'height':'170px'
   })
})
$('.send').click(function(){
   console.log($(this).parent().prev()); 
    $(this).parent().prev().css({
        'display':'block',
    })
     $(this).parent().css({
     'display':'none'
   })
    var replybox = $(this).prev().prev().val();
    $(this).parent().prev().text("回复内容："+replybox+"");
    $(this).parent().prev().css({
        'padding':'10px',
        'font-weight':'200'
    })
})
    }	

})




$(".praise").click(function(){
    if(flag){
    	 $(this).css({
             	 'background-image':'url("../images/praiseH.png")'
             }) 
        
    }else{
    	 $(this).css({
             	 'background-image':'url("../images/praise.png")'
             }) 
    }
    flag=!flag;
})


$(".reply").click(function(){
    if(flag){
    	console.log($(this).parent().next().next().next());
    	 $(this).parent().next().next().next().next().css({
             	 'display':'block'
             })
          $(this).parent().parent().parent().css({
                'height':'240px' 
             })
          $(this).parent().next().next().next().next()

    }else{
    	 $(this).parent().next().next().next().next().css({
             	 'display':'none'
             })
         $(this).parent().parent().parent().css({
                'height':'170px'
             }) 
    }
    flag=!flag;
})
$('.more').children('span').click(function(){
       var i= $('.allcom').children().length;
            var hei = 1200+(i-6)*200;
             $('.allcom').css({
                'height':hei
             })
   })       
$('.section').mouseover(function(){
             $(this).find('.report').css({
                'display':'block',
                'color':'#dddddd'
             }) 
     }) 
$('.section').mouseout(function(){
             $(this).find('.report').css({
                'display':'none'
            })
        })
$('.report').click(function(){
    $('.yesorno').css({
        'display':'block'
    })
    $('.cancelrep').click(function(){
       $('.yesorno').css({
        'display':'none'
       }) 
    })
    $('.yes').click(function(){
      $('.success').stop().fadeIn(200).fadeOut(600);
        $('.yesorno').css({
        'display':'none'
       })  
    })
})
$('.cancel').click(function(){
   $('.replyborder').css({
     'display':'none'
   })
   $('.section').css({
    'height':'170px'
   })
})
$('.send').click(function(){
   console.log($(this).parent().prev()); 
    $(this).parent().prev().css({
        'display':'block',
    })
     $(this).parent().css({
     'display':'none'
   })
    var replybox = $(this).prev().prev().val();
    $(this).parent().prev().text("回复内容："+replybox+"");
    $(this).parent().prev().css({
        'padding':'10px',
        'font-weight':'200'
    })
})




