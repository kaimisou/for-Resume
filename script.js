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
    
    $('.comp_name:contains("昕力資訊股份有限")').css('background-color','red');
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
        '哈瑪星','日月光','富比庫股', '警衛','保全',
        '榮欽科技','長榮化學','旭聯科',
        '義守大學',
        '鴻海精密',
        '智樂堂網路',
        '緯創資通','首席國際獵才','喆喆資訊行銷',
        '壞主意有限','金屬中心_財團法','104外包網','秉耿股份',
        '其他教育服務業',
        '義大視覺特效股份有',//'研發替代役',
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
if(url.includes("getchu.com")||url.includes("dlsite.com/")){

if(url.includes("/soft.")){
$('[valign="top"]:contains("発売日")').css('background-color','yellow');
}

if(typeof done ==='undefined'){
    var done = new Audio( chrome.extension.getURL("sfx/diablo2/-----gold.wav") );
    }

    done.volume = 0.2;
    done.play();


if(1){

}else{
$('a:contains("[は い]")').css('zoom','200%');
$('a:contains("[は い]")')[0].click();
}

$('a:contains("次へ")  ').mouseover(function(){ 
    $(this)[0].click(); 
    $(this).css('color','orange');
    $(this).css('zoom','130%');
     });

$('.table-001-releasedate').css('color','red');
$('table[style="margin:auto;"]').remove();
$('div[style="min-width:100%; height:310px;margin: 10px 0;max-width: 0;overflow:hidden;"]').remove();
$('[id*="getchu-search-container-14679054615ce4b775c073c"]').remove();

$('.category_anime_t:contains("特典付ピックアップ")').remove();
$('.category_anime_t:contains("人気アダルトアニメ最新巻")').remove();

if(url.includes('maniax/fsr/')){
$('.maker_name>a').removeAttr("href");
$('[class="search_img work_thumb"]>a').attr('target','_blank');
}

$('.maker_name').click(function(){
    navigator.clipboard.writeText('"'+$(this).text()+'",');
    $(this).css('background-color','yellow');
});

$('#work_name>a').removeAttr('href');
$('#work_name>a').click(function(){
    open('https://sukebei.nyaa.si/?f=0&c=0_0&q='+$(this).text(),'_blank');
});

block_list=[
    "バニャータ","ダークWING","電伝導","ラブ・ラ・ドール","大神電工","闇奉行カンパニー","OMEGA13","BurstMetal",
    "Calendula","EMS RedStage","NORA's Factory","みみっく","XIAO-A","ALsoft",'papers','Fechikano',
    "いすかてりおり","firstpain","ミツバソフト","Salvador","不死蝶蜜月","星川ベータ本舗","流星支店","caddis","独身寮",
    'アンコクマリモカン','もにみっと','シャルルハンター','Konyoku Games','KTFACRY','うそからまこと','ひかる','VReleased','BOMB! CUTE! BOMB!',
    '風車F','アンコ屋','liferyona','昭和陵辱記念館','moyasix','サークル暇乞い','つじもが町に殺','Dane Animation',"描き屋Kiyoshi",
    "M's factory","しーきゅーしー・そふとうぇあ","Animism","PeD","スタンブローAg精錬所","WILD FLOWER","ふわふわぴんくちゃん","Timbpa02",
    "猫拳","あんまんSOFT","スタンブローAg精錬所","T プロジェクト","A-Nest","Holy Lance","朱色吐息","max1","TOFU SOFT","STARGATE3D",
    "F・A・S","monoxide.jp","バニーホール","ソクラテス","ブロークンディーヴァ","Distort Juice","SPRIGRA","ディーゼルマイン","サークル4`s",
    "にじげんむすめ","にじいろばんび","女喜悲鳴","電影AVプロダクション","黒髪同盟","ray-one","CUTE CATS","木陰の泉","闇鍋亭",
    "CAVYHOUSE","iNODE",".ini","惰眠ズ","第一実験室","DOUJIN3ARIES","デモデモン","ドリームドット","あんずワークス","あんにゅい堂",
    "キマイラ","チュウペット","獅子鍋屋","ここをクリックしちゃダメ","Sacuregern","鷹の住む村","FINAL★BOOSTER","Hugir Studio",
    "神天","StudioFlower","ドリームピクス","Detox-Girls","Tackiness Works","gotonatural","+X","PON-POKO","みポZ",  
    "Xomb","PIXELICS","HoneyBeeGarden","カスタムスタジオ","枕絵倶楽部","POSH6","LunaGazer","Angel Cure","Petit Four","えふえふ",
    "あやえも研究所","液魂研究会","エンドルフィン","中々畑中","あふろでぃ〜て","ピラミッドハウス","かったーのアダルト天国","千里ノ洞","パト&ラッシー",
    "まる組","ギャルらぶマニア","びんごたると","ALESHA THREE-DIMENSIONAL","dot","レオナルド研究所","みこにそみ","Demon Rabbit","ミルクキャンディ",
    "ダンフリーズ","Eccentrix","loiter・まんぷく3D","楠任電子映像","グミチョップスタジオ","スタジオジェネシス","Robi","岩石クラブ","Virtual Solid",
    "sawamura japan","Solid Neek","miz","Solid Neek","FranticBone","レギオン開封厳禁","Eclaire","GT-Four","K.R.C. Studio","LUV Multimedia",
    "エンジェルダスト制作チーム","studioGGB","十矢","ねこまる商工会","depression","R-LABEL","にょろ","チョウゴウキンデンタル","フェルナンです。",
    "Ivory Tower","アクノ企画","EROPO","ぺろぺろキャンディー","プリン倶楽部","yosino","あべ川モチ郎","computer_man","BANANA BLUE SOFT",
    "タンデム","Panda Moderns","Artmunk","Studio NGR","3Dアニメ本店","Studio M","ヨガチカ","Odd Hat","ヒカリネイロ",   "立体砂場","ま〜や",
    "3dmovie","MilkyChain","OSCAR","PURPLE HEART","黒羽天使","crownos","ミカンセイ","風の成る樹","はちみつファイヤーズ",
    "SchwarzeSeele","Megrim","Atelier Strawberry Pancakes","白桃","しらたまや","PROPER","Hal Rogers","3次社","CACTUS","ALE",
    "脳と心とオッパイ","Digital Graffiti","KURADANe","ザ☆超派遣村","魚からトライオキシン!!!","norishio工房","Hexenhaus","時止乙女会",
    "マジカル☆スウィート","イカテン3D","フルアニメハウス","DOGGIE STYLE","モーテルハロー","scream",
    "Citor3 En","アルォードシステム","artman","ブラックサブマリン","華の妖精","同人ふぇち","eモーション","Affect3D","365%",
    "爆裂バトルショップ","電光石火屋台","アンダーブルー","おさなめ研究所","アマテラス","mu-games","AKATA","やわらか☆みる",
    "LOVEぐるぐる","けまんそう3D","69Girls","キャットアイランド","スタジオ白い羽根","Etching Edge","Xi","Groovin Girls",
    "すにぃる","sakamotoJ","ハンバーグ係","drill0721","純愛至上主義","7","Broken Desk","SPRECHCHOR","人形の桃月堂",
    "電脳娯楽堂。","白濁プロジェクト","01-Torte","いもけんぴ","忍者32","Bluecat工房","りっぷるん","ドリル工学","ドリル工学",
    "Ring a Bell","かんしんソフト","ざむずLABO","がっかり企画販売","L☆B Friends", "こつぶ","DucatFilm","SCAPE TRON","mo/t",
    "3d-lotus.com","A THIRD DIMENSION","3Dワークス","水の妖精","Adicius","vagrantsx","Scorpion","トンデス","vagrantsx",
    "アートコンツェルン","コンジャカット","売肉","GSわーるど","Drケローの恐怖の島","托卵JP",
    "ドス・ケルベロス","HoriTail","Tech3d","softhouse-seal","てろりんソフト","エロ","Chocoンとこ","variantstudio","Altair software",
    "キンク文庫","マスクロ","WANTAN WORKS","Treasure Store","固め座館","さくら舞","ユニカム","そこに鼻ゲー改","Nok'Tus","神梛映像",
    '梅麻呂','Stapspats','koniyan','エロタン星人','Double Soft C','Ararza','L.T.T','ニューロン・ファクトリー',"みちのくエロ工房",
    'Ks-SOFT','メルヘンドリーム','爆裂アッパー','サークルギミックス','ピュアプリズム','チッコ','ギミックス','黒い染み',
    'HOTPOX','ドールハウス','DAISY','KNOCKOUT','金色のモンドセレクション','SYLD','BouSoft','BISHOP',"ましゅまろ","狂気のSybylla","赤いトンボ",
    'ポリプリプリン','アトリエこぶ','MiMiA Cute','生肉汁学園','アグ・ノエル','FINAL FUCK 7','RenderingHoliday','sssssssssssss',
    '@OZ','生肉汁','ゼロワン','Rebel Jester','The Nation of Head Sc','T&A',"グシャ","Flashで麻雀作ったよ!","Vizivius","艶屋","キュアネード",
    'Tied Peach','底辺パラダイス','せるふぃっしゅ','せるふぃっしゅ','NAGI','VRJCC','Sexy3D','3D同人サスカッチ','みたらしだんご',"蜂蜜砂糖","サイコ・バイオレンス",
    "IMP","コールド ゲーム",   "赤紙堂","そうかな","ティーグラフ","HoneyPie","いわし家","my precious","やねうら","アナQ","T-ZERO FACTORY",
    "poteto-chips","L&Cパッサマン",
    'EDGE systems','ポザ孕','スタジオレイン',"ふろ〜ずん みっくすじゃむ","Visionary","ごま塩犬","oopstudio","くりる","αPLACE","くりぃむぞぉん","リボンフリル",
    "iLand","M-design","Robo-Nepen","おくらまつもと","ぽぽぽりごん","遊泳スタジオ","フェロモンラバー358","ピグモール","GalaxyPink","電柱","ハルナ",
    "LOVE OBJECT","Rectangle","親方君プロジェクト","neck","ハシビロ興業","マッハ☆ごりー","中央遊月","From Soy Sauce","おざいださむ",
    'Po',"鈴木みら乃","Collaboration Work","バニラ","ふた部！","ベルプランズ","自宅警備員 ターゲット","三射面談","寝取られビデオレター[DVD",
    "褐色クールビッチ人妻の性",'WORLD PG ANIMATION','洗い屋さん'
];

for(var i=0; i<block_list.length;i++){
    $('.table-001-card:contains("'+block_list[i]+'")').parent().remove();    
    $('.demo_movie_item:contains("'+block_list[i]+'")').remove();
    $('.maker_name:contains("'+block_list[i]+'")').parent().parent().remove();    
}




//$('a:contains("PoRo")').remove();
$('.pickup_monthly').remove();
$('.box_anime_centerbanner_2').remove();
$('.bx-wrapper').remove();
$('.list-whatsnew').remove();


}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://www.jade-net-home.com/")){
    if(url.includes('/categories/whats_new')){
    $('#mainVisual').remove();
    }

    b_list=[
        'うんこ','Unstoppable diarrheal','The Sperm Burglar','嘔吐','fart','おなら','オナラ','Piss','便','うん',
        'Scat','排泄','下痢','xcretion','ゲロ','大便','Fart','糞','素人パンチラ in 自宅で個人撮影会','妊','美容',
        'Schoolgirl Model Cha','48','47','46','45','44','43','浣腸','熟女','更衣室','obedience','Tricked G',
        'Bondage','School girl m','Slaves','Bewitching Cos','Super bowel'
    ];
    
    if(url.includes('/play/')){
    $('html, body').animate({ scrollTop: 260 }, 'fast');
    }
    
    for(var i=0;i<b_list.length;i++){
    
    $('.itemTitle>a:contains('+b_list[i]+')').parent().parent().parent().remove();
    }
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
"バイオハザードRE",
"汚物の森",
"シバター",
"ついに改心した不登校YouTuber",
"月ノ美兎",
"刻命館",
"wlw",
"八卦炉電子オルゴー",
"鉄華",
"kyousyamade",
"メイプルストーリー",
"ミノルピング",
"TV版ケムリクサのここすきポイント",
"四月は君の嘘",
"猫×雪国×ネコミミ＝C3最強",
"【SFC版DQ6】",
"作業用くらげ",
"迫真876部 音割れ",
"逆転淫夢裁判",
"ほのぼの紙忍者",
"プリチューバーと化した先輩",
"【Kenshi】賞金稼ぎ先輩",
"【Kenshi】迫真Kenshi",
"もう糞なんてしない",
"迫真OTK部",
"ホモと見る主人公がちんぽこかわいそうなOP集2",
"千恋*土方",
"ホモと見るアナザーリュウ",
"110弱本アニメ",
"かばんちゃん黒幕説",
"迫真錬金術部 不思議な本の裏技",
"淫夢をみる島",
"厄災かけますね.",
"お前いつ払うんだよハートよぉ",
"穴はひとつしかないイカダ.",
"うんゲして","ヒカキン、キュルルを馬鹿にするw",
"迫真パズル部・総当りの裏技.",
"星のカービィウ",
"EXVS",
"リドルジョーカアッー",
".sp1","mp0","巨人小笠原、セルリアンに食べられる","ホモと見るカメラを止めるな",
"SP",
"sp2","SP2",
"敗北者",
"海外版バイオォンハザ",
".SMBR",
"F.C.F.O.H",
"【ApexLegends】絶",
"ライダー.",
"【ギャロップレーサー8】普",
"【完全版】NONA REEVES",
"マリオカート（直球",
"やったぷり。　投稿者：ぷりぷり娘",
"蛇隠(じゃいん)",
"もこうとフリーザのペガサスkiss",
"藤原太ー",
"バイオハザードre",
"タドリス69",
"茉優先輩BB",
"イチゴョの奇妙",
"【CIV6RaF】",
"頭るーちゃんのボーダーブ",
"ホモと見るトムとジェリー.",
"ホモと学ぶトモダチ",
"アークザラッド1・2・3",
"[ゆっくり実況]「東亰ザナドゥ",
"【テイルズオブヴェスペリア】ゆかり",
"封神R",
"パワポケ",
"Minecraft",
"ホモと見る派生作品めっちゃ作ってくるやつOP集",
"マイクラ",
"肉体派エージェントと胸囲",
"インフィニットオルフェンズ",
"オルガ",
"影牢～刻命館 真章～",
"Dhibi Shoten (Dhibi",
"【RTA】 アークザラッド モンスターゲーム",
"ホモの奇妙な冒険",
"高橋一成",
"疲れからか、プリチューバーになってしまう",
"ピカブイ実",
"平成ライダー",
"俺の鉄腕壊れちまうよ",
"鉄血",
"BIOHAZARD RE:2 ",
"ヤジュえもん",
"ホモと見る次回の見所さん",
"【ゼノブレイドクロス】謎の惑星を開拓して生き抜いていく",
"ななななないです☆",
"【MHP3】",
"【SOA】",
"【ゆっくり実況】DQ11",
"剣神ドラゴンクエストRTA",
"【地球防衛軍",
"FEH大英雄戦ベルベット(配布",
"ミット持ちする米津玄師",
"ホモと見るホモガキの王",
"迫真人狼部",
"DQ5",
"っくりボンバーガール",
"イナズマイレブン3",
"モンスターハンターG ",
"迫真語録部・Google翻訳の裏技",
"ステロイドホモビカムヒューマンダス",
"DBコングレーシング",
"RJRJ…(届かぬ想い)",
"【ロマサガ】ロマンシング・おかず・サーガ",
"御祭神SWK様スターターキット",
" ウ ",
"【御城プロジェクト:RE",
"【RO】",
"ハースストーン",
"ファイアーエムブレム",
"NKTIDKenshi",
"オルザー",
"おっぺー揉んだことあるのか",
"マリカーレ",
"Syamu_game 米津玄師",
"迫真虹六部",
"オルライブ",
"大会チカっとチカ近いからねっ♡",
"【FGO】",
"見る挑発に乗らない兄貴そ",
"ホモと見るエイジのお別れ会で暴走するやべーやつ",
"モとお嬢様が見るPRCR OP集",
"ホモと見るプリティーシリーズのクライマックス",
"ホモビを完全再現してしまったエロゲ",
"【大物】2分ちょいでわかるSyamuの今 part10【Youtubeｒ】",
"違法ダウンロードが発覚してしまった同人作家の悲痛な",
"beatmaniaIIDX】頑張って全白を目指すホ",
"ホモと見ようジオウ嘘予告",
"ホモと見るミライ. ",
"おジャ魔女ぶっちっぱ",
"ファッ！？ｸｩｰﾝ…フラワー",
"伊澄いずみを全力で愛でる動画",
"【FEH伝承英雄ロ",
"二軍淫夢グルメ",
"【グラブル】",
"NKTIDKSGランキング",
"神と見るフレンズのリレー",
"【ボンバーガール】",
"【ゆっくり実況】DJMAX",
"NotTetris2_ED到達RTA",
"AKNMランキング",
"野獣先輩地球人説",
"Wolfenstein: The New Order",
"ディズニー風ホラーゲームBendy",
"【ゆっくり】蘇鉄山RTA　00:45.75",
"【ゆっくり実況】初めての ペルソナ４",
"【ゆっくり実況】きのこたけのこ戦争IF",
"異世界レ〇プ！英雄と化した先輩",
"シャムさんに似ている笑い声の鳥",
"灯火の星",
"迫真デュエマ",
"釣りあげタン",
"膝　・　フ　ェ　チ.",
"膝中心の生活.",
"【ドラクエ6】",
"大乱闘スマッシュブラザーズGOLD",
"こ　　の　　シ　　ャ　　ゲ　　ー　　っ　　！.mp4",
"ホモと見る巨乳になる前のminoriちゃんOP集",
"【修正版】ホモと見るイントロとサビが神がかってる アニメソング集",
"迫真毒デ部",
"サルノリ先輩BB",
"こわせ!!メイドイン本社",
"ペ ネ ガ キ .mp",
"イカスギィ！イカイカイ",
"ホモと見る褐色ロリエロアニメ.syujaym",
"【Death end re",
"（ビームサーベルで）突くゥ＾～（二代目）",
"この世の終わりみたいな求人.nktidksg",
"悪魔の実",
"【ゆっくり実況】縛っているようで何も縛っていない輸血饅頭が初見ブラッドボーン【Bloodborne】part4",
"夕立戦神社.AZUR_LANE",
"SBT「やっぱsyamuさんはSだな！（確信）」",
"NKTIDINSG（ネクタイダイナスギ）",
"クッキー☆マスターズ",
"カツ又",
"啓蒙レ〇プ！上位者と化した先輩",
"邀撃！下北沢鎮守府防衛作戦",
"鬼神の力味わうがいいBB＋使用例",
".lol",
"ネオアルファと化した先輩GB",
"H31.1.27.の出来事",
"VG捨テル/ゴームナシ・ホンバーン",
"NKTIの錬金術師",
"追跡する今田耕司先輩BB","アルプス110弱",
"新プロジェクト立ち上げ動画",
"【ウサギ動画】ボタンを押すだけのウサギ",
"NKTIDKS","【速報】ネトウヨがモスク襲撃 犯人がすべて生配信【ニュージーランド 40人以上死亡】",
"のけものフレンズ「はじまりとおわり」（ノンケ向け版）.kfp",
"ホモと見る巨乳になったminoriちゃんOP集","心の仮面をつけたクリプラちゃんGB.persona",
"【ロマサガ2】サブフレー","め組のひと☆","今回の騒動について","汚物育成キット【ヤジュリウム】２",
"本格的ガチムチおニャンコ♂レスリングSP.PNT","中日帽子であることを指摘されて動揺する高木くん肉声",
"QVCアリバイ福島","ピ　　厨　　","忍者デカスギくん","拍をバラマキして遊ぶ.mp110弱",
"EVANDKSG～残酷な天使のテーゼ～","大物YouTubeｒ 映画を紹介する.syamu",
"海底おじさん「平和は一番羽！ドラ＆リーチ！」","合気ドルマスター ネクタイデカガールズ",
"戦闘オォン！ライバル.DPt","札束ウィッチ 他","迫真脱獄部 打倒HNの裏技.mp",
"【RTA】SUMOMAN","お前を殺す（絶望）","レディ・プレイヤー１",
"コスモ歴77年プラズマモロ感のリドリー","【Kenshi】",
"X105くらいじゃないすか.mp1","強硬手段に出る先輩","ドミノ倒し",
"【RTA】テイルズオブベルセリア","野獣先輩、ピエール瀧説",
"ホモと見るライダー","止まらないフィーゼちゃんGB＋使用例",
"ホモと見るOPだけは好きなアニメOP集","左むねむ",
"DDR EXTREME","【大物】3分弱でわかるSyamuの今 part13【Youtubeｒ】",
"【ゆっくり解説】魔法騎士レイアース(GB) RTA","真夏の夜の（に）プリチャン、ギャルと化した先輩.mp",
"ブレスオブザわてり","親を踏むＥＳＫ姉貴","平成KMNライダー",
"新次元ゲイムネプテューヌVIIRを時々ゆっくり実況す","戦闘！ｲｷｽギンガ団ボス アカｽギ",
"【バイオRe2】あかりラナウェイ","【Hole.io】ホリをホリホリ",
"【ゆっくり解説】wii版モンスターハンターG","ホモと見る次回予告",
"虹六","のけものフレンズ","ホモと見る家庭用青狸映画予告集",
"ユニバース師匠","チルノと覚える円周率100桁",
"【RTA】リズム天国","影廊","のけものフレンズED「土に還れゴミ」.kfp",
"マンガで分かる！Fate","ホモと見る外国人が選んだアニメのかっこいい戦闘シーンベスト10",
"例の壺に挑戦する黒魔法使い系Vtuber","ネクタイデカ哀戦士","ネク子の部屋.mp110_105_100_110_115",
"【GF(夏)】","仮面ライダーウォズ","すわわっ！MIDIに","下スマッシュをするフォックスBB+使用例",
"【制限RTA】ボンバーマンランド","ベルサイユの草","ガバエイムリッター１９",
"迫真波導部 壊しの裏技.sp","ホモと見るうるせェ!!!いこう!!!! (どんっ!!)","Epic_necktie_guy【115秒ぐらい耐久】",
"【180円】Stalker_Crab_Simulator","ホモと見るドルオタ","幻想人形レ⑩プ！人形遣いと化した先輩",
"【AC版】美少女戦士セーラームーン RTA","MRSTIGITOPIOOKINN","SWK教",
"キュルルクソガキ説","チ　　ン　　コ　　・　　フ　　ル　　パ　　ァ　　ン.mp","ジュンペクライネ",
"nktidksg","イエイヌの扱いににブチ切れた赤犬達","かばんちゃんとかばんさん別人説.kfp",
"ようやく人生終わってることに気づいた高校2","ダイナモをやっていた頃のYTR★ feat.ピエール瀧",
"ゆめ2っき","のけものフレンズ「えごいすと」.kfp","2000年代洋楽メドレー",
"イモートミテルカ！","ハチナイセンター試験！解答解説","ホモと見るスパイダーロリ",
"Bloodborne Any","ざくざくアクターズ","レーザ攻撃した","やりましたわ。　投稿者：変態糞お嬢様",
"タイタスの腕の中でガンダム","無能な仲間に刺される吉崎観音総監督.kfp",
"たのしい暗殺","新説魔法少女","巌流島大決戦",
"ピ　　厨　.kawaii","ガバエイムダディ","SP3","ピアスを開けた先輩",
"風が語りかけます・・・エモい、エモすぎる！.mp","ホモと見る予告","天の道を行き全てを司る女児",
".lol","【CROSSOUT】多脚戦車戦記 part","【RTA】ナルティメットストーム4_",
"【ゆっくり実況】息抜きにFE紋章の謎","【はじめの一歩２】筋力０からヘビー級王者を目指す 第４回",
".lol","ジャンクリラに光あれ！　RTA　2：54：41　part","【RTA】黄金の太陽",
".lol","鋼の錬金術師_翔べない天使_ノーセーブ全ボス撃破RTA_4時間9分14秒part",
".lol","【ゆっくり実況プレイ】まったりとDDR ","【Deltarune】Cult Buster","ブラッドボーン Any",
".lol","ダークソウル３＿RTA","【バイオRe2】","ゆっくりまりさがドラクエ1の疑問を(雑に)答える動画",
".lol","【大物】2分ちょいでわかるSyamuの今 part14【Youtubeｒ】","【RE2】",
"ＦＧＯ","野獣先輩アマゾンオメガ説","幽霊とヤっちゃいました","ガバ穴スレッジ福島",
"ORPHEUSアルバム「SWK♪IS♪GOD」","～ク☆BB劇場～紅白ネタ合戦","スろうとするHSK姉貴",
"もんすたあ★レース2 ","kenshi","【5年ぶり】やるぜ！第2回オフ会！【オフ会】",
"【10話を前に】けもフレ2の9話でブチ切れた総統閣下達【比較してみた】　",
"ホモと見るSUPER変態","プラーナを発生させて食べよう！「プラーナ・スワワ」",
"4章の眠らせてくるやつクエスト","黒の逆襲","イエイヌちゃんが余りにも",
".lol","しりり、オレとアンテボイドラ作らないか？","2019年春のクソゲー詰め合わせ　スマホ規制対策版",
".lol","ホモと見る神絵師のどうぶつタワーバトル.eragejirai","【はじめの一歩２】筋力０からヘビー級王者を目指す 第３回",
".lol","HSKenshi.","【MHW】","【Getting Over It】","【ゆっくり実況】バイオRE2",
".lol","バラマキからネクデカを守れ！バラマキ防止キャンペーンＣＭ","hommoria　mp","hommoria 　mp2",
".lol","ママママ愛娘☆.RI","アーマード・コア3 ","【ゆっくり解説】神次次元ゲイム",
"[シャニマス]","mp1","mp2","mp3","Kenshi","【GF(夏)】エレナベストエンディングRTA【14分00秒】",
".lol","【3時】酒雑中に妹が横切る","【RTA】怪盗ワリオ・ザ・セブン　","パチスロ ミリオンゴッド",
".lol","～るりまに拳心～「心眼ICR姉貴 vs 牙突おじさん MGR十本王刀集結の巻 」",
".lol","＋⌒o","迫真錬金術部・皆の笑顔の","野獣先輩たくっち説",
".lol","桜乃そらと東北きりたんの","ホモと見る子供に見せたくないアニメ元1位 OP集.kureyonshinchan","【特報第2弾】今からでもわかる仮面ライダーシノビ.2022","糞遊びから岡山を守れ！糞遊び防止キャンペーンＣＭ","ホモと見る2022/ミラーワールド.ridertime","ちびむつ救助隊","インヴェンションとシンフォニア☆4.bach","ディケイドン！（破壊者）.mugen","総統閣下","【AREA4643】日本語も忍殺語もフルサポートされたゲーム.part５前【ゆっくり実況】","ムシの世界で釘を振る琴葉！","【シャニマス】","Enter The Gungeon 初見プレイ ","新次元ゲイムネプテューヌVIIR を時々ゆっくり実況するpart","ＴＨＥ 営業道_RTA_1時間8分47秒83_Part","ア　ヴ　ェ　マ　リ　ア","けもフレ２を叩くのはやめよう！たつき信者が騒いでるだけ（前編）","恐竜と化した先輩.utahraptor","ブーメランで遊ぶNYN姉貴","ホモと見る通りすがりの運転手(自動字幕付)","この世の終わりみたいな腕時計型麻酔銃BBとDKSGNKTI型変声器BB＋使用例","盛ってけ！胸囲ビート","カチッとカチ無職っ♡","ホモと見る子供に見せたくないアニメ元1位 ED集.kureyonshinchan","神社のマーメイド.Wakasagihime","ハチナイ検証部【ナインスターは1か月に何個入手できるのか？】","【ゆっくり】ボンバーガール","幻想少女大戦　累計270タ","新スーパーロボット大戦スペシャルディスクおまけマップマスターアジア撃破RTA【15分53秒】　"
,".sp3","すっげぇ白くなってる、はっきりわかんだね.ssbu","ホモと見る嵐を呼ぶ5歳児映画予告集","子供に見せたくないアニメ ","材料屋さん劇場登場キャラを先輩に差し替えたらもっと面白くなる説","希望の花","ウン命","自分を野原ひろし","落ちるキュルカスで止まるんじゃねぇぞ…","ホモと見る「ざまあ」と言われる主人公集.kf2","けもフレ2 第10話 問題のシーン.pool","ホモと見る炎上アニメＯＰ・ＥＤ集","【PS2 Castlevania】初期ステよあひむくんの反逆奮闘記 Part.Last ～忘れ者討伐編～","迫真女子プロサッカー部　ビーナスの裏技　part5","【RULE of ROSE】ＲＴＡ(上映会付き) 2:42:12 Part","ホモと見るエッチな声優ビデオ.popute","ゼットン対レプリエロイド２戦目（69マンＳＥエックス　ゼＥＲＯ）","【ドラクエライバルズ17】","[PSO2] ","【82円】Harts RTA 4:51.93","ログ・オルフェン","こら、なに蜂起してる　その","ホモと見るガチ厳選したOP・ED集.XI","【クッキー☆】9周年キャラクターランキング☆【人気投票】","自己矛盾兄貴leak","【ゆっくり実況】anno1404 キャンペーン","【ゆっくり】筑波山(男体山)攻略RTA（1:23:54)","【アイドル部】10分ちょいでわかるバーチャルさんは見ている11話事前放送まとめ（前半）","免許を取るMZ姉貴","ホモと見る大物YouTube r  初見でマリオラン","いつものように下水道に物を落とすが既にクソ雑魚ピエロ","League of Legends","淫　夢　の　泉　の　ホ　物　語　～第一章～","落下するキュルルRB +使用例","便乗炸裂ガール","お手伝いしてくれる7カ月ＢＢ使用例　合作単品【沈黙の教室】","野獣と学ぶ！ホモセ☆","カバンとキュルル様のけもフレ２考察","大物youtuberトロフィー獲得シーン集2【syamu_game】","けものフレンズ２はどうしてゴミアニメとなったか考察してみた。","ブラックシティ神社.BW2","【ゆっくり実況】聖剣伝説３","深き森の異形","ゼルダの伝説","高校生グラップラー","何の罪もない植木鉢くんを殺したバレーボールくんの翼＋おまけ","ライダー変身集","とっとこNYN太郎","やっちゃうんだから！投稿者：岡山を統べる者.drago_snake_dragon","キュルルが好きな人マジで1人もいない説","ほのぼの紙忍者.suck_a_sage","【1～3面】東方永夜抄Lunatic 幽冥組 ノーボム 解説【LNB】Part1","【字幕実況】 Slay the Spire サイレント アセンション11 Part1","【はじめの一歩２】筋力０からヘビー級王者を目指す 第５回","【アイドル部】バーチャルさんは見て","Wings of Vi RTA Any% Mortal NG+ 37:36 Part","【第18回MMD杯本選】niku(39)","テレ東と化したひで + 素材配布","遂に広島の実家を特定されてしまったsyamuさん 完全版","Beautiful Now☆","グリッドマンの朝","ホモと見るクレイジーサイコホモ.mdr","ORPHEUS～2ndアルバム「諏訪湖は何色か」","落ちたキュルカスUC 生放送時のコメント","ケ  ツ  ノ  ア  ナ  ホ  リ  ッ  ド.bomber man2","ホモと見るUSAとソ連の違い","ホモと見るイチロー引退会見","酒瓶を振るLMINU","デカすぎる者のレクイエム","ビルドドライバー","sp.","ハム将棋19攻落ち完全オリジナル新略法","【Syamu_Game】ホモと学ぶ大物YouTubeｒ OFF会誰も来ずへこむ 完全版【オフ会0人】","バーチャルYouTuber～天空の城スワワッ！","祖国は我らのために☆","水を吐くNYN姉貴BB","クソゲーレ◯プ！精霊鍛冶師と化した先輩　mp","Star NYN Zone.mp4","Rainbow Six Siege All Situations 15:34.05","DS版クロノトリガー夢喰いRTA 5:12:26 Part","【SofTalk解説】3分でわかる半導体","RTA風　【SFC】真・女神転生if...　5:31:24（4/10）","二軍淫夢BB劇場「24時間働けますか？」","24歳、木星です","ホモと学ぶ童謡","ラティアス＆ラティオス先輩GB","迫真ギャング部・逃走の裏技mp","東方メドレー☆","迫真語録部・Google翻訳の裏技　第十五章","止まれカス共","ホモと見る主題歌・挿入歌の流し所さん.TDG","【クッソー☆】霊夢と魔理沙のチョコ咀嚼☆口移しチャレンジ","ガバ雀物語.",".kfp","HIKAKIN TVにシャム出演！","退職して人生をsyamuに賭けた中日帽子こと高木くん","巨兵王アメガイガー","浅野ニート","ロッキングチェアに座るLMINU",".sp6",".oklhm",".smbr","黄金バラマキされそうで怖いっす","アンチの人達とカーチェイス！","Big (素人)Seiyue","合気ッ!マン研","１４歳　黒魔法使いです","ホモ(海東)と見るジオウ次回予告(29話).diend","ホモと見る大人気ジャンル【小説家になろう原作】アニメOP集","よかった、これ でかいけつですね","Splatoon","ゼノブレイドク","ミンチドリルの回転はゆっくり １回転目","【BBPS","【シャニマス","シャドウバース","【ラミィキューブ編】東北きりたんと多分10分で分かる名作ボードゲーム","野獣先輩キュルル説",".quadruple","ＮＹＮとＩＣＧの一発当てよう","問題の会見シーンを逆転裁判っぽくした"
,"異常性癖　巨乳首絞めプレイ ２件目（69マンＳＥエックス　ゼＥＲＯ）","それ行け!Halycon☆","ホモと見る石浜真史演出のOP・ED集.masasi"
,"新HSI島"
,"砂の泉南"
,"ザ・エンドってね　比較","けものフレンズ2の何が問題と感じるのか","【はじめの一歩２】筋力０からヘビー級王者を目指す 第６回"
,"ひなた打打打打打打打","正しいけもフレ2の叩き方","ホ　モ　ク　ラ　フ　ト　.mp"
,"30番道路神社.gsc"
,"ホモは二度死ぬ"
,"シルヴァディ先輩GB","ホモと見るけものフレンズ2"
,"【sekiro/隻狼】"
,"じゅうべえくえすと メガトンコイン","ホモと見る小説家になろう原作アニメOP集"
,"【Fallout3】RTA（Glitchless, Any%）","ホモと見る岡田麿里の功罪（功編）","HOMORO"
,"溜まってんなオイ（タンパ）"
,"秘密結社T.I.S「端末」","エンプラちゃん","ホモと見るアニメパラッパラッパー.lovetogether","迫真チャン☆プリ部　ザ・ラストダンスの裏技","ドリ淫夢クラブZERO","【モデル配布】たてながアリス.hnshrk","大物Youtubeｒ【りんくうの星】観覧車乗ってみた（夜の部）【りんくうタウン】"
,"ヘラジカ様のかわいい！！グルメレース！！"
,"【けもフレ２】アライさん違和感の謎【１０話】"
,"迫真解体部 レッキング狂う裏ワザ　1章"
,"【怪談心玉袋","スクラッシュドライバ","ホモと見る実験"
,"ダダダダダイナモ感覚"
,"【RTA】The Witness Any% 29分21秒【配信アーカイブ】","三人に勝てるわけないだろ！(アリーナ) .fantastic three","ヨッシーストーリー Any%","【ApexLegends】 ","【MAD】サクラコンバット6 ～エンディングへの戦火～"
       ,"【MUGENキャラ作成】大人になるSZ姉貴.release"
