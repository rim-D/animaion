$(function () {
  /* *
   * Top 버튼
   * scrollTop - 탑 설정 클수록 덜 올라감
   * 500 - 탑 이동 스크롤 속도조절
   */
  $('.topBtn').on('click', function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 300);
  });

  /* *
   * Top 버튼
   * 페이드 인, 페이드아웃
   */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.top-control').fadeIn();
    } else {
      $('.top-control').fadeOut();
    }
    //console.log($(this).scrollTop());
  });
  
  /* *
   * header - banner
   * 메인 상단 배너
   */ 
  $('.most_banner')
    .find('.closeBtn')
    .on('click', function (e) {
      e.preventDefault();
      console.log($(this));
      $(this).closest('.most_banner_wrap').stop().slideUp();
    });

  /* *
   * GNB - PC
   */
  $('.gnb-bottom .depth1 > li').on('mouseenter', function () {
    $('.gnb-bottom .depth2_bg').stop().slideDown(200);
    $('.gnb-bottom .depth2 > ul').stop().slideDown(200);
  });

  $('.gnb-bottom').on('mouseleave', function () {
    $('.gnb-bottom .depth2_bg').stop().slideUp(200);
    $('.gnb-bottom .depth2 > ul').stop().slideUp(200);
  });

  /* * 
   * LNB - PC
   */
  $('.lnb .depth1 > li').on('click', function () {

    $('.lnb .depth1 > li').find('> ul').stop().slideUp();

    if ($(this).find('> ul').hasClass('depth2')) {
      $('.lnb .depth1 > li').not(this).removeClass('on');
      $(this).find('> ul').stop().slideToggle();
      $(this).addClass('on');
    } else {
      $('.lnb .depth1 > li').not(this).removeClass('on');
      $(this).addClass('on');
    }
  });

  $('.lnb .depth2').find('li').on('click', function(e) {
    e.stopPropagation();
    $('.lnb .depth2').find('li').not(this).removeClass('on');
    $(this).addClass('on');
  });

  /* *
   * RNB - mobile
   */
  $('.nav_mbBtn, .nav_mb_closeBtn').on('click', function () {
    if ($('.nav_wrap_mb').hasClass('open')) {
      $('html, body').removeAttr('style');
      $('.nav_wrap_mb').removeClass('open');
    } else {
      $('html, body').css('overflow', 'hidden');
      $('.nav_wrap_mb').addClass('open');
      $('.nav_mb li dl dt.subTitle').eq(0).css('display','block');
    }
  });

  /* *
   * RNB - mobile
   * 서브 메뉴 
   */
  $('.nav_mb li dl dt.subTitle').on('click', function () {

    $(this).nextAll().slideToggle(300);

    $('.nav_mb li dl dt.subTitle').not(this).nextAll().slideUp();
    $('.nav_mb li dl dt.subTitle').not(this).removeClass('on');

    if($(this).hasClass('on')){
      $(this).removeClass('on');
    } else {
      $(this).addClass('on');
    }
    
  });

  /* *
   * 회원가입 - 가입약관 체크박스
   */
  $('#p_srch_chk_all, #chk_all').on('click', function () {
    $('.chk').prop('checked', this.checked);
  });

  /* *
   * 회원가입 - 발급기관 자세히보기
   */
  $('.i-pin_more').on('click', function(e) {
    e.stopPropagation();
    $('.self_auth_b').stop().toggle();
  });

  
  

  /* *
   * 모달 탭메뉴 - tab 공통
   * FAQ / 북러닝 / 교육과정 - 상세보기 / 
   */
  $('.tab').find('li').on('click', function () {
    var i = $(this).index();
    console.log(i);

    var $tabContainer = $(this).closest('.tab_container');
    var $tabMenu     = $tabContainer.find('li');
    var $tabCategory = $tabContainer.find('.tab_category');
    var $tabContant  = $tabContainer.find('.tab_sec');

    console.log($tabContant);

    $tabMenu.removeClass('on');
    $(this).addClass('on');

    $tabCategory.removeClass('on');
    $tabContant.removeClass('on');

    $tabCategory.eq(i).addClass('on');
    $tabContant.eq(i).addClass('on');
    

  });


  /* *
   * 아코디언 메뉴(객체 리터럴로 공통으로 사용)
   * @param   target 이벤트 발생지점
   *          show 보여지는 영역
   */
  var acodian = {

    click: function (target, show, type) {

      if(type == 'span') {

        $(target).find('.chk_box span').on('click', function(e) {

          $(this).closest('li').find(show).stop().slideToggle();
          $(target).not($(this).closest('li')).find(show).stop().slideUp();
  
        });

      }
      else if(type == 'li'){

        $(target).on('click', function(e) {

          $(this).find(show).stop().slideToggle();
          $(target).not(this).find(show).stop().slideUp();
  
        });

      }

    }

  };

  acodian.click($('.join_list').find('li'), $('.text_box'), 'span'); //가입약관
  acodian.click($('.uFAQ').find('.tab_sec ul li'), $('.tab_content'), 'li'); //FAQ
  acodian.click($('.classDetail').find('.tab_sec.sec01 ul li'), $('.text_box'), 'li'); //교육과정 - 과정소개
  acodian.click($('.classDetail').find('.tab_sec.sec02 ul li'), $('.text_box'), 'li'); //교육과정 - 학습목차
  acodian.click($('.classDetail').find('.tab_sec.sec03 ul li'), $('.text_box'), 'li'); //교육과정 - 수강후기
  
  /* *
   * 토글버튼 ( 과정보기 )
   */
  $('.toggleBtn').on('click', function(){

    if ($(this).find('.arrow').hasClass('on')) {
      $('.toggleBtn').find('.arrow').not(this).removeClass('on');
      $('.bodyPk').not(this).removeClass('on');
    } else {
      $('.bodyPk').addClass('on');
      $(this).find('.arrow').addClass('on');
    }
    
  });


  /* *
   * mobile - history_back
   */
  $(".history_back").on("click",function(e){
    e.preventDefault();
    window.history.back();
  });

  // 이메일 select
  $('#email3').on('change', function(){
    var value = $(this).val();
    $('#email2').val(value);
  });


  // 관련규정자세히보기
  $('.modal_notice').find('.infoBtn').on('click', function(e) {
    e.preventDefault();
    var URL_INFO = 'popup_regulation.html';
    
    var param = {
      option : {
        'url' : URL_INFO,
        'width' : '768',
        'height' : '839'
      },
      data : {}
    };

    openPopup(param);

  });


  

});


