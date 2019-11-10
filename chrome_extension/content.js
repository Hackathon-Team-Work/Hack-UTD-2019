chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var theText = $("body div:not(script)").text();

    console.log("received request");
    // console.log(theText);

    //send theText to background.js
    chrome.runtime.sendMessage({ message: "run_analysis", content: theText });
  }
});