,"DIYUSHI","UDKの奇妙な冒険～ハートのクッキー☆は砕けない～" 
,"月刊RTAランキング　2019年2月号","けもフレ2はなぜここまで酷評されるか","【ゆっくり実況】縛っているようで何も縛っていない輸血饅頭が初見ブラッドボーン【Bloodborne】part"
,"【ゆっくり解説】神次次元ゲイム　ネプテューヌRe;Birth3　TrueEnd　RTA　4時間2分19秒　Part","RTA風　【SFC】真・女神転生","鬼忍降魔録 ONI  RTA_Testrun 2時間05分11秒 part1","うそなきをしながらポケモンヌードル醤油味を食べるオーダイル","【FEH絆英雄戦(ふたりで筋肉体操)】マッスルウェーブ","【ゆっくり】丹沢大野山攻略RTA 01:29:55","ほなら音シャム　が　オリジナル曲を歌ってくれたよ「メルト」","中日帽子","大先輩に歯向かう長門","ホモとみるバカ.henshin","ぼく　ドRUもん","淫夢怪聞録「対話する霊」.Sidestory","やっぱsyamu...忘れられないんだよ...","迫真ワイルド","のけもの","えごいすと","変身音","Sugar姉貴のBB劇場","テレ東と化したひで","【BB先輩劇場】淫夢ではじめるAviUtl","迫真ISLANDERS.mp8","ホモと聞くジャムおじさん怪文書mp.666","イエイヌちゃんGB","イナズマイレブン3","【RTA】カスタムロボV2","GO様と学ぶAviutlでたのしいコラ作成","かばんちゃんとかばんさん別人説","【料理RTA】だし巻き玉子　挑戦してみた","【DOA6】Nicoちゃん対戦日記 "
,"作りかけのゲームを紹介する動画"
,"【けもフレ２】10話までの感想と考察【ゆっくり】","三十路過ぎてからの無理のない格ゲー作成日記 第十五回"
,"（ゆっくり実況）バイオハザード HDリマスター　RTA　ジル編　ベストエンディング　1:57:15 Part2","とってもかわいい主人公から色んな要素を抜いてみた♪","けものフレンズ２　第11話考察＋回収されるべき伏線","aiueo700最新動画　「平成30年4月1日　集団ストーカーのことを広めるビラを配りに行きました」","呪詛","じんぞう","バイオハザード RE:2 クレア表 ハードコアS","くろうゆめVSくろうゆめ母","金･暴力･SeX！ HAGEがヤらねば誰がヤる！！","Beep Beep like a sheep☆","【けものフレンズ2】ネタ＆コラ画像まとめ","ノムリッシュジクウドライバー.RIDERTIME","梁非凡(リャンフェイファン)","HUMAN-LE","ガンジョンレイプ！過去を始末した先輩.EtGPart","【はじめの一歩２】筋力０からヘビー級王者を目指す 第７回","はむはむ♪（ゆっくり実況）パート","【ゆっくり感想】これからの「けものフレンズ２」について考えよう【11話】",".psm","ホモと見るプリパラの","寵愛マンモス部","黒有無一派","ふにゃふにゃどかちゃんよん.hff","【高画質】Cort署","俺らさこんな材料屋嫌だ","ガンガーフレンズR（走るともえちゃんYB素材+おまけ動画）","下北沢流　迫真種族デッキ部","exvs","タドコロ電機","【けもフレR】イエイヌの回想シーンっぽい曲.flp","レンタルカートでゆっくり車載 part.","【Terraria】","【開発中】疾風戦記フォースギア外伝よみ","昆虫博士2RTA 38分10.9秒 part1/2","【ゆっくり実況】鬼神降臨伝ONI","藤原岳縦走RTA　敗退動画","【93円】Case #9_02:53.90【RTA】","りん「わかば…おまえの事が…」","スポンジボブが喋って大喜びする先輩BB","アンリミ","おはなばたけ☆.1-1","THE バックオー","MKMMKT姉貴の手BB.mp4","SWS","時王","ホモと見るホモが歌うJO","aiueo700最新動画「平成30年","Stickerbrush Symphony","death by shrine","ともえちゃんでME!ME!ME!","SEXandVIORENCEwithMONEY(前編)【唐澤貴洋生誕祭】","ホモと見るホモを嫌がるもやし(自動字幕付)","鬼刃☆","ホモと見るガチ厳選したOP集.eight","【けものフレンズR支援曲】旅路の果てに","SFC版DQ5　おかん縛り","【Paladins解説】ゆかりさんのチャンピオン解剖録 P","昆虫博士2","【再走ＷＲ】Elebits(エレビッツ) ","【ゆっくり実況】『Call of Cthulhu Dark Corners of the Earth』","ヘラジカ様のかわい","トムとジェリーと野獣先輩","ニコニコ動画の再生数を工作する方法を暴露します","しぜんこうえん☆.GoldSilver","カイナシティ神社.Remix","フケ粉雪","朝ごはんの食パンを食べるつとむBB","lucas","【Snaker.io !】スネーク初見【初見実況】","ApexLegends","迫真錬金術・皆の笑","北朝鮮神社.ak47","ホモと聞くジャムおじさん怪文書2mp.666","【星のクッキー☆】白き翼ダイナブれうド☆","【手描き】シロ塗りの高級車に追突した馬","さ　か　な　地　獄.mp","【RTA】怪盗ワリオ","【ゆっくり実況】不可思議なダンジョン2を懐かしみ","【ゆっくり】ざくざくアクターズ・解説","【ウイポ９】ただの初見プレイ 第","【FEH","SFC版DQ6RT","ゆ う さ く 弟","syamu gameに憧れた少年","ゆうやみハウス","温泉を掘り当てる死相姉貴","【ゆっくり虐待】","ダンケルク","Star Heven","ノムリッシュ大江千里"
,"スーパーマリナ3 ワスレチックステージ☆☆☆"
,"とうふさんウチ姫","【悲報】鋼兵さん復活する","迫真ディサイシ部の姉ちゃん","【けもフレ2】きゃくほんかのセリフ！から見える虚無回の理由【11話】","【RTA】海腹川背Fresh! 体験版 15:56","【RTA】還願 DEVOTION 1:10:01:33 part","【ROA】全力の早口でオ●ニーレビューしてみた","【AREA4643】","DEAD OR ALIVE6　 動画勢・体験版勢になるためのゆっくり解説","オウガバトル64　RTA","【SofTalk解説】3分でわかる特性図(ダイオード)","鬼忍降魔録 ONI  RTA"
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
        emoji='images/150/150gundam_w_omae_wo_korosu.png.png';}
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
        emoji = chrome.extension.getURL("images/emoji_yukkuri/"+icon_yukkuri[parseInt(Math.random()*100)%icon_yukkuri.length]);
    }

    //----------------------------------------------------------------------------------------------------------

                img = emoji;
                img = chrome.extension.getURL(img);

                $('.___comment-text___2cPL0').last().css('border','0.5px solid gray');
                $('.___comment-text___2cPL0').last().css('border-radius','5px');
                }

            $('<img style="'+style+'" src="'+img+'">').appendTo($('.___comment-number___2Qws3').last());

            
            $('.___comment-text___2cPL0').eq(-1).css('zoom','190%');
            $('.___comment-text___2cPL0').eq(-1).css('font-weight','bold');
            $('.___comment-text___2cPL0').eq(-1).css('z-index','999999');

            document.title = $('.___comment-text___2cPL0').eq(-1).text();
            
            //document.title=parseInt(Math.random()*100)%icon_yukkuri.length;
            $("input[name*='comment']").attr('placeholder',$('.___comment-text___2cPL0').eq(-1).text());
        }

        
    },400);

    //--------------------------------------------------------------------------------------- End of Interval
    // .___comment-number___2Qws3  (span)
    

    $('li>a>span:contains("アツマール")').remove();
    $('li>a>span:contains("動画")').remove();
    $('li>a>span:contains("オススメ")').remove();
    $('li>a>span:contains("アプリ")').remove();
    $('li>a>span:contains("ブロマガ")').remove();
    $('#siteHeaderNotificationPremium').text('プレ');
    $('li>a>span:contains("ランキング")').remove();

    $('.siteHeaderNicopo').remove();


    $('span:contains("この番組ではゲーム")').remove();

    //$('.___setting-button___2e-c9')[0].click();
    
    $('[name*="akashic"] > div').eq(0).trigger('click');

    $('[class*="___banner-panel___"]').remove();
    $('.___banner-anchor___1zYuh.___anchor___2kVIr').remove();
    $('___billboard-ad___lwBmz').remove();
    
    //$('.___ichiba-launcher___g14ej').remove();
    document.getElementsByClassName('___freezable___35A1Y')[0].remove();

    //document.getElementsByClassName('___ichiba-launcher___g14ej')[0].remove();
    $('.___watch-page___2883Z.___ga-ns-watch-page___1i9u1.___page___2CAWS').css('background-color','gray');
    $('.___page-header-area___2oCkk.___page-header-area___2Nj8h').hide();
    $('.___program-head-area___2nDDN').hide();
    $('.___player-head-area___uwCnZ').hide();

    var n1='y';
    var n2='x';
    var choice;
    var v;
    var hideshow=0;
    $('<button id="hides" style="background-color:#5697ff;color:white;zoom:90%">hide</button>').prependTo($('.___program-statistics-list___3NXNa'));
    $('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:40%">読</button>').prependTo($('.___program-statistics-list___3NXNa'));
    //$('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:130%">読み上げ</button>').prependTo($('.___tags___3UhZH'));
    $('<button id="pop" style="background-color:#5697ff;color:white;zoom:90%">p</button>').prependTo($('.___program-statistics-list___3NXNa'));

    
    $('#pop').click(function(){
        window.open(window.location.href,"window" , 
            'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width='+$("video").width()/1.5+',height='+$("video").height()/1.5+',left='+$("video").width()*2.7+',top='+$("video").height()/3+'');
        window.open('about:blank','_self');
        //setTimeout(function(){
        //    $('[aria-label*=\'フルスクリーン\']').trigger('click');
        //        },3000);
        });

    $('#hides').click(function(){
        if(hideshow==0){
            $('.___player-foot-area___33YVl').hide();
            $('.___player-display-screen___23EE9.___player-display-screen___NL_yL').hide();hideshow=(hideshow+1)%2;}
        else{
            $('.___player-foot-area___33YVl').show();
            $('.___player-display-screen___23EE9.___player-display-screen___NL_yL').show();hideshow=(hideshow+1)%2;}
        });


    $('#yomiage').click(function(){
    if (typeof yomi ==='undefined'){}else{return}

    $('#yomiage').css('background-color','green');

    yomi = setInterval(function(){
        
        n1=$('.___comment-number___2Qws3').eq(-1).text();
        //console.log('--n1:'+n1);
        if(n1!=n2){
            
            n2=$('.___comment-number___2Qws3').eq(-1).text();
            //console.log('--n2:'+n2);
            console.log($('.___comment-text___2cPL0').eq(-1).text());
            come=$('.___comment-text___2cPL0').eq(-1).text();
            
            /*
            console.log('999999999999999999999999999999999999');

            choice = Math.floor(Math.random()*10)%4;
            if(choice==0){v='+SASARA'}
            else if(choice==1){v='+TUTUMI'}
            else if(choice==2){v='+TAKAHASHI'}
            else if(choice==3){v='+ONE'}
            
            */
            if(0){
            console.log('99999999999999999  NG   99999999999999999');             
             }else{
            
            v='';
            //navigator.clipboard.writeText(v+come);//-----------------------------------------------
            $(document).attr("title",come);

            }
        }

    },600);

    });

    $(document).keyup(function(e) {
     if (e.key === "]" ) { 
      
      $('button[aria-label*="フルスクリーン"]').trigger('click');

                            }
    });

