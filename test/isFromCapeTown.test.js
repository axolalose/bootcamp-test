describe("isFromCapeTown function",function(){
    it("Should return false if registration from Cape Town  ",function(){
        assert.equal(isFromCapeTown("CY 123"),false)
    })
    it("Should return false if registration not from Cape Town  ",function(){
        assert.equal(isFromCapeTown("CS 123"),false)
    })
})