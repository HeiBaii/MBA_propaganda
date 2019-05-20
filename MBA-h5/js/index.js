$(function () {
  // 学校轮播图
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 5000,
    loop: true,
    slidesPerView: 'auto',  //页面分组显示
    centeredSlides: true, //设置活动块居中
    // 如果需要分页器
    pagination: '.swiper-pagination'
  })
  //点击题目选项
  $('.section4 .question-box ul li').on('click', function () {
    $(this).addClass('check').siblings().removeClass('check')
  })
  // 上一题下一题
  $('.section4 .button-box ul li').on('click', function () {
    var thisIndex = $(this).parent().index();
    console.log(333)
    if($(this).hasClass('.last')){
      $('.section4 .button-box ul').eq(thisIndex-1).addClass('on').siblings().removeClass('on')
      $('.section4 .question-box ul').eq(thisIndex-1).addClass('on').siblings().removeClass('on')
      console.log(111)
    }
    else {
      $('.section4 .button-box ul').eq(thisIndex+1).addClass('on').siblings().removeClass('on')
      $('.section4 .question-box ul').eq(thisIndex+1).addClass('on').siblings().removeClass('on')
      console.log(222)
    }
  })

})