/**
 * @fileOverview Youtube EQ Google Chrome extension
 * @author Miroslav Magda, http://blog.ejci.net
 * @version 0.1.0
 */
//TEST video http://www.youtube.com/watch?v=gkb_x9ZN0Vo&list=FL1u4uEFwSowHyueVAy6J8bg&html5=1
var YoutubeEq = (function(p) {
    DEBUG = false;
    p = (p) ? p : {};
    if (p.id === false && p.elm === false) {
        throw {
            name : "noParams",
            message : "YoutubeEq: no video id and element"
        };
    }
    var enableDebug = function() {
        DEBUG = true;
    };
    /**
     * logging
     */
    var c = {};
    c.error = function() {
        if (DEBUG === true) {
            console.error(arguments);
        }
    };
    c.log = function() {
        if (DEBUG === true) {
            console.log(arguments);
        }
    };
    c.debug = function() {
        if (DEBUG === true) {
            console.debug(arguments);
        }
    };
    c.trace = function(t) {
        if (DEBUG === true) {
            console.trace(arguments);
        }
    };
    /**
     * init function
     */
    var init = function() {
        //document.getElementById('test_close');
        var elm = document.getElementsByTagName("video")[0];
        var observer = new WebKitMutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                var name = mutation.attributeName;
                if (name === 'src') {
                    //something changed... reinitialize
                    var newValue = mutation.target.getAttribute(name), oldValue = mutation.oldValue;
                    //c.log('WebKitMutationObserver', newValue, oldValue);
                    c.log('Something changed... reinitialize');
                }
            });
        });
        observer.observe(elm, {
            attributes : true,
            subtree : false
        });

    };
    /**
     * Public methods
     */
    return {
        init : init,
        enableDebug : enableDebug
    };
});

/**
 * Initialization
 */
(function() {
    //Check if is watching link
    if (/watch/i.test(document.location)) {
        var urlParam = function(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);
            if (results == null)
                return false;
            else
                return results[1];
        };
        //is watching
        var videoId = urlParam('v');
        //Check if there exists v parameter in url (video id)
        if (videoId) {
            if (urlParam('html5')) {
                $(document).ready(function() {
                    var videoTag = document.getElementsByTagName("video")[0];
                    //$('video');
                    console.log('Youtube EQ videoTag', videoTag);
                    if (videoTag) {
                        var app = new YoutubeEq({
                            id : videoId,
                            elm : videoTag
                        });
                        app.enableDebug();
                        app.init();
                    } else {
                        console.log('YouTube EQ: No html5 video :(');
                    }
                });
            }
        }
    }
})();

