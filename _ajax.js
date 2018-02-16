
_ajax = function({type, url, async = true, success}) {
  let request = new XMLHttpRequest();

  request.onreadystatechange  = function(){ // when the request is loaded
    if (request.readyState == 4 && request.status == 200 && success) {
      return success(request.responseText);
    }
  };

  request.open(type, url, async);
  request.send();
}


