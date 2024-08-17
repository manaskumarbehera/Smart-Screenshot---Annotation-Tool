chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.captureVisibleTab(null, {format: 'png'}, function(dataUrl) {
      chrome.tabs.create({url: "popup.html"}, function(tab) {
        chrome.tabs.sendMessage(tab.id, {image: dataUrl});
      });
    });
  });
  