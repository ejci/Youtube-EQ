/**
 * @fileOverview Youtube EQ Google Chrome extension
 * @author Miroslav Magda, http://blog.ejci.net
 * @version 0.1.0
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
