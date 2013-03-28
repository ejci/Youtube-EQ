/**
 * app namespace
 */
var app = {};
/**
 * get parameter from url (if exists)
 */

app.init = function(videoId, videoTag) {
    //remove volume control
    $('.html5-volume-control').hide();
    //load default values
    var masterVolume = videoTag.volume;

    var eqUI = $('<div style="height:120px;background-color:#1B1B1B; color: #fff; width: 640px;">');
    eqUI.append('<style>.yt-eq-slider {-webkit-appearance: slider-vertical;height: 100px;width: 15px;cursor: hand;}.yt-eq {width: 100%;color: #aaa;}.yt-eq td {text-align: center;width: 30px;}.yt-eq .yt-eq-volume {width: 60px;}.yt-eq .yt-eq-visualizer {background-color: #1B1B1B;width: 256px;}.yt-eq .yt-eq-label {font-size: 9px;}.yt-eq canvas {width: 256px;height: 100px;margin-bottom: 16px;margin-top: 4px;cursor: hand;}.yt-eq .sliders {height: 106px;background-image: url(data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS4xLjIiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjMwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj4KICAgICAgICAgPGRjOnN1YmplY3Q+CiAgICAgICAgICAgIDxyZGY6QmFnLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTMtMDMtMjdUMTg6MDM6OTU8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPlBpeGVsbWF0b3IgMi4xLjQ8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cqb3c6wAAAEbSURBVGgF7ZhJDsMwDAPror/ze/2+FAXKQF1CGIkIH8ReZHiR4jHLg9q2bbf4G2N8TrwXe+8t7jsaz55v34WPEmbP37MTzuZz4VlSl/cZ9WWEswmWoX6wL4wudMa52Bk7FyOfurZMXC6c+o4sWT3Udi6mh9S1euLyjVMFxJLVQ23nYnpIXasnLt84VUAsWT3Udi6mh9S1euLyjVMFxJLVQ707V+xp/UPEelZx/2we97kiNem4nqp9Y6mgYvLdQOIkxtEMzhgIO2MDAWV59N9JjhgFjBok5NHOJUeMAlY1SMijUcsRo8Ay1HYuPIE8LntjF5a/LQoYNUjIo51LjhgFrGqQkEejliNGgWWof5wr9rbwda/IelZx3+z5JwFoebHB3p7iAAAAAElFTkSuQmCC);background-repeat: no-repeat;background-position: center center;}.yt-eq .yt-eq-menu {width: 24px;background-color: #1B1B1B;}.yt-eq .yt-eq-menu div.icon {cursor: hand;width: 24px;height: 24px;background-repeat: no-repeat;background-position: center center;}.yt-eq .yt-eq-menu div.icon:hover {background-color: #333;opacity: 0.8;}.yt-eq .yt-eq-menu div.icon-eq-enabled {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVQYlX2QT0vCYBzHv89MaDwONN1GvYE8jcd8AwMN70LgJWRQ1KFrb6JDmARBFzt2MA+D8hQIHjwYXqSbsItsUxjsMqcsfLq0iCg/1++f35cf4ZxjE71eLz0ajV4JIXahUDgimwKmaUqWZd3ncrnaarXivu93hf/Mg8FAtCzrRlXV2nK5RDKZJJzzPeFL3On3+7s/ZmwPh8NrRVGMIAhAKYXneW3GWHmr0+kcTKfTu0QikfZ9vy5J0tt4PG7Isny2WCxAKYXrum1d108ZY/6WbdsvsiyrADCZTB4AvGez2WoYhqCUwnGcrqZp54wxHwCE9Xr9GATBRxiGyGQy+4qiVKMogiiKmM1mT5qmHZdKJS+eSzjnaLVaF5zzK0EQxCiKIEkSXNc1dV2vx80xAgAYhnEL4JIQEqZSKczn8+disXjy2/x9IabZbDY45+V8Pn9YqVScv979CV3zmxgSkD0zAAAAAElFTkSuQmCC);}.yt-eq .yt-eq-menu div.icon-eq-disabled {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsSAAALEgHS3X78AAABWUlEQVQYlX2QT0vCYBzHv89MaDwONN1GvYE8jcd8AwMN70LgJWRQ1KFrb6JDmARBFzt2MA+D8hQIHjwYXqSbsItsUxjsMqcsfLq0iCg/1++f35cf4ZxjE71eLz0ajV4JIXahUDgimwKmaUqWZd3ncrnaarXivu93hf/Mg8FAtCzrRlXV2nK5RDKZJJzzPeFL3On3+7s/ZmwPh8NrRVGMIAhAKYXneW3GWHmr0+kcTKfTu0QikfZ9vy5J0tt4PG7Isny2WCxAKYXrum1d108ZY/6WbdsvsiyrADCZTB4AvGez2WoYhqCUwnGcrqZp54wxHwCE9Xr9GATBRxiGyGQy+4qiVKMogiiKmM1mT5qmHZdKJS+eSzjnaLVaF5zzK0EQxCiKIEkSXNc1dV2vx80xAgAYhnEL4JIQEqZSKczn8+disXjy2/x9IabZbDY45+V8Pn9YqVScv979CV3zmxgSkD0zAAAAAElFTkSuQmCC);opacity: 0.5;}.yt-eq .yt-eq-menu div.icon-presets {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsSAAALEgHS3X78AAAA+0lEQVQYlX2RP0rEQBjFv/kysxMGhxCm2yIprAVJtf0W2tp4APEYXiOdjScQ9hiCi3iDTZE0+TcMGMJMRitBsia/+j34PR7J8/xdSpl1XffAOb8VQtyP4whzEBGGYThSKWXGOQfvfYqICWPsLPwLYyyjWutHRNwGQXCw1n7WdX01TdM0DxNCCCKWtGmaVwAQaZrWfd+ftNZvlNLvecE5RwDgiyZJ8sEYi9u2fRJC7OM43jvn/D9GBBFbXBRegBZFcf1H6aWqqotVJaXUHSJujTGHzWZzqZRaHx1F0TPnHMqyDMIwvJFS7qy1y0rGmCMAZIh48t4X1trd2nE/+XtvXXJ/OoQAAAAASUVORK5CYII=);}.yt-eq .yt-eq-menu div.icon-lock-on {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAACXBIWXMAAAsSAAALEgHS3X78AAABG0lEQVQokY2OMU4CURRF73t/Jg4uYBISCjZAz8TOxN4FaCm/MKFwA4QNUFCQiAWFLoAVmFhYmNDBAihYg4P8//61IUI0Jpzy5iTnCkkAwHA4PG+1WqMsy7xzDmaGGOPjZrN5GAwGnwAgJNHv9886nc5TnueXKaVnkmsRaavqbQjhdblc3o3H468MAKqq6oYQrrbb7XWv1/vAnul0Oi+KYl5VVRfAmwKAqjbLslx57xc4wnu/KMtypapNAFAAIBlVtSZpxzJJ2+8RAGQymdw3Go0b51w7pfQuIjySRVUvzGxd1/WLzGYzigjMDHme4zchBDjnQBKZ2aG82+3+yAAQY8TP51NRETlJFBFoSukkOaUEJTkCwP8K+50kR98tCoWL9JzErQAAAABJRU5ErkJggg==);}.yt-eq .yt-eq-menu div.icon-lock-off {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAACXBIWXMAAAsSAAALEgHS3X78AAABGElEQVQokY3NMUoDYRCG4W9md5FYJFUKIUVukNYg2wj2HkBLs4UhhRcIwT5CIAtikcIL2NmlECxEm4AHsMgZ3DX5Zz6bqCEQydvNzAMjJAEAg8Fgv9FoDJMkyVQV7o7lcnk7n8+v+v3+JwAISfR6vb1Wq3UXx/ExyXsz+4iiqCki5yGE6Ww2uxiNRl8xALTb7cMQwklRFKedTucFq8bj8UO1Wn1M0/QIwFQBQFUP6vX6e5Zlb1ir2+2+1mq1GzMrASAGAJJBVQuSto5JOoDrn1nyPL+sVCpnURQ13f1ZRIiNSKIsyyeZTCYUEZgZkiTZdL+ZGWKzv8+LxWIrBgD997qJRWQnKCJQd98JuzuU5BAAt31Y7Uly+A1xgXrGUJY2+QAAAABJRU5ErkJggg==);}.yt-eq .yt-eq-menu div.icon-info {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAMCAYAAACqYHctAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8klEQVQImT3IsUqFUBgA4P/or54jJnKHtosQ9wVaChoKeoBwcRGkza236C0yhOsUQdDUfmkpgpagxSdokMJz0OPx15boGz+2LAsAANR1vS+lvCGiLcIfpdRRFEUXXded/KeU8pVzfouIz2xZFqiq6iAIgktjzEeWZfd2HMdrpdS14zhX4zhumqYpLdu2zxBxN8/zYIz5TNOUrGEY7oQQrud5nHO+AwCwiqIwWutzrbVp2/YFAICVZblCxHcikoh4KoT4tqZpOmSMrYnore/71HGcPSsMw43rumye52Mi+kqS5AenaXrSWm9933/M8/wBAOAX3AhvWeRXJOcAAAAASUVORK5CYII=);}.yt-eq .yt-eq-menu div.icon-reset {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsSAAALEgHS3X78AAABYElEQVQYlTXPMWtTURQH8P85574mJd0j5SFd8gkyFCpdugiCupbiyyAh6RAKHbuUPqF1FuISAk+QLOLgWOhULBRMQDRLhjooQf0Il9x7z+miv2/wIzPDZDJ5lFIKnU7nC/4py5JbrdbTlNLXoih+SbPZPCSiioj2p9Pp93a7/aMsS87z/JWIvF2tVjuLxeKKRqPRz3q9/tDMoKp/QwgvRWTbOXeqquScg4g8c977Pedc5ZzbBfCAiD4BWEspQUTMe/9aVS/JzDAcDjcbjcZ7ItpTVQCAiMQQwnm32z0DAAaAwWDwO4TwjYhgZgAAVQ1mdvs/xwAwHo/Pa7XaUUoJzjkwM4hoPcuyd1VVPQYAyfP8g4gcAmBmNu/9GwA+y7ItABtm9mQ+n39mM9sAYMwcY4wX/X7/WFUPYow3zAwATERrPJvNnscYL733H5fL5SkA9Hq9P6r6IsZ4570/KYri+h7pOqb/9xibRgAAAABJRU5ErkJggg==);}</style>');
    eqUI.append('<table class="yt-eq " cellspacing="0" cellpadding="0"> <tr class="yt-eq sliders"> <td class="yt-eq yt-eq-volume"> <input id="yt-eq-slider-master" class="yt-eq-slider" type="range" min="0" step="0.1" max="1.2" value="0"> </td> <td> <input id="yt-eq-slider-32" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-64" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-125" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-250" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-500" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-1000" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-2000" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-4000" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-8000" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td> <input id="yt-eq-slider-16000" class="yt-eq-slider" type="range" min="-12" step="1" max="12" value="0"> </td> <td class="yt-eq-visualizer" rowspan="2"><canvas id="yt-eq-canvas-visualizer"></canvas></td> <td class="yt-eq-menu" rowspan="2"> <div class="icon"></div> <div class="icon"></div> <div id="yt-eq-menu-power" class="icon icon-eq-enabled" yt-eq-tooltip="Turn on/off"></div> <!--div id="yt-eq-menu-presets" class="icon icon-presets" yt-eq-tooltip="Load presets"></div--> <div id="yt-eq-menu-reset" class="icon icon-reset" yt-eq-tooltip="reset settings"></div> <!--div id="yt-eq-menu-lock" class="icon icon-lock-on" yt-eq-tooltip="Lock settings"></div--> <div id="yt-eq-menu-info" class="icon icon-info" yt-eq-tooltip="Info"></div> </td> </tr> <tr class="yt-eq yt-eq-label"> <td>Volume</td> <td>32</td> <td>64</td> <td>125</td> <td>250</td> <td>500</td> <td>1k</td> <td>2k</td> <td>4k</td> <td>8k</td> <td>16k</td> </tr> </table>');

    $('#watch7-content').prepend(eqUI);
    var context = new webkitAudioContext();
    var masterNode = context.createGainNode();
    masterNode.gain.value = masterVolume;
    //32,64,125,250,500,1K,2K,4K,8K,16K
    var createFilter = function(f, t, g) {
        f = (f) ? f : 0;
        t = (t) ? t : 5;
        g = (g) ? g : 0;
        var filter = context.createBiquadFilter();
        filter.type = t;
        filter.gain.value = g;
        filter.Q.value = 1;
        filter.frequency.value = f;
        return filter;
    };
    var filter32 = createFilter(32, 3);
    var filter64 = createFilter(64, 5);
    var filter125 = createFilter(125, 5);
    var filter250 = createFilter(250, 5);
    var filter500 = createFilter(500, 5);
    var filter1000 = createFilter(1000, 5);
    var filter2000 = createFilter(2000, 5);
    var filter4000 = createFilter(4000, 5);
    var filter8000 = createFilter(8000, 5);
    var filter16000 = createFilter(16000, 4);

    // Change frequency to test
    //console.log("videoTag", videoTag);
    var source = context.createMediaElementSource(videoTag);
    //console.log(source);
    source.connect(masterNode);
    masterNode.connect(filter32);
    filter32.connect(filter64);
    filter64.connect(filter125);
    filter125.connect(filter250);
    filter250.connect(filter500);
    filter500.connect(filter1000);
    filter1000.connect(filter2000);
    filter2000.connect(filter4000);
    filter4000.connect(filter8000);
    filter8000.connect(filter16000);
    filter16000.connect(context.destination);

    visualizer.init(source, context, document.getElementById('yt-eq-canvas-visualizer'));

    //default values
    $('#yt-eq-slider-master').val(masterVolume);
    $('#yt-eq-slider-32').val(0);
    $('#yt-eq-slider-64').val(0);
    $('#yt-eq-slider-125').val(0);
    $('#yt-eq-slider-250').val(0);
    $('#yt-eq-slider-500').val(0);
    $('#yt-eq-slider-1000').val(0);
    $('#yt-eq-slider-2000').val(0);
    $('#yt-eq-slider-4000').val(0);
    $('#yt-eq-slider-8000').val(0);
    $('#yt-eq-slider-16000').val(0);

    //change listeners
    $('#yt-eq-menu-power').click(function() {
        if (eq.disabled) {
            eq.toggle();
            $(this).removeClass('icon-eq-disabled').addClass('icon-eq-enabled')
        } else {
            eq.toggle();
            $(this).removeClass('icon-eq-enabled').addClass('icon-eq-disabled')
        }
        eq.disabled = !eq.disabled;
    });
    $('#yt-eq-menu-reset').click(function() {
        eq.reset();
    });
    $('#yt-eq-menu-info').click(function() {
        window.open('http://ejci.net', '_blank');
    });

    $('#yt-eq-canvas-visualizer').click(function() {
        if (visualizer.running) {
            visualizer.stop();
        } else {
            visualizer.start();
        }
    });
    $('#yt-eq-slider-master').change(function() {
        var v = $(this).val();
        masterNode.gain.value = v;
        videoTag.volume = v;
    });
    $('#yt-eq-slider-32').change(function() {
        var v = $(this).val();
        filter32.gain.value = v;
    });
    $('#yt-eq-slider-64').change(function() {
        var v = $(this).val();
        filter64.gain.value = v;
    });
    $('#yt-eq-slider-125').change(function() {
        var v = $(this).val();
        filter125.gain.value = v;
    });
    $('#yt-eq-slider-250').change(function() {
        var v = $(this).val();
        filter250.gain.value = v;
    });
    $('#yt-eq-slider-500').change(function() {
        var v = $(this).val();
        filter500.gain.value = v;
    });
    $('#yt-eq-slider-1000').change(function() {
        var v = $(this).val();
        filter1000.gain.value = v;
    });
    $('#yt-eq-slider-2000').change(function() {
        var v = $(this).val();
        filter2000.gain.value = v;
    });
    $('#yt-eq-slider-4000').change(function() {
        var v = $(this).val();
        filter4000.gain.value = v;
    });
    $('#yt-eq-slider-8000').change(function() {
        var v = $(this).val();
        filter8000.gain.value = v;
    });
    $('#yt-eq-slider-16000').change(function() {
        var v = $(this).val();
        filter16000.gain.value = v;
    });

}
var eq = {};
eq.disabled = false;
eq.reset = function() {
    $('#yt-eq-slider-32').val(0).trigger('change');
    $('#yt-eq-slider-64').val(0).trigger('change');
    $('#yt-eq-slider-125').val(0).trigger('change');
    $('#yt-eq-slider-250').val(0).trigger('change');
    $('#yt-eq-slider-500').val(0).trigger('change');
    $('#yt-eq-slider-1000').val(0).trigger('change');
    $('#yt-eq-slider-2000').val(0).trigger('change');
    $('#yt-eq-slider-4000').val(0).trigger('change');
    $('#yt-eq-slider-8000').val(0).trigger('change');
    $('#yt-eq-slider-16000').val(0);
};
eq.toggle = function() {
    eq.reset();
    if (!eq.disabled) {
        $('#yt-eq-slider-32').attr("disabled", true).hide(500);
        $('#yt-eq-slider-64').attr("disabled", true).hide(500);
        $('#yt-eq-slider-125').attr("disabled", true).hide(500);
        $('#yt-eq-slider-250').attr("disabled", true).hide(500);
        $('#yt-eq-slider-500').attr("disabled", true).hide(500);
        $('#yt-eq-slider-1000').attr("disabled", true).hide(500);
        $('#yt-eq-slider-2000').attr("disabled", true).hide(500);
        $('#yt-eq-slider-4000').attr("disabled", true).hide(500);
        $('#yt-eq-slider-8000').attr("disabled", true).hide(500);
        $('#yt-eq-slider-16000').attr("disabled", true).hide(500);
    } else {
        $('#yt-eq-slider-32').removeAttr("disabled").show(500);
        $('#yt-eq-slider-64').removeAttr("disabled").show(500);
        $('#yt-eq-slider-125').removeAttr("disabled").show(500);
        $('#yt-eq-slider-250').removeAttr("disabled").show(500);
        $('#yt-eq-slider-500').removeAttr("disabled").show(500);
        $('#yt-eq-slider-1000').removeAttr("disabled").show(500);
        $('#yt-eq-slider-2000').removeAttr("disabled").show(500);
        $('#yt-eq-slider-4000').removeAttr("disabled").show(500);
        $('#yt-eq-slider-8000').removeAttr("disabled").show(500);
        $('#yt-eq-slider-16000').removeAttr("disabled").show(500);
    }

}
var storage = chrome.storage.local;

