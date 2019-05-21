describe("mostProfitableDepartment function",function(){
    it("Should return highest profitable department ",function(){
        assert.deepEqual(mostProfitableDepartment(salesData),'outdoor')
    });
    it("Should return lowest profitable department ",function(){
        assert.deepEqual(mostProfitableDepartment(salesData),'outdoor')
    });
});