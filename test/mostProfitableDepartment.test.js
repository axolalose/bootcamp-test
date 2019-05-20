describe("mostProfitableDepartment function",function(){
    it("Should return highest profitable department ",function(){
        assert.deepEqual(mostProfitableDepartment(salesData),'outdoor')
    });
    it("Should return least profitable department ",function(){
        assert.deepEqual(mostProfitableDepartment(salesData),'outdoor')
    });
});