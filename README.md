# _ajax
micro size library for making ajax calls

## example
```javascript
let target_variable;

_ajax({
  type: 'GET',
  url: 'http://some.url',
  success: function(result) {
    target_variable = JSON.parse(result);
  }
});
```
