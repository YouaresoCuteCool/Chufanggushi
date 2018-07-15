// 首页头部图片
var imgs=['../images/p102.jpg','../images/p103.jpg','../images/p104.jpg','../images/p105.jpg'];
$('.sec-rig').each(function(n){
	$(this).css({"width":"240px",
		"height":"240px",
		"background-image":"url('"+imgs[n]+"')",
		"background-size":"240px",
		"float":"left"});
})
$('.sec-left').mouseover(function(){
	$(this).stop().animate({'background-size':'520px'},500);
	$(this).children().css('display','block');
}).mouseout(function(){
	$(this).stop().animate({'background-size':'480px'},100);
	$(this).children().css('display','none');
})
$('.sec-rig').mouseover(function(){
	$(this).stop().animate({'background-size':'260px'},500);
	$(this).children().css('display','block');
}).mouseout(function(){
	$(this).stop().animate({'background-size':'240px'},100);
	$(this).children().css('display','none');
})
var image=['../images/p111.jpg','../images/p112.jpg','../images/p113.jpg','../images/p114.jpeg'];
$('.tig').each(function(n){
	$(this).css({"width":"80px",
		"height":"80px",
		"border":"0px solid red",
		"border-radius":"40px",
		"background-image":"url('"+image[n]+"')",
		"background-size":"80px",
		"position":"absolute",
		"top":"40px",
		"left":"20px"});
})
var iges=['../images/p107.jpeg','../images/p106.jpg','../images/p108.jpg'];
$('.sec-tings .bg').each(function(n){
	$(this).css({"width":"300px",
		"height":"300px",
		"background-image":"url('"+iges[n]+"')",
		"background-size":"300px"});
})
$('.bg').mouseover(function(){
	$(this).stop().animate({'background-size':'320px'},500);
	$(this).children().css('display','block');
	$('.play img').css('display','inline-block');
}).mouseout(function(){
	$(this).stop().animate({'background-size':'300px'},100);
	$('.play').css('display','none');
	$('.play img').css('display','none');
})
function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//计算整个页面显示的列数（页面宽/box的宽）
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=4;
	//设置main的宽
	oParent.style.cssText='width:'+oBoxW*cols+'px;margin:0 auto';
	var hArr=[];
	for (var i = 0; i < oBoxs.length; i++) {
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxW*index+'px';
			hArr[index]+=oBoxs[i].offsetHeight;		
		}
	}
	console.log(hArr);
}
//根据class获取元素
function getByClass(parent,clsName){
	var boxArr=new Array(),//用来存储获取到的所有class为box的元素
	oElements=parent.getElementsByTagName('*');
	for (var i = 0; i < oElements.length; i++) {
		if(oElements[i].className==clsName){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinhIndex(arr,val){
	for (var i in arr) {
		if(arr[i]==val){
			return i;
		}
	}
}
//检测是否具备了滚动条加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}
$('#moreLook').click(function(){
	$('.nav-footer').css('display','none');
	$('.more-content').html('<div class="past-content-title">\
		<div class="title-cpt">往期精选</div>\
		</div>\
		<div id="main">\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">拜个晚年——愿你我都活成自己的角儿</span></a><br>\
		<a href=""><span class="art-per">主播 / 许邻</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">5.8k次播放 | 评论：5 | 喜欢：73</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">这是适用一整年的表白指南</span></a><br>\
		<a href=""><span class="art-per">主播 / 白无常白总</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">6.9k次播放 | 评论：24 | 喜欢：280</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">你与太阳不能直视</span></a><br>\
		<a href=""><span class="art-per">主播 / 阳芷的时光</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.4k次播放 | 评论：9 | 喜欢：119</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">其实我一个朋友也没有</span></a><br>\
		<a href=""><span class="art-per">主播 / 半岛玫瑰</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">37.8k次播放 | 评论：387 | 喜欢：1.4k</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">琉璃梦境——童话故事一样的清新儿歌</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">Mystery Of Love(翻唱)</span></a><br>\
		<a href=""><span class="art-per">主播 / 罗伊德</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">9.2k次播放 | 评论：31 | 喜欢：357</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">琉璃梦境——童话故事一样的清新儿歌</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">路过你的七月</span></a><br>\
		<a href=""><span class="art-per">主播 / NJ文珂</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">32.4k次播放 | 评论：23 | 喜欢：196</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">你与太阳不能直视</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">相期以茶02--The Rose</span></a><br>\
		<a href=""><span class="art-per">主播 / 摩西不摩登</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.4k次播放 | 评论：23 | 喜欢：105</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">Mystery Of Love(翻唱)</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">其实我一个朋友也没有</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">这是适用一整年的表白指南</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">琉璃梦境——童话故事一样的清新儿歌</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">路过你的七月</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">Mystery Of Love(翻唱)</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">你与太阳不能直视</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">其实我一个朋友也没有</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">这是适用一整年的表白指南</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">路过你的七月</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		<div class="box">\
		<div class="pic">\
		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
		<div class="bg-word">\
		<a href=""><span class="art-tit">Mystery Of Love(翻唱)</span></a><br>\
		<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
		</div>\
		</div>\
		</div>\
		</div>');
    var ige=['../images/p118.jpeg','../images/p119.jpg','../images/p120.jpg','../images/p121.jpg','../images/p122.jpeg','../images/p123.jpg','../images/p124.jpeg','../images/p132.jpg','../images/p131.jpeg','../images/p133.gif','../images/p119.jpg','../images/p120.jpg','../images/p121.jpg','../images/p122.jpeg','../images/p123.jpg','../images/p118.jpeg','../images/p133.gif','../images/p121.jpg','../images/p132.jpg','../images/p131.jpeg','../images/p120.jpg'];
 	$('.pic .bg').each(function(n){
 		$(this).css({"width":"300px",
 			"height":"300px",
 			"background-image":"url('"+ige[n]+"')",
 			"background-size":"300px"});
 	})
 	waterfall('main','box');
 	var dataInt={"data":[{"src":'../images/p118.jpeg'},{"src":'../images/p119.jpg'},{"src":'../images/p120.jpg'},{"src":'../images/p121.jpg'},{"src":'../images/p122.jpeg'},{"src":'../images/p123.jpg'}]};
 	window.onscroll=function(){
 		if (checkScrollSlide()) {
 			var oParent=document.getElementById('main');
				//将数据块渲染到页面尾部
				for (var i = 0; i < dataInt.data.length; i++) {
					var oBox=document.createElement('div');
					oBox.className='box';
					oParent.appendChild(oBox);
					var oPic=document.createElement('div');
					oPic.className='pic';
					oBox.appendChild(oPic);
					var oImg=$('<div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div>');
					oImg.css({
						"width":"300px",
						"height":"300px",
						"background-image":"url('"+dataInt.data[i].src+"')",
						"background-size":"300px"});
					oPic.appendChild(oImg[0]);
					var divv=$('<div class="bg-word">\
						<a href=""><span class="art-tit">琉璃梦境——童话故事一样的清新儿歌</span></a><br>\
						<a href=""><span class="art-per">主播 / 双笙子</span></a><br>\
						<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">4.5k次播放 | 评论：10 | 喜欢：107</span></p>\
						</div>');
					oPic.appendChild(divv[0]);
			}
			waterfall('main','box');
		}
		
	}
})