describe("isFromBellville function",function(){
    it("Should return true if registration from Bellville  ",function(){
        assert.equal(isFromBellville("CY 123"),true)
    })
    it("Should return false if registration not from Bellville  ",function(){
        assert.equal(isFromBellville("CS 123"),false)
    })
})