'use strict';

var items = [
  {'name' : 'elbasha telmidh', 'category_id' : '1'},
  {'name' : 'Death Race', 'category_id' : '1'},
  {'name' : 'Count on me', 'category_id' : '2'}
];

app.service('itemProvider', function(){
  this.getItems = function(){
    return items;
  }
});
