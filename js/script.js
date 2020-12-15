// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  //---------------------------
// // ローディングアニメーション
//---------------------------

	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},4500); //3.5秒後にロゴ含め真っ白背景をフェードアウト！

//---------------------------
// ここからtitle文字アニメーション
//---------------------------

var container = $(".demoTxt");

// テキストの間にスペースを入れます
var content = $(container).html();
var text = $.trim(content);
var newHtml = "";


// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

// spanで囲んだテキスト群をHTMLに戻す
$(container).html(newHtml);


// 1文字ずつ表示
var txtNum = 0;
setTimeout(function(){
setInterval(function() {
  $(container).find('span').eq(txtNum).css({opacity: 1});
 txtNum++
},500);
},5000);

//---------------------------
// ここからportfolio文字アニメーション
// --------------------------
setInterval(function() {
  $('.logo-subtitle').fadeIn();
}, 12500);

//---------------------------
// ここからlist表示アニメーション
// --------------------------

// /* 変数 lists に #list li を格納 */
// var lists = $("#list li");
 
// /* lists の透明度 を 0 に */
// lists.css({opacity: 0});
 
// /* lists を一つずつ処理 */
// lists.each(function(i){
 
// /* delay() で animate（）の実行を 200ミリ秒ずつ遅延 */
// $(this).delay(200*i).animate({opacity:1});
 
// });
});