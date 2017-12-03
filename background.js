chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab.id);
    chrome.tabs.executeScript(null, {file: "jquery-2.1.1.min.js"},function(){
        console.log(tab.id);
        chrome.tabs.executeScript(null, {file: "script.js"},function(){
            console.log(tab.id);
        });

    }); 
});

chrome.runtime.onMessage.addListener(function (message) {
    chrome.tabs.create({url: message}, sendTwitter);
});

function sendTwitter(tab){
    setTimeout(() => {
        chrome.tabs.executeScript(tab.id, {code: "document.getElementById('icon-room-twitter-post').click();"}, null);
        chrome.tabs.executeScript(tab.id, {code: "document.getElementById('twitter-post-button').click();"}, null);
        console.log(tab.id + " posted");
        setTimeout(() => { chrome.tabs.remove(tab.id) }, 10000);
     }, 50000);
}


function sendTwitter2(tab){
    chrome.tabs.executeScript(tab.id, {code: "document.getElementById('twitter-post-button').click();"}, null);
    console.log(tab.id + " posted");
    setTimeout(() => { chrome.tabs.remove(tab.id) }, 10000);
}

//スリープタイム
function sleep(time) {
	var d1 = new Date().getTime();
	var d2 = new Date().getTime();
	while (d2 < d1 + time) {
		d2 = new Date().getTime();
	}
	return;
}