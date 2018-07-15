var timer=null;
timer=setTimeout(function(){
	$('.gif').css("display","none");
	$('.Article .Hot-articles').css("display","block")
},2000)
$('.type-title-cpt .active').click(function(){
	$('.gif').css("display","block");
	$('.Article .Hot-articles').css("display","none")
	timer=setTimeout(function(){
		$('.gif').css("display","none");
		$('.Article .Hot-articles').css("display","block")
	},2000)
})
