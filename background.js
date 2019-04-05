var hostList = {
    "*://mobile.twitter.com/*" : "https://twitter.com",
    "*://mobile.reuters.com/*" : "https://www.reuters.com"
}
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        for (const mHost in hostList) {
            var mHostTrimmed = mHost.split('/');
            var rEx = new RegExp("^https?:\/\/" + mHostTrimmed[2])
            if(details.url.match(rEx)) {
                console.log("Host matched: " + mHost + " Redirecting to: " + hostList[mHost]);
                var host = hostList[mHost];
            }
        }
        return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: Object.keys(hostList)
    },
    ["blocking"]
);