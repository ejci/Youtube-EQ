/*chrome.extension.onRequest.addListener(function(request, sender) {
 chrome.tabs.update(sender.tab.id, {
 url : request.redirect
 });
 });
 */

chrome.webRequest.onBeforeRequest.addListener(function(info) {
    if (/watch/i.test(info.url)) {
        if (!(/html5/i.test(info.url)))
            return {
                redirectUrl : info.url + '&html5=1'
            };
    }
    return {
        redirectUrl : info.url
    };

}, {
    urls : ["*://*.youtube.com/*"]
}, ["blocking"]);