/*

    var n1='y';
    var n2='x';

    $('<button id="yomiage" style="background-color:#5697ff;color:white;zoom:130%">読み上げ</button>').appendTo($('.operation>.operation_row').eq(1));

    $('#yomiage').click(function(){
    if (typeof yomi ==='undefined'){}else{return}

    yomi = setInterval(function(){
        console.log($('.js-commentText').length);
        n1=$('.js-commentText').length;
        
        if(n1!=n2){
            n2=$('.js-commentText').length;
            console.log($('.chat-body>.js-commentText').eq(-1).text());
            console.log('999999999999999999999999999999999999');


            if($('.chat-body>.js-commentText').eq(-1).parent().parent().attr('class').includes('is-ng')){
            console.log('99999999999999999  NG   99999999999999999');             
             }else{

            var $temp = $("<input>");
            $('body').append($temp);
            $temp.val( $('.chat-body>.js-commentText').eq(-1).text() ).select();
            document.execCommand("copy");
            }
        }

    },600);

*/

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("twiani")){
    $('body').css('background-color','#eaebed');
    $('#main').css('background-color','#f7f7f7');
    $('[class*="alignnone size-full wp-image-"]').css('zoom','170%');
    $('.mtpro-content').css('padding-bottom','10px');

}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://kissanime.ru")&&url.includes("Special")){
    //document.getElementsByClassName("specialButton").click();

    var f =$(".specialButton").attr('href'); 

    open(f,'_self');
    
    
}

if(url.includes("https://kissanime.ru/Anime/")&&url.includes("id=")){
        //waitForElement('#videojs_html5_api'){

        var data = $("#my_video_1").attr('src');
            //var data  = window.location.href;
        
        //open(data,'_self');
        window.location.href = data;
        //$('.logo').on('mouseover',function(){window.location.href = data; });
        
        $('html, body').animate({scrollTop:(0)}, 100);
        $('#my_video_1').css('width','100%');
        $('div[style*="font-size: 15px; width: 854px; display: inline-block;"]').prependTo('body');
        $('div[style*="float: left"]').prependTo('body');
        $('#divMyVideo').prependTo('body');

        
        //$('a[style*]').remove();

 }
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("https://kissanime.ru")&& !url.includes("Special") ){

    if(typeof done ==='undefined'){
    var done = new Audio( chrome.extension.getURL("sfx/diablo2/-----gold.wav") );
    }

    done.volume = 0.3;
    done.play();

    /*
    var block_list=[
        'Ball Heroes',        'Fight League',        'Laughing Sal',        'Everlasting Immortal',        'Nozomi In The Sun',
        'Fairy Tail',        'Inazuma Eleven',        'That Time I Got',        'Isekai Quar',        'Attack No',
        'Diamond no Ace',        'Ball Super',        'Dai\'s Great',        'King of Prism',        'Love Stage!',
        'Precure',        'Burst Gachi',        'Black Clover',        'Pokemon Sun',        'Okoshiyasu,',
        'Boruto',        'Sword Art',        'Crayon',        'Mars',        'One Piece',
        'Monster Strike',        'Blade of Demon',        've Conan',        'Joshi Kausei','Soul Land 2nd','Cardfight','Mob Psycho','In The Beginning:','Karakuri C',
        'Future Card','Beyblade',        'Stellar Trans','Jewelpet',        'Bonobono',        'Meiji Tokyo Renka',
        'Youkai Watch',        'A Certain M',        'Magica Emi','Aikatsu',        'Kiratto P','Shinkansen Henkei',
        'Layton\'s',        'Kemono Friends 2',        'Dog Days','Fruits Bas','Overlord','t Study',
        'Owarimonogatari'

        ];

    for (var index = 0 ; index < block_list.length; index++) {
            var name = '.items>div:contains("'+block_list[index]+'")';
            $(name).remove();  
        }
        */

        setTimeout(function(){
        $("div[id*='divAds'").remove();

        for(var h=0;h<$('a[href*="#"]').length;h++){
                $('a[href*="#"]')[h].click();    
        }
        
        $('.banner').remove();
        //$('a[href*="#"]')[1].click();
        for(var q=0;q<$('.divCloseBut>a').length;q++){
                
                $('.divCloseBut>a')[q].click();  
        }

        },70);


    $('span').hide();
    
    //$('img[style*="opacity: 1; float:left"]').hide();
    $('img:contains("src")').hide();
    
    $('.barContent.episodeList').find("a").attr('target','_blank');
    //$('.listing').prependTo('body');
    //$('html, body').animate({scrollTop:($(document).height()/1.5)}, 100);

    $('img').hide();
    $('div[class*="d6db"]').hide();
    $('div[class*="mn-"]').hide();
    $('#tab-trending>div>a>img').show();
    $('.items>div>a>img').show();
    $('.barContent>div>img').show();
    $('#disqus_thread').hide();

    $('h1').css('zoom','50%');
    $('h3').css('zoom','50%');
    $('.barTitle:contains("nnouncement")').parent().remove();

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("rapidvideo")){
    //$('span').attr('zoom','0');
    
    $('#videojs').trigger('play');
    
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
if(url.includes("www.kisscosplay.moe")||url=='www.kisscosplay.moe'){
    //if(url.includes("www.kisscosplay.moe/cate")||url=='www.kisscosplay.moe'){
    //alert('started');
    if(!(url.includes("/1"))){    $('body').html($('.row').parent().html());   }

    if(url.includes("www.kisscosplay")&&!(url.includes("categ"))){
        
    window.open($('.btn-danger').attr('href'),'_self')    }

    if(url.length>50){

        $('.alert.alert-info').remove();
        $('body').html($('.row').html());
        $('body').css('width','95%');
        $('img').remove();   }

    //$('<div class="loading" id="overlay" style="position: fixed; display:block; width: 100%;height: 100%;top: 0; left: 0;right: 0;bottom: 0; background-color: rgba(0,0,0,1); z-index: 0;" > </div>"').appendTo('body');
    //$('#overlay').on('click',function(){$('#overlay').hide();$('#masthead').css('opacity', 1);});
    //$('div[id*="smac"]').remove();
    $('img[src*="gif"]').remove();
    
    //$('#content>.container').eq(0).hide();
    $('tbody').hide();
    $('center').hide();
    $('.imgs>iframe').hide();
    //$('div:contains(smac)').remove();
    $('[valign*="top"]').remove();

    
    //$(ss).appendTo($(".navbar navbar-inverse navbar-fixed-top"));
    

    //if(window.location.href.includes('moe/')){


    //$('#overlay').hide();
    /*
    $('a[style*="width:160px"]').remove();
    $('div[style*="position: relative"]').remove();
    
    $('#banner*').remove();
    $('#iframe_movie_ad').remove();
    //alert('s');
        */
    //alert('end');
}


if(url.includes('com/embed')){
    
$('.ytp-chrome-bottom').css('top','20%');
$('.ytp-left-controls').css('zoom','600%');
$('.ytp-left-controls').css('height','100px');

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  ex-hentai

if(url.includes('javy')||url.includes('tube8')){


$('.video__thumb>a').attr('target','_blank');
//$("td:contains(>)").on('click mouseover', function () {
//    document.location=this.firstChild.href
//});
$("figure>a").attr('target','_blank');
if(url.includes('video')){
  $("video").play();  
}
//
//$("a:contains(>)").on('mouseover',function(){$("li:contains(>)").trigger('click')});


$('.icon.icon-arrow-right').on('mouseover',function(){open($(this).attr('href'),'_self')});
$('.icon.icon-arrow-right').css('zoom','170%');

setTimeout(function(){$('.vjs-big-play-button').trigger('click');$("video").play(); },1000);

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
       $("a:contains(>)").click();
       $("li:contains(>)").click();
       window.open($("a:contains(>)").attr('href'),'_self');
       //$("a:contains(>)").trigger('click');
   }
});


}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  ex-hentai   nhentai
if(url.includes("exhentai")||url.includes("e-hentai")||url.includes("nhentai.net")  ){


$('[class="stdbtn randomPage"]').css('zoom','300%');

if(typeof done ==='undefined'){
var done = new Audio( chrome.extension.getURL("sfx/diablo2/-----gold.wav") );
}

done.volume = 0.3;
done.play();


if(url.includes('/g/')){

}else{
    
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
       $("td:contains(>)").click();
   }
});
}

$('<img id="n_mirror" style="width:200px;height:20px;display:inline" src="https://nhentai.net/favicon.ico">').prependTo('.gl1t');

$('.gl1t>#n_mirror').click(function(){
    open('https://nhentai.net/search/?q='+$(this).parent().children('a').text().slice(0,-9),'_blank');    
    
});


$('.tag-container:contains("Art")>.tags>a').css('color','red');             // nhentai
$('.tag-container>.tags>a').attr('target','_blank');                        // nhentai

$('.next').on('mouseover',function(){ 
    $(this).css('color','red');
    $(this).children().trigger('click');
    document.title = '次のページへ';
     });       // nhentai
$('.previous').on('mouseover',function(){ $(this).children().trigger('click') });   // nhentai
$('.cover').attr('target','_blank');

$('#blist').remove();

//window.open('https://anotepad.com/notes/5wxm94', "window" , 'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width='+$(window).height()/7+',height='+$(window).height()/2+',left='+$(window).width()/1.7+',top='+$(window).height()/7+'');
//alert($('.gt>a').eq(2).attr('href'));     //$('.gt>a').eq(2).attr('href')
$('tr>.tc:contains("artist")').click(function(){window.open($('a[id*="ta_ar"]').attr('href'),'_blank')});
$('tr>.tc:contains("artist")').css({'color':'red','zoom':'300%'});

$('tr>.tc:contains("group")').click(function(){window.open($('a[id*="ta_gr"]').attr('href'),'_blank')});
$('tr>.tc:contains("group")').css({'color':'red','zoom':'300%'});




var string = '<input id="blist" style="zoom:150%" type="button" value="Block List" >';
var string2 = '<input id="block" style="zoom:150%" type="button" value="Block Item" >';
var string3 = '<input id="block_items_default" style="zoom:150%" type="button" value="Block Item Default" >';
var string4 = '<input id="block_items_default" style="zoom:150%" type="button" value="Block " >';  // nhentai

var string5 = '<input id="showeng" style="zoom:150%" type="button" value="ENG " >';  // nhentai

var string6 = '<input id="show" style="zoom:150%" type="button" value="show " >';  // nhentai




$(string).appendTo($(".ip"));

$(string3).appendTo($(".ip"));

$(string).appendTo($(".menu.left"));
$(string4).appendTo($(".menu.left"));  // nhentai
$(string5).appendTo($(".menu.left"));  // nhentai

$(string2).appendTo($(".ip"));

$(string6).appendTo($(".ip"));


$('#blist').click(function(){

        window.open('https://anotepad.com/notes/5wxm94', "window" , 
            'menubar=no,location=no,resizable=no,scrollbars=no,status=yes,toolbar=no,width='+$(window).height()/7+',height='+$(window).height()/2+',left='+$(window).width()/1.7+',top='+$(window).height()/7+'');
            //window.moveTo(20, 1000);
    });



$('<div class="loading" id="totop" style="position: fixed; display: none; width: 4%;height: 100%;top: 0; left: 0;right: 5%;bottom: 0; background-color: rgba(0,0,0,0.4); z-index: 0;" ></div>"').appendTo(document.body);
$('<div class="loading" id="overlay" style="position: fixed; display: none; width: 3%;height: 100%;top: 0; left: 95%;right: 0;bottom: 0; background-color: rgba(0,0,0,0.4); z-index: 0;" ></div>"').appendTo(document.body);
$('#overlay').show();
$('#totop').show();

$('.gl3t>a').attr('target','_blank');

$('#overlay').on('click',function(){document.documentElement.webkitRequestFullscreen();})
$('#totop').on('click',function(){$('html, body').animate({ scrollTop: 0 }, 'fast');})
//-------------------------------------------------

$('[class="gl4t glname glink"]').parent().removeAttr('href');
$('.gl4t.glname').click( function(e) {
    e.preventDefault(); 
    
    $(this).css('color','pink');
    //var c = $('.video-item-container').text();
    var c = $(this).html();
    //c.select();
    //alert(c);
    if($(this).html().includes('[')){
        copyCirtcleNameToClipboard($(this));    
    }else{
        navigator.clipboard.writeText('     "'+$(this).html()+'",');
    }

    return false;
     } );

var elems = document.querySelectorAll('.id1');

//var url  = 'https://docs.google.com/spreadsheets/d/16KGGKMAabBOGpyzI-FXUVS_RdGV4z8uE2z_1ZkUwSpI/edit#gid=0';
var url = "https://anotepad.com/notes/5wxm94";


        
$('#nb>div').eq(4).css('zoom','170%');


//alert(block_list);
    
$('#block').click(function(){

navigator.clipboard.readText().then(  function(data){ //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    
    if(data.includes(']')&&data.includes('[')&&data.includes('"')){

        data = data.split('7777')[1];
        data = data.split('7777')[0];
        //data.replace(/&quot;/g,'"')
        while(data.includes('&quot;')){
            data = data.replace('&quot;','"');    
        }
        //data = data.replace(/&quot;/g,'"');

        while(data.includes('&#39;')){
            data = data.replace('&#39;',"'");
        }
        while(data.includes('<br>')){
            data = data.replace('<br>','');
        }
        while(data.includes('amp;')){
            data = data.replace('amp;','');
        }   
        //data = data.replace('(Bleach)','Bleach');
        //data = data.replace('"(Bleach)",','');

        //navigator.clipboard.writeText(data).then(function() {})

        block_list = JSON.parse(data);

        var length = block_list.length;
        //alert(length);
        for (var index = 0 ; index < length; index++) {
            var name = '.gl1t:contains("'+block_list[index]+'")';
            $(name).remove();  
        }
    }});

});
//-------------------------------------------

