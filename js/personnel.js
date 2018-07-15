var iges=['../images/bg01.jpg','../images/bg02.jpg','../images/bg03.jpg','../images/bg04.jpg','../images/bg05.jpg','../images/bg06.jpg','../images/bg07.jpg','../images/bg08.jpg','../images/bg09.jpg','../images/bg10.jpg','../images/bg05.jpg'];
 $('.pic .bg').each(function(n){
 	$(this).css({"width":"300px",
 		"height":"300px",
 		"background-image":"url('"+iges[n]+"')",
 		"background-size":"300px"});
 })
 $('.btton-focus').click(function(){
 	if($(this).text()=='关注'){
 		$(this).text('已关注');
 		$(this).css({
 			'border':'1px solid #67b18c',
 			'color':'#67b18c'
 		})
 	}else{
 		$(this).text('关注');
 		$(this).css({
 			'border':'1px solid #ccc',
 			'color':'#333'
 		})
 	}
 }).mouseover(function(){
 	$(this).css({
 		'border':'1px solid #67b18c',
 		'color':'#67b18c'
 	})
 }).mouseout(function(){
 	$(this).css({
 		'border':'1px solid #ccc',
 		'color':'#333'
 	})
 })
 $('#selAll').click(function(){
 	$('.space').css('display','block');
 	$('.end').css('display','block');
 	$('.list>li').removeAttr('class');
 	$('.list>li:eq(0)').attr('class','active');
 	$('.contain').html('<div id="main">\
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
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">外婆桥——记忆的味道</span></a><br><br>\
 		<div class="art-des">原曲：初音ミク「夢と葉桜」 中文填词:冥凰 乌篷点纱灯沿上青石悄着新纹 喃喃细语时归来燕子它不等人 五指方扣桨蓑衣翁正系桥下绳 春雨轻敛去绣花鞋落起唢呐声... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
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
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">原创古风【月出】</span></a><br><br>\
 		<div class="art-des">穿旧巷 过回廊 夜风透晚墙 褪戎装 着素裳 归来已秋凉 衣袖错勘身量遗落月白露光 原是天地冥冥斗转掀翻过往 芙蓉帐 桂花酿 倾身黄梨傍 旌旗晃 战歌亡 枕戈... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		<div class="box">\
 		<div class="pic">\
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">【原创】采茶纪</span></a><br><br>\
 		<div class="art-des">寒食过 云雨消 不夜侯正好 又是一年 采茶时节暖阳照 风追着 蝴蝶跑 谁家种红苕 木犁松土 地龙惊兮蚁出巢 翠盈盈 悠香飘 茶垄漫山绕 钻... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
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
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">京城妖奇谈-【双笙】</span></a><br><br>\
 		<div class="art-des">落日融一杯清酒 潇湘翠竹染双眸 谁梦魇依旧 入眠后紧锁眉头  苦苦哀求 世间恩爱难得久 不思议之人堪解忧   一株... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		<div class="box">\
 		<div class="pic">\
 		<a href=""><div class="bg"><div class="play"><img src="../images/play-icon.png" alt=""></div></div></a>\
 		<div class="bg-word">\
 		<a href=""><span class="art-tit">相期以茶02- -The Rose</span></a><br>\
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
 		<a href=""><span class="art-tit">这是适用一整年的表白指南</span></a><br>\
 		<a href=""><span class="art-per">主播 / 白无常白总</span></a><br>\
 		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">6.9k次播放 | 评论：24 | 喜欢：280</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		<div class="box">\
 		<div class="pic">\
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">【原创】采茶纪</span></a><br><br>\
 		<div class="art-des">寒食过 云雨消 不夜侯正好 又是一年 采茶时节暖阳照 风追着 蝴蝶跑 谁家种红苕 木犁松土 地龙惊兮蚁出巢 翠盈盈 悠香飘 茶垄漫山绕 钻... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		</div><div class="space"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>');
 waterfall('main','box');
 var iges=['../images/bg01.jpg','../images/bg02.jpg','../images/bg03.jpg','../images/bg04.jpg','../images/bg05.jpg','../images/bg06.jpg','../images/bg07.jpg','../images/bg08.jpg','../images/bg09.jpg','../images/bg10.jpg','../images/bg05.jpg'];
 $('.pic .bg').each(function(n){
 	$(this).css({"width":"300px",
 		"height":"300px",
 		"background-image":"url('"+iges[n]+"')",
 		"background-size":"300px"});
 })
})
 $('#arti').click(function(){
 	$('.end').css('display','block');
 	$('.space').css('display','none');
 	$('.list>li').removeAttr('class');
 	$('.list>li:eq(1)').attr('class','active');
 	$('.contain').html('<div id="main"><div class="box">\
 		<div class="pic">\
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">外婆桥——记忆的味道</span></a><br><br>\
 		<div class="art-des">原曲：初音ミク「夢と葉桜」 中文填词:冥凰 乌篷点纱灯沿上青石悄着新纹 喃喃细语时归来燕子它不等人 五指方扣桨蓑衣翁正系桥下绳 春雨轻敛去绣花鞋落起唢呐声... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
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
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">【原创】采茶纪</span></a><br><br>\
 		<div class="art-des">演唱：双笙 作曲 : 风守 作词 : 湾湾 曲绘：雨湘雪 云朵落满枝桠 是冬天来了吗 漂浮着 慢慢融化 璀错几盏风花 听她轻声唱呀 呵出雾气轻抚脸颊 催促...</div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
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
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">【原创】采茶纪</span></a><br><br>\
 		<div class="art-des">寒食过 云雨消 不夜侯正好 又是一年 采茶时节暖阳照 风追着 蝴蝶跑 谁家种红苕 木犁松土 地龙惊兮蚁出巢 翠盈盈 悠香飘 茶垄漫山绕 钻... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		<div class="box">\
 		<div class="pic">\
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">外婆桥——记忆的味道</span></a><br><br>\
 		<div class="art-des">原曲：初音ミク「夢と葉桜」 中文填词:冥凰 乌篷点纱灯沿上青石悄着新纹 喃喃细语时归来燕子它不等人 五指方扣桨蓑衣翁正系桥下绳 春雨轻敛去绣花鞋落起唢呐声... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		<div class="box">\
 		<div class="pic">\
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">原创古风【月出】</span></a><br><br>\
 		<div class="art-des">穿旧巷 过回廊 夜风透晚墙 褪戎装 着素裳 归来已秋凉 衣袖错勘身量遗落月白露光 原是天地冥冥斗转掀翻过往 芙蓉帐 桂花酿 倾身黄梨傍 旌旗晃 战歌亡 枕戈... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		<div class="box">\
 		<div class="pic">\
 		<div class="bg-word">\
 		<a href=""><span class="card-tit">【原创】采茶纪</span></a><br><br>\
 		<div class="art-des">寒食过 云雨消 不夜侯正好 又是一年 采茶时节暖阳照 风追着 蝴蝶跑 谁家种红苕 木犁松土 地龙惊兮蚁出巢 翠盈盈 悠香飘 茶垄漫山绕 钻... </div><br>\
 		<p class="talk"><span class="card-type"><a href="">阅读</a></span><span class="others">5.8k次阅读 | 评论：5 | 喜欢：73</span></p>\
 		</div>\
 		</div>\
 		</div></div>');
 	waterfall('main','box');
 	var iges=['../images/bg01.jpg','../images/bg02.jpg','../images/bg03.jpg','../images/bg04.jpg','../images/bg05.jpg','../images/bg06.jpg','../images/bg07.jpg','../images/bg08.jpg','../images/bg09.jpg','../images/bg10.jpg','../images/bg05.jpg'];
 	$('.pic .bg').each(function(n){
 		$(this).css({"width":"300px",
 			"height":"300px",
 			"background-image":"url('"+iges[n]+"')",
 			"background-size":"300px"});
 	})
 })
 $('#frag').click(function(){
 	$('.space').css('display','none');
 	$('.end').css('display','none');
 	$('.list>li').removeAttr('class');
 	$('.list>li:eq(2)').attr('class','active');
 	$('.contain').html('<div class="no-comment">Ta还没有在片刻发布过作品</div>');
 })
 $('#tin').click(function(){
 	$('.end').css('display','block');
 	$('.space').css('display','none');
 	$('.list>li').removeAttr('class');
 	$('.list>li:eq(3)').attr('class','active');
 	$('.contain').html('<div id="main">\
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
 		<a href=""><span class="art-tit">相期以茶02- -The Rose</span></a><br>\
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
 		<a href=""><span class="art-tit">这是适用一整年的表白指南</span></a><br>\
 		<a href=""><span class="art-per">主播 / 白无常白总</span></a><br>\
 		<p class="talk"><span class="card-type"><a href="">Ting</a></span><span class="others">6.9k次播放 | 评论：24 | 喜欢：280</span></p>\
 		</div>\
 		</div>\
 		</div>\
 		</div><br/><br/><br/><br/><br/><br/><br/><br/>');
 	waterfall('main','box');
 	var iges=['../images/bg01.jpg','../images/bg02.jpg','../images/bg03.jpg','../images/bg04.jpg','../images/bg05.jpg','../images/bg06.jpg','../images/bg07.jpg','../images/bg08.jpg','../images/bg09.jpg','../images/bg10.jpg','../images/bg05.jpg'];
 	$('.pic .bg').each(function(n){
 		$(this).css({"width":"300px",
 			"height":"300px",
 			"background-image":"url('"+iges[n]+"')",
 			"background-size":"300px"});
 	})
 })
 $('#focus').click(function(){
 	$('.end').css('display','none');
 	$('.space').css('display','none');
 	$('.tigs').html('<div class="tigs-tit">\
 		<ul class="data-tit-like">\
 		<li><a class="fans">粉丝</a></li>\
 		<li class="active"><a id="focus">关注</a></li>\
 		<li><a class="visitors">访客</a></li>\
 		</ul>\
 		</div>\
 		<div class="no-comment">这里什么都没有</div>');
 })
 $('.fans').click(function(){
 	$('.end').css('display','none');
 	$('.space').css('display','none');
 	$('.tigs').html('	<div class="tigs-tit">\
 		<ul class="data-tit-like">\
 		<li class="active"><a class="fans">粉丝</a></li>\
 		<li><a id="focus">关注</a></li>\
 		<li><a class="visitors">访客</a></li>\
 		</ul>\
 		</div>\
 		<br>\
 		<br>\
 		<br>\
 		<br>\
 		<div class="user-like-list" id="user-list">\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		</div>');
 waterfall('main','box');
 $('.btton-focus').click(function(){
 	if($(this).text()=='关注'){
 		$(this).text('已关注');
 		$(this).css({
 			'border':'1px solid #67b18c',
 			'color':'#67b18c'
 		})
 	}else{
 		$(this).text('关注');
 		$(this).css({
 			'border':'1px solid #ccc',
 			'color':'#333'
 		})
 	}
 }).mouseover(function(){
 	$(this).css({
 		'border':'1px solid #67b18c',
 		'color':'#67b18c'
 	})
 }).mouseout(function(){
 	$(this).css({
 		'border':'1px solid #ccc',
 		'color':'#333'
 	})
 })
})
 $('.visitors').click(function(){
 	$('.end').css('display','none');
 	$('.tigs').html('	<div class="tigs-tit">\
 		<ul class="data-tit-like">\
 		<li><a class="fans">粉丝</a></li>\
 		<li><a id="focus">关注</a></li>\
 		<li class="active"><a class="visitors">访客</a></li>\
 		</ul>\
 		</div>\
 		<br>\
 		<br>\
 		<br>\
 		<br>\
 		<div class="user-like-list" id="user-list">\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">枕着鱼睡觉的猫</a></div>\
 		<div class="s-user-des">一个永远不知道长大的男生</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">你的孔先生</a></div>\
 		<div class="s-user-des">找一个安静的地方，给自己一分净土</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">夜猫Andy</a></div>\
 		<div class="s-user-des">So why so serious ？</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">DreamHealer、</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p406.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">南舍-</a></div>\
 		<div class="s-user-des">真羡慕小时候，披上了被子我就是小公主。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p415.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">Differ~u</a></div>\
 		<div class="s-user-des">既不自然也不必要</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p407.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">张显宗牙不疼</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p408.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">尽撩少女心</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p409.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">@高女王</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p410.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">椿花湫叶</a></div>\
 		<div class="s-user-des">我没有出众的文采，但是我想表达自己。</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p411.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">茕屿_ch</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p412.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">了了hq</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p413.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">雨露の荷</a></div>\
 		<div class="s-user-des">孤独而生，诗意而栖 我只是个摆渡人</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		<div class="user-like-cpt">\
 		<div class="s-user-icon"><a href="" target="_blank"><img src="../images/p414.jpeg" alt=""></a></div>\
 		<div class="s-user-info">\
 		<div class="s-user-name"><a href="" target="_blank">道阻且長焉</a></div>\
 		<div class="s-user-des">这是一个还没有简介的Pianker~</div>\
 		</div>\
 		<div class="btton-focus">关注</div>\
 		</div>\
 		</div>');
 $('.btton-focus').click(function(){
 	if($(this).text()=='关注'){
 		$(this).text('已关注');
 		$(this).css({
 			'border':'1px solid #67b18c',
 			'color':'#67b18c'
 		})
 	}else{
 		$(this).text('关注');
 		$(this).css({
 			'border':'1px solid #ccc',
 			'color':'#333'
 		})
 	}
 }).mouseover(function(){
 	$(this).css({
 		'border':'1px solid #67b18c',
 		'color':'#67b18c'
 	})
 }).mouseout(function(){
 	$(this).css({
 		'border':'1px solid #ccc',
 		'color':'#333'
 	})
 })
})
 window.onload=function(){
 	waterfall('main','box');
 	$('.btn-primary').mouseover(function(){
 		$(this).css({
 			'background-color':'#67b18c',
 			'border-color':'#67b18c'
 		});
 	}).mouseout(function () {
 		$(this).css({
 			'background-color':'#5ec485',
 			'border-color':'#5ec485'
 		});
 	})
 	$('.btn-primary').click(function(){
 		$(this).css({
 			'background-color':'#67b18c',
 			'border-color':'#67b18c'
 		});
 		if ($('textarea').text()=='') {
 			$('#fixed').html('<div id="de-tit">\
 				<img src="../images/errorPrompt.png" alt="">\
 				<div>请输入片邮内容</div>\
 				</div>');
 			var alertTit=$('#de-tit');
 			setTimeout(function(){alertTit.hide()},2000);
 		}
 	})
 }
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
// //检测是否具备了滚动条加载数据块的条件
// function checkScrollSlide(){
// 	var oParent=document.getElementById('main');
// 	var oBoxs=getByClass(oParent,'box');
// 	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
// 	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
// 	if (scrollTop<200) {
// 		var height=document.body.clientHeight||document.documentElement.clientHeight;
// 		return (lastBoxH<scrollTop+height)?true:false;
// 	}
// }