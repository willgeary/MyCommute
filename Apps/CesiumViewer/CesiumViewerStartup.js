/*global require*/
require({
    baseUrl : '.',
    paths : {
        domReady : '../../ThirdParty/requirejs-2.1.20/domReady',
        Cesium : '../../Source'
    }
}, [
        'CesiumViewer'
    ], function() {
});
