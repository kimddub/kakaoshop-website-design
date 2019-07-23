/*클로즈 박스*/
$('.top-bn-box > a > .close-box').click(function() {
    $(this).parent().parent().remove();
    $('body > div.bn-line').remove();
});

/*검색창*/
$('.search-box-click > div').click(function() {
     $(this).children("form").addClass('active');
});

/*탑메뉴 그림자*/
$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    if ( scrollTop >= 30 ) {
        $('.shadow').addClass('active');
    }
    else {
        $('.shadow').removeClass('active');
    }
})

/*슬라이드*/
$('.carousel-1 > .owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000, 
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
})


/*모바일 사이드 메뉴*/
function showLeftSideBar() {
    // 사이드바를 보여준다.
    $('#left-side-bar').addClass('active');
    $('html').addClass('left-side-bar-visible');
}

var hideLeftSideBar = function() {
    // 사이드바를 숨긴다.
    $('#left-side-bar').removeClass('active');
    $('html').removeClass('left-side-bar-visible');
}

$('.show-left-side-bar-btn').click(showLeftSideBar);
$('.hide-left-side-bar-btn').click(hideLeftSideBar);

/*모바일 검색 모드*/
function showSearchBar() {
    // 서치바를 보여준다.
    $('#mobile-search-bar').addClass('active');
    $('.mobile-search-bg').addClass('active');
}

function hideSearchBar() {
    // 서치바를 보여준다.
    $('#mobile-search-bar').removeClass('active');
    $('.mobile-search-bg').removeClass('active');
}

$('.mobile-top .mobile-search-box').click(showSearchBar);
$('.hide-mobile-seach-bar-btn').click(hideSearchBar);

function ifMobileSearchBg() {
  if ( $('html').has('left-side-bar-visible') ) {
    $('.mobile-search-bg').removeClass('active');
  }
}

ifMobileSearchBg()



$('.more-prod').click(function() {
    window.$('.prod-list-1-2').removeClass('hide');
    $(this).remove();
});