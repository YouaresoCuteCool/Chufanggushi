// 发布时间
var date=new Date();
console.log(date);
var y=date.getFullYear();
var m=date.getMonth()+1;
var day=date.getDate();
var w=date.getDay();
var time=y+'-'+m+'-'+day+'星期'+w;
$('.time').append(time);
// 二维码
	$('[data-toggle="popover"]').popover({
		content:'<img src="../images/pianke-code.png" alt="" />',
		html:true,
		trigger:'hover'
	}).on('shown.bs.popover', function (event) {
		        var that = this;
		        $(this).parent().find('div.popover').on('mouseenter', function () {
		            $(that).attr('in', true);
		        }).on('mouseleave', function () {
		            $(that).removeAttr('in');
		            $(that).popover('hide');
		        });
		    }).on('hide.bs.popover', function (event) {
		        if ($(this).attr('in')) {
		            event.preventDefault();
		        }
		    });



// 点赞
var n=0;
$('#like').click(function(){
	var count=$('.likenum').text();
	console.log(count);
	if(n%2==0){
		$('#like').css({
			'background-image':'url(../images/likeH.png)',
			'background-size':'30px 30px',
			'background-repeat':'no-repeat'
		});
		count++;
		$('.likenum').text(count);
	}else if(n%2!=0){
		$('#like').css({
			'background-image':'url(../images/like.png)',
			'background-size':'30px 30px',
			'background-repeat':'no-repeat'
		});
		count--;
		$('.likenum').text(count);
	}
  n++;
})
// 发表评论
var k=0;
$('.fabiao').click(function(){
	console.log($('#neirong').val().length);
	if($('#neirong').val().length==0){
       $('#neirong').focus();
	}else if($('#neirong').val().length!=0){
	$('.meiyouliuyan').css('display','none');
      var yonghu=$('<div class="yonghu">\
		<span class="touxiang"><img src="../images/82b5f76f831ecbb818095c2268b17fa920170306.jpeg" alt=""></span>\
		<span class="mingzi"> 晚安柒</span>\
		<span class="shijian">2018-5-18</span>\
		<ul>\
			<li><span class="jubao">举报</span></li>\
			<li class="praise"><span class="dianzanshu">0</span></li>\
			<li><span class="huifukuang">回复</span></li>\
		</ul>\
	</div>\
	<div class="liuyanneirong">'+$('#neirong').val()+'</div>');
    $('#liuyantwo').append(yonghu);

	}
   $('#neirong').val("");
   k++;
   $('.comt').html('('+k+'条)');
   // 点赞
   var j=0; 
   var count1=$('.dianzanshu').text();
   $('.praise').click(function(){
	 console.log(count1);
	   if(j%2==0){
 	    $(this).css('background-image','url(../images/praiseH.png)');
		count1++; 
		$(this).text(count1);
		}else if(j%2!=0){
		$(this).css('background-image','url(../images/praise.png)');
		count1--; 
		$(this).text(count1);
		 }
		j++;
   	  
      })
	var tanchukuang=$('<div class="tanchukuang">\
            <textarea name="" id="tanchuneirong" placeholder="回复...."></textarea>\
            <div class="anniu">\
            	<span><input type="button" class="anniu1" value="取消"></span>\
            	<span><input type="button" class="anniu2" value="回复"></span>\
            	</div>\
            </div>\
         ')
        $('.liuyanneirong').after(tanchukuang);
          var huif=$(tanchukuang).prev().prev().last().find('ul').find('li')[2];
        
     // 回复	
      $(huif).click(function(){
            $(tanchukuang).css('display','inline');    
       
          // 取消回复框 
          var tan=$(tanchukuang).children().children().children()[0];
          console.log(tan);
       $(tan).click(function(){
            var an1= $(this).parent().parent().parent();
            // console.log(an1);
          	$(an1).hide();
          })       
	    }) 
	// 回复
        var tan2=$(tanchukuang).children().children().children()[1];
		    console.log(tan2);
		    $(tan2).click(function(){
		    var an3= $(this).parent().parent().parent();
		   $(an3).hide();
		    var wenzi=$('<div class="wenzi">\
				<span class="huifuneirong">'+$('#tanchuneirong').val()+'</span>\
				</div>');			
		    var liuyanone=$(tanchukuang).prev();
		    $(liuyanone).after(wenzi);
		    $('#tanchuneirong').val("");
		          })

  })














