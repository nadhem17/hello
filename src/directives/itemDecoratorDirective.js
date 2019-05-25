"use strict";

app.directive('decorateItem', function(){
  return{
    template : 'L\'item "{{item.name}}" est dans la categorie {{ item.category_id }}'
  }
})
