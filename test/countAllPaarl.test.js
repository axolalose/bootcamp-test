describe("countAllPaarl function",function(){
    it("Should return false all the registration numbers in the string for Paarl ",function(){
        assert.equal(countAllPaarl("CJ 123"),1)
    })
    it("Should return false all the registration numbers if they are not in the string for Paarl",function(){
        assert.equal(countAllPaarl("CS 123"),0)
    })
})
