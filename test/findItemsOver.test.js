describe("findItemsOver function",function(){
    it("Should return all the products that have a quantity higher than 20"),function(){
    assert.deepEqual(findItemsOver([ { name: 'pear', qty: 21 } ]),'')
    }
})


   it("Should return 20 if the items are found over 20 "),function(){
        assert.deepEqual(findItemsOver([{name:"pear", qty:21}, {name:"pear", qty:11}]), [ { name: 'pear', qty: 21 } ])
    }