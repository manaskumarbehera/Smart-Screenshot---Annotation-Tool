document.addEventListener('DOMContentLoaded', function() {
    chrome.runtime.onMessage.addListener(function(request) {
      document.getElementById('screenshot').src = request.image;
    });
  
    document.getElementById('annotate').addEventListener('click', function() {
      // Implement annotation logic here
    });
  
    document.getElementById('save').addEventListener('click', function() {
      // Save the screenshot with annotations
    });
  });
  