storage.get('myTestVar', function(result) {
    console.log(result);
    //console output = {myTestVar:'my test var'}
})
var visualizer = {};
visualizer.running = false;
visualizer.init = function(source, context, canvas) {
    visualizer.running = true;
    canvas.width = 256;
    canvas.height = 100;
    var ctx = canvas.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(0.25, '#eee');
    gradient.addColorStop(0.50, '#ccc');
    gradient.addColorStop(0.75, '#bbb');
    gradient.addColorStop(1, '#aaa');

    //node = context.createJavaScriptNode(2048, 1, 1);
    node = context.createScriptProcessor(2048, 1, 1);
    node.connect(context.destination);

    var analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.5;
    analyser.fftSize = 512;

    source.connect(analyser);
    analyser.connect(node);
    //analyser.connect(source);
    ctx.fillStyle = 'rgba(0,0,0,255)';
    ctx.fillRect(0, 0, 256, 100);
    isProcessing = false;
    node.onaudioprocess = function() {
        if (isProcessing) {
            //if there is something inore "event"
            return;
        }
        isProcessing = true;
        if (!visualizer.running) {
            return;
        }
        function drawSpectrum(array) {
            var size = 8;
            for (var i = 0; i < (array.length); i = i + size) {
                //var value = array[i];
                var value = 0;
                for (var j = 0; j < size; j++) {
                    value += array[i + j];
                }
                value = Math.floor(value / size);
                value = (value / 256) * 100 - 10;
                ctx.fillRect(i, 100 - value, (size > 1) ? (size - 1) : 1, 100);

            }
        };
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        ctx.clearRect(0, 0, 256, 100);
        //ctx.fillStyle = 'rgba(255,255,255,255)';
        ctx.fillStyle = gradient;
        drawSpectrum(array);
        isProcessing = false;

    }
};
visualizer.start = function() {
    visualizer.running = true;
};
visualizer.stop = function() {
    visualizer.running = false;
};
/**
 * some utils
 */
var utils = {};
/**
 * get parameter from url (if exists)
 */
utils.urlParam = function(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return false;
    else
        return results[1];
};

//Check if is watching link
if (/watch/i.test(document.location)) {
    //is watching
    var videoId = utils.urlParam('v');
    //Check if there exists v parameter in url (video id)
    if (videoId) {
        if (utils.urlParam('html5')) {
            $(document).ready(function() {
                var videoTag = document.getElementsByTagName('video')[0];
                //console.log('videoTag', videoTag);
                if (videoTag) {
                    app.init(videoId, videoTag);
                } else {
                    console.log('YouTube EQ: No html5 video :(');
                }
            });
        }
    }
}

