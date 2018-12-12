(function(window){

  window._ajax = {}

  function requestHandler(req, func) {
    if (req.readyState === XMLHttpRequest.DONE && req.status === 200) {
      return func;
    }
  }
  
  window._ajax.$get = function({url, success}) {
    let request = new XMLHttpRequest();
  
    request.onreadystatechange = requestHandler(request, function(){
      success(request.responseText)
    });
    
    request.open('GET', url);
    request.send();
  }
  
  window._ajax.$post = function({url, data, success}) {
    let request = new XMLHttpRequest();
  
    request.onreadystatechange = requestHandler(request, function(){
      success(request.responseText)
    });
  
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(data);
  }
  
})(window);
