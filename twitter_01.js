display = $('#bonus').css('display');
d1 = new Date().getTime();
d2 = new Date().getTime();
time = 30000
console.log(display);
document.getElementById('twitter-post-button').click();
while (display == 'none' || d2 < d1 + time) {
    display = $('#bonus').css('display');
    d2 = new Date().getTime();
    console.log(display);
}

//$('.twitter-dialog');
//var elm = document.getElementById ('twitter-dialog');
//elm.getElementById('twitter-textarea').value;
//var e = document.getElementById('twitter-textarea').click();
//var baseText = document.getElementById('twitter-textarea').value
//document.getElementById('twitter-textarea').value='/d @sunsupe'+'\n'+scriptOptions.param1;

//var e = document.getElementById('twitter-textarea')
//document.getElementById('twitter-post-button').click();
/* closeTime = 10000;
setTimeout(() => {

    document.getElementById('twitter-post-button').click();
    //document.getElementById('twitter-post-button').click();
}, closeTime); */

//document.getElementById('twitter-textarea').value='/d @sunsupe'+'\n'+scriptOptions.param1;
//document.getElementById('twitter-post-button').click();

//document.getElementById('twitter-post-button').click();
// var e2 = document.getElementById('twitter-post-button')
// if(e2) {
//     e2.onclick();
// }
//document.getElementById('twitter-post-button').click();