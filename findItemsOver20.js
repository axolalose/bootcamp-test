function findItemsOver20(items) {
    let products = [];  
    for (var i=0; i < items.length; i++){
      let current = items[i];    
      if(current.qty  > 20) {
            products.push(current);
        }  
      }
    return (products);
  }

  var results = findItemsOver20(items)

  var items = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];