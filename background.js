chrome.browserAction.onClicked.addListener(function(currentTab) { 
    chrome.tabs.getAllInWindow(currentTab.windowId, function(tabs){
        var tabIds = tabs.slice(currentTab.index + 1).map(function(tab){ 
            return tab.id; 
        });
        chrome.windows.create({ "tabId": currentTab.id }, function(w){
            chrome.tabs.move(tabIds, { "windowId": w.id, "index": -1 });
        });
    });
});
