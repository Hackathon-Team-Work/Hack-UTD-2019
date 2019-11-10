// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "clicked_browser_action"
    });
  });
});

//listen for command sent from content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "run_analysis") {
    console.log("From background.js:\n", request.content);
  }
});
