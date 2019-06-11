(function() {

//alert(document.head.html);
//document.head.html()='as';

/*
var node = document.createElement("script"); 
node.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");

document.head.appendChild(node);
*/


function waitForElement(elementPath, callBack){
  window.setTimeout(function(){
    if($(elementPath).length){
      callBack(elementPath, $(elementPath));
    }else{
      waitForElement(elementPath, callBack);
    }
  },500)
}
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('"'+$(element).text()+'",').select();
    document.execCommand("copy");
    $temp.remove();
}
function copyCirtcleNameToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('\t    '+'"['+$(element).text().split('[')[1].split(']')[0]+']",').select();
    document.execCommand("copy");
    $temp.remove();
}



if(typeof block_list =="undefined"){
    setTimeout(function(){
        },200);
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function parse(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, () => args[i++]);
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ // <<<<
var url  = window.location.href;


var nico =  url.includes("nicovideo");

setTimeout(function(){ if(typeof block_list =='undefined'){var block_list = 9;} },1000);
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


if(url.includes("www.youtube.com/")&&!url.includes('watch')){

 return;
}
    

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("stackoverflow")){
    $('#top-cards').remove();
    $('.user-gravatar32').css('zoom','200%');


    $('[class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center"]').mouseover(
        function(){
            if( parseInt($(this).text())>1500  ){
                //$(this).css({'border':'3px solid orange','border-radius':'5px'});

                $(this).attr('style','border: 3px solid orange;border-radius: 5px');
                //$(this).css('background-color','orange');


                //border: 3px solid white;border-radius: 5px

            }
        }
        );
    $('[class="js-vote-count grid--cell fc-black-500 fs-title grid fd-column ai-center"]').trigger('mouseover');
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("qiita")){           // Qiita
    $('.it-Header_author').css('zoom','270%');


}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("http://www.nyuu.info/kw")){                 // for Adult Video search
    $('[rel*="nofollow"]:contains("▶0:")').remove();
    $('[rel*="nofollow"]:contains("▶1:")').remove();
    $('[rel*="nofollow"]:contains("▶2:")').remove();
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("drive.google.com/file/")){
    //

    $('.ndfHFb-c4YZDc-aTv5jf-bVEB4e>img')[0].click();


}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("ptt.cc")){
    //
    if(url.includes('ask')){

    }

    $('iframe').css('zoom','30%');
    $('img').css('zoom','30%');

    block_list=[
        'crimson11','lovebridget',
        'chocopie',
        'Morphee',
        'lovelive123',
        'oops66',
        'pttuser',
        'aaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaa',
        'aaaaaaaaaaaaaaaaaaaaaa',
    ];

    $('[class="f3 hl push-userid"]').click(function(){
        
        navigator.clipboard.writeText($(this).text());
        $(this).css('color','orange');
    });

    for(var i=0;i<block_list.length;i++){
        $('[class="f3 hl push-userid"]:contains("'+ block_list[i]+'")').parent().hide();

    }
    
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("hexschool")){
$('.mb-3').css('zoom','30%');

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
function make_orange(keyword,color){  //  104 career
    //setInterval(function(){
    $('[class="job-list-item__info b-clearfix b-content"]:contains("'+keyword+'")').click(function(){
            //$(this).css('color','orange');
            $(this).html( $(this).html().replace(keyword,'<span style="color:'+color+'">'+keyword+'</span>') );
    });

    //},2000);
}

if(url.includes("104.com.tw")){//------------------------------------------------------------------

    $(':contains("下一頁")').mouseover(function(){
        //$(this).click();
        $(this).remove();
    });
    
    $('.comp_name:contains("資訊股份有限")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');
    $('.comp_name:contains("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")').css('background-color','red');

    $('<a target="_blank" href="'+'https://google.com/search?q=ptt+'+$('.comp_name').text()+
        '" ><img src="https://www.google.com/favicon.ico"></a>').appendTo($('.comp_name'));


    $('<a target="_blank" href="'+'https://www.qollie.com/search?keyword='+$('.comp_name').text().trim()+
        '&kind=company&from=normal'+
        '" ><img src="https://www.qollie.com/favicon.ico"></a>').appendTo($('.comp_name'));
    

    $('#a_top').css('zoom','40%');  //  Company _ banner
    //---------------------------------------------------------------------------------
    var keywords = [
    '輪班',
    '程式']

    var keyword = 'x';

    make_color('輪班','orange');

    $('[class="job-list-item__info b-clearfix b-content"]:contains("'+keyword+'")').click(function(){
            //$(this).css('color','orange');
            $(this).html( $(this).html().replace(keyword,'<span style="color:orange">'+keyword+'</span>') );
    });

    for(var i; i<keywords.length; i++){
        $('[class="job-list-item__info b-clearfix b-content"]:contains("'+keywords[i]+'")').click(function(){
            
            $(this).html( $(this).html().replace(keywords[i],'<p style="color:orange">'+keywords[i]+'</p>') );
        });//html().//css('color','orange');

    }
    //------------------------------------------------------------------------------

    $('[class="job-list-item__info b-clearfix b-content"]').trigger('click');

    $('.main-search').css({'zoom':'80%','height':'90px'});
    $('#filter-search').css('zoom','80%');
    $('div[class*="aidma_"]').remove();
    $('.l-header>.l-container').remove();
    $('.b-logo.b-float-left').remove();
    $('.b-banner--dimond.b-float-right').remove();

    $('.js-notice').remove();
    //document.title = '104';
    block_list=[
        '哈瑪星','日月光',
        '聯成電腦']

    for (var index = 0 ; index < block_list.length; index++) {
            var name = 'ul.b-list-inline>li:contains("'+block_list[index]+'")';
            $(name).parent().parent().parent().remove();  
        }
    

        

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("usyo.net")){
    //window.stop();
    
    //$('[class*="ad_txt"]').remove();
    $('.sp_hide.wrap_single-item').empty();
    $('.sp_hide[style*="margin-bottom: 20px"]').empty();

    $('[class*="ad_"]').remove();
    $('.box_01').remove();
    
    $('p:contains("スポンサー広告")').remove();

    $('.wrap>.lrbox').remove();
    $('.lrbox.lr02.cf').css('zoom','50%');
    $('h3').css('zoom','50%');

    $('[style*="margin-bottom: 40px;"]').remove();

    $('.nextprev').css({'color':'blue'});
    
    $('.nextprev').on('mouseover',function(){
        $('.nextprev').css({'color':'green'});
        $(this)[0].click()});

    //$('h6>a').attr('href');
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


if(url.includes("https://www.codewars.com/") ){//&&url.includes("solutions")
    
    var done = new Audio( chrome.extension.getURL("sfx/loaded.wav") );
    done.volume = 0.5;
    
    done.play();

    if(url.includes("solutions") ){//&&
    }

    document.onkeypress=function(e){
        if (e.keyCode === 13) {
            var enter = new Audio( chrome.extension.getURL("sfx/enter -- Typewriter.wav") );
            enter.volume = 0.2;
            enter.play();
        }else{

            var type = new Audio( chrome.extension.getURL("sfx/button -- typewriter.wav") );
            type.volume = 0.2;
            type.play();
        }

        //enter -- Typewriter
        //button -- typewriter
    }
    //$('h6>a').attr('href');
    var se_ok = chrome.extension.getURL("sfx/Starcraft- ok.wav")
    var click = new Audio(se_ok );
    
    click.volume = 0.2;

    $('[class*="btn"]').click(function(){click.play();});
    $('a').click(function(){click.play();});

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://translate.google.com")){
    
setTimeout(function(){
$('.src-tts.left-positioned.ttsbutton.jfk-button').trigger('click'); 
$('.src-tts.left-positioned.ttsbutton.jfk-button')[0].click();
$('.jfk-button-img')[0].click();

},3000);

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("dominion.")){

    
    

    setInterval(function(){
        if(typeof $('.timeout').html() ==='undefined'){}else{document.title = '終局しました。';}
        

        if($('.actual-log').eq($('.actual-log').length-1).text().includes('kaimisou')){
            document.title = 'あなたのターンです';
        }else{
            document.title = $('.actual-log').eq($('.actual-log').length-1).text().split('(')[0].replace('kは','あなたは').replace('金貨','きんか').replace('+','プラス').replace('購入・獲得','購入').replace('札','ふだ').replace('ターン ','ターン');    
        }
    },400);
}  

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("pornhub")){



$('.reset').remove();
//$('.clear').remove();
$('.showingCounter').remove();
$('[class="searchRelatedList sectionContent clearfix"]').remove();
$('[class="videos row-4-thumbs streamateContent clearfix"]').remove();
$('[class="page_next omega"]').on('mouseover',function(){ 
    document.title ='s';
    $('[class="page_next omega"]>a')[0].click()});
    
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://www.javwhores.com/video/") ||url.includes("https://www.thisav.com/")){

$('iframe').remove();
$('tbody').remove();
$('#logo').remove();
$('#scroller').remove();
$('[class="span-640 left"]').prependTo('body');

$('.video_box>a').attr('target','_blank');

setTimeout(function(){
$('html, body').animate({ scrollTop: 10 }, 'fast');
$('#vjs-banner-cross')[0].click();
//$('.vjs-big-play-button').click();  won't work on button
$('.vjs-big-play-button').trigger('click');
},500);

//------------------------ jav whores
if(url.includes("https://www.javwhores.com/video/")){
$('html, body').animate({ scrollTop: 150 }, 'fast');
}

//document.body.html( );
$('.block-video').prependTo('body');

$('.top-nav').remove();
$('.table').remove();

//$('.no-touch').css('zoom','30%');
$('[role*="navigation"]').css('zoom','30%');
$('[role*="navigation"]').css('opacity','0.05');
//document.body.innerHTML=$('.block-video').prependTo('body');
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://adult.contents.fc2.com/")){
    
$('.ranking_bnr').remove();
//$('.').remove();
$('.m-globalMenu-1100').remove();
//$('.').remove();
//$('.').remove();
$('.banner_block').remove();
$('.next_btn>a').on('mouseover',function(){
    $(this).css('color','green');
    $(this).css('zoom','110%');
    $(this)[0].click()});


block_items=[
        '未亡人さんにPart2 人妻雰囲気フェイト',
        'レイヤーさん参戦？！FG○',
        '青セイバーさんと',
        '雷ママ',
        '美脚さんでアビィちゃん'
];

for(var i=0;i<block_items.length;i++){
        $('.sell_block:contains("'+block_items[i]+'")').remove();
}





for(var i =0;i<$('.title>a').length;i++){

$('.title>a').eq(i).text( $('.title>a').eq(i).text().split('】')[1]);
//var url = 'https://duckduckgo.com/?q=javwhores+jav.work+'+$('.title>a').eq(i).text().slice(0,-1).replace(/-/g,'"');
//var url = 'https://google.com/search?q=avgle+javwhores+jav.work+-ニコニコ動画+-youtube+'+$('.title>a').eq(i).text().slice(0,-1).replace(/-/g,'');
var url = 'https://google.com/search?q=avgle+'+$('.title>a').eq(i).text().slice(0,-1).replace(/-/g,'');

/*
$.ajax({ url: url, success: function(data) { 
            console.log(data);
            if(data.includes('https://www.javwhores.com/video')){
                $('.title>a').eq(i).css('color','red');
            }
    } });
*/
$('.title>a').eq(i).attr('href',url);
//$('<p>'+url+'</p>').appendTo($('.title>a'));
$('.thum_img>a').eq(i).attr('href','https://www.thisav.com/channel/'+$('.title>a').eq(i).text().slice(0,-1).replace(/-/g,''),'_blank');

$('.thum_img>a').eq(i).attr('target','_blank');
$('.thum_img>a').eq(i).attr('title','link to Thisav');
$('.title>a').eq(i).attr('target','_blank');
//$('.title>a').eq(i).click(function(){open('https://www.javwhores.com/search/'+$('.title>a').eq(i).text().split('】')[1],'_blank' )});
}



$('.star').remove();

$('.profile').remove();
$('.popular_item').remove();

}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("avgle.com")&&!url.includes("error")){
//$('.well.well-sm>a').attr('target','_blank');
//open('http//google.com','_blank');
$('.top-nav').css('zoom','10%');
$('.top-nav').css('opacity','0');
$('[class="navbar navbar-inverse navbar-fixed-top"]').css('zoom','40%');
$('[class="navbar navbar-inverse navbar-fixed-top"]').css('opacity','0');

$('#adxp').remove();
$('[class="alert alert-dismissable alert-danger"]').remove();
$('[class="row hide-me-please2"]').remove()
$('[class="well well-filters"]').remove()


//$('#player_3x2_close').css('z-index','-11');

//$('body').html($('#video-player_html5_api').html());

//$('body').html($('[aria-label="video player"]').html());
$('.vjs-big-play-button').trigger('click');

$('span#player_3x2_close').on('click',function(){
    
    //$('body').html($('.video-container').html());
});

$('#aoverlay').remove();
//  video-player_html5_api //id
//  video-js vjs-16-9 vjs-sublime-skin vjs-paused vjs-controls-enabled vjs-workinghover vjs-v5 video-player-dimensions vjs-user-inactive //class

$('.col-md-8.col-sm-7').attr('class','col-md-12 col-sm-7');
$('#onesignal-popover-cancel-button').click();
$('#onesignal-popover-dialog').remove();
$('.col-md-4.col-sm-5').remove();

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://www.hippovideo.io/")){  // need to change zoom to 200% manually
//$('.well.well-sm>a').attr('target','_blank');
//open('http//google.com','_blank');
//$('body').css('zoom','200%');


$('.preview-player-container').prependTo('#hippoTopBar');

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('twitter.com')){  // 
    $('.account-group.js-account-group').attr('target','_blank');
    $('.r-1adg3ll.r-13qz1uu').css('padding-bottom','100%');

    
    $('[aria-label*="おすすめユーザー"]').empty();
   
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('https://mobile.twitter.com/home')){  // 
    $('.account-group.js-account-group').attr('target','_blank');
    $('.r-1adg3ll.r-13qz1uu').css('padding-bottom','100%');
    
    setInterval(function(){
        //$('[class*="css-76zvg2 css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0"]').on('mouseover',function(){document.title=$(this).text();});
        if($('[class*="css-76zvg2 r-hkyrab r-gwet1z r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0"]>span[class*="css-76zvg2 css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0"]:visible').eq(5).text().includes('twitter')){

        }else{
        document.title=$('[class*="css-76zvg2 r-hkyrab r-gwet1z r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0"]>span[class*="css-76zvg2 css-16my406 r-gwet1z r-ad9z0x r-bcqeeo r-qvutc0"]:visible').eq(5).text();
        }

    },400);
    
   
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("twitter.com/shabu_tte/lists/ero") || ( url.includes("twitter")&&url.includes("/media")) &&  1){

    $('[aria-label*="日本のトレンド"]').empty();
    // css-1dbjc4n r-aqfbo4 r-14lw9ot r-my5ep6 r-rull8r r-qklmqi r-gtdqiz r-ipm5af r-1g40b8q
    //alert('s');
    setTimeout(function(){
    $('.r-ipm5af.r-1g40b8q').css('zoom','30%');
    //$('.css-1dbjc4n').remove();
    $('[class*="css-1dbjc4n r-aqfbo4 r-1n9sb9w r-1ovo9ad"]>[class*="css-1dbjc4n r-1pi2tsx"]').empty();

    setInterval(function(){
        
        document.title = $("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").length;
        //$('[dir*="auto"]').remove();　　　// css-76zvg2 r-hkyrab r-gwet1z r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0
        if(1){
            $('[class*="css-76zvg2 r-hkyrab r-gwet1z r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0"]').remove();
            //$('[class*="css-1dbjc4n r-1habvwh r-1iusvr4 r-46vdb2 r-5f2r5o r-bcqeeo"]').remove();
            $('[class*="css-1dbjc4n r-18u37iz r-1wtj0ep r-zl2h9q"]').remove();             // essential
            //$('svg[class*="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"]').remove();
            

            $('[class*="css-1dbjc4n r-18u37iz r-1wtj0ep r-156q2ks r-1mdbhws"]').css('zoom','20%');   // essential   LIKES
            $('[class*="css-76zvg2 r-hkyrab r-1qd0xha r-a023e6 r-16dba41 r-ad9z0x r-bcqeeo r-bnwqim r-qvutc0"]').remove();

            $('[class*="css-76zvg2 r-1n1174f r-1iusvr4 r-46vdb2 r-gwet1z r-a023e6 r-16dba41 r-ad9z0x r-5f2r5o r-bcqeeo r-1mi0q7o r-qvutc0"]').remove();
            $('[class*="css-1dbjc4n r-d0pm55"]>[class*="css-1dbjc4n r-18u37iz r-thb0q2"]').css('zoom','10%'); // retweet

        }

        for(var i=0; i<$("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").length; i++){
            if($("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).html().includes('質問箱')){
                $("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).parent().remove();   
            }

            if( $("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).html().includes('画像') || 
                $("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).html().includes('mage') ||
                $("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).html().includes('video') 
                ){

            //$("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).text('.');

            }else{
        
            $("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").eq(i).parent().remove();
            }
        }   
   
        //$('.r-a5pmau.r-bnwqim').attr('href',$('.r-a5pmau.r-bnwqim>div>div>img').attr('src'));

    },700);

    },3000);
    // text   .css-76zvg2.css-16my406.r-gwet1z.r-ad9z0x.r-bcqeeo.r-qvutc0
    //  css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz          date_05_08

    //setTimeout(function(){alert($("[class*=\"css-1dbjc4n r-1loqt21 r-o7ynqc r-1j63xyz\"]>article").length);},14000);
    
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('wikiwiki') ){
    $('p').on('mouseover',function(){
        document.title = $(this).text();
    });
}

if(url.includes("www26.atwiki.jp") || url.includes("ja.wikipedia.org/") ){

    $('p , li , h3, td').on('mouseover',function(){
        document.title = $(this).text();
    });
    
}
//
if(url.includes("livedoor.")||url.includes("blog.")||url.includes("blomaga") ||url.includes("onecall2")||
    url.includes("/archives/") || url.includes("imasoku") ||url.includes("chomanga") // imasoku
  ){
console.log('livedoor');

//document.title = 'start.';
$('.logbox').remove();
$('.logbox2').remove();
$('.logbox4').remove();
$('.logbox5').remove();
$('.custom8').remove();

$('.related-articles ,.blogroll-wrapper ,  #pick3 ').remove();
$('#BlogParts_aList8').css('opacity','0.5');   // MAG

$('[summary="<%blog_name>"]').remove();

$('[src="http://onecall2ch.com/rss.html"]').remove();
$('.spmode2').remove();
$('.spmode').remove();

$('.google-2ad-b').remove();
$('.google-2ad-m').remove();


$('.custom3').css('zoom','50%');

$('a').attr('target','_self');
$('a').click(function(){open($(this).attr('href'),'_self')});
$('img').click(function(){open($(this).parent().attr('href'),'_self')});
//.comment-body
setTimeout(function(){

    $('[id*="rakuten_mw_ifra"]').remove();
},100)


$('.link-text:contains("夜神月「孫悟空　心臓麻痺っと…」悟空「ひゃ～ｗｗｗｗｗ（死亡）」")').parent().empty();
$('.comment-body:contains("ガイジかよ")').remove();
$('.comment-body:contains("ガイジ")').remove();
$('.comment-body:contains("クソブログ")').remove();
$('.comment-body:contains("クズ")').remove();
$('.comment-date:contains("ID:ckJWtrGC0")').parent().remove();
$('.comment-date:contains("ID:KU1mAgNt0")').parent().remove();





$('[rel="next"]').mouseover(function(){
    $(this)[0].click();
    document.title = '次のページへ';
});
$('.t_b,  .comment-body , .body , .commentwrap , h1').on('mouseover',function(){
//$('.t_b').waypoint(function(){  
    if($(this).text().includes('このコメントに返信')){ /////  for MAG soku
        document.title = $(this).text().replace(/\n/g,'').replace(/\s/g,"．").split('このコメントに返信')[1].split('それに賛成だ')[0];    
    }else{
    document.title = $(this).text().replace(/\n/g,'').replace(/\s/g,"．");
    }
});


$('.article-option').css('zoom','150%');

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("www.youtube.com/watch?v=")){
//$('.well.well-sm>a').attr('target','_blank');
//open('http//google.com','_blank');

//$('.ytp-menuitem-content:contains("Normal")').text('1.75');
//setTimeout()
document.getElementsByTagName("video")[0].playbackRate = 1.0;



}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  

if(url.includes('https://anotepad.com/notes/')){   // src of blocklist
    var url = "https://anotepad.com/notes/5wxm94";
    var graywhite=0;
    $.ajax({ url: url, success: function(data) { 
         
    

    var $temp = $("<input>");

    $('.topLinks').remove();
    $('.addthis_toolbox.addthis_default_style').remove();
    $('#note_toolbar').remove();
    $('body').append($temp);
    $temp.val(data).select();
    document.execCommand("copy");
    $temp.remove();
    //copy whole text to clipboard
    //alert('done');
        
        //eval(new array(data));        
        
        //alert(data);
         } });

    setTimeout(function(){
        $('.header').remove();
    },600);

    
    $('textarea').on('mouseleave',function(){

        $.ajax({ url: url, success: function(data) { 
        
    /*
    var $temp = $("<input>");
    $('body').append($temp);
    $temp.val(data).select();
    document.execCommand("copy");
    $temp.remove();
    */

    navigator.clipboard.writeText(data).then(function() {});
    
    window.graywhite;

    if(graywhite==0){
        $('body').css('background-color','gray');
        graywhite+=1;
        graywhite%=2;
    }else{
        $('body').css('background-color','white');
        graywhite+=1;
        graywhite%=2;
    }
    //copy whole text to clipboard
    //alert('done');
        
        //eval(new array(data));        
        
        //alert(data);
         } });



    })
}



//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  Misc


if(window.location.href.indexOf("sejuku.net") > -1){
//fottor-banner-close_btn

$('#pcMainVisial').remove();
$('#sidebar').remove();

$('.footer-banner').remove();
//$('').remove();
$('.meta-image').remove();

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  Misc


if(window.location.href.indexOf("atwiki") > -1){
//fottor-banner-close_btn

$('#modal-close').click();

}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  TEST page


if(url.includes("https://play-video-stream.com")||
    url.includes("allornamenti")||
    url.includes("dolohen")){
        window.open('about:blank', '_self');
}

if(url.includes("ak6.picdn.net")){
//window.open('about:blank', '_self');



$('html').attr('dir','ltr');
var html = '<textarea rows="2" cols="50">file:\\\\\\</textarea> ';

/*
html +='<div><input id="path" type="file" webkitdirectory></div>';
$('body').html(html);
*/


//$('textarea').on('click',function(){alert($('textarea').val())});
//alert($('textarea').html());
//setInterval(function(){)},1000);

document.querySelector("input").onchange = function() {
    [].slice.call( this.files ).forEach( function(v) {
          //$("body").append("<div>"+v.name+"</div>" );
          //alert($('textarea').html());

          //alert(document.getElementById("path").files[0].name);
          var file = '<img src="'+$('textarea').val()+ $('#path').val().replace('C:\\fakepath','')+'">';

          //$("body").append("<div>"+v.name+"</div>" );
          $("body").append($(file) );
            //$('body').html('<img src="sss'+$('img').attr('src')+'">');
    });    
    //var x = window.open('about:blank', '_blank');
    //x.document.write('<img src=""alt="">');
};


}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('nhentai.net/g/')){  // 
    
    var imgs=$('.thumb-container>.gallerythumb');
    //alert(imgs[imgs.length-2]);
    //alert(imgs.length);
    
    //alert($('.lazyload').attr('data-src').split('galleries/')[1].split('/cover')[0]);
    var g =$('.lazyload').attr('data-src').split('galleries/')[1].split('/cover')[0];

    $('#info>h2')

    for(var i=1;i<imgs.length;i++){
    //for(var i=1;i<20;i++){        
        //alert(html[html.length-1].split('.net')[1]);
    //alert('https://i.nhentai.net/galleries/'+g+'/'+i+'.jpg');
    //setTimeout(function(){ },1000);
    
    $('<img src="https://i.nhentai.net/galleries/'+g+'/'+i+'.jpg" width="800px">').appendTo('#bigcontainer');
    
    $('<img src="https://i.nhentai.net/galleries/'+g+'/'+i+'.png" width="800px">').appendTo('#bigcontainer');
    

    }
    
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes('twitch.')){  // twitch

    var hideshow=0;
    
    $('<button id="hides" style="background-color:#5697ff;color:white;zoom:130%">hide</button>').prependTo($('.tw-flex>.tw-c-text-alt-2.tw-flex.tw-font-size-5'));
    $('<button id="yomiage" style="background-color:#1117ff;color:white;zoom:90%">読</button>').prependTo($('.tw-flex>.tw-c-text-alt-2.tw-flex.tw-font-size-5'));
    //$('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:130%">読み上げ</button>').prependTo($('.___tags___3UhZH'));

    $('.tw-align-items-start>.tw-flex').prependTo('.chat-input.tw-block.tw-pd-b-2.tw-pd-x-2');
    
    $('#hides').click(function(){
        //$('main.twilight-main').appendTo('.chat-room__content');
        //$('body').html($('div[data-a-target*="right-column-chat-bar"]').html());  // this won't work
        $('.tw-stat__value').css('zoom','950%');
        if(hideshow==0){
            //$('.simplebar-content').remove();
            $('.tw-aspect.tw-aspect--align-top').remove();      
            hideshow=(hideshow+1)%2;}
        else{
            
            $('.tw-aspect.tw-aspect--align-top').show();hideshow=(hideshow+1)%2;}
        });


}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


if(url.includes("cas.nicovideo")){
    //var onoff=0;

    $('.___comment-post-panel___1TnSn').css('z-index',99);
    $('.___player-control-area___3gg_m').css('z-index',99);
    $('[data-nxlayout-layout*=\'under-comment\']').css('z-index',99);
        //data = $('yt-img-shadow[height*="40"]').eq(idx+1+idx2).html();

    $('<div class="blockscreen" id="overlay" style="position: fixed; display: none; width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.6); z-index: 0;" ></div>"').appendTo('body');
    $('#overlay').show(); 

    $('.___page-layout-area___3o1z5').click(function(){
    //$('.___watch-page-body-area___3f9cU').click(function(){
        $('#overlay').show(); 
    });
    
    $('#overlay').click(function(){
        $('#overlay').hide(); 
    });
    
    //var button_target ='.___user-summary___1Jskn.___user-summary___2o4H5.___user-summary-skin___39E5z.___local-watch-page-header-area-item___2SovM';
    var button_target ='.___header-table___2nX8r';

    $('<button id="yomiage2" style="background-color:#5697ff;color:white;zoom:90%">読み上げ</button>').prependTo($(button_target));
    $('<button id="hides" style="background-color:#5697ff;color:white;zoom:90%">hide</button>').prependTo($(button_target));
    
    $('button').css('z-index',99);
    //$('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:130%">読み上げ</button>').prependTo($('.___tags___3UhZH'));

    


        


    $('#hides').click(function(){
        if(hideshow==0){
            
            $('.input-handler>canvas').hide();hideshow=(hideshow+1)%2;}
        else{
            
            $('.input-handler>canvas').show();hideshow=(hideshow+1)%2;}
        });

    $('#yomiage2').click(function(){
    if (typeof yomi ==='undefined'){}else{return}
        $('#yomiage2').css('background-color','green');
        yomi = setInterval(function(){
        
        n1=$('.___comment-number___1Ov-2').eq(-1).text();
        //console.log('--n1:'+n1);
        if(n1!=n2){
            
            n2=$('.___comment-number___1Ov-2').eq(-1).text();
            //console.log('--n2:'+n2);
            console.log($('.___comment-text___2rZrx').eq(-1).text());
            var come=$('.___comment-text___2rZrx').eq(-1).text();
            console.log('999999999999999999999999999999999999');
            choice = Math.floor(Math.random()*10)%4;
            if(choice==0){v='+SASARA'}
            else if(choice==1){v='+TUTUMI'}
            else if(choice==2){v='+TAKAHASHI'}
            else if(choice==3){v='+ONE'}
            v='';
            if(0){
            console.log('99999999999999999  NG   99999999999999999');             
             }else{

            navigator.clipboard.writeText(v+come).then(function() {});

            }
        }

    },600);

    });

    $(document).keyup(function(e) {
     if (e.key === "]" ) { 
      
      $('button[aria-label*="フルスクリーン"]').trigger('click');

                            }
    });

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('https://live.nicovideo.jp/?header')){  // nicovideo mobile

    $('html, body').animate({ scrollTop: 1870 }, 'fast');

    if(typeof done ==='undefined'){
    var done = new Audio( chrome.extension.getURL("sfx/diablo2/-----gold.wav") );
    }

    done.volume = 0.2;
    done.play();

    $('[data-broadcast-status="past"]').remove();
    $('[class="___page-header-area___1UX6D"]').css('zoom','60%');
    $('[class="___program-status-axis-contents-area___36IEB ___contents-area___3dEc1"]').css('zoom','60%');
    $('#favoriteProgramListSection').css('zoom','60%');


    block_list=[  // niconama
        '圏外コロシアム放送','ピノキオさんの','ボカロ中毒','りーちゃん低スペ','GRB代表','筋ジス家',//,''
        'サボテンハウス','ぬるま湯の','ちるちるが','あにそん聴','ぺぺぺぺぺ','SKE4','レベルを上げて装備で','人間災害!','Syamu_Cruise',
        '名提督えふけい','【艦これ','癒しうんこ','女流桜花','学園CLUB','時間天気番組','麻雀チャンネル','リオンフレンズ','K2Gのこみゅ',
        '毎日ヒロインむら','才ひきこもり','歳ひきこもり','ちよすけ','これイベント','マイクラ','マインクラ','BF','パチンコ実','麻雀パラダイス','リーガ振','ノ爆」',
        'FGO','あごにくがす','ドラクエ10','パードンキ','ソシャゲ','これハグリ','あんクラ','グラブル','PUBG','フォートナイト','ぴんく星人のだら',
        'スプラト','MTG','歳精神障','モンスターファー','売れっ子マンガ','各務原怜花','lol','LOL','なまぽ牧場','みんなは世の中で必要',
        'daiの気まぐれ','モンハン','メンヘラ','孤独な青春','みなとのコミュ','チンパンの集う','エグゼ','FF14','人狼','お豆腐メンタル',
        ,'ショナ探偵事務','提督','白内閣人','デュエマ','幼太のお','ぐらぶる',
        '歳DT'

    ];
    setInterval(function(){
        for(var i=0;i<block_list.length;i++){
        $('.___anchor___1a1pD:contains("'+block_list[i]+'")').parent().parent().html($('<img id="talk" style="opacity:0.6;border: 3px solid white;border-radius: 5px" src="'+chrome.extension.getURL("images/talk_default.gif")+'">'))//.empty();
        }

    },500);


}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('sp.nicovideo.')){  // nicovideo mobile
    $('.watch-Marquee_Anchor').attr('href',window.location.href.replace('sp.','www.'));
    $('.watch-Marquee_Anchor').css('color','orange');
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes('sp.live.nicovideo.')){  // nicovideo mobile

    setInterval(function(){
        for(var i=0; i<$('img[class="___thumbnail___3tbqn ___thumbnail-skin___rpeI3"]').length;i++){
            $('img[class="___thumbnail___3tbqn ___thumbnail-skin___rpeI3"]').eq(i).attr('src', $('img[class="___thumbnail___3tbqn ___thumbnail-skin___rpeI3"]').eq(i).attr('src').split('?')[0] + '?' + parseInt(Math.random()*100) );
        }
    },1000);



    rand_gif_campfire = [
            'https://i.giphy.com/media/1P02W5D3RGYG4/200.webp',        
            'https://i.giphy.com/media/NU9hqIw9vN0fm/200w.webp',
            'https://i.giphy.com/media/lMUGMp2lImgGA/giphy.webp',
            chrome.extension.getURL("images/gif/camp fire 05.gif")
        ];

    if(url.includes('https://sp.live.nicovideo.jp/watch/lv')){

        var gif0 = 'https://i.giphy.com/media/1P02W5D3RGYG4/200.webp' ;
        gif0 = 'https://i.giphy.com/media/NU9hqIw9vN0fm/200w.webp';
        gif0 = 'https://i.giphy.com/media/lMUGMp2lImgGA/giphy.webp';
        //var gif = chrome.extension.getURL("images/gif/camp fire 05.gif");
        
        var gif =  'http://sp.live2.nicovideo.jp/favorites';
        //var gif =  rand_gif_campfire[ parseInt(Math.random()*10)%rand_gif_campfire.length ] ;
        

        $('<a href="'+gif+'"><div class="loading" id="overlay" style="position: fixed; display: none; width: 100%;height: 7%;top: 97%; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.6); z-index: 0;" ></div></a>"').appendTo(document.body);    
        $('#overlay').show();
    }
    //$('https://live.nicovideo.jp/'+$('.___anchor___F4gUZ.___anchor-base___3gkJT.___anchor-skin___dq7lW').attr('href')).prependTo($(this).parent().parent());
    
    for(var i=0; i< $('li>div>a').length ;i++){
        $('.___title___1osxs.___program-detail-item-local___32eVY.___title-skin___24tLK').eq(i).wrapInner('<a style="text-decoration: none; color:black" target="_blank" href="https://live2.nicovideo.jp'+$('li>div>a').eq(i).attr('href')+'">【 PC 】  </a>');
    }

    $('.___item___2Ygdh.___item___2UWvK.___item-skin___3B9Gi>div>a').attr('target','_blank');

    $('.___item___2Ygdh.___item___2UWvK.___item-skin___3B9Gi>div>a').click(function(){
        window.open($(this).attr('href'),"_blank",'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width=340,height=198,left='+$("body").width()/1.38+',top='+$("body").height()/3+'');

    });
    //window.open($(this).attr('href'),'','width=340, height=195');});
    
    
    $('.___program-preview___3IGR8.___program-preview-base___2dy_9.___program-preview-skin___38pdd').css('zoom','50%');
    $('.___top-banner-ads___3OrnN').remove();
    $('.___program-list-tool___3mcdC.___program-list-tool-base___34i52').css('zoom','30%');

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(nico&&    !(url.includes('live2.'))){  // nicovideo


    if(typeof done ==='undefined'){
    var done = new Audio( chrome.extension.getURL("sfx/diablo2/book.wav") );
    }

    done.volume = 1.0;
    done.play();
    


    chrome.storage.sync.get(['hide'], function(result) {
        hide = result.hide; });

    chrome.storage.sync.get(['come_hide'], function(result) {
        come_hide = result.come_hide; });

    setTimeout(function(){
        if(typeof hide ==='undefined'){ var hide = 0;}
        if(typeof come_hide ==='undefined'){ var come_hide=0;}
    },1000);
    
    $('.pagerBtn.switchingBtn').mouseover(function(){
        document.title='次のページへ';
        $(this).css('color','green');
        $(this)[0].click()});

    var fulls;
    var choice;
    var v;
    var clip=1;
    //setInterval(function(){ open(window.location.href,'_self') },25*60*1000);


    document.onkeypress=function(e){
        if (e.keyCode === 13) {
            var rand = parseInt(Math.random()*1000);
            
            if(rand%3==0){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 3.wav") );
                audio.volume = 0.6;
                audio.play();
            }else if(rand%3==1){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 4.wav") );
                audio.volume = 0.6;
                audio.play();

            }else if(rand%3==2){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 1.wav") );
                audio.volume = 0.6;
                audio.play();
            }
            

        }else{
            Math.random()*10
            var audio = new Audio( chrome.extension.getURL("sfx/nep 1.wav") );
            audio.volume = 0.6;
            audio.play();
        }


    }


    if((typeof $('#yomiage').html()==='undefined')&&1){

    }else{
        location.reload();
        
    }

    $('.switchingBtn').mouseleave(function(){$(this)[0].click()});
    
    $('[class="search-option-sort-item-label"]:contains("投稿日時が新しい順")').css('color','orange');
    $('[class="search-option-sort-item-label"]:contains("再生数が多い順")').css('color','orange');
    $('[class="search-option-sort-item-label"]:contains("コメント数が多い順")').css('color','orange');
    

    $('#siteHeader').css('opacity','0.3');

    $('<div class="blockscreen" id="overlay" style="position: fixed; display: none; width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.4); z-index: 0;" ></div>"').appendTo('body');

    
    $('.Card.PlaylistContainer').css('zoom','90%');
    
    //$('.MarqueeContainer').css('zoom','80%');
    $('.HeaderContainer-searchBox').appendTo('.MainContainer');
    $('.HeaderContainer').prependTo('.MainContainer');    
    $('.HeaderContainer').css('padding-top','0');
    $('.HeaderContainer').css('zoom','70%');

    $('[class="Grid VideoMenuContainer"]').css('padding-top','105px');
    $('[class="Grid VideoMenuContainer"]').css('opacity','0.6');

    $('[class="CommentPanelContainer is-hiddenMiniBanner"]').css('padding-top','80px');

    $('.autoPlay').css({'zoom':'150%','border':'thin solid #5697ff'});
    //$('.GridCell.HeaderContainer-videoTitle').remove();  // Title

    $('.GridCell.HeaderContainer-videoTitle').prependTo('.TagList').css('zoom','60%'); 
    $('.GridCell.HeaderContainer-videoTitle').click(function(){
        navigator.clipboard.writeText($('.GridCell.HeaderContainer-videoTitle').text()).then(function() {});

    });

    $('.mypage_header_banner').remove();
    $('#personalFrameArea').remove();  // user osusume
    $('#header').css('height','45px');
    $('#header').css('padding-top','17px');

    $('.log-target-info').css('zoom','140%');

    
    
    //$('.MainContainer').prependTo('.HeaderContainer'); 
    
    setTimeout(function(){
    $('.TagContainer').prependTo('.Card.PlaylistContainer');
    $('.Card.PlaylistContainer').appendTo('.MainContainer');    
        },4900);
    
    

    if(url.includes('/sm')){        // SM video page
    
        setInterval(function(){$('#overlay').show()},10000);

        $('#overlay').show(); 
        $('.VideoMenuContainer').css('z-index','99');
        $('.ControllerContainer-inner').css('z-index','99');
        $('.CommentPostContainer').css('z-index','99');

        $('html, body').animate({scrollTop:($(document).height()/2  )}, 'slow');
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        $('html, body').animate({ scrollTop: 38 }, 'fast');

        $('.VideoDescriptionExpander-switch.VideoDescriptionExpander-switchCollapse').trigger('click');     }
        
    $('.MarqueeContainer').click(function(){
        $('#overlay').show();
    });


    $('#overlay').click(function(){
        $('#overlay').hide();
    });

    chrome.storage.sync.get(['fulls'], function(result) {
      fulls = result.fulls;
    });
    setTimeout(function(){ if(typeof fulls =='undefined'){fulls = 0;} },1000);

    $('.EnableFullScreenButton').click(function(){
        chrome.storage.sync.set({fulls:(fulls+1)%2});
    });

    $('<img style="zoom:43%" src="https://img.fireden.net/vg/image/1517/46/1517469679712.gif">').appendTo('.profileEdit');
    //---------------------timeout---
    setTimeout(function(){
    //$('dl.pullout').removeClass();
    $('dl.pullout').attr('class','ass');
    setTimeout(function(){
    //$('.ass>dd>dt').eq(2).remove();
    $('.ass>dd>ul>li:contains("まとめ")').remove();
    $('.ass>dd>ul>li:contains("広告")').remove();
    $('li:contains("クリエイター奨励スコア")').remove();
         
    $('a>span[style*="line-height:1.1"]').css('zoom','50%');

    $('.ass>dt').remove();
    $('.ass>dd>ul>li:contains("削除")').css('zoom','200%');
    
    $('.MylistItem-mylistComment').remove();

    },10);

    $('div.mylistVideo>.date').remove()
    $('.MylistHeadMenuContainer-deflistPremiumAdvice').remove();
    if($('#talk').html()){
    }else{
        $('<img id="talk" style="width:46px;height:54px" src="'+chrome.extension.getURL("images/talk_default.gif")+'">').prependTo($("[class*='ControllerContainer-area']").eq(1));
    }
    

    },1000);


    //---------------------timeout---
    

        $('body').click(function(){
            setTimeout(function(){
                $('.VideoStartButtonContainer').trigger('click');
        $('dl.pullout').attr('class','ass');
        setTimeout(function(){
        $('.ass>dd>ul>li:contains("まとめ")').remove();
        $('.ass>dd>ul>li:contains("広告")').remove();

        $('.ass>dt').remove();
        $('.ass>dd>ul>li:contains("削除")').css('zoom','200%');

        $('.MylistItem-mylistComment').remove();

        },10);
        $('div.mylistVideo>.date').remove()
        $('.MylistHeadMenuContainer-deflistPremiumAdvice').remove();
        },1000);
        
        });

    $('a:contains("生放送")').eq(0).css('color','#ccdfff');
    $('.siteHeaderUpgrade').removeClass();
    $('ul>li:contains("アプリ")').remove();        
    $('ul>li:contains("市場")').remove();        
    $('.informationTxt').remove();
    $('.MylistHeadMenuContainer-deflistPremiumAdvice').remove();
    $('#yomiage').remove();


    $('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:120%">読み上げ</button>').appendTo($('.Grid.VideoMenuContainer>div').eq(0));
    $('<button id="hide" style="background-color:#5697ff;color:white;zoom:100%">hide</button>').appendTo($('.Grid.VideoMenuContainer>div').eq(0));
    $('<button id="h" style="background-color:#5697ff;color:white;zoom:100%">h</button>').appendTo($('.Grid.VideoMenuContainer>div').eq(0));
    $('<button id="size" style="background-color:#5697ff;color:white;zoom:100%">s</button>').appendTo($('.Grid.VideoMenuContainer>div').eq(0));
    $('<button id="come" style="background-color:#5697ff;color:white;zoom:100%">cm</button>').appendTo($('.Grid.VideoMenuContainer>div').eq(0));

    
    
    $('<a id="window" style="text-decoration: none; color:white;zoom:100%">window ⇲ </a>').appendTo($('.siteHeaderGlovalNavigation').eq(0));
    $('<a id="list" href="https://www.nicovideo.jp/my/mylist" style="text-decoration: none; color:white;zoom:100%">List ⇲</a>').appendTo($('.siteHeaderGlovalNavigation').eq(0));//siteHeaderGlovalNavigation
    $('<a id="list" href="'+chrome.extension.getURL("images/talk_default.gif")+'" style="text-decoration: none; color:white;zoom:100%">off</a>').appendTo($('.siteHeaderGlovalNavigation').eq(0));
    //'.siteHeaderMenuList

    $('#window').click(function(){
        window.open(window.location.href,'','width=320, height=180');
    });

    var text;
    //------------------------------------------------------------------------------
    $('[data-title*="Facebookでシェア"]').remove();
    $('[data-title*="LINEで"]').remove();
    $('[data-title*="この動画のまとめ"]').remove();
    $('li>a>span:contains("アツマール")').remove();
    $('li>a>span:contains("動画")').remove();
    $('li>a>span:contains("オススメ")').remove();
    $('#siteHeaderNotificationPremium').text('プレ');
    $('li>a>span:contains("ランキング")').remove();

    $('.siteHeaderNicopo').remove();
    //------------------------------------------------------------------------------

    setTimeout(function(){
    if(hide==1
        ){ 
        $('.InView.VideoContainer').remove();
        $('.PlayerPauseButton').trigger('click');
        
        setTimeout(function(){
        
        $('.PlayerPlayButton').trigger('click');
        },400);
        
        }
    },1000);

    setTimeout(function(){
    if(come_hide==1
        ){ 
        $('.CommentRenderer').remove();
        $('.PlayerPauseButton').trigger('click');
        
        setTimeout(function(){
        
        $('.PlayerPlayButton').trigger('click');
        },400);
        
        }
    },1000);
    

    //$('#CommentRenderer>canvas').css({'width':'360','height':'320'});
        

    $('#size').click(function(){

        $('#CommentRenderer>canvas').attr('width','230');
        $('#CommentRenderer>canvas').attr('height','180');
    });

    $('#h').click(function(){

        hide ++;
        hide %= 2;
        chrome.storage.sync.set({hide:hide});
        


        if(hide==0){
            location.reload();
        }else{ 
            $('.InView.VideoContainer').remove();
            $('.PlayerPauseButton').trigger('click');
            
            setTimeout(function(){
            
            $('.PlayerPlayButton').trigger('click');
            },400);
            
            }
    });

    $('#come').click(function(){

        come_hide ++;
        come_hide %= 2;
        chrome.storage.sync.set({come_hide:come_hide});
        
        document.title = come_hide;

        if(come_hide==0){
            location.reload();
        }else{ 
            $('.CommentRenderer').remove();
            
            }
    });

    $('#hide').click(function(){
        
        $('.InView.VideoContainer').empty();
    });

    
    $('#yomiage').click(function(){
    if(typeof come ==='undefined'){
    }else{ 
        clearInterval(come);
    }

    $('.Marquee').remove();//pc

    $('#yomiage').css('background-color','green');
    $('#yomiage').text('読み上げ中');

    var st=0;
    var wait=1000;
    var i =0;
    //wait = wait + Math.random()*400;

    $('.SeekToHeadButton').click(function(){
        st=0;
        //wait = 1000 + Math.random()*400;
        wait = 1000 + 200;
    });
//----------------------------------------------------------------------------------------------------------interval
    

    //$('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').clone().appendTo('body');
    $("[class='ActionButton SharePanelVisibleButton VideoMenuContainer-button']").click(function(){
        $('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('height','800');
        $('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('opacity','1');
        $('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('zoom','100%');
        $('.comerow').css('opacity','0');
        $('h4').css('opacity','0');
        clearInterval(come);
    });

    $('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('opacity','0');



    var text ='';
    var comp = '.';

    var img='';
    var style ='';
    var sel;
    var emoji;

    come = setInterval(function(){
        ////////////////////////////////////////////////////////////////////////////////////////////// Type A
    
        if(parseInt($('.CommentCountMeta-counter>.FormattedNumber').text().replace(',',''))<500 &&   // >500
        parseInt($('[class="PlayTimeFormatter PlayerPlayTime-duration"]').text().split(':')[0])>10  ){ //  parseInt($('.FormattedNumber').text())>300
        //document.title='Type A';
        //document.title=parseInt($('.CommentCountMeta-counter>.FormattedNumber').text());

        for(i=st;i<$('.CommentPanelDataGrid-cell').length;i++){
        
            //console.log('at:   '+i);

            //if(0){
            //if($('[data-name="vpos"]').eq(i).text()== $('.PlayTimeFormatter.PlayerPlayTime-playtime').text()){
            if($('.CommentPanelDataGrid-cell').eq(i).eq(0).text()== $('.PlayTimeFormatter.PlayerPlayTime-playtime').text()){
                text = $('.CommentPanelDataGrid-cell').eq(i).parent().parent().children().eq(0).text();
                //document.cookie = 'come='+text;
                //console.log(document.cookie)
                $('.CommentInput-textarea').attr('placeholder',text);
                st = i -100 ;
                if(i-100 <0){st=0}

                //$(document).attr("title", text);
                

                if(0){
                //if(clip==1){
                    navigator.clipboard.writeText(    text);
                }else{
                    //document.title =v+ text;
                    document.title = text.replace(/,/g,"．").replace(/、/g,"．");
                }

                //console.log($('.CommentPanelDataGrid-cell').eq(i).parent().parent().children().eq(0).text());
                if(0){
                    var href = $('.CommentPanelDataGrid-cell').eq(i).parent().parent().children().eq(0).text();
                    
                    //href = `data:application/octet-stream,${href}`;
                    href2 = 'data:text/plain;charset=utf-8,' + encodeURIComponent(href);
                    //href2 = 'https://google.com';
                    $('#nicome').attr('href',href2);
                    $('#nicome')[0].click();
                }
                //console.log('--break at:   '+i);
                break;
                //$.post('http://localhost:8080', {'ssss'});

                //$('#savefile').trigger('click');
            }
        }
    } else{// if 0
////////////////////////////////////////////////////////////////////////////////////////////// type B
        $('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('height','3');///////////
        //$('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('zoom','370%');  // 100% zoom  
        $('[class="CommentPanelDataGrid CommentPanelContainer-commentPanel"]').css('zoom','375%');  // 100% zoom
    

        text = $('[data-name="content"]>span').last().text();    
    }


    
    
    sel = parseInt(Math.random()*10);
    
    if(0){
        // turn off
    }
    else if (text.includes( 'い男だ') || text.includes( 'い漢だ')){
        emoji = 'images/150/150fuhajin.gif';}
    else if( text.includes('なんてだっせ')){
        emoji = 'images/150/150セガなんて.bmp';}
    else if( text.includes('わざるを得ない')){
        emoji = 'images/150/150haousou.bmp';}
    else if( text.includes('インディグネ') || text.includes( 'インデクニション') || text.includes( 'インディクニション')){
        s = sel%2;
        if (s==0){
            emoji = 'images/150/150tales_inde_tov.gif';}
        if (s==1){
            emoji = 'images/150/150tales_inde_top.bmp';}}
    else if( text.includes('アッー')){
        emoji = 'images/150/150aniki_aa.bmp';}
    else if( text.includes('アツゥイ')){
        emoji = 'images/150/150atsuui.bmp';}
    else if( text.includes('不破刃')){ 
        emoji='images/150/150fuhajin.gif';}
    else if( text.includes('どうも') && includes('さん')){ 
        emoji='images/150/150ninsatu.bmp';}
    else if( text.includes('ドウモ') && includes('サン')){ 
        emoji='images/150/150ninsatu.bmp';}
    else if( text.includes('ダークメタモ') || text.includes( 'を苦しめるな')){ 
        emoji='images/150/150iga_arukado.bmp';}
    else if( text.includes('キシン流')){ 
        emoji='images/150/150iga_kishin.gif';}
    else if( text.includes('ショータイ') || text.includes( 'ショーター')){ 
        emoji='images/150/150iga_showtime.bmp';}
    else if( text.includes('ムッムッホ')){ 
        emoji='images/150/150iga_mumuhoi.gif';}
    else if( text.includes('IGA')){ 
        emoji='images/150/150iga.gif';}
    else if( text.includes('イクゾ')){ 
        emoji='images/150/150ikuzo.gif';}
    else if( text.includes('知っているのか') || text.includes('知ってるのか')){ 
        emoji='images/150/150raiden.bmp';}
    else if( text.includes('きSA') || text.includes( 'きＳ')){ 
        emoji='images/150/150cha_daisukisa.bmp';}
    else if( text.includes('すきかい？') || text.includes( '好きかい？')){ 
        emoji='images/150/150cha_sukikai.bmp';}
    else if( text.includes('きでゲス') || text.includes( 'きでげす')){ 
        emoji='images/150/150cha_oiramo.bmp';}
    else if( text.includes('は一向に')){ 
        emoji='images/150/150baki_kamawan.bmp';}
    //// JOJO
    else if( text.includes('何をするだ')){ 
        emoji='images/150/150jojo_naniwosuru.bmp';}
    //// JOJO
    else if( text.includes('ロードーローラー')){ 
        emoji='images/150/150jojo_rod|| text.includes(|| text.includes(a.bmp';}
    else if( text.includes('野郎ぶ') || text.includes('郎オブ') || text.includes('野郎ブ') || text.includes('ヤローブ')){ 
        emoji='images/150/150comando_yaroof.gif';}
    else if( text.includes('別れです')){ 
        emoji='images/150/150kof_owakare.gif';}
    //// INM
    else if( text.includes('上半身に比べ') || text.includes('これマジ?') || text.includes( 'これマジ？') || 
        text.includes('半身') && includes('貧弱')) { 
        emoji='images/150/150kbtit.png';}
    else if( text.includes('やったぜ')){
        s = sel%2;
        if (s==0){
            emoji='images/150/150inm_oyaji.gif';}
        if (s==1){
            emoji ='images/150/150yattaze1.gif';}}
    
    else if( text.includes('知力2') || text.includes( '高原') || text.includes( '通打')){
        s = sel%3
        if (s==0){
            emoji='images/150/150lal_25.bmp';}        
        if (s==1){
            emoji='images/150/150lal_25_2.bmp';}        
        if (s==2){
            emoji='images/150/150lal_25_3.bmp';}  }      
    else if( text.includes('アイエエ') || text.includes( 'アイェェ') || text.includes( 'いいね？') || text.includes(
          'インガオホ') || text.includes( '欺瞞') || text.includes( '古事記') || text.includes(
          'コワイ！') || text.includes( 'サツバツ') || text.includes( 'サヨナラ') || text.includes(
          '実際大事') || text.includes( 'スリケン') || text.includes( 'ドーモ') || text.includes(
          'ワザマエ') || text.includes( '南無阿弥') || text.includes( '爆発四散') || 
          text.includes('実際安い') || text.includes( '実際こわい') || text.includes( '実際すごい')){ 
        emoji='images/150/150ninsatu.bmp';}
    // syamu
    else if( text.includes('けどね') && includes('初見さん')){ 
        emoji = 'images/150/150syamu1.bmp';}
    // syamu
    else if( text.includes('ぃぃぃっす') || text.includes( 'ぃぃぃす') || text.includes( 'ィィィッス')){
        emoji = 'images/150/150syamu_ois.bmp';}
    // syamu
    else if( text.includes('ってY')){
        emoji = 'images/150/150syamu_ois.bmp';}
    else if( text.includes('ファッ！') || text.includes( 'ファ！') || text.includes(
         'ファッ!') || text.includes( 'ファ!')){
        emoji='images/150/150knn_fa.gif';}
        //emoji='images/150/150knn_suzukifuku.bmp';}
    else if( text.includes('ウメハラが') || text.includes('画面はし') || text.includes('画面恥') || text.includes('画面端')){
        emoji='images/150/150umehara.bmp';}
    else if( text.includes('クリスマスも平和だった')){
        emoji='images/150/150cookie_azs_heiwa.bmp';}
    else if( text.includes('平和') && includes('何言ってん')){
        emoji='images/150/150cookie_knn_heiwa'}
    else if( text.includes('ワイトも')){
        emoji='images/150/150waito.gif';}
    else if( text.includes('勝ち取りたい') || text.includes( '勝ちとりたい') || text.includes( 'かちとりたい')){
        emoji='images/150/150|| text.includes(uga_kachit|| text.includes(itai.gif';}
    else if( text.includes('い考えがある')){
        emoji='images/150/150watashiniiikangae.bmp';}
    else if( text.includes('コブラ') || text.includes( 'ヒューッ') || text.includes('孤独なシルエット')){
        emoji='images/150/150cobra.gif';}
    else if( text.includes('わかるマン') || text.includes( 'くっそかわいい')){
        emoji='images/150/150wakaruman.bmp';}
    else if( text.includes('に気を付けよう')){
        emoji='images/150/150yusaku_kiwoduke.gif';}
    else if( text.includes('俺の歌を') || text.includes( 'オレの歌を') || text.includes('おれの歌を')){
        emoji='images/150/150basara_|| text.includes(e_no_uta.png';}
    else if((text.includes('しかも') && includes('コントロール')) || text.includes( 
        '怖がろう') || text.includes('恐がろう')){
        emoji='images/150/150gundam_f91_tekkamen.jpg';}
    else if( text.includes('邪神アドル')){
        emoji='images/150/150adol_ys.jpg';}
    else if( text.includes('シャア') && includes('アムロ')){
        emoji='images/150/150gundam_char_amuro.gif';}
    else if(text.includes('やってんだ') && includes('あいつら')){
        emoji='images/150/150snj_nani_yatten_da.gif';}
        //SRW
    else if( text.includes('グレンキャノンもだ') || text.includes( 'カーシャに') ){
        emoji='images/150/150srw_gurenkyanon.bmp';}
    //SRW
    else if( text.includes('お姉さま') && includes('を使うわ')){
        emoji='images/150/150gunbuster_arewotukauwa.bmp';}
    //SRW
    else if( text.includes('よくってよ')){
        emoji='images/150/150gunbuster_yokuteyo.bmp';}
    else if( text.includes('気にすることはない')){
        emoji='images/150/150tod_nani_kinisuru.jpg';}
    else if( text.includes('冗談じゃねぇ・') || text.includes( '冗談じゃねぇ.')){
        emoji='images/150/150jodanjane.bmp';}
    else if( text.includes('お許しく')){
        emoji='images/150/150cha_oyurushi.gif';}
    else if( text.includes('赤く塗ら')){
        emoji='images/150/150museru_jodandayo.bmp';}
    else if( text.includes('塗りたいのか')){
        emoji='images/150/150museru_kisamanuritainoka.bmp';}
    else if( text.includes('むせる')){
        emoji='images/150/150museru.bmp';}
    else if( text.includes('の魂') &&( text.includes('賭け') || text.includes( 'かけ') )){
        emoji='images/150/150jojo_kakyoin_no_tamashi.bmp';}
    else if( text.includes('まぶしっ') || text.includes( 'まぶしッ')){
        emoji='images/150/150gundo_mabushi.bmp';}
    else if( text.includes('GUN道') || text.includes( '陰陽弾')){
        emoji='images/150/150gundo.gif';}
    else if( text.includes('をやめろるぞ') || text.includes( 'ジョジョ！') || text.includes( 'ジョジョー！')){
        emoji='images/150/150jojo_ningen_wo_yameruzo.bmp';}
    else if( text.includes('ぞ') && includes('ジョジョ')){
        emoji='images/150/150jojo_ningen_wo_yameruzo.bmp';}
    else if( text.includes('人分になる') ){
        emoji='images/150/150hxh_3nin_bun.png';}
    else if( text.includes('人間でたくさんだ')){
        emoji='images/150/150guncross_ningen_de_takusan.bmp';}
    else if( text.includes('にゅう！') || text.includes( 'くりぃむしちゅー池田')){
        emoji='images/150/150aniki_nyuu.png';}
    else if( text.includes('は悪くねぇ')){
        emoji = 'images/150/150tales_|| text.includes(ehawarukune.bmp';}
    else if( text.includes('いいですとも')){
        emoji ='images/150/150ff4_iidesudomo.bmp';}
    else if( text.includes('パワーを') && includes('じゃ')){
        emoji ='images/150/150ff4_imaja.bmp';}
    else if( text.includes('黒マテ')){ 
        emoji='images/150/150ff7_kukuku.bmp';}
    else if( text.includes('に名乗る名') && includes('ない')){
        emoji='images/150/150rom_kisama_ni_nan|| text.includes(u.gif';}
    else if( text.includes('は強敵でしたね')){
        emoji='images/150/150srw_kyouteki.bmp';}
    else if( text.includes('は強敵でしたね')){
        emoji='images/150/150srw_kyouteki.bmp';}
    else if( text.includes('腕にシルバー')){
        emoji='images/150/150yugiou_atm.png';}
    else if( text.includes('Where Did You') || text.includes('where did you') || text.includes('どこで操縦を学')){
        emoji='images/150/150where_did.gif';}
    else if( text.includes('コンボイの謎')){
        emoji='images/150/150conboi.png';}
    else if( text.includes('カンガルーのように')){
        emoji='images/150/150nep_kangaru.jpg';}
    else if( text.includes('なぜ動かん') || text.includes('何故動かん')){
        emoji='images/150/150gundam_z_naze_ugokan.gif';}
    else if( text.includes('ぎ払え') || text.includes('なぎはらえ') || text.includes('焼き払え')){
        emoji='images/150/150yakiharae.png';}
    else if( text.includes('命は') && includes('捨てる')){
        emoji='images/150/150hokuto_toki.bmp';}
    else if( text.includes('有情破顔')){
        emoji='images/150/150hokuto_toki_ujo.gif';}
    else if( text.includes('待った！') || text.includes( '待った!') ){
        emoji='images/150/150saiban_matta.gif';}
    else if( text.includes('異議あり')){
        emoji='images/150/150saiban_igiari.gif';}
    else if( text.includes('うおお') || text.includes( 'く新しい') || text.includes('風雲拳') || text.includes('風雲黙')){
        emoji='images/150/150snk_fuun.gif';}
    else if( text.includes('鎌田さん') || text.includes('蟹にな') || text.includes( 'カニにな')){
        emoji='images/150/150aniki_gosaku.bmp';}
    else if( text.includes('シャオ') || text.includes( 'バグ昇竜') || text.includes( 'トベウリャ')){
        emoji='images/150/150hokuto_bug_sh|| text.includes(yu.gif';}
    else if( text.includes('わたしじゃない') || text.includes('私じゃない')){
        emoji='images/150/150knn_watashi.gif';}
    else if( text.includes('せやかて') || text.includes('もろたで工藤') || text.includes('せやろか工藤') || text.includes('せやけど工藤')){
        emoji='images/150/150conan_kudou.png';}
    else if( text.includes('草' == come)){
        sel = sel%2;

        if (sel==0){    
            emoji='images/150/150kusa.gif';}}

    else if( text.includes('ペロッ') || text.includes( '青酸カリ')){
        emoji='images/150/150conan_pero.bmp';}
    else if(text.includes('サソリは') || text.includes( '蠍は')&& text.includes('虫') || text.includes( '蟲')){
        sel = sel%2;
        if (sel==0){            
            emoji='images/150/150sas|| text.includes(i_ha_ii.jpg';}
        if (sel==1){
            emoji='images/150/150sas|| text.includes(i.jpg';}}
    else if( text.includes('ΩND')){
        emoji='images/150/150end.jpg';}
    else if( text.includes('ごーふぁい') || text.includes('ゴーファイ')){
        emoji='images/150/150go_fight.jpg';}
    else if( text.includes('ギャングダンス')){
        emoji='images/150/150jojo_dance.gif';}
    else if( text.includes('誰か説明してくれ')){
        emoji='images/150/150dareka_setumei.gif';}
    else if( text.includes('やったぁ') || text.includes('やったぜ4')){
        emoji='images/150/150eamoto.png';}
    else if( text.includes('レロレロ')){//JOJO
        emoji='images/150/150jojo_rero.gif';}
    else if( text.includes('最高にハイ')){//JOJO
        emoji='images/150/150jojo_saiko_ni_hai.gif';}
    else if(text.includes('ザ') && includes('ワールド') || text.includes('時間よ止まれ')){//JOJO
        emoji='images/150/150jojo_the_w|| text.includes(ld.gif';}
    else if(text.includes('には夢がある')){//JOJO
        emoji='images/150/150jojo_yumega_aru.gif';}
    else if(text.includes('WRYYY')){//JOJO
        emoji='images/150/150jojo_wryyyy.gif';}
    else if( text.includes('オラオラ')){
        sel = sel%4 //JOJO
        if (sel==0){
            emoji='images/150/150jojo_|| text.includes(a2.gif';}
        if (sel==1){
            emoji='images/150/150jojo_|| text.includes(a1.gif';}
        if (sel==2){
            emoji='images/150/150jojo_|| text.includes(a_ova.gif';}
        if (sel==3){
            emoji='images/150/150jojo_|| text.includes(a3.gif';}}
    else if( text.includes('無駄無駄')){
        sel = sel%3 //JOJO
        if (sel==0){
            emoji='images/150/150jojo_muda1.gif';}
        if (sel==1){
            emoji='images/150/150jojo_muda2.gif';}
        if (sel==2){
            emoji='images/150/150jojo_muda3.gif';}}
    else if( text.includes('エメラルドスプラッシュ') || text.includes('ハイエロファント')){
        sel = sel%3 //JOJO
        if (sel==0){
            emoji='images/150/150jojo_emerald_splash.gif';}
        if (sel==1){
            emoji='images/150/150jojo_emerald_splash2.png';}
        if (sel==2){
            emoji='images/150/150jojo_kakyoin.png';}}
    else if( text.includes('感じるんでした') || text.includes( '感じるでした')){
        emoji='images/150/150yusaku_kanjiru.bmp';}
    else if( text.includes('騙されないぞ') || text.includes( '騙されんぞ')){
        emoji='images/150/150beni_damasaren.bmp';}
    else if( text.includes('ハァイ') || text.includes( 'ハイ')&& text.includes('？') || text.includes( '?')){
        emoji='images/150/150beni_hi.bmp';}
    else if( text.includes('くるぞ') || text.includes( '来るぞ') && includes('遊')){
        emoji='images/150/150yugiou_kuruzo.bmp';}
    else if( text.includes('どうしてイレギュラ')){
        emoji='images/150/150x_dosideirregula.bmp';}
    else if( text.includes('DAAA')){
        emoji='images/150/150x_daaaa.bmp';}
    else if( text.includes('ンギモ')){
        emoji='images/150/150tdn_gimochi.bmp';}
    else if( text.includes('TDNは') || text.includes( '多田野') && includes('だった')){
        emoji='images/150/150tdn_ha.bmp';}
    else if( text.includes('回だよ')){
        emoji='images/150/150tnok_3.bmp';}
    else if( text.includes('出口らー') || text.includes( 'でぐちら')){
        s = sel%2;
        if (s==0){
            emoji='images/150/150biim_deguchira.bmp';}
        if (s==1){
            emoji='images/150/150biim_deguchira.gif';}}
    else if( text.includes('界王拳') || text.includes( '倍だ！')){
        emoji='images/150/150db_gaiou.gif';}
    else if( text.includes('やったね') && includes('ちゃん')){
        emoji='images/150/150yattane.bmp';}
    else if( text.includes('やったね') && includes('増えた')){
        emoji='images/150/150yattane.bmp';}
    
    else if( text.includes('やめないか')){
        emoji='images/150/150z_yamenaika.gif';}
    else if( text.includes('それ以上いけない') || text.includes( 'それ以上行けない')){
        emoji='images/150/150kodoku_s|| text.includes(eijo.bmp';}
    else if( text.includes('な挨拶')){
        emoji='images/150/150omanko.bmp';}
    else if( text.includes('ホイホイチャーハン')){
        emoji='images/150/150aniki_hoihoi.bmp';}
    else if( text.includes('最強') &&( text.includes('とんがり') || text.includes( 'トンガリ') )){
        emoji='images/150/150aniki_saikyo_kongari.bmp';}
    else if( text.includes('わび続け') || text.includes( '詫び続け') ){
        emoji='images/150/150lal_anoyode.bmp';}
    else if( text.includes('イキスギ') || text.includes( 'すぎぃ') ){
        //bmp
        //emoji='images/150/150yaju_ikisugi.bmp';}
        emoji='images/150/150inm_ikisugi.gif';}
    else if(text.includes('野田内') || text.includes('野　田') || text.includes('さぁ行こう') || text.includes( '銀の龍')){
        emoji='images/150/150inm_noda.gif';}
    else if(text.includes('誓って殺') || text.includes( 'ちかころ') || text.includes('誓殺') || text.includes(
        'ちかころ') || text.includes('チカコロ') || text.includes('誓頃') || text.includes('誓って頃')){
        emoji='images/150/150ryu_chikak|| text.includes(o.bmp';}
    else if( text.includes('茶でも') ){
        emoji='images/150/150jojo_abacha.bmp';}
    else if( text.includes('不幸にも') || text.includes( '突して') ){
        emoji='images/150/150inm_fukonimo.gif';}
    else if( text.includes('金田ぁ') || text.includes( '金田ァ') || text.includes('金田！')){
        emoji='images/150/150akira_kanedaa.gif';}
    else if( text.includes('さんをつけ') || text.includes( 'さんを付け') || text.includes('助野郎')){
        emoji='images/150/150akira_sanwo_tsukero.gif';}
    else if( text.includes('もえたろ') || text.includes('燃えたろ') || text.includes('え太郎') || text.includes('萌太郎')){
        s = sel%2;
        if (s==0){
            emoji='images/150/150kof_moetaro2.jpg';}
        if (s==1){
            emoji='images/150/150kof_moetaro.gif';}}
    else if( text.includes('なんだってー') ){
        s = sel%2;
        if (s==0){
            emoji='images/150/150mmr1.bmp';}
        if (s==1){
            emoji='images/150/150mmr2.bmp';}}
    else if( text.includes('する') && includes('人類は') ){
        emoji='images/150/150mmr3.bmp';}
    else if( text.includes('車種言え') || text.includes( 'や無理か') || text.includes('豚！') || text.includes('豚ァ') || text.includes(
        'あっこれか') || text.includes( 'あっ、これか')){
        emoji='images/150/150inm_higekuma.png';}
    
    else if( text.includes('だって') && includes('わからな') ){
        emoji='images/150/150mmr4.bmp';}
    else if( text.includes('チクッ') || text.includes('ビンビンビン') ){
        emoji='images/150/150yusaku_chiku.gif';}
    else if( text.includes('よろ色即是空') ){
        emoji='images/150/150iga_julius.bmp';}
    else if( text.includes('弱すぎ') &&(includes('マジ') || text.includes( 'ホッヒヒ') || text.includes( 'そういうゲー') || text.includes('弱すぎなんだけど'))){
        emoji='images/150/150sf3_hohihi.bmp';}
    else if( text.includes('しょうき') && (includes('おれは') || text.includes( 'は正気に戻った') )){
        emoji='images/150/150ff4_gari.bmp';}
    else if( text.includes('こころじゃよ') || text.includes('心じゃ') ){
        emoji='images/150/150lal_kok|| text.includes(o.bmp';}
    else if( text.includes('せっかくだから') || text.includes('やりやがったな') ){
        emoji='images/150/150eczn.gif';}
    else if( text.includes('デスクリムゾン')){
        emoji='images/150/150death_crimson.bmp';}
    else if( text.includes('アンノォ') || text.includes('これはいけない') || text.includes('お別れナリよ') || 
        text.includes('無法地帯じゃないの') || text.includes( '愛を') || text.includes( '出会いに感謝') || 
        text.includes('出感') || text.includes( '愛なき世界に') || text.includes( '核を') || text.includes( 'ですを')){
        emoji='images/150/150sonshi.bmp';}
    else if( text.includes('オイオイオイ') || text.includes('死ぬわ') ){
        emoji='images/150/150baki_oioioi.bmp';}
    else if( text.includes('遅すぎ') ){
        emoji='images/150/150patlabor_ososugi.gif';}
    else if( text.includes('be my') || text.includes('BE MY BABY') || text.includes('BEMYBABY') ){
        emoji='images/150/150bemybaby.gif';}
    else if( text.includes('バジリスク') ){
        emoji='images/150/150bajirisuku.gif';}
    else if( text.includes('b' == come )){
        emoji='images/150/150ryuga_b.gif';}
    else if( text.includes('暫烈拳') || text.includes('暫烈拳')){
        emoji='images/150/150snk_zanretsu_ken.gif';}
    else if( text.includes('バン！バン！バン！') || text.includes('パン！パン！') ){
        emoji='images/150/150gundam_char.gif';}
    
    else if( text.includes('コウだ') || text.includes('コウは') || text.includes('コウの') || text.includes('ウラキ')){
        emoji='images/150/150gundam_kou_uraki.gif';}
    else if(text.includes('回だよ') || text.includes('っぽくねぇな') || text.includes('ヨツンヴァ') || text.includes('力抜けよ')){
        emoji='images/150/150tnok_3.bmp';}
    // FTG
    else if(text.includes('が怖いのか') || text.includes('が恐いのか') || text.includes('見るたび思い出せ') || text.includes(
        'びは終わりだ') || text.includes('叫べ')){
        emoji='images/150/150kof95_i|| text.includes(i.png';}
   
    else if( text.includes('レイジングストーム') || text.includes( 'ングストーム')){
        emoji='images/150/150snk_geese_rs.gif';}
    // INM
    else if( text.includes('KBTIT') ){
        emoji='images/150/150kbtit.png';}
    // INM
    else if(text.includes('警察だ！') || text.includes( '警察だ!')){
        emoji='images/150/150keisatsu_da.gif';}
    // gundam
    else if((text.includes('サボテン') && includes('花'))||text.includes('そんな大人') && includes('修正')){
        emoji='images/150/150gundam_char_saboten.gif';}
    // gundam
    else if(text.includes('トゥ!') || text.includes( 'トゥ！') || text.includes('もうやめるんだ') || text.includes('モウヤメルン')){
        emoji='images/150/150seed_asuran.png';}
    // gundam
    else if( text.includes('宇宙の心')){    
        emoji='images/150/150gundam_w_uchu_no_kok|| text.includes(o.png';}
    // gundam
    else if( text.includes('まるんじゃねえぞ') || text.includes('キボウノ') || text.includes('希望の花')){    
        emoji='images/150/150|| text.includes(uga.gif';}
    // gundam
    else if( text.includes('お前を殺す') || text.includes('お前を頃す') || text.includes('おまえを殺す')){    
        emoji='images/150/150gundam_w_omae_wo_korosu.png';}
    // gundam
    else if( text.includes('ヒイロ')){    
        emoji='images/150/150gundam_w_heero.gif';}
    // VP
    else if( text.includes('評価に値しないわ') || text.includes( '評価にあたいしないわ') || text.includes( 'エーテルストライク')){    
        emoji='images/150/150vp_hyouka.png';}
    // VP
    else if( text.includes('知らぬものめ') || text.includes( '知らぬ者め') || text.includes( 'お江戸') || text.includes(
        'ボイドエク') || text.includes( 'タエエエ')) {
        emoji='images/150/150vp_kok|| text.includes(onoitami.bmp';}
    // VP
    else if( text.includes('見飽きたぜ')) {
        emoji='images/150/150vp_miakitaze.png';}
    else if( text.includes('その身に') || text.includes( 'ニーベルンヴァレスティ') || text.includes( 'ニーベルン・')) {
        emoji='images/150/150VP_vk.gif';}
    
    else if( text.includes('uadpoint')){    
        emoji='images/150/150kokoku.png';}
    else if( text.includes('キートン') || text.includes( '曲がってても') || text.includes('カーリマン') || 
        (text.includes('銃口') &&  includes('指'))|| 
        text.includes('犬は地上最強') || (text.includes('石') && includes('舐め'))|| 
        (text.includes('風') && includes('投石')) || 
        (text.includes('舌') && includes('犬'))|| 
        (text.includes('新聞紙') && includes('銃'))|| 
        (text.includes('砂漠') && includes('スーツ'))){    
        s = sel%2;
        if (s==0){
            emoji='images/150/150keaton1.bmp';}
        if (s==1){
            emoji='images/150/150keaton2.bmp';}
        }
    else if( text.includes('スパイダーマ') || text.includes( 'まーけたー') || text.includes(
         '地獄からの使者') || text.includes('情け無用の男') || text.includes(
         'キノコ狩りの男') || text.includes('退治の専門家') || text.includes(
         '不死身の男') || text.includes('不死身の男') || text.includes(
         'を流す男') || text.includes('格闘技世界チャンピオン') || text.includes(
         '泣く男') || text.includes('十字キラー')){
        s = sel%3
        if (s==1){
            emoji='images/150/150spiderman_siri.jpg';}
        if (s==0){
            emoji='images/150/150spiderman.gif';}
        if (s==2){
            emoji='images/150/150spiderman.gif';}
        }
    //// JOJO
    else if( text.includes('味だぜ')){    
        emoji='images/150/150jojo_usowo.gif';}
    else if( text.includes('情けないやつ！') || text.includes('情けない奴！') || text.includes('シャア！シ') ){    
        emoji='images/150/150gundam_char.gif';}
    else{

            if(1){
            choice = Math.floor(Math.random()*10)%10;
            if(choice==0){v='[SASARA]'; img = chrome.extension.getURL("images/talk230_sasara1.gif")} //talk230_sasara1
            else if(choice==1){v='[TUTUMI]';  img = chrome.extension.getURL("images/talk230_tutumi_1.gif")}
            else if(choice==2){v='[TAKAHASHI]';  img = chrome.extension.getURL("images/talk230_takahashi.gif")}//talk230_takahashi
            
            else if(choice==3){v='[ONE]';  img = chrome.extension.getURL("images/talk230_tutumi_1.gif")}
            
            else if(choice==4){v='[yukari]';  img = chrome.extension.getURL("images/talk230_yukari_on.gif")} //talk230_yukari_on
            
            else if(choice==5){v='[maki]'; img = chrome.extension.getURL("images/talk230_akane_1.gif")}
            else if(choice==6){v='[zunko]';  img = chrome.extension.getURL("images/talk230_aoi_1.gif")}

            else if(choice==7){v='[kiritan]';  img = chrome.extension.getURL("images/talk230_kiritan_1.gif")}  // talk230_kiritan_1
            else if(choice==8){v='[aoi]';  img = chrome.extension.getURL("images/talk230_aoi_1.gif")}
            else if(choice==9){v='[akane]'; img = chrome.extension.getURL("images/talk230_akane_1.gif")}

            emoji =img;
            }
    }


            img = emoji;
            img = chrome.extension.getURL(img);

            v=''; //////////////////////////////// cancel
        
        /*
        $('[class="chat-left js-chat_left"]>img').eq(i).attr('src',icon);
            $('[class="chat-left js-chat_left"]>img').eq(i).css({'width':'25','height':'25','z-index':'999',
            'border':'0.5px solid gray','border-radius':'5px'});

            $('[class="chat-left js-chat_left"]>img').eq(i).css({
        */

        style = 'width:45px;height:45px;border-radius:5px;border:2px solid gray;';
        //////////////////////////////////////////////////////////////////////////////////////////
        //document.title = text;
        document.title = text.replace(/,/g,"．").replace(/、/g,"．");
        $('.CommentInput-textarea').attr('placeholder',text);        
        
        if(text!=comp){

            $('<tr class="comerow"><td style="vertical-align: middle;"><img src="'+img+'"style="'+style+'"></td><td style="color:white">_</td><td style="vertical-align: middle;"><h1 id="hcome">'+' '+text+'</h1></td></tr>').prependTo('[class="CommentPanelContainer is-hiddenMiniBanner"]');
            $('<h4 style="color:gray;opacity:0.5" id="hcome">―――――――――――――――――――――――</h4>').prependTo('[class="CommentPanelContainer is-hiddenMiniBanner"]');
            comp = text;

            if($('h1').length>17){
            $('.comerow').last().remove();
            $('h4').last().remove();
            }
        }
        
        //document.title =$('.CommentPanelDataGrid-cell').length;
        
        //for(var i=st;i<$('.CommentPanelDataGrid-cell').length;i++){


        
        //console.log($('.PlayTimeFormatter.PlayerPlayTime-playtime').text());   //playtime
    },wait);
    });
    // ------------------------------------------------------------------------ End of Interval
    /*
    $('<a id="savefile" >').appendTo('body');
    var file = new Blob([ $('.CommentPanelDataGrid-cell').eq(i).parent().parent().children().eq(0).text() ],{type:'text/plain'});
    $('#savefile').attr('href',URL.createObjectURL(file));
    $('#savefile').attr('download','come' );
   */
    


    $('#yomiage').trigger('click');

    if (url.includes("sp.")){
        $('html, body').animate({scrollTop:($(document).height())}, 'slow');
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }
//var elems = document.querySelectorAll('.video-item-container');
setTimeout(function(){
if(fulls==0){
$('.EnableFullScreenButton').trigger('click');//>fullscreen
}   },1000);

//var url  = 'https://docs.google.com/spreadsheets/d/16KGGKMAabBOGpyzI-FXUVS_RdGV4z8uE2z_1ZkUwSpI/edit#gid=0';
var url = "https://anotepad.com/notes/5wxm94";


//$('button[data-title*="とりあえずマイリスト"]').clone().prependTo('.ControllerContainer-area');
//$('button[data-title*="とりあえずマイリスト"]').clone().prependTo('.VideoMenuContainer-areaLeft');


$('.account> a').remove();//pc
$('.premiumAdvice').remove();//pc
$('.Marquee').remove();//pc
$('.___banner-panel___XbLIX ___ga-ns-banner-panel___3bb4p').remove();//pc
$('.___close-button___1AMBC').trigger('click');

$('.btnOrange').remove();
$('.premium').remove();
$('.GridCell.BottomSideContainer').remove();



var playpause = 0;

$('.VideoStartButtonContainer').trigger('click');
 
$('#VideoSymbolContainer-canvas, .VideoSymbolContainer-canvas').click(function(){
    if(playpause==0){
        playpause=(playpause+1)%2;
        $('.PlayerPauseButton').trigger('click');
    }else{
        playpause=(playpause+1)%2;
        $('.PlayerPlayButton').trigger('click');
    }
})


//$('.video-item-container').attr('style','padding-bottom:0');

$('.siteWide-CommonHeader_Bar').css('height','50%');

setTimeout(function(){
$('.video-item-container').css('padding-bottom',0);
},1000);
//$('.video-item-container').css('background-color','blue');

var string = '<input id="blist" type="button" value="Block List" >';
var string2 = '<input id="block_items" type="button" value="Block Items" >';
var string3 = '<input id="block_items_default" type="button" value="Block Items default" >';

$(string).appendTo($(".siteWide-CommonHeader_Bar"));
$(string2).appendTo($(".siteWide-CommonHeader_Bar"));
$(string3).appendTo($(".siteWide-CommonHeader_Bar"));

$('#blist').click(function(){

        window.open('https://anotepad.com/notes/5wxm94', "window" , 
            'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width='+$(window).height()/7+',height='+$(window).height()+',left='+$(window).width()*1.2+',top='+$(window).height()/7+'');
            //window.moveTo(20, 1000);



        $('.video-item-title').click( function(e) {
            e.preventDefault(); 
            
            //var c = $('.video-item-container').text();
            //var c = $(this).html();
            //c.select();
            //alert(c);
            //copyToClipboard($(this));
            var c = $(this).html().split('%')[0];
            var $temp = $("<input>");
            $(this).append($temp);
            $temp.val(',"'+c+'"').select();
            document.execCommand("copy");
            $temp.remove();


            return false;
             } );

    });


$('div:contains("さらに読み")').trigger('click');


setTimeout(function(){
$('div:contains("さらに読み")').trigger('click');
},1000);

$('#block_items').click(function(){

    for (var i = 0 ; i < $('.video-item-area').length; i++) {
    var vid = $('.video-item-area').eq(i).attr('href').split('watch/')[1].split('?')[0];
    $('.video-item-area').eq(i).attr('href', 'https://www.nicovideo.jp/watch/'+vid);
                    }

    for (var y = 0 ; y < $('#jsVideoList>li>a').length; y++) {
    var vid = $('#jsVideoList>li>a').eq(y).attr('href').split('watch/')[1];//.split('?i=')[1].split('.')[0];
    $('#jsVideoList>li>a').eq(y).attr('href', 'https://www.nicovideo.jp/watch/'+vid);
                    }

    $('#jsVideoList>li>a').attr('target','_blank');
    $('.video-item-container>a').attr('target','_blank');


    $('.video-item-title').click( function(e) {
            e.preventDefault(); 
            
            //var c = $('.video-item-container').text();
            //var c = $(this).html();
            //c.select();
            //alert(c);
            //copyToClipboard($(this));
            var c = $(this).html().split('%')[0];
            var $temp = $("<input>");
            $(this).append($temp);
            $temp.val(',"'+c+'"').select();
            document.execCommand("copy");
            $temp.remove();


            return false;
             } );


    //---------------------------------------------
    navigator.clipboard.readText().then(  function(data){ //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    if(data.includes(']')&&data.includes('[')&&data.includes('"')){

        data = data.split('nnnn')[1];
        data = data.split('nnnn')[0];
        
        while(data.includes('&quot;')){
            data = data.replace('&quot;','"');    
        }

        while(data.includes('&#39;')){
            data = data.replace('&#39;',"'");
        }
        while(data.includes('<br>')){
            data = data.replace('<br>','');
        }
        while(data.includes('amp;')){
            data = data.replace('amp;','');
        }  

        block_list = JSON.parse(data);

        var length = block_list.length;


        for (var index = 0 ; index < length; index++) {
            var name = '.video-item-container:contains("'+block_list[index]+'")';

            $(name).remove();  
        }
    }});

});

$('#block_items_default').click(function(){

        block_list = [      // niconico nnnn
"バイオハザードRE","【けもフレ2】きゃくほんかのセリフ！から見える虚無回の理由【11話】","【RTA】海腹川背Fresh! 体験版 15:56","【RTA】還願 DEVOTION 1:10:01:33 part","【ROA】全力の早口でオ●ニーレビューしてみた","【AREA4643】","DEAD OR ALIVE6　 動画勢・体験版勢になるためのゆっくり解説","オウガバトル64　RTA","【SofTalk解説】3分でわかる特性図(ダイオード)","鬼忍降魔録 ONI  RTA"
,"DOA6 強","【はじめの一歩２】筋力０からヘビー級王者を目指す 第８回","【けものフレンズ2】11話について駄目だと思ったところを挙げてみる 前編【感想動画】","ロックマンゼロ３　全シークレットディスク取得＆Sランククリア　part","【A4】熊さん","じゅうべえくえすとで","ヤ　ジ　ュ　ー　パ　ー　ク","ぷよぷよ通神社.magicalstone","野獣先輩に見えるもので代用したインタビュー","大物Youtubeｒ【しーくる】久しぶりにボーリングやってみた【実写】","新サクラ大戦を宣伝するKBTIT先生","寺田心","素材用ニコニコ本社爆発.unei","いんばすチャンネル3",".pawapuro","ネオマゼンタVSネオシアン","MADO GEAR ITTE SHICORE MZ","しにがみと化した死相姉貴.DQ","アトミックバズーカ師匠R.400g","キラチケがぐるぐるしてい","amber.zip","ホモと見る陰謀論者【VOICEROID解説】","まずうちさぁ　エアホッケーあるんだけどやってかない？","くさい臭いの虜になってしまったシャムさん","ぶいクンのヴァーチャルブイセン","ホモと見る告予回次","【ゆっくり実況】ストZERO3殺意の波動に目覚めたリュウZ-ISM","【ゆっくり実況プレイ】ツインエンジェル","【RTA】息抜駄ゲ四本目「The Last Hope」54:17 エジプト～エンディング【51円】","チャレンジ１ねんせいで問題のBGM.mp4","ﾌﾞﾝﾒｲﾊｻｹﾗﾚﾅｲﾉｶ!!","♠️運命❤️","PHASE06","止めるマンBB","2019年2月18日 岩間邸に行ったら好一に洗濯をされてしまいました","泉南ギャラクティカ","「糞」と少年の戦い.mp4","水を放出するKNN姉貴.mp4","[ゆっくり]　けものフレンズ２が楽しい理由　[考察]","HMS","新元号を発表する野獣先輩","【ポプテピピック】OP曲を某SideMの方々に歌っていただいた","新元号を発表するNYN姉貴","新元号についてKNN姉貴からお気持ち表明.reiwa","元号レイプ！新元号を公表する先輩","【戦艦少女R】","【RoR2】","仙界異聞録 準提大戦 ～TVアニメーション「仙界伝封神演義」より","【TAS】5メガトンコイン","ウイニングポスト９を何も考えずにプレイ","syamu_game令和説","私の変わった趣味☆","厳選！！！二次元おっぱい画像集！！","なんJ民、大沢たかおさんにキレる","令和先輩","高校三留年の可能性を","野獣先輩令和説.reiwa","パワプロク","ホモと見るメロン.tktr","キュルルから新元号発表されるゴマすりクソバード","蠍媛死にました","【朗報】けもフレ１期を制作したヤオヨロズによる、けものフレンズの新作プロジェクト始動！！","ジョーカーさん","ハーミーズちゃん","令和のピンボール","【けものフレンズR支援曲】夜話","迫真錬金術部・公認","食事処デカスギ","【ゆっくり】金時山攻略RTA（1:32:24)","【再走】太鼓の達人一クレRTA＿1:53.33","鬼庭形部雅孝が北の不死院を攻略するなり【ダークソウルR】","金！暴力！Apex！初","【ボイスロイド実況】初代DMC DMD LDK any","ぐるぐる騎士","【ＷＲ】Elebits(エレビッツ) any","【はじめの一歩２】筋力０からヘビー級王者を目指す 第９回","【fallout4】マイアラーククイーン討伐RTA","敵方に電話させてもらうね.mp","（ゆっくり実況）ロックマンXアニバーサリーコレクション　Xチャレンジ　ステージ1　RTA　9：51","あかりちゃんのPapers,PleaseRTAもどき3分34秒49","【けものフレンズ2】ただの僕語りです【ゆっくり】","ホモと見るけものフレンズ２","けものフレンズ2　ついに完全勝利をした","【本家声優版】 ラ ン ボ ー ピ ピ ッ ク 【羽佐間道夫＆ささきいさお】","地上最強を目指す先輩","地獄","元号を発表する死相姉貴.H31-3","【けもフレ2】最終話を見て","【中華】BBクッキー☆劇場リレー合作","さ　か　な　地　獄","DIYUSI物語","ホモと学ぶホモ","肝臓レ○プ！　飲酒の裏技（バーボン）14","ホモと見る作者の性的嗜好が露骨に表れているアニメOP集.onanie","対潜神社.passive_sonar","ミ　ラ　ー　ジ　ュ　田　所　イ　ド","ゆゆうたの弾き語りを激唱するアメリカ人 mp U. S. A","歩くHSK姉貴GB","怒りに打ち震える先輩BB","【ポプテピピック】サムネ通りに歌ってみた。ver.ねいと","疲れた","【UC】公式生放送終了後アンケート比較　遊戯王ARC-V＆けものフレンズ２","おおいなるきょうこく☆.Xatu","時をさまよう先輩 第１話","彼岸帰航アイキャッチ神社.shisou","バラマき男優NKTデカスギー","幽霊さん","新ホラホラLMINU","ホモと見る山田香織（りおんファンタジー）入門","ガチマするわよ","恵方MKMK姉貴BB","CM☆","4つに解れて4人","【けものフレンズ2】12話の感想と自分語り【ゆっくり】","格ゲー大好き茜ちゃんと競う『キャサリン・フルボディ』 【VOICEROID紹介動画】","シャニマス","イキスギイレブンGO is GOD.","役割分担して声優を監視することにしたCTV☆民","ノムリッシュヒゲポテトサイボーグ.henshinsound","【パトルの軍事博物館RTA】パト博ノルマンディー上陸作戦RTA","コノウタFF外からシツレイヒ","ホモと見る京アニOP集","大物youtuber　【hole.io】ホリオハイスコア【Part.2】","マフィンソング小麦粉.asdf",".R6S","日本の伝統武術 根来体出粕義流には ネクタイがデカく見える技がある【ネクデカの泉】","Balloons☆","Onii-san☆.mustdie","【ゆっくり】ＴＦスタジオシリーズよりオプティマスプライム(リベンジ版)を紹介【ＴＦ玩具】","シルバーサーファッ！？.wav","【けもフレ2炎上問題】細谷P＝氷村ふぁねる確定か？","コックピットでインタビューを受ける先輩","ビデオに出たでしょ？","【けもフレ2炎上問題】けものフレンズのファンサイトが","ホモと見る神回","ホモと見るJKの生態","ひでと間違えて野獣先輩を拉致するおじさん","ホモと見る中国の淫夢動画 Part1 .bilibili","３才５カ月の息子がDy_Bay_Dyを踊ってみた！","決戦！NYN姉貴","けもフレ2に怒った人たちま","誹謗中傷複アカ＆条例違反疑惑コンテンツ殺しおじさん.RIP","中国の淫夢動画 Part2 .bilibili","ホモと見る【なんJ公認 野球アニメ】.hachinine",".EP","土方KING","OOESNR 音声素材配布","未来変態 大ム便ジャー",".sp0","近藤妙子","らりるれｱｰｲｷｿ","ホモと見る最初は期待してなかったけど予想以上に面白かったアニメOP集","すろぉもぉしょん☆","ホモと見るガールズバンドの闇.soiya","迫真解体部 レッキング狂う裏ワザ","完全ｵｰｶﾞﾆｯｸな雄汁を飲んで体造り.格闘技板","捜査官SZ姉貴の思惑","完全勝利したユニコーンガンダムBB.atamadake","壱撃忍殺","ゲーム部","FX福島","ジャンボNKTIのワンポイントレッスン","【ボツBB劇場】「DIYUSIの旅","入国審査官DIYUS","グラップラー栞奈",".IYCH","久しぶりに踊ってみた？","【狙われたのはあの女性声優…】ホモと見る山田香織","ホモと見るガチ厳選されなかったけど好きなOP・ED集",".SSBU","【Switch】スーパーリアル麻雀P","DMC5","閃乱カグラ ESTIVA","【SDVX】恥と","【解説付】ヲタ芸","【ゆっくり実況】隻","タイタスデスマッチ","【ランス10】","【RTA】チーズオムレツ【たまご3個】","ゲーム探訪フリーダム④","RTA ラップ登山アタック 男抱山・女抱山","【ToS】Tree ","【Devil May Cry 5】","【FC】天地を喰らう１　2:35:20 ニコ生RTA　p","アーマード・コア３サイレン","【ゆっくり】ＴＦシージよりハウンドを紹介【ＴＦ玩具】","AKenYShi.mp4","ネクタイのさだめ","たつき信者ｗｗｗと見るケロロ軍曹神回","ブラックシティ（レスリングシリーズ）","遡りの神社.nostalgic_soundtrack","【合作】繰り返される戦い","史上初となるブラックホールの画像","向島警察署コラボ(2017年5月)","【５】","【けものフレンズ2】中立まとめサイトDdos攻撃+呼び出しを受ける","死相姉貴とBB劇場でよく競演しているアイツGB","洗いたてのシャツ中毒","冥府エルフ","迫真876部","東方永夜抄で発生した頭おかしなるバグ","プリチャンプレイ！　アイドルと","金　玉.universe",".toon","ジュエルのパワーを下さい","ガ チ ム チ パ ン テ レ ス リ ン グ","ファイナルファイト　最高難易度市長RTA_19分52秒","【これが最強の】 PS2 浜崎あゆみ A VISUAL MIX 51:06","【ゆっくり】ＴＦスタジオシリーズよりオプティマスプライム(バンブルビー版)を紹介【ＴＦ玩具】","【SEKIRO】","キュルカスの本音【けものフレンズ2】","【ダラ外】コーザー様討伐RTA 16分7秒【WR】",".hunt","けものフレンズ2を取り巻く「他作品への恫喝」と「落とし前」についてワイトも思います","山田香織","死を司る神と化した死相姉貴GB.death","お前ごときが榊遊矢に勝てると思うなBB.2m42s","ジュネスレ〇プ！番長と化した先","アクアカス★","バエル強化パッチPB＋使用例","ハクシンクリード４ ぶっちっぱ","【ででーん】H31.3.13.の出来事","誰？かが土から生えてくるんだ","ホモと見るアニアフレンズ","SEKIRO","アンチ・ビストロン☆.hp","【CeVIO RTA】Metr","【感想動画】けものフレンズ２","【これは】 PS2 浜崎あゆみ A VISU","ミスタードリラーグレート　PS版シナリオモードRTA　50分以内？前編","ノムリッシュ歌う野獣先輩.dinmknkk","【第一回自転車動画祭】京都 ユイの壁チャレンジ","惑星探査部_企業間戦争の裏技","おもいではぜっろせんまん(Versionｼｬﾑ）","[体験版公開中]自作ゲームを販売したい part23[VOICEROID解説]","【ＲＴＡ】 Alien:Isolation 4時間26分22秒 Part1","【ゆっくり解説】ハチナイのアニメを布教する動画","アズレンベイベー","ホモと見るスマホ太郎 は？シーン集","純心レイプ！またも","ゾンビがショタをレイプ！サバイバーと化したひで pa","ジョルノっぽくワザップのコメントを読んでみた","ホモと見るオレ的ゲーム速報の凍結.jin","まずうちさぁ　運動会あるんだけどやってかない？","プリGB","ホモと見る足コキ","糞！変態華","迫真ヒルクライム部","らっこが行くキャンプ1幕目　春のお花見ソロキャン　前編","【RTA】DARK FORCE 1:42:29 Pa","【自転車載】酔う夢とイタコときりたんと_0.1周目【ゆっくりボイロ実況】","Not Tetris ","【ゆっくり】蛭ケ岳山頂攻略RTA大倉ルート3:54:26","【RTA リアル登山アタック】三重県竜ヶ岳中道ルート～滋賀県静ヶ岳縦走 02:32:24　","【けものフレンズ2炎上問題】","世界を売った男",".agiomega","柴又.bpm180","アズレン","【ダークソウルリマスター】ホストレ○プ！侵入霊と化","二刀流でア・ソ・ボ","ゆっくりゴマすりがKFPのtwitterの使い方に怒るようです","あの日見た花の名前を僕達はまだ知らないです。","アオカンライン.","ホモと見るムーンガンダム.amx-123x-x","ホモとみるオレてきにめっちゃとカッコイイとおも",".Asari","死相しにそう失踪しそジュース.GB","私はクトゥルフハンターじゃないぜ？","例のアレ戦争 -終- DISC-１","ネクロファンタジア神社","コーヒーギフトはAGN","ボルテックフィニッシュ先輩","アギオメガ","【FC】ドラクエ3","東方妖々夢Ｌｕｎａｔｉｃ咲夜Bスコアアタック","【ゆっくり実況】パラケルスス","初代ぷよぷよ（SEGA AGES版）　RTA　9分2秒","イースV RTA any","コーヒーバード","今日も行きてえなあどっか、配信しに.1.0.mp4","新元号を発表するRIくんBB+おまけ","新紙幣先輩","【特報】ブレン4 ",".zengo","迫真ベルゼブ部","ホモと見るホモ","は？スパーク・マンドリラーの音楽編（69マンＳＥエックス　ゼＥＲＯ）","ホモと見る主人公の相方の最強形態.partner","AKenYShi.mp","龍騎","ちょっと9当たんよ～(警告)",".xvm-","ホモと見る野獣先輩と化したスイス人","ノムリッシュ翻訳ゥ！！","九口shaco","ノムリッシュ星空.flv feat.島村卯月（183）","ホモとみるAGIT","ホモと聞く我が魔王のOP.full","たつき信者","いつでも、ふぅ。AGN","さくら兵団　Vステ駐屯","【ガチ厳選】俺がシコりかけたフレンズ集","デルタギア","過去のたつき監督の作品とイエイヌの関係性","ラチェット＆クランク2解説実況Part","　",".W-5","OTK","ゼロリアンのテーマ","高2留","大物YouTubeｒ おすすめ映画深く語る [映画レヴュー]","異世界おるてっと 第1話 「集結！おるてっと」","【声真似】「【悲報】 ワザップの嘘技に騙された","日本最大ネトゲの闇","あた～まム～クム～クムゥ＾～ク～ムクゥ＾～","野獣先輩呼吸音集","【クッキー☆人狼】 ひとくちげっか☆Case6","本読み妖怪と小悪魔のＲＰＧの進捗紹介.VXA","（ゆっくり実況）バイオハザード H","【結月ゆかり】初代ぷよぷよ RTA 8分17秒","青鬼","過去のたつき監督の作品とイエイヌの関係性","【ライチリキュール編】東北きりたんと多分10分で分かる楽しい宅飲み","ラチェット＆クランク2解説実況P","遊☆戯☆王 モンスターカプセルGB R","世にも奇妙な神社","カツドン第２期まとめ そ","迫真ハース部","ホモと見るVRキノピオくん.nippendo","チェストブレイク","怪談話","【RTA】秘湯！海別岳温泉入浴 5:55:08 (中編)","【ＲＴＡ】 Alien:Isolation 4時間26分22秒 Part2","【ゆっくり実況】イエイヌちゃんとアライ","ＳＷＫ様の信仰RPG","限定新田美波に挑んだ野獣先輩","ホモと見るオープンワールドの裏側","6面道中神社.th114514","本田とじゃんけん.GB","で、出ますよ（ペルソナ）ブチッ！パ！ 誰？","国民的アニメで問題のBGMが流れ困惑する視聴者","ジ ュ ッ セ ン パ イ ア ・ キ ラ ー.","ホモと学ぶネコ","けものフレンズプロジェクト、新しい血族の陰謀説",".sP5","ステージと化した先輩","ドン！(大王).","待機音","ささら耐久テスト"," ワザップ",".sp","RRMで覚ろう 淫語呂イド ~元素記号編~","ピッチング先輩ステージ","ペニーワイズがリセット前の栄誉集めをおすすめするようです","ホモと見るガチ厳選したOP・ED集","オレ～の勝～ち勝～ち勝＾～ち～勝ち＾～","HND△とジャンケンするTNOK","3...2...1...9♡…9♡♡…9♡♡♡ Vol.4","負けを宣告した相手が一瞬の隙に市長になって困惑する本田圭佑","そうかなぁ・・・？（懐疑心）","天国の塔RTA","【ゆっくり実況】DEAD O","【ゆっくり実況プレイ】CS版 初代Danc","次回予告","ホモと見る○○さんは××系アニメOP集","一般通過Gメカ.mp4","ホモと見るワニのBBQ","ホモと見る電気鼠映画予告集","春よ、座談会来ない？","HND△とジャンケンするTNOK","ホモと見るスーパー","ホモと見るガンオン番外編ガンオンファイトRUSH.sonoyon","いんゆめ .stage","3...2...1...9","PSYCHO-PASS","迫真爬虫類工作部創造の","あの人気Vtuberの未公開動画が流出","出  張  料  理  人  ゲ  ム  ヲ.","わしも（53）","本田とじゃんけん 全パターン集.honda","ピッチング先輩 .stage","ガッツリフェラBNKRG姉貴.KRYMHDK","【BB】 模擬","【インド】アンダマン諸島ハブロック島ダイビング動画【ダイビング】","ボンバーガール","【京町セイカRTA】横浜市・フランス山登頂攻略RTA 0：06：06","神楽黎明記～莉音の","ホモと見るワイルドkアームズ必殺技集.kusoge","【ロマサガ3】究極の裏技『バグ術技付加法』で最強","ニワトリ飼いたい。【Bomb Chicken】ゆっくり実況","死相姉貴に触手責めされるしりり兄貴GB","迫真MHFZ部","裏S区の住人だった先輩","新約葬式神社.ginger"
];

        var length = block_list.length;

        setInterval(function(){

        $('.video-item-area[href*="sm35223236"]').remove();
        $('.video-item-area[href*="sm35162516"]').remove();
        $('.video-item-area[href*="sm35220226"]').remove();
        $('.video-item-area[href*="sm35219735"]').remove();
        $('.video-item-area[href*="sm29771814"]').remove();
        $('.video-item-area[href*="sm35230516"]').remove();
        $('.video-item-area[href*="sm35014686"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        $('.video-item-area[href*="aaaaaaaaaa"]').remove();
        //$('.video-item-area[href*=""]').remove();
        $('.video-item-area[href*="https://www.nicovideo.jp/watch/sm29771814"]').remove();
        
        for (var index = 0 ; index < length; index++) {
            var name = '.video-item-container:contains("'+block_list[index]+'")';

            $(name).remove();  
        }

        },3000);

        
    if(typeof done ==='undefined'){
    var done = new Audio( chrome.extension.getURL("sfx/diablo2/-----gold.wav") );
    }

    done.volume = 0.3;
    done.play();

});


setTimeout(function(){
$('#block_items').trigger('click');
$('#block_items_default').trigger('click');

},2000);


        
        $('body').attr('style','background-color:#ededed');
        $('.video-item-container').attr('style','background-color:#eaeaea');


        //eval(new array(data));        
        
        //alert(data);
         


    $('.video-item-area').attr('target','_blank');


}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("live.fc2.com")){
    
    //$('.l-cont_view').hide();
    //$('.m-hder-ni.js-head').hide();
    icon_jojo =[
        '3plova.jpg',
'3plsadsad.png',
'3pltregtreg.jpg',
'3PO.jpg',
'4k.jpg',
'4K099fa.jpg',
'4krasdsad.jpg',
'4krq.jpg',
'4ROHAN.jpg',
'4rohanjota.jpg',
'5B51d54d.jpg',
'5busadsad.jpg',
'5chok.jpg',
'5DOSADSAS.jpg',
'5dpasdasd.jpg',
'5jfsaf.jpg',
'5JOOW.jpg',
'5jteasad.jpg',
'5msadsad.jpg',
'5MSFSAF.jpg',
'5plsadsad.jpg',
'7dioasdsad.jpg',
'7diofdsf.jpg',
'7jjfasf.jpg',
'7jsadsa.jpg',
'7zaddsa.jpg',
'7ZPFASF.jpg',
'7zsad.jpg',
'7zsadas.jpg',
'71c6b6.jpg',
'3631_cooljotaro.png',
'5650_jojokay.png',
'ASF.jpg',
'b04938.jpg',
'bea69c.jpg',
'c0d8b1.jpg',
'DFDF.jpg',
'DSFAF.jpg',
'DSFAFSAF.jpg',
'DSFDSAF.jpg',
'DSFSF.jpg',
'DSGFSDG.jpg',
'fdf.jpg',
'INTSL_Joseph_nani.png',
'JotaroSweat.png',
'OHNOOOOOOOOO.png',
'REWRQR.jpg',
'SDFDSF.jpg',
'01fef6.jpg',
'2JCEASER.jpg',
'3.jpg',
'3AVDSAD.jpg',
'3FDSFDSF.jpg',
'3holh.jpg',
'3j3d.jpg',
'3JFDSAFDSF.jpg',
'3JOP.jpg',
'3JOSDA.jpg',
'3JSAFDSP.jpg',
'3JSESADSA.jpg',
'3JSFDSGFSA.jpg',
'3PO2.jpg',
'3jssadsad.png',
'3jtasd.jpg',
'3kafaf.jpg',
'3kagdsg.jpg',
'3kagret.jpg',
'3kaplasdsd.png',
'3karerore.jpg',
'3kasafsa.jpg',
'3plafssaf.jpg',
'5pesdsad.jpg',
'6jol.jpg',
'6jodsad.jpg',
'2kaasdsad.jpg',
'6jotasadsad.jpg',
'3ovakasdasd.jpg',
'1diosadas.jpg',
'3jocapcom.jpg',
'5buari.jpg',
'3kaovasda.jpg',
'5josaddsa.jpg',
'2acdcdfdsf.jpg',
'2josedsgfdg.jpg',
'5redsfds.jpg',
'3ovajo.jpg',
'4josdasad.jpg',
'5jbsdsad.jpg',
'6jo.jpg',
'5narasda.jpg',
'2josefdsf.jpg',
'3jtovasad.jpg',
'3kaasddsa.jpg',
'3jtasadsad.jpg',
'5abasadasd.jpg',
'7zsadsad.jpg',
'3jotasda.jpg',
'4josasd.jpg',
'1jona.jpg',
'5buc.jpg',
'3jotaacdc.jpg',
'3josedsfd.jpg',
'3josegfdgfd.jpg',
'3PO2.jpg',
'3plasdsa.jpg'

    ];
    
    //m-hder-ni js-head __web-inspector-hide-shortcut__

    $('.m-lbxLst-bnr').remove();

    $('.c-imgView-uName-101').click( function(e) {
    e.preventDefault(); 
    
    //var c = $('.video-item-container').text();
    var c = $(this).html();
    //c.select();
    //alert(c);

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val('"'+c+'",').select();
    document.execCommand("copy");
    $temp.remove();

    return false;
     } );


    var blist=[
    "邪神ちゃん","天草","しぃ子","FC2USER345910","まるも","緑麟","＠気分配信","さざなみ君","がっちゃん","笑夢","かしわの ゆき",
    "元祖やくたたずさすけ","ゆめちゃん","ゆずず","ハーミット@ハミTheブス","takayoshi","みーき","のりこれ","ななしてゃん","樺太強弱","さむらい",
    "⇔","妖怪めんこ","テツオ3341","一輝","お一人様","☆竹ちゃん","Haru★Haru","FC2USER251129","新ぽんたくん",'FC2USER205314',
    "ファンキキ","としっぺだよ♪","社会主義は勝利する","FUTEMAX1","EduElKhouri","FC2USER829272","もこもふ","umi",'乃木坂！？',
    "核のゴミ減らし隊","ruruち","前科３犯の精","マイケル","鬼塚たけし","えぐまっどねす","にゃーさん","なぁみん","memeどれ",
    "[Mist Night (Co_Ma)]","スターリン","ふらすとれんしゃん","もりお なぎさ","ショ夕コンくらげ","マミーポコパンツ。","－LEON－",
    "いもうと大好き！","黄金騎士","こあ","SCOTT。","FC2USER117302","お好み焼き","まっきー","撲殺ニンジン","Martin Garden",
    "CrossLockhart","♡わかばん","ひろみ先輩（パイセン）","juke","ゆーり","まりか","ぶらすとえびしゃ","yuna",
    "現首相は米国の","FC2USER462862","らむちゅーぶ",'蛇苺',"サッサ","佐藤琢磨が",
    "ダージリンちゃん","takasi23","talot","アウトドア大魔王","危ない講師","アポロx ポワロx ポアロ○","ﾇﾒﾇﾒさん","♡。.ありさ.。♡",
    "ballagucke","ごんざれす","FC2USER918586WVT","FM","ともぞう","漫画","たー爺","どらだもん","7star","元祖犯罪さすけ",
    "u-ichan","Haru★Haru","ゆみ","黒瀬ぼん","がっちゃん","せな","妖怪めんこ","ゆーくん","むーちょ","ルルたむ",
    "エロザブスなーやん","ぽぽろ。","FC2USER888449","ruruuu","plumpman","嗅嗅","鬼山田","ひなた","T子","雌犬と学ばないの",
    "おはる","ホタテ","live a wild life","リトル","いなご姫","クヮイ・シデン","さくはるぺい","廉-Ren-","げんじろう","*´ω｀*のり～",
    "みるく☆☆☆","きゃきゃ","茂平爺","純平","タケさん","優香（ぱんだ）","KMのゲーム放送","ミスター","堤竹日子","月－Yue－",
    "あおいろ！","のりのん","ゆうチャ","Sweetxbaby","T子","ぽぬちゃん(なおにゃん)","ニシモ","前科3犯で精","あたしちゃん",
    "niboshi2000","★からべる★","すんたま","くにや　","よこのこ","ポン助","ぎゃおすちゃん","団扇","すが","★圭吾★",
    "伝説の突撃一郎さん","狂犬yomuzou","カンパニー","ぽてんつ","ゆっきー","孤独ニート","ぴんきー","みあたんな",
    "美墨","おりもなき","☆よしのぶ☆","ゆいちゃん","chicktv","おら、うーたん","ロマーヌス","キジトラ隊長","FC2USER789531",
    "悠ki","栗勃","まーくん","グラビア","凄いぞ岩切","niko","Ronielle Fortune","monokuro","まう。","®","Jean-Marc",
    "FC2USER357588","Sport","キリコ","FutebolAOVIVO2","たべりずむ　","mannyjammy","masa☆","LIVE.ESPORTE.T","yyyyyyyyyy12",
    "ちょかゆさん",'騙された','何して遊びますかぁ','でで',"FC2USER267834","めりも","地球ちゃん","FC2USER530573",'もとちゃろ',
    "FC2USER862629","きょうかは情",'きなこ',"前科３犯",'斉木楠雄','楠',"KYO","Tachi-koma","FC2USER636143",
    "野球道","虎代理","フレップ・ザ・フ"  // やきゆ


    ];

    $('[class="c-bx01_lg1l fwbd"]>a').removeAttr('href');
    $('[class="c-bx01_lg1l fwbd"]').click(function(){
        navigator.clipboard.writeText('"'+$(this).text()+'",');    
    });
    
    $('a[aria-label*="thumbnail"]').attr('target','_blank');////////////////

    for(var y=0; y <blist.length; y++){
        //alert(blist[y]); 
        var select = '.liveBox:contains('+blist[y]+')';
        $(select).remove();
        

        //if( $('.c-imgView-uName-101').eq(i).includes(blist[y])  ){$('.c-imgView-uName-101').eq(i).remove()}  
    }
    
    
    $('#online_22357694').remove(); // special number remove
    $('#online_38182238').remove(); // special number remove
    $('#online_66231767').remove(); // special number remove
    $('#online_47685428').remove(); // special number remove
    $('#online_27024254').remove(); // special number remove
    $('#online_2018239').remove(); // special number remove
    $('#online_40165584').remove(); // special number remove
    $('#online_32731598').remove(); // special number remove
    $('#online_28910999').remove(); // special number remove
    $('#online_40527690').remove(); // special number remove
    $('#online_15200701').remove(); // special number remove
    $('#online_55611327').remove(); // special number remove



    $('html, body').animate({scrollTop:$(document).scrollTop()+1}, 0);
    $('html, body').animate({scrollTop:$(document).scrollTop()-1}, 0);

    $('.m-hder01_utt-btn').trigger('click');

    setTimeout(function(){

    $('#js-videoComponentBox')[0].click();
    

    $('.js-resizePlayerBtn').trigger('click');
    $('.c-playerOn').click(function(){//
            
            $('.js-volumeBtn').trigger('click');

    });


        },30);

    var n1='y';
    var n2='x';

    $('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:130%">読み上げ</button>').appendTo($('.operation>.operation_row').eq(1));
    $('<button id="light" style="background-color:orange;color:white;zoom:130%">light</button>').appendTo($('.operation>.operation_row').eq(1));

    $('<div class="loading" id="overlay" style="position: fixed; display: none;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.4); z-index: 1;" ></div>"').appendTo(document.body);
    //$('video[autoplay*="autoplay"]').css('z-index','99');

    $('#js-right_area').css('z-index','0');

    $('#light,.operation_row').click(function(){

        $('#overlay').show();
    });

    $('#overlay').click(function(){

        $('#overlay').hide();
    });

    $('#yomiage').click(function(){
    if (typeof yomi ==='undefined'){}else{return}
        $('#yomiage').css('background-color','green');

    block_user =[
        '4fcbdde79a648216d023ee46f2a46119','1a8b740b8b805499220888c3c3cbe0e3','e2de97fdabbb77c5e0b0767756c30d25',
        'e9bcc41bbb71a736cae0ee4843a4e63f','f1696ed06f0e7966c616e6f8ad6d0cc1','c6b4f729e6b5229d397479fadbd0b79c',
        '489afb8ad79e5c2337796d4947088d4a','46dbd6c96d1aee65bad55a93f3edb8ce','aa02f671da10f03c6c8835dd3094f906',
        '0f624ffd25abe48bdc2781ae9fe221e9','dbe21ff850ed9e1bf41560c4799f02fd','212c206debcfce290fe1a1c4d5ef64bc',
        '85a37906442bed6e110dfcc799688ee7','7b35e76e5eb815ebadaade15eac49c15','d5d14966ef403e976f6bf755313cb882',
        '757e972126d63b6f92eea7e214f882f6','f7bd0ebc7efd8d3bfaf0e822655a5300','40c2d80857b4ea1e0b29de4694572f43',
        '4e49f728785c27ce1198ff6ffe4f97d5','c594d9f26c658f4a624a0f818bc2943e','054e6fa8600aaeed4ed81f599e6302c8',
        '48ad2f1ef673a578ba4407cbb6205326','17186691ffbd7ad47b8704417dffca86','1826e2f643dec965ff6936abef86c19a',
        'c3929433443ca8572f50ebea1d4b7e39','53f4b0a86b17b006085d5594831e1897','6d593c067467ed1e91f59c523642d07d',
        '59385680f740aeee86ff25f10c37bde5','099c99c0cec9b026737e5fcb711c0c84','05fe68c32ac2c6edc7dd0b863fd921d0',
        '83208fdf68ced08e7a3dcdd407ab0e32','6793f17cf59bb0a97072794ce3da3ddb','43bd1443222d527c51cf020fe2b28e4d',
        'fe83540f15140e8bd2fb4c8c8796886d','00dd470603521fa78b4130af94b0730b','af846a4a9382b842459d7fe93a51d096',
        '8f4343ca3de525c38dbb7d1483cd06b7','1df6c7e7a0a22ea4ccf87c393021cb95','37a96bdd6e293b442df466f00acf78bd',
        'お前ら','おまえら','❤︎'

    ];
//-------------------------------------------------------------------------------------------------------------------
    var icon ='s';

    var comes=0;

    var myself='329320564396';  ///////////////////////////////////////// My user Icon
    //$('.chat_tab-control').css('opacity','0.3');  // doesn't work

    yomi = setInterval(function(){
        //parseInt($(this).text())
        
        //document.title = $('[class="chat-left js-chat_left"]>[class="js-commentId uid"]').eq(0).text().slice(0,6);
        if ($('[id*="comment_"]').length !=comes){
        comes=$('[id*="comment_"]').length;

        document.title = $('[class="pppp"]').last().text();
        
        if($('[id*="comment_"]').length>16){  $('[id*="comment_"]').eq(0).remove() }
        /////////////////////////////////////////////////////////////////////////////////////////////////
        for(var i=$('[class="js-commentId uid"]').length-8;i<$('[class="js-commentId uid"]').length;i++){

                
            $('[class="js-commentId uid"]').eq(i).css('background-color','#'+$('[class="js-commentId uid"]').eq(i).text().slice(0,6));//    
            
            // chat-left js-chat_left

            $('[class*="js-commentLine js-"]').css('zoom','160%');
            $('[class="js-commentText com black"]').attr('class','pppp');
            
            //$('#js-commentListContainer').animate({scrollTop:$('#js-commentListContainer').scrollTop()+300}, 1);

            if($('[class="js-commentId uid"]').eq(i).text()=='86ce56b436e531106baf2d9a60f12e3d'){//
                
                icon = chrome.extension.getURL('images/emoji_jojo/'+icon_jojo[  myself% (icon_jojo.length-1) ]);//
            }else{
                icon = chrome.extension.getURL('images/emoji_jojo/'+icon_jojo[  $('[class="js-commentId uid"]').eq(i).text().replace(/\D/g,'')% (icon_jojo.length-1) ]);//
            }
            //icon = chrome.extension.getURL('images/emoji_jojo/2JCEASER.jpg');

            $('[class="chat-left js-chat_left"]>img').eq(i).attr('src',icon);
            $('[class="chat-left js-chat_left"]>img').eq(i).css({'width':'25','height':'25','z-index':'999'});
            $('[class="chat-left js-chat_left"]>img').eq(i).css({'border':'0.5px solid gray','border-radius':'5px'});

            //$('<img style="width:25px;height:25px" src="'+icon+'">').appendTo($('[class="js-commentId uid"]').eq(i));
        }

        $('[class="js-commentId uid"]').css('color','white');

        console.log($('.js-commentText').length);
        n1=$('.js-commentText').length;
        
        if(n1!=n2){
            n2=$('.js-commentText').length;
            console.log($('.chat-body>.js-commentText').eq(-1).text());
            console.log('999999999999999999999999999999999999');


            if($('.chat-body>.js-commentText').eq(-1).parent().parent().attr('class').includes('is-ng')){
            console.log('99999999999999999  NG   99999999999999999');             
             }else{

            //navigator.clipboard.writeText($('.chat-body>.js-commentText').eq(-1).text());
            $(document).attr("title", $('.chat-body>.js-commentText').eq(-1).text());


            }
        }

    $('[class="c-chatPositionIndicator is-scrollUp"]')[0].click();
    }
    },800);
    ///------------------------------------------------------------------ End of Interval
    });
    $('#yomiage').trigger('click');

    setInterval(function(){
        $('.is-ngCommentUser').remove();
        $('.is-ngCommentKeyword').remove();


        //-------------------------------
        for(var y=0;y< block_user.length;y++){
            $('[class="js-commentId uid"]:contains("'+block_user[y]+'")').parent().parent().remove();
            //$('[class="js-commentText com black"]:contains("'+block_user[y]+'")').parent().parent().remove();
            $('[class="pppp"]:contains("'+block_user[y]+'")').parent().parent().remove();
        }
        //-------------------------------
    },1000);
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

if(url.includes("live2.nicovideo")||url.includes("live.nicovideo")){

    icon_yukkuri=[
        'IMG_0609.jpg',
        'o5695.jpg',
        'original.gif',
        'smile.jpg',
        'yukkuri_400x400.png',
        '6313645i.jpg',
        '1345440120064.gif',
        'a6b34bac3.gif',
        'dsf.jpg',
        'images.png'
    ];
//-----------------------------------------------------------------------



    $('[class="___player-display-screen___23EE9 ___player-display-screen___NL_yL"]').click(function(){ 
        //document.title='s';
        $('.___mute-button___3Mbk1')[0].click();
        
    });

    //$('[class="___radio___1sU7b ___radio___305C3 ___radio-base___61G9K ___radio-base___2wW79 ___input-base___3V0FB"]').click();

    $('body').css('zoom','115%');
    $('[class="___comment-data-grid___12PnP ___data-grid___2SOuA ___data-grid-base___2HUyg"]').css('height','300px');
    $('[class="___comment-data-grid___12PnP ___data-grid___2SOuA ___data-grid-base___2HUyg"]').css('zoom','110%');

    $('[class="___header___1M2Xi ___header-base___bFLUo"]').css('zoom','50%');
    //$('[class="___comment-data-grid___12PnP ___data-grid___2SOuA ___data-grid-base___2HUyg"]').css('width','770px');
    $('[class="___player-status___BQ7B7"]').css('width','660px');
    
    
    $('[class="___body___1zOW_ ___body-base___2OOKf"]').animate({scrollTop:$(document).height()*100}, 0);


    $('<div class="blockscreen" id="overlay" style="position: fixed; display: none; width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,0.4); z-index: 0;" ></div>"').appendTo('body');
    $('#overlay').show();

    setInterval(function(){$('#overlay').show()},7000);
    $('#overlay').click(function(){$(this).hide()})

    $('[class="___video-layer___1FNad ___ga-ns-video-layer___2iHmz ___video-layer___qLdFV ___layer___2-zNd"]').parent().css('z-index','99');
    $('[class="___comment-text-box___3tPiF ___comment-text-box___tuH1A ___text-box___eTxg6 ___text-box___1sFmH ___input___1axxx"]').css('z-index','99');


    $('<a id="window" style="text-decoration: none; color:white;zoom:100%">window ⇲</a>').appendTo($('.siteHeaderGlovalNavigation').eq(0));
    
    $('<a id="list" href="https://www.nicovideo.jp/my/mylist" style="text-decoration: none; color:white;zoom:100%">List ⇲</a>').appendTo($('.siteHeaderGlovalNavigation').eq(0));
    $('<a id="list" href="'+chrome.extension.getURL("images/talk_default.gif")+'" style="text-decoration: none; color:white;zoom:100%">off</a>').appendTo($('.siteHeaderGlovalNavigation').eq(0));

    //'.siteHeaderMenuList'

    $('#window').click(function(){
        window.open(window.location.href,'_blank','width=320, height=180');
    });

    document.onkeypress=function(e){
        if (e.keyCode === 13) {
            var rand = parseInt(Math.random()*1000);
            
            if(rand%3==0){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 3.wav") );
                audio.volume = 0.6;
                audio.play();
            }else if(rand%3==1){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 4.wav") );
                audio.volume = 0.6;
                audio.play();

            }else if(rand%3==2){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 1.wav") );
                audio.volume = 0.6;
                audio.play();
            }
            

        }else{
            var rand = parseInt(Math.random()*1000);
            
            if(rand%3==0){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 3.wav") );
                audio.volume = 0.6;
                audio.play();
            }else if(rand%3==1){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 4.wav") );
                audio.volume = 0.6;
                audio.play();

            }else if(rand%3==2){
                var audio = new Audio( chrome.extension.getURL("sfx/nep 1.wav") );
                audio.volume = 0.6;
                audio.play();
            }
        }

    }

    var come;
    var img;
    var style = 'width:35px;height:35px;border-radius:5px;border:1px solid gray;';
    var comp='s';

    var s ;
    var sel ;
    var emoji='';


    $('.___comment-text___2cPL0').css('zoom','190%');
    $('.___comment-text___2cPL0').css('font-weight','bold');

    //------------------------------------------------------------------------------------------------
    setInterval(function(){

            
        if($('.___comment-text___2cPL0').last().text()!=comp){
        //if(0){
            comp= $('.___comment-text___2cPL0').last().text();

            $('.___comment-number___2Qws3').eq(-1).empty();

            if ($('[class="___table-row___27ghe ___table-row-base___15vCI"]').last().attr('data-comment-type')=='operator'  ) {
                img = $('.___user-thumbnail___mNABu').attr('src');
                $('.___comment-text___2cPL0').last().css('color','#009cd6');
                $('.___comment-text___2cPL0').last().css('background-color','#e8e8e8');
                $('.___comment-text___2cPL0').last().css('border','0.5px solid white');
                $('.___comment-text___2cPL0').last().css('border-radius','5px');
            
            }else{    // Apart from the owner of community

                //-----------------------------------------------------------------------
//-----------------------------------------------------------------------
    text = $('.___comment-text___2cPL0').last().text();
    sel = parseInt(Math.random()*10);

    if(0){
        // turn off
    }
    else if (text.includes( 'い男だ') || text.includes( 'い漢だ')){
        emoji = 'images/150/150fuhajin.gif';}
    else if( text.includes('なんてだっせ')){
        emoji = 'images/150/150セガなんて.bmp';}
    else if( text.includes('わざるを得ない')){
        emoji = 'images/150/150haousou.bmp';}
    else if( text.includes('インディグネ') || text.includes( 'インデクニション') || text.includes( 'インディクニション')){
        s = sel%2;
        if (s==0){
            emoji = 'images/150/150tales_inde_tov.gif';}
        if (s==1){
            emoji = 'images/150/150tales_inde_top.bmp';}}
    else if( text.includes('アッー')){
        emoji = 'images/150/150aniki_aa.bmp';}
    else if( text.includes('アツゥイ')){
        emoji = 'images/150/150atsuui.bmp';}
    else if( text.includes('不破刃')){ 
        emoji='images/150/150fuhajin.gif';}
    else if( text.includes('どうも') && includes('さん')){ 
        emoji='images/150/150ninsatu.bmp';}
    else if( text.includes('ドウモ') && includes('サン')){ 
        emoji='images/150/150ninsatu.bmp';}
    else if( text.includes('ダークメタモ') || text.includes( 'を苦しめるな')){ 
        emoji='images/150/150iga_arukado.bmp';}
    else if( text.includes('キシン流')){ 
        emoji='images/150/150iga_kishin.gif';}
    else if( text.includes('ショータイ') || text.includes( 'ショーター')){ 
        emoji='images/150/150iga_showtime.bmp';}
    else if( text.includes('ムッムッホ')){ 
        emoji='images/150/150iga_mumuhoi.gif';}
    else if( text.includes('IGA')){ 
        emoji='images/150/150iga.gif';}
    else if( text.includes('イクゾ')){ 
        emoji='images/150/150ikuzo.gif';}
    else if( text.includes('知っているのか') || text.includes('知ってるのか')){ 
        emoji='images/150/150raiden.bmp';}
    else if( text.includes('きSA') || text.includes( 'きＳ')){ 
        emoji='images/150/150cha_daisukisa.bmp';}
    else if( text.includes('すきかい？') || text.includes( '好きかい？')){ 
        emoji='images/150/150cha_sukikai.bmp';}
    else if( text.includes('きでゲス') || text.includes( 'きでげす')){ 
        emoji='images/150/150cha_oiramo.bmp';}
    else if( text.includes('は一向に')){ 
        emoji='images/150/150baki_kamawan.bmp';}
    //// JOJO
    else if( text.includes('何をするだ')){ 
        emoji='images/150/150jojo_naniwosuru.bmp';}
    //// JOJO
    else if( text.includes('ロードーローラー')){ 
        emoji='images/150/150jojo_rod|| text.includes(|| text.includes(a.bmp';}
    else if( text.includes('野郎ぶ') || text.includes('郎オブ') || text.includes('野郎ブ') || text.includes('ヤローブ')){ 
        emoji='images/150/150comando_yaroof.gif';}
    else if( text.includes('別れです')){ 
        emoji='images/150/150kof_owakare.gif';}
    //// INM
    else if( text.includes('上半身に比べ') || text.includes('これマジ?') || text.includes( 'これマジ？') || 
        text.includes('半身') && includes('貧弱')) { 
        emoji='images/150/150kbtit.png';}
    else if( text.includes('やったぜ')){
        s = sel%2;
        if (s==0){
            emoji='images/150/150inm_oyaji.gif';}
        if (s==1){
            emoji ='images/150/150yattaze1.gif';}}
    
    else if( text.includes('知力2') || text.includes( '高原') || text.includes( '通打')){
        s = sel%3
        if (s==0){
            emoji='images/150/150lal_25.bmp';}        
        if (s==1){
            emoji='images/150/150lal_25_2.bmp';}        
        if (s==2){
            
