function toPageTop() {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
    return false;
}

function toProfile() {
    var off = $('#Profile').offset();
    $('body, html').animate({
        scrollTop: off.top}, 500);    
}

function toExperience() {
    var off = $('#Experience').offset();
    $('body, html').animate({
        scrollTop: off.top}, 500);    
}

function toOther() {
    var off = $('#Other').offset();
    $('body, html').animate({
        scrollTop: off.top}, 500);    
}

function toWork() {
    var off = $('#Work').offset();
    $('body, html').animate({
        scrollTop: off.top}, 500);    
}

function toIllust() {
    var off = $('#Illust').offset();
    $('body, html').animate({
        scrollTop: off.top}, 500);    
}

//初期画面読み込み時の処理
$(document).ready(function () {
    var pagetop = $('#pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });    
});
