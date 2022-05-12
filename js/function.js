$(function(){
const $header = $('header');
const $header_after = $('header::after');
const $gnb = $('header > .container > nav > .gnb > li >a');

const $slide = $('section > .main-slide > .slides > ul > li > a');
const $slide_container = $('section > .main-slide > .slides > ul');

const $btnNext = $('section > .main-slide > .next');

const $pagenation = $('section > .main-slide > .pagenation > a');

const $kategorie_slide = $('section > .sub-slide > article > .kategorie-slides > ul > li');
const $kategorie = $('section > .sub-slide > .kategorie > li > a');

const $sub_slide = $('section > .sub-slide > article > .kategorie-slides >ul > li  >.container > ol');
const $subNext = $('section > .sub-slide > article > .kategorie-slides >ul >li > .next');
const $subPrev = $('section > .sub-slide > article > .kategorie-slides >ul >li > .prev');



let nowIdx = 0;

let intervalKey = null;


$header_after.on('mouseenter',function(){
  $header.stop().animate({
    height : 430
  },200)
});

$gnb.parent().on('mouseenter',function(){

  $header.stop().animate({
    height : 430
  },200)

});

$gnb.parent().on('mouseleave',function(){

  $header.stop().animate({
    height : 165
  },200)
});



$btnNext.on('click',function(evt){

  evt.preventDefault();

  if(nowIdx<3){
       nowIdx++;
  } else{
    nowIdx=0;
  }

  



  $slide_container.stop().animate({
    left : -1920 * 5
  },400,function(){
    $slide.parent().first().appendTo($slide_container);
    $slide_container.css({
      left : -1920 * 4
    });
    });


		$pagenation.eq(nowIdx).addClass('on').siblings().removeClass('on')

});

$pagenation.on('click', function(evt){
  evt.preventDefault();

  nowIdx = $pagenation.index(this); //0 ~ 4

  //활성화표시
  $pagenation.eq(nowIdx).addClass('on').siblings().removeClass('on');
  
  //컨테이너이동

  $slide_container.stop().animate({

    left : -1920 * (nowIdx+4)
  });
  clearInterval(intervalKey);

}); //end of pagenation

$(window).on('load',function(){

  clearInterval(intervalKey);

  intervalKey = setInterval(function(){
    $btnNext.trigger('click')
  },3000)
  
});

$slide.on('click',function(evt){

  evt.preventDefault();

  clearInterval(intervalKey);

});


$subNext.on('click',function(evt){
  evt.preventDefault();
  $sub_slide.stop().animate({
    left : -1300
  });

  $sub_slide.eq(3).stop().animate({
    left : 0
  })

});


$subPrev.on('click',function(evt){
  evt.preventDefault();
  $sub_slide.stop().animate({
    left : 0
  });
});




$kategorie.eq(0).on('click',function(evt){
  evt.preventDefault();
  
  $(this).parent().addClass('on').siblings().removeClass('on');
  
  $kategorie_slide.eq(0).stop().animate({
    left : -1700
  }).siblings().css({
    left : 0
  });

  $sub_slide.stop().css({
    left : 0
  });
  
  });

$kategorie.eq(1).on('click',function(evt){
evt.preventDefault();

$(this).parent().addClass('on').siblings().removeClass('on');

$kategorie_slide.eq(1).stop().animate({
  left : -1700
}).siblings().css({
  left : 0
});

$sub_slide.stop().css({
  left : 0
});

});

$kategorie.eq(2).on('click',function(evt){
  evt.preventDefault();
  
  $(this).parent().addClass('on').siblings().removeClass('on');
  
  $kategorie_slide.eq(2).stop().animate({
    left : -1700
  }).siblings().css({
    left : 0
  });

  $sub_slide.stop().css({
    left : 0
  });
  
  });

  $kategorie.eq(3).on('click',function(evt){
    evt.preventDefault();
    
    $(this).parent().addClass('on').siblings().removeClass('on');
    
    $kategorie_slide.eq(3).stop().animate({
      left : -1700
    }).siblings().css({
      left : 0
    });

    $sub_slide.stop().css({
      left : 0
    });
    
    });







console.log('kategore length =',$kategorie.length);
console.log('kategore_slide length =',$kategorie_slide.length);




});