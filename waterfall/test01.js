window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{'src':'../images/62cb45f3821fa7b2096d75a2cabd2d8320180516.jpg'},{'src':'../images/c06b5d08eee2e8a1f9598ff821ee052b20180517.jpg'},{'src':'../images/ebc771f9b05ec398e354d407c41ce25620180516.png'},{"src":'../images/62e57a91cc9e9a83914bf7b0c61b704920180221.png'},{"src":'../images/b2e4881a769c6cace3c3eb5a1bda74d220171015.jpg'},{"src":'../images/ebc771f9b05ec398e354d407c41ce25620180516.png'},{"src":'../images/3c730c126d4f3e689ee73e4e7bafe2fc20180516.png'},{"src":'../images/0bd1bb319dba41b33f27f745bafa9e0420180516.jpeg'},{"src":'../images/d438e15134465b50ab2de0fcfbfed15c20180516.jpg'}]};
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
				var oImg=document.createElement('img');
				oImg.src=dataInt.data[i].src;
				oPic.appendChild(oImg);
				var divv=$('<div class="bg-word">\
					          <a href=""><span class"art-tit">'+$('.art-tit').html()+'</span></a><br>\
					          <p class="talk">\
					            <span class="card-type"><img src="../images/d22ac977b6b017f0b96690c40240aa7720180510.jpeg" alt="" style="width:50px;height:45px;border-radius:30px; " ></span>\
					          <span style="margin-left:40px; line-height:50px" class="art-per"><a href="">'+$('.art-per').html()+'</a></span>\
					            <span class="others"><img src="../images/like (2).png" alt="" style="width:30px;height:25px; "></span>\
					          </p>\
						</div>');
				oPic.appendChild(divv[0]);
			}
			waterfall('main','box');
		}
		
	}
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
//检测是否具备了滚动条加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}