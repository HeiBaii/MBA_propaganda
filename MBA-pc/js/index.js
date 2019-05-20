$(function () {
  var section1Swiper = new Swiper ('.section1 .swiper-container', {
    autoplay: 2000,//可选选项，自动滑动
    loop: true, // 循环模式选项
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: '.swiper-pagination', // 如果需要分页器
    centeredSlides: true, //设置活动块居中
  })
  $('.section2 ul li').on('click', function () {
    $(this).addClass('check').siblings().removeClass('check')
  })
  var section5Swiper = new Swiper('.section5 .swiper-container', {
    autoplay: 2000,//可选选项，自动滑动
    loop: true, // 设置是否可循环滚动
    slidesPerView: 4,   //页面分组显示，这里显示为3组
    spaceBetween:20,   //slide间隙
    pagination: '.swiper-pagination', // 如果需要分页器
  })
})