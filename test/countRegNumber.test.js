describe("countRegNumber function",function(){
    it("Should return true if registration from Gauteng  ",function(){
        assert.equal(isFromGauteng("DR 12 TY GP"),true)
    })
    it("Should return false if registration not from Gauteng  ",function(){
        assert.equal(isFromGauteng(" 12 TY MP"),false)
    })
})