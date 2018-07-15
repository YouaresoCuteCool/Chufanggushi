$('.publicchar').click(function(){
    $('.secret').css({
       "background-color":'white',
       'color':'black'
     })
       $('.publicchar').css({
        'background-color':'#78bc85',
        'color':'white',
        'border-radius':'px'
       })
        $('#writeborder').attr('placeholder','这一刻，你想说点什么？')
        $('#writeborder').click(function(){
        $('#writeborder').text('')
  })
})

$('.secret').click(function(){
    $('.publicchar').css({
       "background-color":'white',
       'color':'black'
     })
       $('.secret').css({
        'padding':'3px 5px',
        'margin':'2px',
        'background-color':'#78bc85',
        'color':'white',
        'border-radius':'5px'
       })
       $('#writeborder').attr('placeholder','以匿名的方式倾诉，我们会将您的秘密随机推送给5位陌生人。')
       // $('#writeborder').text('以匿名的方式倾诉，我们会将您的秘密随机推送给5位陌生人。')
       $('#writeborder').click(function(){
       $('#writeborder').text('')
  })
})

//日期
    var data=new Date();
    console.log(data);
    var day=data.getDate();
    console.log(day);
    var spanDay=$('<span>'+day+'</span>');
    $('.pagetime').prepend(spanDay);
    spanDay.css({
      'font-size':'80px',
      'font-weight':'bold',
      // 'border':'1px solid black',
      'margin-left':'50px',
      'margin-top':'15px'
    })

    // var m=data.toLocaleDateString();
    var m=data.getMonth()+1;
    console.log(m);
    var spanM=$('<span>'+m+'</span>');
    $('.pagetime').append(spanM);
    spanM.css({
      'font-size':'50px',
      // 'font-weight':'bold',
      'margin-left':'140px',
      'margin-top':'160px'
    })
// 弹出框   
  $('[data-toggle="popover"]').popover({
      content:'<div class="tagspan" style="height:150px;width:250px" >\
        <span >悄悄话</span><span>戳心歌词</span><span>一见钟情的句子</span><br/><br>\
        <span>电影截图+经典台词</span><span>黑白大片</span><span>最美摘抄</span><br><br>\
        <span>旧书摊</span><span>看照片猜身高</span><span>三行情书</span><br><br>\
        <span>给力头像都在这</span><span>自拍狂魔</span><span>給诗歌配图</span><br><br>\
      </div>',
    html:true
    });
  
  //发布
  var modelbox=$('<div><img src="../images/errorPrompt.png" alt="" style="width:50px;height:50px">\
            <p>请输入内容</p>\
            </div>');
           modelbox.css({
            'width':'300px',
            'height':'100px',
            'background-color':'white',
            'margin-top':'80px',
            'margin-left':'-400px',
            'border-radius':'20px',
            // 'border':'2px solid red',
            'text-align':'center',
            'display':'none'
           })
          $('#public').append(modelbox);
  var modelboxtwo=$('<div><img src="../images/errorPrompt.png" alt="" style="width:50px;height:50px">\
            <p>请先登录</p>\
            </div>');
           modelboxtwo.css({
            'width':'300px',
            'height':'100px',
            'background-color':'white',
            'margin-top':'80px',
            'margin-left':'-400px',
            'border-radius':'20px',
            // 'border':'2px solid red',
            'text-align':'center',
            'display':'none'
           })
          $('#public').append(modelboxtwo);
         
         
$('#public input').click(function(){  
    if($('#writeborder').val().length==0){
      modelbox.show(); 
      console.log($('#writeborder').html().length); 
   }
    else if($('#writeborder').val().length!=0){
      console.log($('#writeborder').val().length); 
      $('#writeborder').val("");
      $('.wordcount').html("0/140字");
      modelboxtwo.show(); 
   }   
})
$('#public input').mouseout(function(){ 
             modelbox.css('display','none');
             modelboxtwo.css('display','none');            
})
//点赞
  var imglist=$('.others img');
  $(imglist).click(function(){
     $(this).css({
        'background-image':'url(../images/likeH.png)',
        'background-size':'30px 25px',
        'background-repeat':' no-repeat'
  }); 
 })
// 字数
var writeborder=document.getElementById('writeborder');
    var wordcount=document.getElementsByClassName('wordcount')[0];
    console.log(wordcount)
    writeborder.oninput=function(){
      var len=writeborder.value.length;
      wordcount.innerHTML=""+len+"/140字"
    }

   
