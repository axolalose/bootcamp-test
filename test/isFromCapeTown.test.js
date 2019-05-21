describe("isFromCapeTown function",function(){
    it("Should return false if registration not from Cape Town  ",function(){
        assert.equal(isFromCapeTown("CY 123"),false)
    })
    it("Should return true if registration is from Cape Town  ",function(){
        assert.equal(isFromCapeTown("CA 123"),true)
    })
})