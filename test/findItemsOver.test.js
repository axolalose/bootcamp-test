describe("findItemsOver function",function(){
    it("Should return all the products that have a quantity higher than 20",function(){
    assert.deepEqual(findItemsOver([ { name: 'pear', qty: 21 }] ,20),[ { name: 'pear', qty: 21 } ])
    })
    it("Should return all the products that have a quantity lower than 20",function(){
        assert.deepEqual(findItemsOver([ { name: 'pear', qty: 25 }] ,20),[ { name: 'pear', qty: 25 } ])
        }) 
})


  