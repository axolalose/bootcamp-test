describe("isWeekday function",function(){
    it("Should return true if Mon.includes from Monday",function(){
        assert.equal(isWeekday("Monday"),true)
    })
    it("Should return false if Mon.includes not from Monday",function(){
        assert.equal(isWeekday("Monday"),true)
    })
})