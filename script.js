tabLimit = window.prompt("配信中の画面を開きますか？タブ数を入力してください（最大:50）", "25");
skipCount = window.prompt("スキップする数を洗濯してください（最大:50）", "0");
categoryList = $('#js-categorymenu-list').children();

//キャンセル処理
if(tabLimit == null){ exit; }
if(skipCount == null){ exit; }

//初期値の設定
domain = "https://www.showroom-live.com";
i = 0

//オフィシャルカテゴリ判定
officialCategory = true
if (categoryList[8].className == 'is-active') {
    officialCategory = false
}

$('.listcard').each(function(index, val) {
    // limitまで達したらbreak
    if(i > tabLimit - 1){ return false; }
    
    //スキップ判定
    if(index < skipCount){ return true; }
    
    //roomIdの取得
    var roomId = val.getAttribute('data-roomid')
    var target = $('.js-liveroom-' + roomId)
    
    //ルーム名の取得
    var roomName = target.find('.js-room-link' + '.listcard-join-btn')[0].getAttribute('href');
    console.log(roomName)

    //公式配信者判定
    officialUser = false
    if (target.find('.svg' + '.icon-official').size()){
        officialUser = true
    }
    
    if ( officialCategory == officialUser ){
         // メッセージ送信する
        console.log(domain + roomName);
        chrome.runtime.sendMessage(domain + roomName);
        i++;
    }
});