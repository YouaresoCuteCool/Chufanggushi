 var flag=0;
 var num=$('.heart span').text();
 $('#admire .heart').click(function(){
  if(flag%2 != 0){
    $('.heart .pic3').css("background","url(../phx-images/likeH.png) no-repeat")
    .css("background-size","30px 30px")
    num++;
    $('.heart span').text(num);
  }else if(flag%2 == 0){
    $('.heart .pic3').css("background","url(../phx-images/like.png) no-repeat")
    .css("background-size","30px 30px")
    num--;
    $('.heart span').text(num);
  }
  flag++;
})
 $('.wechat').mouseover(function(){
  $('.code').css("display","block");
}).mouseout(function(){
  $('.code').css("display","none");
})
//未发表评论前
var flag4=0;
$('.dianzan').click(function(){
  var count=$('.thumbImg span').text()
  if(flag4%2 ==0){
    $(this).css({
     "background":"url('../phx-images/praiseH.png') no-repeat",
     "background-size":"20px 20px",
     "background-position":"left 20px top"
   });
    count++;
    $(this).text(count);
  }else{
    $(this).css({
     "background":"url('../phx-images/praise.png') no-repeat",
     "background-size":"20px 20px",
     "background-position":"left 20px top"
   });
    count--;
    $(this).text(count+1);
  }
  flag4++;
})
//举报
$('.others :first').click(function(){
  var jubao=$('<div class="jubao">\
    <img src="../phx-images/confirm-img.png" alt="" /><br>\
    <span>确定要举报吗？</span><br />\
    <input type="button" value="取消" class="btn btn-default"/>\
    <input type="button" value="确认" class="btn btn-success"/>\
    </div>');
  $('.container1').append(jubao);
  $('.btn-default').click(function(){
    $(jubao).remove();
  })
  $('.btn-success').click(function(){
    $(jubao).remove();
  })
})
//回复
$('.recall').click(function(){
 var flag2=0;  
 $('.recall').click(function(){
  console.log("111")
  var recallMsg=$('<div class="recallMsg">\
   <textarea class="Msg1"></textarea>\
   <div>\
   <input class="btn btn-default" type="button" value="取消" />\
   <input class="btn btn-success" type="button" value="发送" />\
   </div>\
   </div>')
  if(flag2%2 ==0){
    $(this).parent().parent().parent().append(recallMsg);
  }else{
    $('.recallMsg').remove();
  }
  flag2++;
  $('.btn-default').click(function(){
    $(recallMsg).remove();
  })
  $('.recallMsg .btn-success').click(function(){ 
    var Txt=$('.Msg1').val();
    var obj=$(this).parent().parent().parent()
    if($('.recallMsg textarea').val().length==0){
      $('.nocomment').css("display","block");
      var timer=setTimeout(function(){
        $('.nocomment').css("display","none")
      },3000)
    }else{
      var name=$('.userName:first').text()
      $(recallMsg).remove();
      var kid1=$('<div class="recallMsg1">\
       回复:'+name+'<span>'+Txt+'</span>\
       <div class="delete1">删除</div>\
       </div>')
      $(obj).append(kid1);
      $('.delete1').click(function(){
        $(kid1).remove();
      })
    }
  })
})
})
// 发表评论
var flag1=1;
$('.btn').click(function(){
  if($('.msgSend').val().length==0){
    $('.nocomment').css("display","block");
    var timer=setTimeout(function(){
      $('.nocomment').css("display","none")
    },3000)
  }else{
    flag1++;
    var msg = $('.msgSend').val(),
    year=new Date().getFullYear(),
    month=new Date().getMonth()+1,
    day=new Date().getDate(),
    hour=new Date().getHours(),
    minute=new Date().getMinutes();
    var kid=$('\
      <div class="comment">\
      <div class="headImg"><img src="../phx-images/22.jpg"></div>\
      <div class="info">\
      <div class="userName"><a href="">玲殿</a></div>\
      <div class="timePub">'+year+'-'+month+'-'+day+hour+':'+minute+'</div>\
      <div class="others">\
      <div class="dianzan">\
      <div class="thumbImg">\
      <span>0</span>\
      </div>\
      </div>\
      <div class="delete">删除</div>\
      <div class="recall">回复</div>\
      </div>\
      </div>\
      <div class="msg">'+msg+'</div>\
      </div>')
    $('article').prepend(kid);
    $('.msgSend').val('');
    $('.comment-count').text(flag1);
    $('.delete').click(function(event){
      var num1=$('.comment-count').text()
      var obj=$(this).parent().parent().parent()
      $('.delMsg').css("display","block");
      $('.delMsg .btn-default').click(function(){
        $('.delMsg').css("display","none");
        event.stopPropagation();
      })
      $('.delMsg .btn-success').click(function(event){
        num1--
        $('.delMsg').css("display","none");
        $(obj).remove();
        $('.comment-count').text(num1)
        event.stopPropagation();
      })
    })
    var flag2=0;  
    $('.recall').click(function(){
      console.log("111")
      var recallMsg=$('<div class="recallMsg">\
       <textarea class="Msg1"></textarea>\
       <div>\
       <input class="btn btn-default" type="button" value="取消" />\
       <input class="btn btn-success" type="button" value="发送" />\
       </div>\
       </div>')
      if(flag2%2 ==0){
        $(this).parent().parent().parent().append(recallMsg);
      }else{
        $('.recallMsg').remove();
      }
      flag2++;
      $('.btn-default').click(function(){
        $(recallMsg).remove();
      })
      $('.recallMsg .btn-success').click(function(){ 
        var Txt=$('.Msg1').val();
        var obj=$(this).parent().parent().parent()
        if($('.recallMsg textarea').val().length==0){
          $('.nocomment').css("display","block");
          var timer=setTimeout(function(){
            $('.nocomment').css("display","none")
          },3000)
        }else{
          var name=$('.userName:first').text()
          $(recallMsg).remove();
          var kid1=$('<div class="recallMsg1">\
           回复:'+name+'<span>'+Txt+'</span>\
           <div class="delete1">删除</div>\
           </div>')
          $(obj).append(kid1);
          $('.delete1').click(function(){
            $(kid1).remove();
          })
        }
      })
    })
  }
      //点赞
      var flag3=0;
      $('.dianzan').click(function(){
        var count=$(this).children('span').text()
        if(flag3%2 ==0){
          $(this).css({
           "background":"url('../phx-images/praiseH.png') no-repeat",
           "background-size":"20px 20px",
           "background-position":"left 20px top"
         });
          count++;
          $(this).text(count);
        }else{
          $(this).css({
           "background":"url('../phx-images/praise.png') no-repeat",
           "background-size":"20px 20px",
           "background-position":"left 20px top"
         });
          count--;
          $(this).text(count+1);
        }
        flag3++;
  })
})