$('#block_items_default').click(function(){  // exhentai list  7777
        console.log('remove items');
        block_list = [    
            "[Oppai Daisuki Tarou]",        "[ZNN",     "[まるだっしゅ]",     "[NAS-ON-CH",     
                "[Tanpopo",     "[CIRCLE FOUNDATION",       "[Ishikawa Pro",        "[C-taro]",
            '[Ribbon Super Kikaku]',     "Ofuro / Kamikazetiger / Lionxie",     "[Rinri Kazuki]",       "[Shiawase Kyouwakoku",
                "[DonkouAressha",       "[Hibitokeru",     "Magnificent Sexy Gals",     "[Kemoyuru",
                "[Otona no Marushiki",      "[Rocket Chousashitsu",
                "[AFJ (Ashi",       "[AFJ(Ashi_O)]",        "[Yumemi Soft]",        "[Okumori Boy]",
            "[yonaga]",     "[Juna Juna Juice]",        "[Studio SKB",      "Makino Akine)",        "[Doujin Kappa]",
            "[Nakimushi Jack",      "[Bicocattu",       "[R-IN",        "[Bgatasoubi",'[MOBRIS(Tomoharu)',
                "[ωantaro]",        "[Ryuusei Potech",      "[VISTA (O",        "[VISTA(O",
                "[Tansanshounen]",      "[Nikuzon Shugi",       "[Angyadow",'(Haikyu',
            "[Maria_System00]",    "[MoonRevenge]",'Bizarre Adventure',        "[Sabashi Renya]",      "[GT(Tsukimigon)]",     "[GorugoMoon",
            "[Jidouhanbaiki",       "[Meguroteikoku",       "[NanokaH]",
             "[Atelier Kaguya]",     "[Dynamite moca]",      "[IRIE]",       "[Tsujimo ga Machi ni Yattekita",
            "[Hone to Kawa S]",     "[Maron Head]",     "[Kamishiki",       "[Joshi Shougakusei Daisuki Club",
                "[dollaya1919]",' [Totempole','[Tarakan','[Aobashi(Hyakkin', '[Aobashi (Hyakkin','[I/H/R]',' [Arts Graffiti',
            "[Raku.",       "[Byakuya",     "[Piyotama",        "[Bokuhitori",      "[maguro.",     "[knuckle chop",
            "WatariNaomi",      "[Azawaratte Iitomo",       "[Sorasuta",        "[Nekorondoru",'[Socha-ya',
            "[Sakeitiba",       "[Youma Kachie]",       "[Chococornet",     "[Usacastle",     "soccer",     "[QUDA (Qudamomo)]",
            "[Stan Goigobitch]",        "[Hanakowi",        "[Kyantama Land",       "[Shuumatsu Koujou",
            "[Valdam]",     "[Dobert]",     "[Jongotei",        "[Poyopacho",       "[Hijiri Tsukasa]",     "[group yuenao",
            "[Kumameshi-ya",        "[Mikihime]",       "[H9]",     "[Kuzukago no Gom",     "[Amagaeru]",       "[AkioTakami]",
            "[BoysAsia",        "[Aidikara",        "[Tantan",      "[Kinomoto Anzu]",      "[Denkin",      "[Himekawa Akira]",
            "[Shibata Kozue]",     "The Girl That Wet the W",     "激よわサキュバスのパコ",        "[Methonium]",
        "[Mucha Koubou",        "[Honda Koumuten",              "[人外&獸人",       "[Bunbonian",       "[Isshi]",
        "COMIC Ananga Ranga",       "[Daihonei",        "[C-Line",      "[Tairyo-tei",      "[Nisiarea",        "[ORANGE CHANNEL",
        "[Dogu-Sensya Storm",       "[Mosquito Man]",       "[COUNTER-CENSORSHIP",
            "[Fuusen Club]",        "[Fumitsuki Sou]",      "[Harugumo",        "[Fuji-han]",       "[Ee, Honto da yo?]",
        "[Otaku no Youjinbou",      "[SERIOUS GRAPHICS",        "[enuma elish",
        "[オタクの用心棒",         "[Shoshi Magazine Hitori",      "[Koishiya (","[Koishiya(",
        "[Chocolate Addi",      "[Koppamu]",        "[Jamming]",        "[Yasudajuku",      "[Pukkara-dou",     "[Kaiten Sommel",
        "[Motchie Kingd",       "[Studio Woruto",       "[GIRLS RESIDENCE",     "[Momiyama]",
        "[TenYati]",        "[Eguchi San]",     "[Mada Maniau Kam",      "[Thirty Saver Stre",      "[Nanbou Hitogakushiki",
        "[Sudou Factory",       "[RapidRabbit",     "[Murasaki☆Nyaa]",      "[16kenme",     "[Iguchi Senta",        "[Mikenekohanten",
            "[Mousou Bijutsu",      "[Zenra Restauran",     "[Mikandensya",     "[Toriaezu(kari)",      "[Mizutofu",
        "[Takenoko Gohan VF",       "[Yamada Gogogo]",      "[Mifune Seijirou]",'EROGROS',      "[Gaikotsu no Spar",
        'UP Up E-cup',      "[AERIAL RAVE",     "[Amagashi",        "[K.A.D",       "[グレートキャニオン",
        "[山田ゴゴゴ]",      "[Daylight",     "May The Best Man Win",     "Secret of Shinkari Onsen time",
        "[Takenoko Gohan, Buaifamu",     "Linking! Super sinker",       "[CHINZURI BOP (Chinzurena)]",
        "[Jikahatsudensho",     "[Neko Pantsu",     "[Torimeshi",       "[Musashi Daichi]",     "[Rakko]",
            "[Mozu K]",     "[KAWAZOKO",        "[鴉の巣]",        "[Mitarou Teishoku ",       "[Gantai Critical",
        "[Tyoujiya Zanntou",        "[Hakkindo",        "[Cent Millibar",       "[Pollinosis",
        "[nininini",        "Takagari Mitsuru",     "[KB (htg)]",       "[KB(htg)]",        "[Manpuchi",
        "[Utahime ",        "[Sugareya Shoute",     "BEN237",     "Cross dresser(女装子",      "[Tamanegiya",
        "[Lunatic Traveler",        "[Kuromame Mugicha",        "[P Kikaku",        "[C-cut",
        "[C.R's NEST",      "[Mashiro no Hihoukan",     "[StrangeSagittarius",      "[Kyomu no Uta",
            "[MISSING PARK",        "[Happy Present",       "[Setoran, 110",        "[ASG-Project",
            "[Kurokami Studio S",       "[Tateyoko Issen",      "[Konekotei",       "[Muoto Lab",       "[Douganebuibui",
        "[Nikutai Gengo Club",      "[Yumeno Miya",
        "Dragon Ball",      "[Mahou Rikigaku",      "[Karukan ",        "[Light Pink",      "[Kouchaya",
        "[Joibo no Juunin",     "[WEST ONE",        "[Algolagnia",      "[Honey QP",
            "[Osada Kaname]",       "[White Lolita",      "[halleseed]",      "[halleseed]",
            "[EINSATZ GRUPPE",      "[Markmanez]",      "[Gekkou Tei ",     "[Urakan]",     "[Kugami Angning]",
            "[M's I's",     "[Yururuka-dou",        "[zen9]",       "[Horsetail]",      "[HellDevice",
            "[Namusoubyou]",        "[Sui Sui Works",       "[SEAFOODGUNDA",
        "[Datsuryoku Kenkyuukai",       "[Joyful(","[Joyful (",     "[E-lse ",      "[Totsugeki Wolf",      "[Orenoi",
        "[Hyaku]",      "[Hyaku]",      "[Tokei Usagi]",        "[Ameshoo",     "[Matsuri Gensou",      "[ATEOYH]",
         "大沼信一",        "[Himawari Endan",      "[Gensou Seimeitai",        "[TSF no F",        "[rux]",
        "[Anthology] Bishoujo Shouk",       "[mico3han",        "[AXZ (","[AXZ(",       "[Oonami Youko]",
        "[tyibin]",     "[ciaociao","TSF F-yea",
        "[Hiroi Heya",     "Angel Halo Orig",       "[CS-FC",       "[Meshikutteneru",      "[ESSENTIA (",
        "[ESSENTIA(",       "[Kaiyuu Kikaku",       "[Go to]",      "[rannero]",
        "[Urusai Kokuen",       "[Momonchu",        "[SaitamaShintoshi",        "[Ryobashi]",       "[徐大寶]",
            "[089taro,",        "[Karino Kei,",     "[Futotta Obasan]",     "[Feather]",
        "[Nanatsuki no Seika]",     "[Kichiku Koubou]",     "[Winter Garden",       "[WICKED HEART",        "[Fundoshi]",
         "Kyouhaku original illustration artbook",      "[MugenCanvas",     "[Harigane Shinshi",        "[Take me Outsid",
        "[Izayoi no Kiki]",     "[Miyamoto Yuu]",       "[Salt Peanuts ",       "[Shotaian",        "[Esora note",
        "[Kami no Misosiru",        "[Kami no Misosiru ",       "[Kitsuneya",       "[Oberkochen",
            "[Majimeya",        "[Rinjuu Circus",       "[Juuryoku Dou",     "Love Coffret Magic",
        "[Menteisho",       "[yogurt (","[yogurt(",'tarmine18',
        "[Rikka]",     "Car Trouble",       "[ShirokuroParetto(Kazuya)]",       "[Tears39 (Sorai Shinya)]",     "[Ote(Usako)]",
        "[Ote (",       "[Lonely Church",       "[Navi001",     "[A.V. Tokkoutai",      "[Nenneko Tanuki",      "[Kuchen Sirup",
        "[Kuchen Sirup",        "[Chocolate Jam",       "[hentaiworks",     "[Heisei Radio Denk",       "[STAR PARLOR",
            "[Namezou]",        "[Shouchuu MAC",        "[Upagoya",
        "[Miyazaki Maya]",      "[Kuroi Mono",      "[Tiny potato",     "[Hibi Kirari Production",      "[Dainyu Dougumo",
        "[Donut Ike",       "[Citron no mori",      "[Oneekyou",        "[Karumaya (",      "[Studio Tattoo]",
        "[Nitiniti Sowa",       "[Masta Umi]",      "[Iroito]",     "[Neko Rus",        "[FRESH FRUITS",
        "[OS tokku",        "[ARCHF (",     "[Macchadokoro",        "[Sound Sticker",
            "[obsession! ",     "[Nigeru Support",
        "[Maru Tendon",     "Last seven days",      "[Kemono Dream]",       "[crimson]",     "Elf Princess Strike",
        "[Ichikawa Gekibansha",     "[Hiyashi Asia",        "[Moon Wort ",      "[Kigou to Zenchou","[Studio H.A.O",
        "[Dekopan (","[Dekopan(",       "[EBA]",        "[Entelekheia",     "[Entelekheia",     "[Hitsujima Hitsuji]",
        "[Planet (purisa",      "[Planet(purisa)]",     "[如月rey]",      "[Barumishu (Ronri)]",
        "[Dressblackheulee",        "[WIREFRAME ",      "[valssu ",             "[Zahhatorute",     "[OKINA]",      "[U-Jin]",
        "[日々草話]",       "[MDG Kingdom ",        "[Sansui",      "[Windtone",        "[Fujitomomo",      "[FINAL FRONTIER",
        "[PAPEPOX2]",       "[Circle Taihei-Tengoku",       "[Mercurochrome ",      "[NeoSeporium ",        "[Futanaya ",
        "[Neo Ultimate Works ",     "[Retiisha no o Hirune ",       "[HORIC WORKS Shu",     "(South Park)",
         "umimasta",        "[Gedoudan ",       "[doge]",       "[Enueeru]",        "[Ichiko]",     "[rbooks",
            "[秘芽はじめ]",      "[Yusura]",     "[Come Through ",       "[smocle",      "[Studio SFC]",     "[Kaiki Dennou",
        "(Miura Iota)",     "[Parupunte ",      "[EXtage",      "Mou Ii Desu",      "[LOLIC SYSTEM",        "[Nakanoku Kur",
            "[Zariya Ranmaru]",     "[Marinconia",      "[Ranchiki ",       "[ともじょー]",      "[sakifox]",
            "[Sensouji Kinoto]",        "[もみじ]",        "[Studio 49ers ",
        "[Wappururun]",
            "[keepON ",
        "[Choujikuu Yousai Kachuusha",    "[RORITORA!! ",       "[Studio Z-Agnam ",
            "[Nyoninka Kenkyuujo (milda7)]",        "[Yonsai Books ",       "[Hetalearts ",     "[French letter ",
            "[Ouji ",       "[0725co ",
        "[rocomani ",        "[Kereno Teikoku (Kereno)]",        "[Emade.]",        "[Fukurou Naru Tori]",
        "[Re-vival ",       "[Mumeiya]",                "[Ika]",        "[Takahashi]",      "[Status Doku ",
        "[Ikameshi Shokudou ",   "[FAT]",       "[Satou Marumi]",       "[プリ坊",     "[Hallucigenia ",
        "[倫理一輝]",       "[Hicoromo Kyouichi]",      "[内緒]",     "[一ノ瀬つづき]",     "[式神くろ子]",      "[倫理一輝]",
        "[MC(ホノオノ)]",       "[yumemibox ",      "ANGEL Club",       "[黒門虫治郎]",      "[Walpurgisnacht ",
        "[Guhan Shounen ",      "[atelier MUSTACHE ",
        "[Flaming Dragon (Bouto)]",     "[Bikkuri Gyouten ",        "[tp! ",        "[cpi (ajoea)]",
        "The wrong side of midnight",       "[Aizawa Shin]",        "[Bird Forest ",      "[Stapspats ",        "[Kurumaya ",
        "[Chateau le dos ",     "[Umesuke ",        "[Murasakiiro no Yoru ",        "[Shan Maryland",
        "Buu in heat",      "[Vanilla Ninja ",      "[HIYOCCO ",        "[Aida.",
        "[rbooks(STYX)]",       "[Nakafusa Momo]",      "[しまシュー ",      "[なめぞう]",       "[Onikubo Hirohisa",
        "[Dozamura]",       "[森見屋",       "[Pupumofudou (Momo, Takoo)]",        "[Hirekatsu]",      "[Edoin]",

        "[PalePink! ",      "[shoco]","(Rakudai Ninja Rantarou)",     "After tournament",       "[GOHAN]",
        "[Katatema Dou",        "[Hakukoukai",      "[Suishin Tenra]",      "[筧あさと]",       "[Senba]",      "[Nakigara ",
        "[BooBooKid ",      "[Nazonomu Tairiku",        "[Grenade ",        "[Pon Takahanada]",     "[Wawomidasu ",     "[Yucchris]",
        "[Fukashinsu]",     "[Nikuiro Ribbon",      "[Seisou Taiki ",       "[TSF Mousou Chikusekijo ",     "[C-Line ",
        "[Tanuking Sleep ",
        "[Haniwa Mania ",     "THE+ 催眠触手教師",        "[Kasumi Ryo]",     "[Okashi Tai ",     "[Gyokusaijima ",       "[Ekitai no Tomosha",
        "[Fuka wa]",        "[Beartopia ",      "[Harumankai ",     "Dragon tail striping",     "[Suna]",       "[Asatani Kotori]",
            "[Uninigumi ",      "[Kume (Minakami Riku)]",       "[Endless Requiem",     "[OgOfWitch ",
        "[Yajirushi Key ",      "[Kurumi Namiki ",      "[Toriya ",     "[kimamani ",       "[CRAFT (Kiliu)]",      "[Rush Rise Line",
                "[Hatomame",        "[A-mania9's ",     "[Category426 ",        "[Denden-dou]",     "[COMIC KINGDOM ",
                "[OFF SIDE ",       "[Big Mouse",     "comic KURiBERON",        "[Koukotsu Panda",      "[caburibbon ",     "[ananan ",
        "[Akuten Soushin ",     "[Hyper Houbokujou",        "[Hyper Houbokujou ",       "[Youmu no Shio",
        "[Bread Bread ",
        "[Studio Vanguard ",        "[miyubi (kiichi)]",        "[BEN237]",     "[Marumieya ",      "[DIN]",        "[Suizokukan ",
        "[Sol・i・taire-Publishing",      "[Wabi Sabi Wasabi",        "[Popeo ",      "[Tetrapod Melon Tea",      "[Jinoriya ",
        "[ROCK CLIME ",     "Kotobukiya (kotobuki)",        "[Cocoa Holic",     "[rbooks]",     "[SA-Ki)]",         "[Puchimaple ",
        "[真スベラーbot",     "[KEBERO Corporation",      "[Aomayu ",      "[Arahabaki ",    "[Carn]",       "[Butazuraya Seinikuten ",
        "[Charle Hunter",       "[Charle Hunter",       "[Charle Hunter",       "[Studio Vanguard",
                "[Shatodasso ",     "[MARBODON 3:16",       "[wonder T.P",      "[Aztec Theater",       "[Sugajima Sator",
        "(Nintama", "Jouge Kankei",     "[Harukichi]",      "[Subesube 1kg (Narita Kyousha)]",      "[Subesube 1kg (Narita Kyousha)]",
                "[GASOBooK!! (Matsumomo Mahiru)]",      "[Pineapple Tours]",     "mirada furtiva",      "[Pineapple Tours]",
                "[Pineapple Tours]",        "[Circle Nuruma-ya (Tsukiwani)]",       "[Beast Trail (Hibakichi)]",
            "(Yamazaki Kana)",         "[Kai Makoto]",     "[Chapedizo2",       "[NakayoShi KoyoShi",       "[NakayoShi KoyoShi",
                "[Efuya (Mess",     "美麗新世界",        "[Subesube1kg ",        "[PIXPOPS! ",       "[Romance Bancho and Katatemadou]",
            "[Dou-Chikikure",        "[Shadan Katsudoh (Kyuusuikei)]",       "[Namanama Shandy Gaff (nf4)]",
            "[Peach Candy ",  "[Drops!]",       "[Heppoko Youchien",        "[Tometo and Chitomura]",       "[5/4 ",
                    "[dog-ear",     "[M's Works",       "[korokoro:P ","[Himehachi]",
            "[BH]",     "[BLUE BLOOD'S (BLUE BLOOD)]",      "[Chukara Coffee (Kiyo Mori)]","(Rakudai Ninja Rantaro",  
        "[M.S.M",       "[Halcachanel]",        "[maple-go]",       "[Shogota]",        "[Aizome Gorou]",       "[Uziga Waita]",
        "[Okashitai", "Buu's Bodies",       "[Amatsukami]",     "Finding Family",
        "[Catapira(Meromo","[KillerBambi","[Tohno]","[Morimori Runrun","[BindMix]","[Ai wa Kurayami",
        "[Imomaru.","[Shosekido","[Kuyuriga","[Puru Metal",
        "[Hirame Jichiku","[Nishiarai]","[Crazy9","[Handful☆Happiness","[MC(煮豆)]",
            "[Sansute(Osa)]",       "[Abaretabi(Suke6)]",       "[(Mome)]","[Keikeikei L","[R-WORKS",
            "[Okujou no yukkurisu]",        "[Tenkafubu Rengou]",       "[A Yellow Aurora","[Suichuu White",
        "[Kantou Usagi Gumi (Kamitou Masaki)]",     "[TeaIndian]",      "[Piccolo Studio",
        "[SG (naoko)]",        "[Hakudaku Sinsi]",      "[Neko Sensei]",        "[Taka Pon]",       "[HennaSwitch(Tsubasa)]",
                "[CHARAN PORAN (Nekono Matatabi)]","(Ookiku Furikabutte)",      "[Misonasu",        "[SamuraiLockers(Chimosuke)]",
        "[Iota(Karasaki Umiko)]",       "[Goen(Goendama)]",     "[mk(7)]",      "[m-style(m)]",     "[AnikiOtokodo(Kirigakuretakaya)]",
        "[Pikahamu(Yukinoson)]",        "[Laboratory#09 (Tsukigata Rossi)]",        "[Tohno]",      "[Misaki (Mda Kki)]",
            "[Keisotsu na Ana",     "[Tohno]",      "[Mizore Nabe",     "Kion kemono Star",
                "[Kino Hitoshi]",       "[Botamochi no Utage (Nayuzaki Natsumi)]",     "Maids Graduation",
            "[Gantai Shoujo Chudoku (Nakada Rumi)]",        "[Muchakai (Mucha)]",       "[Imaani]",
                "[Imaani]",     "[HOGEGE (Dara)]",      "[Kei Kei Kei Loan (Kei)]",     "[Nacchuushou (Amazon)]",       "[Tetsu no Otoshigo (Chirorian)]",
            "[Fugudoku (Katou Fuguo)]",     "[BLACK SOUSAI STUDIO]",        "[Satou Chagashi]",     "[Tobuchikara",     "[maple号]",
            "[Anoprimal (Anoshabu)]",     "モリタカ、シノ、カムイ",        "[Nagato Koujirou]",        "[NCP (",       "[NCP(Meria, Fuyo)]",
        "[MC (Sado)]",      "[(KURO)]",     "[Murano Inuhiko]",    "[MC (",     "[Plumy Snow (Umesato Yukino)]",
        "[ninelives (222)]",        "[Hisagoya (Momio)]",       "[Pintsize (Vanilla Coke, TKS)]","[Garakuta ga Oka",
        "[Perceptron (Asaga Aoi)]",     "[Marui Maru]",     "[NCP(",        "[ptislands (ptai)]",
            "[chin]",
        "[Boufuriya (Madarame Ichirou)]",       "[MS12(Nippori)]",      "[B.B.T.T. (Yamamoto Zenzen)]",
        "[Killer Bambi (Matsumoto Inaki)]",     "[Torikick]",       "[ぼうふり屋]",      "[SideM(Miyamotoikusa)]",
        "[hcom(Kigetu Miya)]",      "[Milk Sawakai]",       "[Akarui SM (akasin)]",
                "[casis-kabosu (Aria.)]",       "[Chinchintei (chin)]",     "[Naruko]",     "[Ato Nana Fun (Roki, Rindou)]",
                        "[Crazy9 (Ichitaka)]",      "[Kokuten no Sato (Kamisae Ryouya)]",       "[Sakaiya. (Kozirow)]",
                            "[てろりんソフト]",        "[Momoneko Doumei (more, Purapa)]",     "[Shirokuro Aniki (Sanden)]",       "[Panda 4gou (Shima Kyousuke)]",
                            "[Amagasa Touge]",      "[Ugeman (Ugeppa, Aiyama Toshikazu, RT.)]",     "[Hikarinattou(Hikota)]",       "[kaoru ya (Katsutoshi)]",
                                "[Eringitoro Salmon (chanmoe)]",        "[Kanidouraku (Kanibasami)]",       "[Kaseijin (Kurakami Yuma)]",
                                        "[KASEIJIN (Kurakami Yuma)]",       "[DreamingAnt (Ninose, Houjun)]",       "[Morio]",
                                "[takayamon (Ooe Maki)]",       "[PLATONiCA (Nyorubee)]",       "[全自動公衆便女♂]",       "[Yotayota Honpo (Yonyon)]",
                            "[C.R's NEST (C.R )]",      "[Misaki Yukihiro]",        "[No Future]",      "[Studio Katsudon (Manabe Jouji)]",
                                "[Kokuten no Sato (Kamisae Ryouya)]",       "[rbooks(鐵喰)]",     "[DL Mate (Kuroie)]",
            "[OuiOui (Chris)]",     "[Non]",        "[Okashi na Denpa (Denpanic)]",     "[KEBERO Corporation (Various)]",
        "[Jidouhanbaiki(TorikiCooya)]",     "[Abeya (CoQ10)]",      "[Meishounantoka(Hatoko)]",     "[Knucle chop(naco)]",
                    "[Takeya(takenoko)]",       "[Bocchi Koubou (rutubo)]",     "[Nihonkai (Hansen)]",
                            "[Noushuku Kangen Teikoku! (Nekookaji Tayo, S, Yoshida)]",      "[Rokuyaka]",       "[Abe Tsukumo]",
                                    "[Sengoku Joketsu Emaki (Chinbotsu)]",      "[IDIVIDE (GAMMA CHAOS)]",      "[Yokohama ZZA Koubou (kswazza)]",
             "[380 (Sabawo)]",       "[SG(naoko)]",     "[Rubi-sama wo Agameru Kai (Rubi-sama)]",       "[Works makes evolution]",
            "Pony's Bridle",       "[Mayoineko (Nakagami Takashi)]",        "[Yosutebito na Mangakaki (Tomoki Tomonori)]",
        "[NCP (Electric Sheep)]",       "[ほろー]",        "[Kuroihi]",     "Cyberman 2 -",        "[Gekidan☆Onigashima (Shimayu)]",
                "[Hatten Tojounin]",        "[Hy-dou (Hyji)]",      "[アヤ]",     "[maguro. (Yukina)]",       "[GRGR* (Kano)]",
                        "[Death Presso (Hanamura Shuuzou)]",            "[Sushipuri (Kanbe Chuji)]",        "[Konnyaku Nabe (magifuro Konnyaku)]",
                        "[Kuyuriga(Katsutoshi)]",       "[弐星猫助]",       "[Himeshibori (YAMATO)]",       "[Sakaiya (Kozirow)]",
                         "[CLUB-Z (Hinata Yagaki)]",     "[Negoya]",     "[Mattari House (Aitsu)]",
                        "[DOUX (-A)]",      "[Wainable (Shimo Yamashi)]",       "[himeshibori]",        "[Aku no Himitsu Kessha DDD (Various)]",

        "[Etuzan Jakusui]",     "[Haraguro Tenshi (Narukami)]",     "[kaseijin(kuramoriyuuma)]",        "[Shirokuroaniki(Sanden)]",
        "[kaseijin(kuramoriyuuma)]",     "( 然) ",       "[Kaseijin(kuramoriyuuma)]",        "[Oh!saka Spirits (Aiyama Toshikazu, Ugeppa)]",
        "[nu-]",      "[DreamingAnt(Ninose)]",        "[ShirokuroAniki(Sanden)]",     "[HoneyDrunkard(MisakiAkira)]",       "[Haragurotenshi(Narukami)]",
                "[Fairy Pink (Asano Akira)]",       "[Shingyo]",        "[The Nation of Head Scissors]",        "[Minion]",
                        "[Zigeunerwizen (Yamanisi Senmitu)]",       "[plantain (Nichii)]",
                "[Zigeunerwizen(Yamanishi)]",       "[C-type(10nin)]",      "[Wakatobi (Wakatobi Tyakku)]",     "[Okano Hajime]",
                "(Bakusou",      "[Antadare]",       "[Dekunobou]",      "[96Panda]",        "[Kurono Masakado]",        "[Okano Hajime]",
                        "[KURUBUSI-KAI (Shinshin)]",        "[Tatsunami Youtoku, Yamazaki Masato]",     "[QUESTION? (Kumaki Toshikazu)]",
                        "[Goma Saba (Natsuo Monaka)]",      "[Joibo no Juunin]",        "[ATARU]",      "[OoeMaki]",
                "[GOJITA]",     "[Anta Dare]",      "[DreamingAnt (Ninose)]",       "[Tail Spot (Urekemo LaLa)]",       "[NEO'GENTLE]",
"[悠木渓吾]","(Inazuma Eleven)",        "[KARZ]",       "[Shinya]",     "[Momonekosha]",        "[Akira Himekawa ]",        "[Girl's Maniax Original",

        "[Pintsize]",       "[Shiitake En (Yoku)]",     "[IncluDe (Foolest)]",      "[Fuusen Club Kuroshiki!]",
                "[Hataraki-Ari]",       "[M-10 (Kurokawa Mio)]",        "[Ebitendon (Torakichi)]",      "[Souma]",      "[Nobishiro]",
                        "[Escape!]",        "[W no Honnou]",        "[ETERNAL WORLD (zero)]",       "[NTRMAN]",     "[Neko Melonya (Kurokawa Ryu)]",
                                "[AQUA CREATE (Rokugou Karasu)]",       "[Makoto Shiyaka]",     "Umudura er",
                "[Jimetsu Kairo (Kazuki)]",     "[Gomashio]",       "[Group Cybele, Studio BAKI]",      "[gymno (Kiriya)]",
"[KURO]",                     "[Zenpou Chuugaeri Kick (DSK)]",    "[Mugen Honpo (Mugendai)]",     "[Studio Berserk (Doctor Rei)]",        "[Happydrop (Bell)]",       "[samon]",      "[NTR System]",   "ビッチとビッチのお話",     "[Idenshi no Fune (Nanjou Asuka)]",         "[Kiliu]",      "[Oideyasu Honpo (Various)]",       "[Sunagawa Tara]",              "[Tategami 5-chome (Sasamaru)]",
"[Tsutsumorien (Tsutsumori)]",     "Addicted to Love After School - Choko Kabutomaru",    "[Usagi no Oyatsu (Amatsuka China)]",        "After 15",         "Aka no Ori","Boku dake no Kimi",       "Aiyoku no Canon - Shinba Rize",        "Choroize Jigoku - Ike Reibun",    "Close Your Eyes - Inariya Fusanosuke","Deep Bloody Night - Kine",      "Do Not Call Me Your Master",        "Boku wa Sakana",  "[Puchi-ya (Hoshino Fuuta)]",     "[LUCK&PLUCK!Co. (Amanomiya Haruka)]",    "Double Snake",       "[Ke-kiyasan (Keiki)]",      "Rental Girls ",       "[Daidaros]",       "[Kitazawa Sangyo (ktzw)]",     "[Blue Percussion(ブルー・パーカッション)]",    "[REQUEST]",       "[Tamakin Shouten]",        "[Freedom Prophet]",        "(Kurodou Katana)]",     "Sis-Con -",   "Watanabe Asia -",      "[Murasaki Nyanko Bar (Vae)]",      "[Saketanuki no Kakushigura (Saketanuki)]",  "ナミルさんがんばる",           "[T.K.H.K (Hayami Aya)]",       "[Kinoko House (Zizyo Tyouzyo)]",    "[Saitou Satou]",          "[Rin]",        "[Kijin-ro]",    "[musuBi]",            "[Nanairo Senpu-ji (Hosikawa Tukimi)]",     "Outsiders - ",
     "Pillow Talk",    "[MC (to-ya)]",      "[Interu mikan]",       "[Wamusho (Wamuko)]",       "[WILD STYLE (Ross)]",
     "Renai Tsuu",    "Togainu no Chi","Cooking the hero and companions",       "[Bushi]",          "[ORANGE☆CHANNEL (Aru Ra Une)]",        "[牙フェチ (ジュン)]",     "[Michomicho Koubou (Michomicho)]",     "[Mechanical Code (Takahashi Kobato)]",     "[Noppiqui-Naranai (Hatsune)]",     "[Dirty69star★ (Soga)]",    "[Fushinshi Sakusendan (NAiK)]",            "[Sunyiru (Shuurin)]",      "[Ishi Kenpi (Issi-13)]",    "[602 (QooYa)]",        "SK8poison",       "[amemizu (Natsuki Yuu)]",      "[Yomamagoto]",    "[June's Rain (Kyuuri)]",            "[Siya]",   "[Lee Hwa, Yang San Bak]",      "[Hoshino Ryuichi]",            "[LOOPTHELOOP! (Herurun)]",     "[100yenMoFA (Mirino)]",        "[Redbell (Akazawa Fuyuki)]",       "[GETTSU (Getchu)]",    "[Otake Nangoku Boys (Otake)]",         "[Luke House]",     "[Blessing Fall (Hukokukyohei)]",    "[ALPACA Unit (RushSoldier)]",         "[Amuai Okashi Seisakusho (Matsuzono)]",        "[Nikuniku Italian (Akikusa Peperon)]",     "[Peach Pie Koubou (Takaha Momo)]",     "[Honey Pharmacy (Fukami Ryou)]",       "[hanibi land (hanibi)]",    "[Kozue Akari]",           "[Aloe-nano (Nanotsuki)]",    "[Eisen (Asu Oikiru)]",       "[Niwatoritowani (Taiki)]",         "[1UP (Gachonerou)]",     "Leona -",    "[MAN-ROOM (Tokeiya-san)]",         "[Henkuma]",     "Neko-chan",       "[Misaki (Mikemono Yuu)]",      "[office fairy (Kisaragi Mizuka, Kamiryou Kaduki)]",   "[M R O Turbulence (Ranma 1/2)]",         "FMA - Mistake",       "[Takase Yuu]",    "[Onyitei (tirotata)]",          "[Heikoto (Mizuhati Saru)]",    "[Kinzoku Tanukiya (Tanuki)]",      "[Sekai Kakumei Club (Ozawa Reido)]",       "[Trouble Makers (Hijikawa)]",      "[PH-BU]",          "[Sake Ichiba (Shake)]",   "DevilxDev",       "1Devil x",       "[Inakagurashi (Asazaki, Ugou Gou)]",   "Border DJ",         "Crows zero",    "[Maron Koubou (Maron)]",         "[Pritannia (Pri)]",        "[Dangerous Pleasure]",     "[A.S.G Group (Misonou)]",      "[Expecting Everyday]",    "[TSUBO (bov)]",         "[Setoran (Itou Seto, Tanno Ran)]",     "[Tsugumi Suzuma]",    "[μ-CuTe (MAG)]",        "[Soramune (Yuzu Ramune)]",         "[Kaki no Tane (Summer)]",    "[Hoshikuzu Sangyou (Lobster)]",      "[Garakuta Shoujo (Miito Shido)]",          "[Maruarai (Arai Kazuki)]",     "[ST.DIFFERENT (YOSHIBOH)]",        "[NIKKA (Ibara Kinzou)]",       "[Paradise City (Various)]",
"Towako",    "[Showa Saishuu Sensen (Hanauna)]",            "[Otona Shuppan (Hitsuji Takako)]",     "[PUMPERNICKEL (Sumisuzu)]",        "[Melty Pot (mel)]",        "[Lobster]",    "[Taki Re-ki]",         "[Rokumonsen Aratame (Tamahagane)]",        "[Huzinami Koubou (Huzinami Kaoru)]",       "[Libido (Omoutubo)]",      "[Youtou Oniku (Oniku)]",       "[Nagare Ippon]",       "[Silicon Jichou (Condessa)]",   "[Norakurari. (Nemu)]",            "[Shichimen Soka (Sexyturkey)]",                        "[天鵞絨浪漫 (馬場藜)]","[Kazemichiya (Mamo Williams)]",    "[Odenden (Kotori Yuuya)]",    "[Locomocodon (Locos)]",     "[Sister Arc, Classmate Arc]",          "[Gambler Club (Kousaka Jun)]", "[Komedokoro (Yonekura Hisaki)]",       "[鷄卵鷄卵]",           "[Kisou D Koubou (Saiki Efu)]","冲突1",    "[Doku Doku Kinoko (Shinonome 108)]",          "[Haguruma (Gia)]",     "[Ekakigoya Notesystem (Nanjou Asuka)]",        "[Seigou (Seigo)]",     "[Saigo made Anko Tappuri (Akiba Monaka)]",    "[Kunahachiya (Kunasiri)]",      "[Vagina Dentata (Hirota Masatane)]",           "[Kamotamaza (Kamotama)]",      "[IRODORI (Various)]",      "[ふうん、 (川嶋ラジヲ)]",       "[Natsuharu. (Natsuba)]",    "[Divine Fountain (Koizumi Hitsuji)]",                 "[STUDIO HUAN (Various)]","[FULLMETAL MADNESS (Asahi)]",    "[HTSK (Rihito Akane)]",        "[Onna Kishi no Shiro (Hatomizu)]",     "[Jinkenhakudatsu Kougeki (Jinkennashi Tarou)]",            "[Tenya Wanya (Santos)]",    "[Ruibosucha]",            "[Yagisaki Ginza (Yagami Shuuichi)]",       "[Kodanukidou (Tappa)]",        "[TWILIGHT DUSK (Aya)]",        "[CHRONOLOG (Sakurazawa Izumi)]",
"Metamore",    "[Aikokusha (Agobitch Nee-san)]",     "Futori shrine",       "[Ao Hana (Aoi Remi)]",
"oker trap story","White and black",            "[Under The Honey Shine (Ibuki Haruhi)]",       "[BLACK DOCTOR (Kana)]",
        "[Tori]",
"Zanshu GERO",      "[Hadantorque (Torque)]",       "[Azumahito, Takatou Suzunosuke]",          "[D-project (Kurauta)]", "[Bect (Aoume Kaito)]",            "[Ma-kurou]",       "[Caramel Yarou (ky.)]",   "[POETTO (Haryu)]",      "[SNOWDANCE (Yukimai)]",        "[EUNOX (U-1)]",        "[Mituya]",         "[Natsu Haru. (Na tsuba)]",    "[Seken no Katasumi (Kaeruyama Yoshitaka)]",         "[Katatsuki Kei]",      "[F Taku (Anma)]",    "[Kamebeya]",     "[Foxtail (Various)]",          "[Mutekei-Fire (Various)]",     "[Bundosuikou]",    
"Phantom troup",        "[Sigamitsuki Mizuhiki (Noshigami)]",       "[Atelier:Dew (Kurakumo Nue)]",
"[HONEY QP (Inochi Wazuka)]",       "[Chimeibyo (Akabei)]", 
" (Shingeki no Kyojin)",        "[Anakura (Komu)]",     "[sandglass (Uyuu Atsuno)]",        "[Jigizagi (Ai Takurou)]",    "[Inoridou (Inori)]",
"ATTACK ON GIRLS",      "[Seinen Shinshi Doumei (Nakamura Syumitto)]",      "[Seishun no 11 Page (Umani)]",    "[VASHADOW (VAJO)]",         "[Tekokids (Nekubila)]",        "[Nagi]",       "[Group NEKO (Various)]",       "[Makoto shi ya ka]",       "[12KAFFEINS (Shidaka Akikuni)]","Kinoko DX no jikken-ba",  "[Dorayakiza (Hayasaka)]",      "[Sangeriya (Hidarikiki)]",             "[Tsurutsuru Pain (Pikeru)]","[Naitou2 (F4U)]",     "[Roubai-tei (atahuta)]",       "[CANVAS+GARDEN (Miyasaka Miyu)]",  
"R18 MIKAERE",      "[COOL BRAIN (Kitani Sai)]",
"(Sakuragawa nā) ",
"【EBGR】",       "[Cool Brain (Kitani Sai)]",    "[Fantastic Whale]",        "[BoxBear (GomTang)]",  "Kanata no hikari",     "[Azuma Kaya]",     "[Izumo Gingatei (Luke)]",    "[Honjou Rie]",           "[CTK]",        "[Inumiso]",        "[HONEY QP (Inochi Wazuka)]",       "[MuMuTheLion (MUMU202)]",      "[THE FLYERS (Naruse Mamoru)]",    "[GaRyuuYa (NAZ)]",          "[Popochichi (Yahiro Pochi)]",    "[Tatintotarte (Anu)]",       "[Inyu-goya (Inyucchi)]",           "[WXY COMICS]",     "[milky strike (Tachibana Hisui)]",    "[Love & Sekkan]",           "[Tai Kamaboko (Kaizu)]",    "[Hitsuji Kikaku (Muneshiro)]",                    "[Shimofuri Green Meat (Midori Niku)]","[Monstera (Mato)]",     "[Kazeuma (Minami Star)]",      "[Atelier Maso (doskoinpo)]",       "[STUDIO Hamachigumi (Mizuki Hitoshi)]",        "take Gonzo","[hokuro ryuseigun]",          "[Noppera Koubou (Mujina)]",        "[Dudedle Studio (Kurono Rokurou)]",    "[ALPS (Various)]",                 "[Studio Awake (Various)]","[BlueMage (Aoi Manabu)]",
"Manmosu Marimo",       "[Mushimusume Aikoukai (Nakamura Yukitoshi)]",      "[長崎いろは邸 (長崎光)]",    "[Hachimitsu Romance (Eno Yukimi)]",           "[Multi-Type (pasdar)]",        "[SGsix (Saigi)]",      "[Nekokabe (GB)]",      "[杏ちゃん★会長]",        "[Kaguya]",   "[Satou Kuuki]",      "[Sawao]",      "[Nibiiro no Sora (Isuke Gratanity)]",      "[Lonely Island (Hitori Jozu)]",            "[Nanashi Sankakkei (Ns)]",     "[Moreriikusu (More)]",     "[Nekodotto (Sakura Yukimi)]",      "[SHINING (Shaian)]",       "[Remora Works (isaki)]",       "[Pleats Time (Nunnu)]",        "[Katooya (Katou Jun)]",    "[Rorerore-ya (Roreru)]",           "[PINK no CHAO! (Shikage Nagi)]",    "[Usotsukiya (Oouso)]",            "[Haizaki Mejiro]",     "[Umekko Dou (Umekko)]",    "[Girls Empire (El)]",          "[Mocomocodo (Nukunuku Batten)]",    "[Aratoya (Arato Asato)]",     "[無限屋本舗]",          "[Miburi (Miga)]",    "[Rip@Lip (Mizuhara Yuu)]",       "[Saperon Black (Sape)]",           "[Yamamoto Zenzen]",        "[Xiaohua]",        "[Ame Usagi (Amedamacon)]",     "[anything (naop)]",        "[Studio Mizuyokan (Higashitotsuka Raisuta)]",      "[Fujimiya Siryu]",     "[Lemonburst]",     "[Team Shuffle (Trump)]",       "[Noraya (Setouchi Kurage)]",       "[Magic Private Eye (Mitsuki Mantarou)]",       "[Ende der Welt (Hakuho)]",     "[Nekojarasare (Yuasa)]",       "[Chocolate Latte (Ichiyo Moka)]",      "[Buranko Shinshi (Minamino Sazan)]",       "[Hitsujino]",      "[Minamino Sazan]",    "[Kuroneko Smith]",      "[IndexACG (Bar.Peachpit)]",            "[Studio Himawari ( Ooi Masakazu)]",        "[ROUND-HOUSE (Kikkawa Ryounei)]",      "[Slime Kikaku (Kuriyuzu Kuryuu)]",     "[SilverWorld (Chaos)]",    "[Urakata Honpo (SINK)]",           "[Henreikai (Various)]",    "[Musashi-dou (Musashino Sekai)]",      "[Haitoku Sensei]",         "[Sankaku Apron (Sanbun Kyoden, Umu Rahi)]",    "[Akae Shirou]",        "[FUMN (Nagatani)]",            "[NewRemix-x64- (Kashima Shou)]",       "[Toyo]",       "[NARUHO-Dou (Various)]",           "[Seikinkan (Nae)]",        "[Rayzhai (Rayze)]",        "Ejima Eri",    "[Gotouroku-Goku (bioZS)]",     "[ひょころー]",      "[Katamichi Kippu (Mikage Sekizai)]",       "[PLUM (Kanna)]",       "[Chiru]",      "[MOGURA COMPANY (Mogunosukes)]",    "[Rocket Kyoudai (Various)]",          "[Ultra Chikubi Juku (Kayaharu)]",      "[ISTINTO (Kakitsubata Kyiko)]",        "[Hakuto-can (Momose Sumomo)]",    "[Nikuhen (Knisge)]",        "[6-gram (Tsuru)]",             "[Hakushin-sei-Saku-sho (Mokawa)]",    "[Skin-color Golden-water]",    "[Tsurimura (Histamine C)]",         "[Oden Sensei]",        "[Tokaeshina Koubou (Nusmusbim)]",      "[FUEGO (Katou Teppei)]",    "[Shiratamaco (Shiratama)]",           "[RAYLESS]",        "[Tobihizageri (Mumumu)]",      "[odaku (oda)]",    "[Green Bullet (ICO)]", "[Anthology] Cyberia Maniacs",      "[Bitmap (Maeda)]",             "[Sucharaka Knight! (Orita)]",    "[kaz?]",    "[Mikan no Kawa Houchikai no Shinsei]",    "[Aimaitei (Aimaitei Umami)]",                "[OHTADO (Oota Takeshi)]",    "[T.4.P (Nekogen)]",      "[Omoshiro Burger (Tokuda Shinnosuke, Leonardo, Suitekiya Yuumin)]",   "[Akuochisukii Kyoushitsu (Akuochisukii Sensei)]",       "[NISHILL]",            "[OSHABAN (Sasahiro)]",    "[Umadura Grenouille]",          "[Rosetta Stone (Teterun)]",        "[Shungabu (Kantamaki Yui)]",           "[PaopaShip (Asama)]",    "[flowerchildUEDA (FLOWERCHILD)]",        "[BODLEY HEAD (Sonobe Kazuaki)]",           "[Escargot Club (Jyubaori Masyumaro)]",     "[Azuki Yougashiten (Shinsou Comachi)]",    "[Circle Tokomaya (Tokomaya Keita)]",       "[Oremuha X (Kikuchi Tsutomu)]",        "[Koniro Milkiro (Suzuki Shina, Mizuchi)]",    "[yakisoba rengou (Various)]",           "[Ikasumiya (Uchuu ika)]",      "[Granada Sky (Mogiki Hayami)]",        "[H.B.A (Usagi Nagomu)]",       "[Almarosso]",    "[Suiteibuin (Akane Souichi)]",           "[Sumi kara Sumi made (Various)]",    "[Atelier Bord (Various)]",           "[Tsukune-ya (Kakitsubata Tsukune)]",    "[Horikawa Gorou List Seisaku Iinkai (Owari Koga, Horikawa Gorou)]",           "[Chirigami Goya, Fusuma Goten (Shoji Haruko)]",        "[A*bcd (mao)]",    "[ParadiseGom (Gorgonzola)]",       "[ANA (Kichijouji Kitashirou)]",        "[Macicaba (Macica)]",      "[Minasokomori (Macop.)]",      "[Gakushokutei (Watanon)]",     "[TOYBOX, Kujira Logic (Kurikara, Kujiran)]",           "[Nita Ken (Sendou Hachi)]",        "[Ao no Oto (Zarasi)]",     "[Tsurikichi-Doumei (Umedama Nabu)]",       "[Yomosue Doukoukai (Gesho Ichirou)]",      "[Lip Van Winkle (Tokisaka Mugi)]",     "[Nansyu-Koubow (ID-ED)]",    "[Alexi Laiho]",          "(Ichiri)]",    "[ASTRA'S (Astra)]",        "[SPECIAL ACTION FORCE]",
"SEX SMART PHONE",      "[Golden Tube (Ogu)]",      "[Strawberry Milk Studio (Lunaluku)]",              "[Virgin Club (SAPPHIRE)]",    "[NEKOMARUDOW (Tadima Yoshikazu)]",      "[Mokoke (Mokoke)]",        "[Pettanko! (0-G)]",        "[Yumekakiya (Yakumo Ginjirou)]",    "[Satellite Fall (Soutsuki Minamo)]",          "[Tekken Dynamite (Hikeshi no Kaze Zimbabwe)]",     "[kuripod (Tanenashi Kuribo)]",     "[Mokko]",      "[Milts Chaya (Milts)]",    "[MEN'S GJ!! (Tsuna Onigiri)]",             "[Nyanko Batake (Murasaki Nyaa)]",    "[MIDSUMMER MADNESS (Soutyou)]",      "[Payanikov (Kurokawa Kei)]",       "[Dan Oz Lock]",    "[Tsuki no Hikari Keikaku (Yuki Higasinakano, Tokyo Yamane)]",          "[Retro Star]",     "[Totem Pole]",     "[Kurai Nao]",    "[Nanae]",            "[MGW (Isou Doubaku)]",     "[Aomizuan (Erodezain Koubou)]",    "[Star-Dreamer Tei (Staryume)]",            "[Majimadou (Matou)]",    "[ちんコモギ太郎]",      "[Iroamisogi]",         "[Kitsunenomori (Various)]",    "[Yama Okiba (Yama)]",      "[HEAVEN'S UNIT (Kouno Kei)]",      "[Okazu Company (Okazu Yuuichi)]",      "[Roshiman (Masa-nii, KAZUMA)]",            "[HINJYAKU]",  "[morrow]",          "[Curtain no Mukougawa. (Nanaya Tobari)]",      "[MISTER (Hara Nao-to)]",       "[Karasu]",     "[MOJIYA (MOJA)]",    "[Team Almond]",          "[Annon Club (ANNON)]",     "[NAMANECOTEI (chan shin han)]",    "[Nezumi]",     "[LOWHIDE PROJECT (Lowhide)]",      "[Mugen no Tsubasa (Yukineko, ni 3)]",          "[KUMAHACHI]",    "[Onikibitou (Piston)]",              "[ANA (Kichijoji Kitashiro)]","[PH (TAM)]",     "[SONIC WINTER (Tsukishima Takafuyu)]",         "[K.F.D. (Pi-Ero)]",        "[Horikawa Gorou, Risuto Seisaku Iinkai (Owari Koga, Horikawa Gorou)]",     "[Gyoutenriki (Futomaki Tamamo.)]",     "[SABAKUNOSAKURA (Ero Koutei)]",    "[Studio Kyawn (Murakami Masaki)]",         "[Tangerine Ward (Kagamimochi Mikan)]",    "[Ushichichi Bokujou (Mikan Gyuunyuu)]",         "(Awamori Ichitaro)]", "[Sorono-san Chi (Sorono Wa Soro)]",     "[Hijouguchi (TEI-OH-K-TAKAMURO)]",         "[Hijouguchi (DARKSIDE-G)]", "[Suwateria (Ooba Nii)]",          "[Nozarashi (Nozarashi Satoru)]",       "[Kyoten Heichou (Iwai Takeshi)]",      "[Tenma Femio]",    "[Obake Candle]",           "[Ozaki Akira]",        "[肉体言語倶楽部 (デコ助)]",      "[ashitakara-ganbaru (Yameta Takashi)]",        "[DANGEROUS THOUGHTS (Kiken Shisou)]",    "[Toirotto]",     "[Tobuchikara (Toriki Kuuya)]",     "[SeaFox (Kirisaki Byakko)]",           "[apsara project (Mimi Umiu)]",    "[Kyodai Kidou Yousai Kyoushuu (Kamio 96)]",     "[Koniro Milkiro (Suzuki Shina)]",      "[Onemu MEGADEEP (Kotono Jun, Kurashiki Yukie, Tsurugi Wakarou)]",      "[Lip van winkle (Tokisaka Mugi)]",         "[Otogi no Kuni no Soapland (Kurokawa Otogi)]",    "[马户骚酒]",            "[Kokonokiya (Kokonoki Nao)]",      "[West Island (Kure Ichirou)]",    "[Yaboudo Project (Narashino Zoe)]",         "[Sukiyaki Club (Kouji)]",      "[Dohatsu Shouten (Tetsu Kazuna)]",     "[BEAT-POP (Ozaki Miray)]",    "[Yutakadou (Dou Yutaka)]",      "[Sakanahen (Ajino)]",
        "[Circle Kagemusha]",
"[Italian",
"[Korean",
"[English]",        "[Pants Donburi (Shimaki Ika)]",        "[Zekkei Douke (Hazaki Koh)]",      "[Ai no Senshi Mimikaki]",
"[Russian",
"[Thai",        "[Ochikochitei (Tadano Kushami)]",      "[Kai Hiroyuki]",
"[Spanish]",        "[Akikusa Peperon]",        "[Kazan no You]",
"汉化]",      "[Katsuobushi (Horie)]",        "[Crea-Holic (Shiki Hiroto)]",      "[Mutsuashi (Rokkotsu)]",
"[Portuguese-BR]",          "[Hanetuki (Hanetu)]",    "[Kin]",          "[AOI (Makita Aoi)]",    "[INSERT (KEN)]","Fan no Hitori","[FLASH POINT (Aoi Takayuki)]","[Nanashimushi Land (Nanashimushi)]",
"[Amulai Sweet Factory (meito)]",       "[XXkorori (Ko Tora)]","(Touken R",
"[A-KIBA BOOKS]",       "[Milky Way (Hoshikawa Kirara)]",       "[Asanebou Crisis (Akaneman)]",     "[glassrain (garasuame)]",
"[Konnyaku nabe (Yaruku)]",
"[Sakaki Utamaru]",
"[Nayuzaki Natsumi]",       "[Taira Hajime]",       "[Shioya (Shioya Maico)]",
"[Sakura Rakuen]",
"[CUT A DASH!!, Kanmido (Mitsumi Misato, Amaduyu Tatsuki)]",
"[DIEPPE FACTORY Darkside (Alpine)]",
"[Ozaki Miray]",
"[Nekonokone (Takeyuu)]",
"[Premium Bagette (Waterproof-Pidegon)]",
"[Premium Bagette (Waterproof-Pidegon)]",
"[inoNabeTei (inoshishi)]",
"[Dhibi]",
"[Kikurage-ya (Kikurage)]",
"[Mystic Chord (Amarume)]",
"[Genso Metro (Sakuzakura)]",
"[TETRARA (Tokiwa Yutaka)]",
"[Naya (Papermania)]",
"[Coin Toss (Anzuame)]",
"[OOOOOM (Ekimae)]",
"[Paradise City (Ryuu Kai",
"[脳天ばくはつ丸]",
"[Motsu Ryouri (Motsu)]",
"[SAOTOME-Laboratory",
"[Omoshiro Burger (Tokuda Shinnosuke)]",
"[神村]",
"[Milf Shobou]",
"[ハイドラボラトリ]",
"[LOVE ME DO (Natsume",
"[Udo]",
"[nKgr (Oyama)]",
"[CitruSniper (Nyaon)]",
"[Nishimaki Tohru]",
"[SST]",
"[Tonkotsu (Sekiri)]",
"[Poison Gray (Matsuriuta)]",
"[Sakuraba]",
"[Kitazawa Ryuhei]",
"[Yukimidou (Yukisuke)]",
"[Sakuraba]",
"[19nosizima]",
"[Chiba Tetsutarou]",
"[Ajinori (Satou Kimiatsu)]",
"[Blitzkrieg (doskoinpo)]",
"[Senya Sabou (Alpha Alf Layla)]",
"[ Cassis (Yo-ha hina)]",
"[Tsuge Yasuna]","[Menya Okamoto (Kensuke)]",
"[Kurosawa pict (Kurosawa Yuri)]",
"[Abutomato]",
"[Yotsuba Chelsea]",
"[Studio Diamond (Nemui Neru)]",
"[Arubain]",
"[Yamakumo]",
"[Askray (Bosshi)]",
"[Alice Complex (Naganohara Nis)]",
"[Ruu Kikaku (Ruuen Rouga)]",
"[Momofuki Rio]",
"[Hidarite Tarou]",
"[148bpm (Kanon)]",
"[C-O-Two- (Nayoshi)]",
"[Junk Island (RYU)]",
"[smomo]",
"[Kidouchi_Kon's]",
"[tatekawa]",
"[Ooshima Ryou]",
"[KAWAZOKO (Various)]",
"[mofu-outside (Tanmofu)]",
"[Saba miso (Aji no kandzume)]",
"[Denjarasu Yamada]",
"情趣绳子",
"[Pico Pico Labyrinth (Fujisaka Lyric)]",
"[Karasuma Pink Higashiiru (Karasuma Pink)]",
"[Kuro Poplar (Nyakkuru)]",
"[Toratanuza (Atori Rei)]",
"[Green Bullet  (ICO)]",
"[Kaibutsu o Koeta Kaibutsu]",
"[Warabe Chikikure (Doritoru)]",
"[(・_・)]",
"[16 Sai (Pastachin)]",
"[blind alley (Blind)]",
"[Purin Kai Yoghurt (Chiri)]",
"Gajeel getting",
"[Kinugawa]",
"[Hashimura Aoki]",
"[HH]",
"[Izanagi (Otoo)]",
"[Izanagi (Otoo)]",
"[Izanagi (Oto)]",
"[Hoyadori (f)]",
"[Atelier Lunette (Mikuni Atsuko)]",
"COMIC Unreal",
"[Mycology. (ainaryumu)]",
"[Campbell Gichou]",
"[Souda Gumi]",
"[ウルトラ乳首塾 (カヤハル)]",
"[Shiomeshi]",
"[Amazon]",
"ISTINTO (杜若きぃこ",
"Dengeki Otona",
"[Inja]",
"[Hase Yuu]",
"[Tsusan House (Tuduri)]",
"[Yuuki to Twintail (Aria)]",
"[Kachusha (Chomes)]",
"[肉片 (くにしげ)]",
"[aojio (Yaizou)]",
"[白桃缶 (桃瀬すもも)]",
"[Milk Tea ni Satou 4Hai (Kyantaman)]",
"[6-gram (鶴)]",
"[KimMundo (Zone)]",
"Eternally Yours",
"Chapel Of Succubus",
"[I-Raf-you (Various)]",
"[the_orz]",
"[Iida @ Twitter]",
"[Kaiduka]",
"[Zydan]",
"[Asada Okina]",
"[Tree ga Muttsu (Mutuki Shin)]",
"[AMAGI AN IRONWORKS (Ebisu)]",
"[P-POINT (Pikazo)]",
"[Yamada Kou]",
"[Furaipan Daimaou (Chouchin Ankou)]",
"[Neyukidou (Takaku Nozomu)]",
"[ABBB]",
"[Tsuchinoko Kyoukai (Tsunoda Saburoo)]",
"[Grilled Twintail Futon Shop of Black Beauty (Various)]",
"[Sairo Publishing (J.Sairo)]",
"[Kira Maru]",
"[Yashiya (YASSY)]",
"[Kagero (Tadano Kagekichi)]",
"[Ajisaihuumitei (Maineko Ruru)]",
"[Right away (Sakai Minato)]",
"[Tomato Rice]",
"[Polaris (Mihoshi Haruka)]",
"[Mikezoutei]",
"[Kirisaki Byakko]",
"[STUDIO HUAN (Raidon, Shiitakemiya Donco, Azusa Norihee)]",
"[ZIGZAG (Hirno)]",
"[Paradise Lost (Saiki)]",
"[Kaiki Nisshoku (Ayano Naoto)]",
"[Nagomiyasan (Suzuki Nago)]",
"[Current Storage (momi, Pyon-Kti)]",
"[E factory]",
"[Egmi=Aruna (KATUU)]",
"[Majihama. (Mebata Shun)]",
"[Porori]",
"[Sora wa Chimidoro (JACKASSS)]",
"[Maraparte (Kojima Shoutarou)]",
"[Rico]",
"[Mebius no Wa (Nyx)]",
"[Gin]",
"[Danna]",
"Touhou pragmatizer",
"[Digital Lover (Nakajima Yuka)]",
"[Studio Keitoku (Keitoku)]",
"[Kairoudou (Oki Ami)]",
"[Ago (Gotou)]",
"[Chimple Island (Chimple Hotter)]",
"[Kashima Uta)]",
"[Kougi Anmitsu (Ichiren Takushou)]",
"[Sakurakan (Seriou Sakura)]",
"[kurousagi (Kayura Yuka)]",
"[TYT (mos_yen)]",
"[Meiya. (Pururun)]",
"[ami-dabutsu (Ami)]",
"[Alapi]",
"Out of town",
"[Last Day]",
"[Akumenari (Bonnari",
"[Kuro Lili no Heya (Lilish)]",
"[drain]",
"[Aki no Yonaga ni Yoiyami ni (Nagatsuki Rio)]",
"[Yumeizukosya (Hirokawa Kouichirou)]",
"[PINK CHUCHU (Mikeou)]",
"[SweetEdda]",
"Touhou pragmatizer",
"[Kyouretsu Hiyougeka (Beat-kun)]",
"[Youtou Sadamitsu]",
"[Kamirenjaku Sanpei]",
"[minase (Minase Kaya)]",
"[umanicom (Umani)]",
"[Xikyougumi (Sukegai Kurov)]",
"[Rizaru Forest. (Ahchi)]",
"[Ennui-tei (Tsurugi Hikaru, Ousawa Kanata)]",
"[Kurogane]",
"[Nankyoku no Karaage (Kiyu)]",
"[Ginyou Haru]",
"[Mofu Shippo Lab (Nakamura Subaru)]",
"[Kintama Ookami]",
"**Death Bed Storyline",
"[河野透]",
"[Circle Hatorie (Hatori)]",
"[Purimomo (Goyac)]",
"[Hitsuji-1ban-Shibori (Hitsuji Hako)]",
"[Transmorpher DDS]",
"[Crocface]",
"[Funa Time (Yukina Funa)]",
"[Nishida Megane]",
"[Takebouzu (Takepen)]",
"[MünchenGraph (Kita Kaduki, Mach II)]",
"[M-STYLE]",
"[Gouguru]",
"Eremika",
"[Kotee]",
"[Gengoroh Tagame]",
"[Mesu Gorilla. (Tuna Empire)]",
"[Nekonote Shobou (Nekonta)]",
"[Mesu Gorilla. (Tuna Empire)]",
"[@ism (Aono Ribbon)]",
"Yu-Gi-Oh! ARC-V)",
"[JUDGEMENT (Shino)]",
"[Kashiwamochi to Lion (Ren)]",
"[Kashiwamochi to Lion (Ren)]",
"[MG (Mentai)]",
"[Denki Club (Denki Type)]",
"[Frankfurt Gozen",
"[Hyakumangoku (Dairoku Tenmaou Great)]","[Korotsuke]",
"シャイニングプロジェクト",
"[GEM (Uduki Sonowo)]",
"[Stratosphere (Urutsu Sahari, Geki)]",
"[Neko to Hato (Hatoya Mameshichi)]",
"[Takitate (Toshiki Yuuji)]",
"[D-MARCH (Ryuu Kitagawa)]",
"[Hiro-kun to Rodemu",
"[utinotyutai (Niwatori Gunsou)]",
"reed recurrence Chapter",
"Greed recurrence Chapter",
"[Assemblink (Suzuka Sakito)]",
"[MACV-SOG (MAC-V)]",
"[Kachouan (Kachou Masamune)]",
"[Kumatan Flash! (Hanao)]",
"[Ishin Denshin (Yuusa Riki)]",
"[STORM (Saiki Yoshikazu)]",
"[Stratosphere (Urutsu Sahari)]",
"[Shiosaba (Shiosaba)]",
"Otokonoko HEAVEN",
"[Crimson]",
"[SERAPHITA]",
"[Spiral Brain (Greco Roman)]",
"[Anthology] Lunatic Part",
"sample",
"Futazon: Training",
"[Chikadoh]",
"[Higeudon (Sakuramaru)]",
"[Mikaguuland (Mikagura)]",
"[Nijiiro Denryuu (Nijiden)]",
"[Uzuki Karasu]",
"[Alfa126 (Hasumi Elan, Ikasenbe)]",
"[Kill the King]",
"[Akatsuki Souken]",
"[Sakurai]",
"[kebabu]",
"[C-COMPANY (C-COMPANY]",
"[Higeudon (Sakuramaru)]",
"[Rururairai (Annei)]","[Ortensia (Shinobe)]","[Yoru no Benkyoukai (Fumihiro)]",
"小一轮的纯爱女孩",
"[Asaiumi (Asami Asami)]",
"[Tenchuu PIO (SOUCHI)]",
"[Wing Hero (Seiha)]",
"[Kleitos (Ryunosuke)]",
"[Siluman Soft]","[Ochigan (Wabuki)]","[NYTE]","[Shiso Magazine Hitori (Erosheee)]","[Tipoplaza (Tipo)]","[radiocupcake]","[SINK]","[Sakamata Nerimono]","[Consava (Himeno Komomo)]","[Koufuku Iinchou (happii)]","[Usamimi Syndrome (Erutasuku)]","[ZacLock (ZACRO)]","[Otarai Zero]","[Mirakoku (Yasumi Mirakichi)]","[Yukikagerou (KANZUME)]","[Nagashima Chousuke]","[Shivharu]","[Ginto]",
"[02 (Harasaki)]",
"[Miburi (Miga, Izumi Yoshikazu)]",
"[Shichiten Battou (Muska)]",
"[NyankoPi",
"[Great Canyon (Deep Valley)]",
"[Nagiyamasugi (Nagiyama)]",
"Action Pizaz",
"[Morohane. (Tatejima.)]",
"[Akai Muffler (konsuke)]",
"[Miburi (Miga, Izumi Miwa)]",
"[Yoshiura Kazuya]",
"[Tonten]",
"[Rakubi (Meguo)]",
"[Miyubi (Kiichi)]",
"[C.N.P (clone Ningen)]",
"[S.N.L (Syanal)]",
"[Uzigaya (Uziga Waita)]",
"[Imozuru-shiki (Utsubo Kazura)]",
"[ Lotus ]",
"[Nechorapoddo (Nanpuu)]","[Bronco Hitoritabi, Sumi kara Sumi made (Uchi-Uchi Keyaki, Gabyonuno)]","[Märchen BOX (Various)]","[Fukakutei Kuukan (aruva)]","[BOOKS Takada (Yoshi Puu)]","[Wadoukeso]",
"[Egyptsobaya (Taikou)]","COMIC Anthurium",
"[Merkonig]","[Tetsugakuteki Zombie (Nekubila)]",
"[Mebius no Wa (Nyx)]",
"[Chiriakuta (Yaburebouki Akuta)]",
"[Osacanasanteam (Osaexiv, BLACKHEART)]",
"[Mr.OUTSIDE (Tomohara Michiya)]",
"私生，爱到疯狂",
"[Su nagi mo.]",
"[Yaburi Dokoro (Hakano Shinshi)]",
"[Apple Effect (MurasakiO)]",
"[PiyoPit (Piyodera Mucha)]",
"[Secret Scarlet (Takamura Emi)]",
"[Ozawa Kobo (Ozawa Manabu)]","[Poison Squid (Various)]","[ Secret Scarlet ]",
"[STUDIO PAL (Nanno Koto)]","[daisansaburi (aji)]",
"[Kuronekotei (Chibinon☆)]",
"[Yokohama Junky (Makari Tohru)]",
"[Figaro]","[Beniya (Kurenai Yuuki)]","[Pinkch! (Sawori)]","[Saihate-Kukan (Hino Hino)]","[Chihumi Fujii]",
"[Nyoro]","Mother Misuko Mischief in ","[Nagi Wataru]","[Facehouse (Kanichiri)]","[Edogawa Koubou]",
"[Kawaisaw]","[Pinkch! (Sawori)]","[JAPAN (USA)]","[Aurelia (Kurouku)]","[Kasou Genjitsu (Hasekura Noise)]",
"[Tick (Tickzou)]","[Nomucchi]","[Tatsu no Otoshigo (Nozomu)]","[FORTUNA (Kojiro Izuta)]",
"[Mozuya (Mozuku)]","[FlowerBlade (ri.)]","[Yukagenikaga? (Yukagen Tenyu)]",
"[KittyDrop (Chikijima)]","[Ani ga Saru (Takashi)]","[Schatz (Otori)]","[AtsuatsuCOOK","(New Year Kemoket 2",
"[Retroboy (Ono Akira)]","[Meishou Nantoka (Hatoko)]","[RASPBERRY]","[Nakata Akira]",
"[Beast Trail (HIbakichi)]","(Haikyuu!!)","Excel-kun Kansatsu","[Nanashi Shounen (7c)]",
"[Hroz]","The story of a certai","[Uehara Ari]","[KURETEN (Takuma)]","[GASOKU (Naoki)]","(Lordkingu)",
"[Pintsize (Hozumi Touzi, TKS)]","[Yamamoto]","[Morris]","COMIC A-UN","[Kiheitai (Dowman Sayman)]",
"[Shiritsu Puniana Hoikuen (Kiririn)]","[Spongehead]","In love with my mother","[Kinu no Kai]",
"[Shiromochi sakura]","Nyougashima","[Junginboshi (Asahi)]","[Guild Plus (tatsuya)]","[Personal space (Kurota)]",
"[Shiromochi Sakura]","[Metroier (Ikegami Moyuko)]","[Flash Point (Aoi Takayuki)]","Gekkan Tonari no Kininaru",
"[love4sale (mevius9)]","[Junk Center Kameyoko Bldg]","[Rainbow Vanilla (Matsuriuta)]",
"[Tengusa (tokorot)]","[Ribons Nights (Kyouno Aki)]","[SANDAN (Kurun)]","[Vachicalist (Various)]",
"[Wannyan Club]","[CoCoLoCo Note (Cocolog)]","[Das Vierte Reich]","[Masamune Kokichi",
"[白姫リリオ．kaj．黒王女ロゾ]","[G=Kundow (Zakkunpoppu, Dowman Sayman, G=Hikorou)]",
"[Yuuzen Animal Dou (Momiji Yuuga","Tsukikagerou Official ",
"[Nadesico Extacy (Iiyon)]","[Koa (Various)]","[Abarenbow Tengu (Izumi Yuujiro)]",
"[Syosyo Yakkyoku (Momiji Yuuga, Furuta A.)]","[Horii Jingorou]",
"(Honda Negi)]",
"[Kuro Zuishou (Ichimai no Ginka)]",
"[Beast Anime]",
"[ROUTE1 (Taira Tsukune)]",
"[Negitotakenoko (Honda Negi)]",
"[the BLOCK BUSTER Destruction (雷鳴王狂崇)]","[Pumpkin Federation]","[Gotoh Akira]","[Roshiman (Masa-nii)]",
"[Bomb Shelter (Orange Bull)]","[Gamujankī]","[Inoshita]","[Ori-En (As)]","[moffle (mabo)]","[Kemotsubo (Shintani)]",
"[YANCHA CLUB (DOUSAI)]","[Yomosugara (Yomogi Ringo)]","[Me Riko]","[Yotto (yatchi))]","[english]","[Nurumayu (Kazuya)]",
"[Tagame]","[Waffle Sand (Various)]","[Kotatsu de Mikan Chokubai Tokoro (Semahiro)]","[Gehlenite (Ryo)]",
"[Gura Nyuutou]","[Waffle Sand (BMI:36)]","[haochi (Inoshita)]","[Penpen Shutchoujo (Masuda Miyaka)]",
"[Keigai Tengen (Momofuki Rio)]","[Team Shuffle (Various)]","[Guillotine Mozzarella (Gokuraku Jouko)]","[Crystal Capricorn (Hyoukai)]",
"[Chiyokoreito","[Suzune Rai Chikashitsu (Suzune Rai)]","[Prhs]","[Mogura Tengu]","[ADVANCED Twinkle Castle Shinobi Jou GIGA]",
"[Amaamatei","[Silver Ring (Amakawa Ginga)]","[Matatabi Sanjou (HaRu)]","[Jajujo (Jovejun.)]","[Sawada Daisuke]",
"[Eromafia (Edo Shigezu)]","[From Madness (Aki Kyouma)]","[Isocurve (Allegro)]","[Aodouhu (Neromashin)]","[MAI]",
"[circle itaku]","[Eromazun (Ma-kurou)]","[Parin to Wareru (Neyonsan)]","[Jigoku Shinjuu (Toyama Jigoku)]",
"[Ash wing (Makuro)]","[Studio Tar (Kyouichirou)]","[TUMBLE WEED (Itameshi)]","[13 (Atai)]","[Piyotama (Ayana Rio)]",
"【ファンコロ】","[Kocho Kocho Koukou (Bonten)]","[Colorized]","[Niku Ringo (Kakugari Kyoudai)]","[withsoda (Nako)]",
"[Kakumei Seifu Kouhoushitsu (RADIOHEAD)]","[Rei no Tokoro (Kuroarama Soukai)]","[Pometeor (Enotou)]",
"[Heisei Chachamaru Dou (N.O. Chachamaru)]","[Kakumei Seifu Kouhoushitsu","[nWa (","[Pochincoff]","ハルショタ",
"[Matsurija (Nanaroba Hana)]","[ActiveMover (Arikawa Satoru)]","[KAREHANEKO (Himi Taka)]","[Atto (@)]",
"U-JIRO）","[Blue Percussion]","[Ekoekozameraku (Kuroimisa)]","[soko (Kurada)]","[RED (koi)]","[Jigoku Shinjuu",
"[E19700]","[Lagrangian-POINT (Akatuki Tetora)]","[Kimidori (Haru Itoguchi)]","[Gamushara! (Nakata Shunpei)]",
"[ongr (pgb)]","[Camel Rush]","sp3",".R6S","[Nanairo no Neribukuro (Nanashiki Fuka)]","[Damage Yuka R (Afuro)]",
"[Article 60 of Criminal Code (Shuhan)]","[BASIC CHAMPIONS (","[Tanpopo Suisan (INAGO)]",
"[Haechaimu (smomo)]","[DINOGAIZE (Various)]","[Jamboree! (jin)]","[Dangoya (Dangorou)]","[Katamimi Headphone (Ariyoshi Gen)]",
"[Kiyū ]","[Zenda. (nue)]","[Still (TIM)]","[HELLENISM, Gire (Y, Umemiya)]","[Yoke (emya)]","[Pomupomu]",
"FEH Deep Rising","[Zenmai Kourogi]","[BLUE24 (Aoi Taishi)]","[Rofu Pukaj (Nesou)]","[Kasshoku Waisei (YANAGI)]",
"[gabbit]","[Macaron*Sketch (Yukatama)]","[TAOB (Odabutsu)]","[Yami no Naka]","[Inukare (Inuyashiki)]",
"Yokubō kaiki dai 562","[IRODORI (SOYOSOYO)]","[+810 (Yamada Non)]","[ANCHOR (Toroi)]",
"[ONEONE1 (Pepo)]","[Mon Amour. (Wadachi Kururu)]","[Kayoubi (Mor)]","[Nounaihokan (K. K usako)]",
"[Koito Sousakusho (Hinata Mutsuki)]","[HELLENISM (Y)]","[Yohanemu (Fukuzawa Yukine)]","[Human High-Light Film (Shiosaba)]",
"[Amamitu Hakushi (Amamitu Kousuke)]","[Mon Amour. (Wadachi Kururu)]","Canned furry",
"[PandaJ]","[Danna]","[25cm (Morisuzu)]","[downbeat, under the bed (Kirimoto Yuuji, kokokisu)]",
"[Hebereke BLACK7 (Hebereke BLACK)]","[FRACTALE","[KPTM'S (Kurotsuki Kyouto)]","[AmazingSweets (Haruichigo)]",
"[LUCRETiA (Hiichan)]","[OL (Ichii Akira)]","[December-Girl (Juunigatsu Shoujo)]","[TLG (bowalia)]",
"(Takabatake Enaga)]","[25cm (Morisuzu)]","[Keisotsu na Ana (Wacoco Waco)]","I Love You (Pammella",
"[Daifuku (Shouki)]","[7 Men Zippo (Kamishima Akira)]","[MAMICK (Ojihito)]","[Chocolate Synapse (Shika Yuno)]",
"[Hiyori chan)]","[ZiP (Moekibara Fumitake)]","[Inukare (Inuyashiki)]","[BMI:36 / Waffle Sand ( 茄子)]",
"[Netorare Masochist]","[Doujin Mukashibanashi]","[Redgart]","[Crimson Comics]","[Nakayama Shiki Kenkou Tosho (Tada Atsunori)]",
"2D Comic Magazine Otokonoko o Shiriana Kairaku de Mesu Ochi Ryoujoku!",
"[Kori-Kori Koubou (Yosuke)]",
"[Zenra QQ]","[Magudara Kaihou Doumei (Tsukuyomi Sazin)]",
"[Iris art]",
"[INdolence (Yuu Guruko)]",
"[Nanairo Drops (Hayakawa Minto)]",
"[Orita]",
"[Sakurakan (Seriou Sakura)]",
"[kanemasita (Kaneta)]",
"[Remora Works]",
"Jamboree! (Jin)",
"Shimoyama Giruko]",
"[Hase Yuu]",
"Naruho-dou (Naruhodo)",
"[Biroon Jr",
"Saigado (Saigado)",
"[Oda Natsuki]",
"[Yasson Yoshiyuki]",
"[Hazuki]",
"[Ahoge (Satsuki)]",
"Tomo zō[Iwashi",
"Kamepotel (Izuki Jirou)]",
" Gasshuukoku (Momomo)",
"Higedaihuku (Daihuku)",
"[Kinakomochi Honpo (Kinako)]",
"(Hiratsura Masaru",
"Alemateorema (Kobayashi Youkoh)]",
"[ふくらみんと]",
"[JUILLET (Keri)]",
"X∞MODEL (X∞MODEL)",
"Wasukoro (Nukobao",
"Kagiyama Ryuta",
"Chrono Mail (Tokie Hirohito)]",
"[Poncocchan]",
"[Punisher Punishment (Panimi)",
"Kinkai (Eight Linda)",
"[Milk Force]",
"Web Comic Toutetsu",
"(GOOD COMIC CITY 25)",
"Nimame (Nakayama Miyuki)",
"ACID-HEAD (Murata.)",
"yuanyuan",
"[Mazemono Chuui. (Makura Cover",
"[Aiaigasa (Rarana)]",
"Crybaby Method (Hissui)]",
"Yo Nami[]]2 / 24 Haru komi",
"[House Saibai Mochi (Shiratama Moti)",
"Mikkamisaki (Nadzuk",
"[Ozawa Koubou (Ozawa Manabu)]",
"[MULTI VITAMIN (tako",
"[Okina Flying Factory (OKINA",
"[Sorairo Panda (Yamome)]",
"[HeMeLoPa (Yamada Shiguma)]",
"[PoyoPoyoSky (Saeki Sola)",
"[Tatsunami Youtoku, kupa",
"TSK-BAR (Toguchi Masaya",
"Mayoineko (Various)",
" 風船クラブ「黒式！",
"[Albireo 7 (Funky Function)",
"Etoile Zamurai (Yuuno)",
"Rissuinoti (Tentenkingy",
"[BurstBomb.T (TKP",
"[ZakoTV]",
"(KAZU)",
"Gold Ninja (Golden",
"The Sacrifice is a Pregnant Man",
"[VOLTCOMPANY (Asahimaru)]",
"Setoran (Tanno Ran, Itou Seto",
"[AKYS Honpo] ",
"Nanatsuboshi (7",
"Koi Tenshi Doumei (Ai ha Muteki)]",
"[Blackwing (Unico Kasumi)]",
"[Umadura]",
"[Otochichi]",
"Gyuunyuuya-san (Gyuunyuu Nomi",
"[Aureole (Kira Boshi)",
"HAMMER_HEAD (Makabe Gorou)] ",
"[Re-BIDou (Tsunomiya Katsuk",
"[Zensoku PunksA",
"Little Witch Academia",
"[Tsukusun]",
"[Minna Shindoi (Shindoro Mondor",
"[Akaao (HiRoB816)]",
"[Yellowknife, AOAA ",
"[Seishimentai (Syouryuupen)",
"Wisteria (Fuji-han)]",
"Kinmekki Studio (monme",
"[Amanedou]",
"[Gorilla Bouzu] ",
"[Kudarizaka Guardrail (Shiraso",
"[Mibry] ",
"[Pecan (Makunouchi)",
"[Nounanka (Abubu)",
"[Nomugicha (Ayato)]",
"[mintjulep (Chomo",
"[TOM]",
"[Kori-Kori-Honpo (Yosuke",
"[Little mantis (Kuloamaki",
"[Dennou Chocolate (AwA)] ",
"[Utsu Kawaya]",
"[2nd color (Typehatena)",
"[Suizen no Mimi (Toro Ochi)",
"Yakan Honpo (Inoue Tommy)]",
"(Kingdom)",
"Syamisen Koubou",
"[Zensoku Punks] ",
"[RYU-SEKI-DO (Nagare Hyo-go)",
"Lemon Juice)",
"(Made in abyss)",
"[Marialite (Himino)",
"(Magic Kaito)",
"[Doriane] ",
"BREAK ZEBRA",
"Yanagawa Rio",
"[R.c.W.d",
"[Nokishita-ya (Nokishita Negio)]",
"[Karasu Chan]",
"[Saikaihatsu (Rakuria)",
"Galaxy Ginga (Hasuke",
"[Saragi ",
"[Seito A]",
"AzeLye (Fabiyama",
"[Rakka Sokudo 2.5 (Pira)",
"[Transistor Baby (Hata)",
"[Nawakena]",
"[Himepuchitei (Hamabridge)]",
"[LTM. (Taira Hajime)",
"Kawahagitei]",
"[Oreichigo (",
"Wada Mountain ",
"[Fuuun Gennojou (Gennojou",
"[Re-BIDou (Tsunomiya Katsuk",
" [Hachimitsu Syoujo (Mitsumomo Mam)",
"[Hyappo Hissatsu (Nodoka)",
"Bocchi Koubou (Rutubo)",
"[Zenra Yashiki]",
"[Motoichi]",
"[Karasu no Su (Matsuda K",
"[yam]",
"THEATER (Fred Kelly)",
"[Akuheki (Barakey",
"Kashitsuki (Momoko",
"[Raldu]",
"[Fujiiro Bomber (Kyouka)",
"Gekkouga (Halubato",
"[くろはらさりく",
"ドラゴンボール) ",
"[RAMU]",
"(Sonic)",
"[kiR-Rin]",
"[Aino]",
"Heiqing Langjun",
"[Shikkokuno J.P.S. (Hasumi Elan",
"shinkan sanpuru: Tsuiki",
"[Kitchen. (Fried.",
"[Sundays Fantasy (Yoshi)",
        "[Uru]",
        "Tokita Monta",
        "Mitori iro",
        "Juuryoku Tenshi",
        "Go! Go! Heaven!!",
        "KURUBUSI-KAI (Dowarukofu)",
        "Yudzuki Hina",
        "[Tanenashi Kuribo]",
        "monpi (Inuneko)",
        "Chinese",
        "Puniket 13",
        "Apricot Sirup",
        "Raiden Labo (Raiden",
        "Siropome",
        "Kobiran House",
        "(Nanahachi)",
        "(Yoshiwo",
        "Tanukian (Zero ",
        "Nakagawa Kei",
        "Yanagigaeru",
        "Amanatsu Mikan ",
        "Tokoro ni Yori Ame",
        "Kasuki Masato",
        "compound marjoram",
        "Kasuga Tousen",
        "Sakura Saku Sakura",
        "Nangokumajishiba",
        "Chocolate Chuudoku",
        "Twin Bell",
        "Thresholdouhu ",
        "Yuasa Rengou",
        "Murasame Maru",
        "PRAVO713",
        "Golgi Bon",
        "Kyabesuke",
        "Marked-two",
        "Penguin Bolo",
        "Sakuma Eitarou",
        "Houraigekisen",
        "(Utana)",
        "SUVWAVE",
        "spark12",
        "super comic city 26",
        "tomupon",
        "(draw2)",
        "sioyaki",
        "ebitendon",
        "shimesaba",
        "saigamayu",
        "gekiha (raku)",
        "(tanakana)",
        "(niratama)",
        "(morikore)",
        "gd (fushiki)",
        "[pink bat]",
        "(tukimi daifuku)",
        "[keifuto]",
        "[puranpuman]",
        "[yuuri]",
        "(pandain)",
        "(akisawa yusi)",
        "(zenjidoh)",
        "(sasakuma kyouta)",
        "[ginto]",
        "(Sekihara)",
        "(mori airi)",
        "(tsukuyomi sazin)",
        "[jigoku]",
        "(morihisa iku)",
        "Shounan no Tamasu",
        "Kakuu Byoutou",
        "Amagashi (yubesi)",
        "Tamiya Akito",
        "[Binatsu]",
        "Komatta Tomato",
        "Leaz Koubou",
        "inuneko",
        "Aroma Terrace",
        "Kinokonomi (kino)",
        "botibotiikoka",
        "Arui Ryou",
        "(Jakko)",
        "[Reco]",
        "(SUPER27)",
        "(C3",
        "[T.A.K.K",
        "(Kirise Mitur",
        "(Rikatan)",
        "(sasachinn",
        "(HG Chagawa)",
        "Fukugou Marjoram",
        "(C94) [ケモノ絵描(シンドール)",
        "[TERAX",
        "寅乃檻",
        "[TOHOORIN",
        "[KI-SofTWarE",
        "[50000S (tow)",
        "YuffTopiA ",    
        "[GREONE",
        "[EUPHORIC",
        "(Sindoll",
        "[Toragoyashik",
        "Torano O",
        "[Ten+Aku",
        "Koikawa Minoru",
        "Youkai Tamanokoshi",
        "(Ahemaru)",
        "[Oyster]",
        "[Dinosaur House",
        "Kokonoe Yomogi)",
        "[Kuro no Omikuji",   
        "[Ahemaru",
        "Aki to Haru no Yume",
        "Oidemase! Akuma",
        "Haraise Kaiwai",
        "(Shinachiku)",
        "[Honoji",
        "[Kashikomura",
        "Nyankorii Toranoko",
        "goretic",
        "[MAPLER",
        "[we53]",
        "(Syamonabe)",
        "[Tobakendoubu",
        "[Mizuyan]",
        "[Lemon Cake",
        "[ICE]",
        "Kuma-tan Flash",
        "[Romantic London",
        "[Eroquis",
        "[kuromi",
        "[P.A.Projec",
        "[Bannoutumayoujiire",
        "[Ice Manjuu",
        "[Ryuukan]",
        "[MAIDOLL",
        "Pute rin gu",
        "North70",
        "Kuusou",
        "[Wasabi Mochi",
        "[Hitsujin Toko",
        "[Nangoku Seika",
        "[Kagemusha]",
        "[FISH AND CHICKEN",
        "[Yuunagi Gaibutai",
        "[Seki Sabato",
        "[Mado no Kuchibue Fuki",
        "[Rapid Rabbit",
        "[Haresaku",
        "[d.a.p",
        "[Kitagawajima",
        "shirokuma a",
        "[Blue Section",
        "[Okumoto Yuuta",
        "Shiroi Shinoshino",
        "ANDOROGYNOUS",
        "[Kusatsu Terunyo",
        "[Ukikotatsu",
        "[Ari and Mura",
        "[St. Rio",
        "UZOMZO",
        "(Umiyama Misaki)",
        "[Trample Rigger",
        "[sad.c",
        "Datenshi no Ana",
        "One Punch Man",
        "[Souryuu] ",           
        "Urban Doujin Magazine]",
        "[Horimonya",
        "musashino sekai",
        "[Othukimi",
        "[Tiba-Santi",
        "[千葉産地",
        "[YOSHITORA]",
        "[Yaku 40 Man Salad",
        "[Nijiyumedokoro",
        "[e]",
        "(shohei)",
        "[Natsugumo Himawari",
        "[Ogagaga-sou",
        "[Fishneak",
        "[Hakujira Uminekodan",
        "[ifpark.com",
        "[nnS]",
        "86 saver",
        "(Dozamura",
        "(Natsuki Hajime)",
        "[Nanashi Inflation",
        "[Gesuko no Heya",
        "[水籠 闇之助",
        "[Kaibutsu o Koeta Kaibutsu",
        "[Fishneak",
        "[Ankoku Marimokan",
        "[we53]",
        "[Seishun to Senryaku",
        "[Bungalow",
        "(Dai 5-ji ROOT4to5",
        "[BlueMonday",
        "(Souryuu)",
        "[masa] とし",
        "[Kudamono",
        "[Cat Expert",
        "[Yunomata",
        "(Otakumin)",
        "POCO*POCO (Moisama)",
        "[Unblock! (Yaeba)]",
        "[BLACK DOG (Kuroinu Juu",
        "(Douyara Deban no Youda! 13",
        "[SERVICE BOY (Hontoku",
        "[Katamimi Buta",
        "RUSH (Nanako)]",
        "[17in]",
        "[kazum]",
        "[Nyagorodo",
        "(Douyara Deban no Youda",
        "Rectorica (sakumichi",
        "Nise Kurosaki",
        "[kuzu]",
        "Ruijinen (Kei",
        "Seijirou Kagechika",
        "Taono Kinoko",
        "Pettanko! (Koshiriro",
        "Tsurikichi Doumei",
        "Shirayuki Shion",
        "Tetsuna",
        "[Poino! (Nagoshi",
        "PONCHEES (Kari)",
        "[Heart's nest (hato",
        "[GN (Girl's Number",
        "[Maririn]",
        "[Hiko]",
        "[Bansanchi (Banjaku)",
        "[Oozora Kaiko (kaiko)]",
        "Terujirou",
        "[Ebisuya (Ebisubashi Seizou",
        "[sakrarinon",
        "[Juri Reiqa]",
        "[Kamemushi (Kaminaru Fuyu)",
        "[elflite (Agata Akira)",
        "[Tiny Precious",
        "[Mazjojo]",
        "[Onna ni Yoru Onna",
        "Zensoku Rider ",
        "GMR (Mego",
        "[Sengoku-kun]",
        "[Aroma Gaeru",
        "[P.D Chump (Pedocchi",
        "Othello Ice (shuz)",
        "[Mokushi]",
        "[Kumao (",
        "[sa_ku]",
        "(Senka Daigassen 2018)",
        "[Tiramisu Tart (Kazuhiro",
        "[Ane Ichigo",
        "[BicyclE (BACH)",
        "[Hi-CAL (Kurikama)",
        "[gibuS (Yamake)]",
        "[Akitaku Kikaku",
        "[Gachinko Shobou",
        "[Uramac (Masuda",
        "[Iinano]",
        "[Itaba Tatamiten",
        "[Kuroki Hidehiko",
        "ai and mai",
        "[NicheIndustry",
        "[Medium bodied (Amano Koori)]",
        "[Marukin Teikoku (Aim)",
        "[5HOURS PRODUCTS (Poyo=Namaste)]",
        "[mencode (Rira)]",
        "[Hamanasu]",
        "[Natsuiro Otome (",
        "[CIRCLE ENERGY",
        "[BOBCATERS",
        "[boysplanet (",
        "[Grace Ishikawa]",
        "[Porunamin C]",
        "[Gensou Stomach",
        "[Rico]",
        "[Yoshitakashi Athletic (Yasaka)",
        "[Circle Roman Hikou ",
        "[Absolute (ABU",
        "[ayaswan] ",
        "[Iiwake-Gaisya (Sigemiya Kyohei)]",
        "Mob Psycho 100)",
        "[Dragon Heart ",
        "[Hasblow] ",
        "[Shiodome project (lapiness",
        "[Oshiruko Kan",
        "[Belphegor no 39 ",
        "[AZALEA (Yumiyuki)",
        "[Itsumo Nantoka",
        "(Tsune Yoshi)",
        "[Brand New Way (K&K)",
        "[MC]",
        "[Koushi (Hanakawa Sugar",
        "[infinity (Scarlet)]",
        "[Churara (Nakano)",
        "[CausCiant (Yamaiso)",
        "Rakuen Tiramisu ",
        "[Coin Toss (",
        "[KAZAMA DoJo (Mucc)]",
        "[Lavata Koubou ",
        "[Kuroi Miyako ",
        "[Dig Dug (kurocastle)",
        "[Hone Shaburi-tei ",
        "[Omoideya (Natsuki",
        "[Novia (Labui)",
        "[Marshmallow Balloon (",
        "[Namaji]",
        "[SUGAR MAPLE (Yunodon)",
        "Sweet Taste (Amakuchi)",
        "[Jamboree! (Jin)",
        "[Pietoro] ",
        "Yu-Gi-Oh!",
        "(Shinshun Kemoket",
        "[Kuroi Suisei",
        "[Ginchaya (Gincha)]",
        "Ryuu no Yadorigitei (Zephid)",
        "(Bleach)",
        "[Shimoda Nekomaru",
        "[Tomozawa Shou]",
        "[Satoru]",
        "[Chi ~yubasa-kun",
        "[BALKLASH. (SAD)",
        "[numa]",
        "'s Dolphin",
        " [chori (Mokki)",
        "Nanika no Heya (Hira)]",
        "[Tetsunohiji] ",
        "[PULIN Nabe (kakenari",
" (Aoi Masami)]",
"[marunomare (bankokudou)",
"[M.MACABRE (Nyanko",
"[LUMNESODA",
"[TEAM SHUFFLE (Trump)",
"[Hybrid Jimushitsu ",
"[Tare Mayuzou]",
"[Lovewn Outpos",
" (Urayama Sirou)",
"(Dragon Ball",
"Coffee Chazuke (Genjirou)",
"HIDARIkiki (Kizuki Rei)",
"[Threshold (Exeter)]",
"(Yoshida Gorou",
"[Haigoku Ryodan (Karasuma Amiru)",
"Suisan (Isshi Taira)",
"[Kotachuya (Ayase Mai",
"[Gokakukansuu (Tokunaga",
"[Tanaka Shouten (Nattaka",
"Fukucha Koubou (Nachisuke)]",
"[CHIN-UP (Pocchi",
"[Ikibata 49ers (Nishiki Yoshimune",
"[Inja]",
"[Marunomare (Bankokudou",
"[Gorori no DIY (Suto",
"Chirimen COMBO (Akari Seisuke)",
"[ILD CAT (Yaneko Uta)] ",
"(C95) [Yashiya (YASSY)",
"Kakukonoka (Menoko)] ",
"[Yakiniku Curry Sushi Don (Katou Ameya)",
"Splatoon)",
"[FAKESTAR (Miharu",
"[Ochaocha Honpo (Chabashira Tatsukichi)]",
"REVENGER (Makoushi)] ",
"Tenpatsu Kikaku (DHA)]",
"[Blitzkrieg (Denchi)]",
"ahonobo",
"Yomoyama Sand (Qoom)",
"[Momonashi Potato (Momonashi Potato)",
"K2 Tomo no Kai (Mizuki)",
"[#005FFF (Aogi)]",
"[Cel]",
"[Azuma Grimm Dou (Inuwashi Ropera",
") [Furuhonya(hiroaki)",
"[STUDIOWALTZ]",
"[Hayo-Cinema (Etuzan Jakusui)",
"[Tonzura Douchuu (Kazawa",
"Wataame no Shizuku (Yoizuki Mashiro)",
"[Hoshidokei (Hiyoko",
"[Gewalt (EXCEL",
"[Gyoniku (Muuba",
"[Gainen Tanuki Kansokusho (Tonomura",
"[Hanjuku Yude Tamago (Canadazin",
" Koubou (78RR)]",
"[Momiji Coffee (Shitou Fumiaki",
"[Bunbukumodoki (@uni)",
"Gekkou-Dou (Tsukigami)]",
"[Setsugetsuka (Fukukawa",
"[Nyangorodo (Manekineko)",
"SCO.LABO (shoco",
"[Ichinichi Atelier (Himei Yoru)",
"umifumi Cat (Shuui Takahiro)",
"Yudenonno (Nonnon)",
"[Yudenakya Nama-Beer (Uzura no Tamago)",
"[Kumao Cafe (Kumao)",
"[withsoda (Kitaichi Naco)",
"Recaroya (Recaro)]",
"[Zakkin Kougyou (Zakkin)] ",
"Kitsune to Budou (Kurona)",
"[Dragonstorm (Otogi Tetsurou)"
        ];

        

        var length = block_list.length;


        for (var index = 0 ; index < length; index++) {                     // ex-hentai
            var name = '.gl1t:contains("'+block_list[index]+'")';
            $(name).hide();  
        }
        for (var index = 0 ; index < length; index++) {                     //  n hentai
            var name = '.caption:contains("'+block_list[index]+'")';
            $(name).parent().parent().hide();  
        }

});

