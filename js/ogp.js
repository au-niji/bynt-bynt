// window.addEventListener('load', ogp_setting);
function ogp_setting() {
    // var local = location.pathname;
    var url = 'https://bynt.co.jp/company';
    var pattern = /^https?:\/{2,}.*?\/(.*)/;
    var paramVal = url.match(pattern)[1];

    if(paramVal == 'company') {
        var title = '[書き換えテスト]' + document.title;
        // var url = location.href;
        var url = 'https://bynt.co.jp/';
        var image = './../images/logo.png';

        document.title = title;
        console.log(document.title);
        var headData = document.head.children;
        for (var i = 0; i < headData.length; i++) {
            // OGPの設定
            var propertyVal = headData[i].getAttribute('property');
            if(propertyVal !== null) {
                if(propertyVal.indexOf('og:title') != -1) {
                    headData[i].setAttribute('content', title);
                }
                if(propertyVal.indexOf('og:url') != -1) {
                    headData[i].setAttribute('content', url);
                }
                if(propertyVal.indexOf('og:image') != -1) {
                    headData[i].setAttribute('content', image);
                }
            }
            // OGP(twitter)の設定
            // var nameVal = headData[i].getAttribute('name');
            // if(nameVal !== null) {
            //     if(nameVal.indexOf('twitter:title') != -1) {
            //         headData[i].setAttribute('content', title);
            //     }
            //     if(nameVal.indexOf('twitter:image') != -1) {
            //         headData[i].setAttribute('content', image);
            //     }
            // }
        }
        console.log("ended");
    }
}