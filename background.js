var host = "https://www.reuters.com/";
var hostList = {
    "*://mobile.reuters.com/*" : "https://www.reuters.com/",
    "*://mobile.twitter.com/*" : "https://twitter.com/"
}
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://mobile.reuters.com/*",
            "*://mobile.twitter.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);