$('#showeng').on('click',function(){
    
    
    //block_list = block_list.filter(function(value, index, arr){ return value!='[English]' });  

    var length = block_list.length;

    $('#showeng').css('background-color','green');

    for (var index = 0 ; index < length; index++) {                     //  n hentai
        var name = '.caption:contains("[English]")';
        $(name).parent().parent().show();  
    }  
    
});


$('#show').on('click',function(){
    
    
    //block_list = block_list.filter(function(value, index, arr){ return value!='[English]' });  

    
    $('.gl1t').show();  
    
});




$('#block_items_default').trigger('click');
$('#block').trigger('click'); //////////////////// if it banned

$('#toppane').attr('style','background-color:gray');


//total = parseInt(html.replace(',',''));

$(".ptt").hide();
$("td:contains(<)").css('zoom','4000%');  
$("td:contains(>)").css('zoom','4000%');  
//$("td:contains(>)").on('click mouseover', function () {
//    document.location=this.firstChild.href
//});


}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  sukebe nyaa 
if(url.includes("sukebei.")){

$('.servers-cost-money1').remove();
$('#blist').remove();

if(typeof done ==='undefined'){
var done = new Audio( chrome.extension.getURL("sfx/diablo2/-----gold.wav") );
}
done.volume = 0.3;
done.play();



var string2 = '<input id="block" style="zoom:100%" type="button" value="Block Item" >';


$(string2).appendTo($(".navbar-header"));





$('td[colspan*="2"]>a').attr('target','_blank');
/*
$('td[colspan*="2"]').click( function(e) {
    e.preventDefault(); 
    
    //var title = '"'+$(this).text().trim().slice(2,35)+'",';
    //navigator.clipboard.writeText(title).then(function() {});

    var title = $(this).text().trim();
    open('https://duckduckgo.com/?q='+title+'&t=h_&iax=images&ia=images','_blank');
    return false;
     } );
*/

$('td>a>img').click( function(e) {
    e.preventDefault(); 
    var title = '"'+$(this).parent().parent().parent().text().trim().slice(0,35)+'",';
    navigator.clipboard.writeText(title).then(function() {});

    return false;
     } );


//https://duckduckgo.com/?q=        &t=h_&iax=images&ia=images
var elems = document.querySelectorAll('.id1');

        
$('#nb>div').eq(4).css('zoom','170%');


//alert(block_list);
    
//$('#block').click(function(){


block_list = [
    "[@OZ]",
    "触手",
    "[天観K]",
    '[survive]',
    '地裏調教',
    'PashminaA',
    '[鈴木みら乃]',
    'Fechikano',
    '彼女がネコミミに着替えたら',
    'futaya]',
    "とらぶるだいあり",
    '淫魔が来たりて俺を抜く',
    "GOLD BEAR",
    '[BOMB! CUTE! BOMB!',
    "[HQR]",
    "ナイトホーク]",
    "神待ちサナちゃん",
    "くの一牡丹",
    "ドールハウス",
    "[BISHOP]",
    "ねとりんぼ【前編",
    "おっぱいの王者",
    "[つんべじ]",
    "PoRO",
    "(opiumud-",
    "[魔人",
    "Overwatch",
    "PV",
    "sawamura japan]",
    "Stringendo",
    "[miz]",
    "ヴィーナスブラッド",
    "[電伝導]",
    "淫妖蟲",
    "[アブジャン]",
    'つじもが町に殺って',
    "妖獣戦線",
    "[さ～くるCat]",
    '[アパタイト]',
    "[LunaGazer]",
    "[KNOCKOUT]",
    "[MiMiA Cute]",
    "[PIXELICS]",
    "異国なレトロ",
    'Ikoku na Retro',
    'オトメヒメ',
    'Otome Hime',
    "字幕组",
    "[opiumud]",
    "[survive more]",
    "[脸肿字幕组/Haretahoo.sub]",
    "[DN]",
    "[桜都字幕组]",
    "[D/L]",
    "[MimiA Cute]",
    "[魔人]",
    "[FINAL FUCK 7]",
    "[survive]",
    "[CircleTK]",
    "URVIVE MORE]",
    "[MMD]",
    "酒場のサキュバスさん 3人目",
    "[PoRO]",
    '梅麻呂',
    "夏休みに姪が遊びに来た",
    'Euphoria',
    'Ore to Aitsu ga Onnayu de'  
];

var length = block_list.length;
//alert(length);
for (var index = 0 ; index < length; index++) {
    var name = 'td[colspan*="2"]:contains("'+block_list[index]+'")';
    $(name).parent().remove();  


}




$('body').css('background-color','#f2f6ff');


$('#block').trigger('click'); //////////////////// if it banned

$('#toppane').attr('style','background-color:gray');


//total = parseInt(html.replace(',',''));


$("li:contains(«)").css('zoom','700%');  
$("li:contains(»)").css('zoom','700%');  
//$("td:contains(>)").on('click mouseover', function () {
//    document.location=this.firstChild.href
//});

if(url.includes('view/')){

}else{
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
       var url = 'https://sukebei.nyaa.si'+$("li>a:contains(»)").attr('href');
       open(url,'_self');
   }
});

}

}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  facebook
if(url.includes("appledaily")){   //   

}