$(function(){

  /* *
  * 모달 창
  */

  var pops = document.querySelectorAll('.modal_pop');
  var openBtns = document.querySelectorAll('.modal_open');
  var closeBtns = document.querySelectorAll('.close_btn');

  pops.forEach(pop =>{
    pop.style.display = 'none';
  });


 $(openBtns).on('click', function(){
  
  pops.forEach(pop => {
    if(pop.dataset.idx == this.dataset.idx) {
      pop.style.display = 'block';
      document.querySelector('html').classList.add('on');
    }
  })
  
 });

 closeBtns.forEach(btn => {
  btn.addEventListener('click', function(){
    pops.forEach(pop => {
      if(pop.dataset.idx == btn.closest('.modal_pop').dataset.idx){
        pop.style.display = 'none';
        document.querySelector('html').classList.remove('on');
      }
    })
  })
 });
});

// 팝업
function openPopup(param) {

  var width = param.option.width || '';
  var height = param.option.height || '';
  var curX = window.screenLeft;
  var curY = window.screenTop;
  var curWidth = document.body.clientWidth;
  var curHeight = document.body.clientHeight;
  var left = curX + (curWidth / 2) - (width / 2);
  var top = curY + (curHeight / 2) - (height / 2);

  var option = 'menubar=no, width=' + width + ', height=' + height + ', left=' + left + ', top=' + 0;

  window.open(param.option.url,'new', option);

}

// 팝업 - 닫기
function closePopup() {
  window.open('','_self').close();
}


