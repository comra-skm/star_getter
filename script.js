tabLimit = window.prompt("配信中の画面を開きますか？タブ数を入力してください（最大:50）", "25");
skipCount = window.prompt("スキップする数を洗濯してください（最大:50）", "0");
categoryList = $('#js-categorymenu-list').children();

//キャンセル処理
if(tabLimit == null){ exit; }
if(skipCount == null){ exit; }

domain = "https://www.showroom-live.com/";
i = 0;
$.each($('.js-room-link' + '.listcard-join-btn'), function(index, val) {
    //if (i > 0) { sleep(3000);}
    // limitまで達したらbreak
    if(i + skipCount == tabLimit + skipCount){ return false; }
    //ルーム名の取得
    var roomName = val.getAttribute('href').slice(1);
    console.log(roomName);
    //アマチュア判定
    re = /[^0-9a-f]/
    if (categoryList[7].className == 'is-active') {
        re = /[0-9a-f]/
    }
    if(roomName.match(re)){
        // メッセージ送信する
        if (i >= skipCount){
            console.log(domain + roomName);
            chrome.runtime.sendMessage(domain + roomName);
            i++;
        }

    }
    console.log(i);
});

//スリープタイム
function sleep(time) {
	var d1 = new Date().getTime();
	var d2 = new Date().getTime();
	while (d2 < d1 + time) {
		d2 = new Date().getTime();
	}
	return;
}