if(url.includes("facebook") ){   //   
    block_list=[
        'Arno Kuo',
        'Fre e Sp',
        '劉博文',
        '人渣'
    ];

    setTimeout(function(){

    for(var i=0; i<block_list.length;i++){

        $('[class*="UFICommentActorName"]:contains("'+block_list[i]+'")').parent().parent().hide();
    
        // This would be a problem as iframe in page
        $('[class="_5mdd"]:contains("'+block_list[i]+'")').parent().hide();
        $('[class="_5mdd"]:contains("'+block_list[i]+'")').parent().css('background-color','black');
    }

    //document.title = 's';
    },3000);

}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  Duckduck
function rand_str(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   characters       = '0123456789';

   var charactersLength = characters.length;  // how many types
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

//------------------------------------------------ ^ function End
if(url.includes("duckduckgo")){   // 

    $('.result__extras__url').mouseover(function(){
        navigator.clipboard.writeText('"'+$(this).text()+'",');
        
        //document.title = rand_str(8);
        $(this).css('background-color', '#'+rand_str(8)  );

    });

}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■  Google
if(url.includes("www.google.com/search?")||url.includes("duckduckgo")){   //   [class="q qs"]:contains
        /*
        $('[class*="act-desktop-button"]').click(function(){
            window.open(window.location.href,'','width=320, height=180');
        })
        */
        $('[class="action-menu ab_ctl"]').click(function(){
            document.title =$(this).parent().parent().text().split('https')[0];
            navigator.clipboard.writeText('"'+$(this).parent().parent().text().split('https')[0].split('www')[0]+'",');
            $(this).parent().parent().css('background-color','orange');
        });
        

        $('.st').mouseover(function(){
            document.title = $(this).text();
        });

        if(typeof $('#timer-stopwatch-container').html()==="undefined"){
                
        }else{
            $('.act-tab-ul').css('zoom','50%');

            $('[jsmodel="vWNDde"]').css('opacity','0.3');

            $('.bkWMgd').css('zoom','150%');
            $('.bkWMgd').prependTo('body');

            setInterval(function(){

                    document.title= $('.act-tim-digit').eq(-4).text()+$('.act-tim-digit').eq(-3).text()+' : '+$('.act-tim-digit').eq(-2).text()+$('.act-tim-digit').eq(-1).text();    
                    
            },800);
            
        }
        //$('body').html($('.bkWMgd').html());

        //$('.BFJZOc').parent().parent().parent().parent().remove();
        $('.e2BEnf.U7izfe').remove();

block_list = [          // google block list
    "危険なサイトはすぐ見抜ける",
    "javbit.net",
    "危険なのはアダルトサイト",
    '竹北今晚「送肉粽」 網友熱議別「中煞」｜蘋果新聞網｜蘋果日',
    "新竹縣竹北市中興社區發展協會-社會創新實驗-新創圓夢網",
    "歷年段考試題- 國立竹北高中數學科 - Google Sites",
    '中時電子報',
    '新聞龍捲風',
    "108年精神疾病及自殺通報個案關懷員進階訓練 - 衛生福利部八里療養院",
    "青少年前3大自殺主因：憂鬱症、感情、家庭| 公視新聞網",
    "2百多萬人想自殺防治要有同理心",
    "自殺風險個案危機處理注意事項99 年10 月14 日一、目的： 鑑於自殺風險 ...",
    "自殺防治實務",
    "【獨家】失業男LINE「想自殺」 縣長官方帳號秒回「還不錯」｜蘋果新聞網 ...",
    "自殺防治",
    "天使粒子發現者自殺陰謀論傳死因不單純！？ - 東森新聞 - 東森電視",
    "同門4女星輕生張紫妍案證人發不自殺聲明 - 壹週刊",
    "譚秀珠",
    "研究：小孩沒時間玩遊戲，未來焦慮、憂鬱、自殺率變高- 天才領袖- 王宏哲",
    "娛樂星聞",
    "衛生福利部",
    "高雄醫學大學秘書室- 高雄自殺死亡高於平均男性占7成(高醫大醫社系 ...",
    "學生自殺案件多，議會舉行公聽會要求建立縝密防護網絡 - 高雄市議會",
    "「高雄式左轉」 網友嘆：這種白爛式自殺怎麼天天上演- 影音精選- 自由 ...",
    "詭異大樓同層連3自殺｜蘋果新聞網｜蘋果日報",
    "式左轉",
    "高雄市政府自殺高風險個案轉介單",
    "高市自殺率高五都之首@ jjlee@CPU :: 隨意窩Xuite日誌",
    "高雄元和雅身心專科診所-淺談自殺",
    "高雄「張老師」預防自殺呼籲從3步驟做起| 亞太新聞網ATA News",
    "高雄自殺突擊隊","甲骨文例研究","陳哲男",
    '《社會》竹北管線遷移工程，9個里21日停水8小時- Yahoo!奇摩股市',
    "手機浸褐屍水！20歲女大生租",
    "憂鬱與自殺三級防治實施",
    "表19. 臺灣縣市別自殺死亡概況",
    "自殺手機浸褐屍水",
    "- NKUST,高雄科技大學National ...",
    "高關懷自殺自傷學生",
    "高雄市生命線協會",
    "自殺大樓",
    "高雄市十大死因自殺排名第九男多於女| 大紀元",
    "自殺前給自己和別人一個機會吧！ - 義大醫院",
    "辯證行為治療 - 國軍高雄總醫院-院刊內容",
    "自殺通報個案危機事件處置注意事項（草案）",
    "林俊傑","自殺式騎",
    "自我壓抑國度日本「傾聽」大幅降低自殺人數| 國際| 新頭殼Newtalk",
    "高雄自殺死亡高於平均男人別怕訴苦| 台灣英文新聞 - Taiwan News",
    "命理網","高雄辦萬人馬拉松環團批慢性自殺- 客家電視台",
    "高雄民間信仰與傳說故事論集","東龍不動產",
    "韓國瑜","自殺式右轉",
    "1 篇名： 台灣各縣市青少年自殺率之空間分布與因素探究作者： 陳映瑾 ...",
    "少女為救iPhone跳河警誤以為鬧自殺- 高雄- 今日大話新聞- 長禾公共 ...",
    "王浩宇","反嗆","百萬種自殺的方法- 2018高雄電影節",
    "高雄市精神疾病及自殺通報個案關懷訪視業務關懷訪視 ... - 1111人力銀行",
    "自殺?他殺?: 青少年為何走上絶路? (增訂版)","自殺左轉",
    "RE:高雄「自殺大樓」抓交替13死大樓主委也認賠賣房了@場外休憩區",
    "https://www.bali.mohw.gov.tw/?aid=57&amp;pid=24&amp;page_name=detail&amp;iid=104",
    "[PoRO]",
    "https://adult.contents.fc2.com/article",
    "https://news.ltn.com.tw/news/world/breakingnews/2816832",
    "https://eroerocos.blog.fc2.com/b",
    "https://video.fc2.com/ja/a/content/",
    "https://video.fc2.com/ko/a/content/",
    "https://video.fc2.com/en/a/content/",
    'https://www.youtube.com/watch?v=LNcdSpY685I',
    "鉅亨",
    "COSパコ雑記帳",
    '20餘刀',
    '弒父',        //新竹市  溪橋下
    '新月沙灘命案', //新竹市  溪橋下
    '20多刀'
];

var length = block_list.length;
//alert(length);


var name1;
var name2;
var name3;

for (var index = 0 ; index < length; index++) {//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    name1 = '.LC20lb:contains("'+block_list[index]+'")';
    $(name1).parent().parent().parent().parent().parent().hide();  

    name2 = '.iUh30:contains("'+block_list[index]+'")';
    $(name2).parent().parent().parent().parent().parent().parent().hide();  

    name3 = '.result__extras__url:contains("'+block_list[index]+'")';
    $(name3).parent().parent().parent().hide();  

}//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//$('.TbwUpd>.iUh30').clone().prependTo($(this));

$('td[valign*="top"]').click(function(){
    //alert($(this).parent().parent().children().eq(0).html());//split('href="')[1].split('"')[0]);
    
    var clip = $(this).parent().parent().children().eq(0).html().split('lb">')[1].split('</')[0]
    navigator.clipboard.writeText('"'+clip+'",').then(function() {});
})
$('div[style*="margin-left:125px"]').click(function(){
    //alert($(this).parent().parent().children().eq(0).html());//split('href="')[1].split('"')[0]);
    
    var clip = $(this).parent().parent().children().eq(0).html().split('lb">')[1].split('</')[0]
    navigator.clipboard.writeText('"'+clip+'",').then(function() {});
})


$('.iUh30').click(function(){
    
    navigator.clipboard.writeText('"'+$(this).text()+'",').then(function() {});
    });

}



}).call(this);



// Bookmark button : Kiss anime get Video
//     javascript: window.location.href=document.body.innerHTML.split('my_video_1')[1].split('src="')[1].split('"')[0];