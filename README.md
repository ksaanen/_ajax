# _ajax
micro size library for making ajax calls.


## example GET
```javascript
let target_variable;

_ajax.$get({
  url: 'http://www.test.url',
  success: function(result) {
    var r = JSON.parse(result);
    console.log(r);
  }
});
```
## example POST
```javascript
let target_variable;

_ajax.$post({
  url: 'http://www.test.url',
  data: '{bla:bla}',
  success: function(result) {
    var r = JSON.parse(result);
    console.log(r);
  }
});
```