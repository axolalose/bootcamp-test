describe("yearsAgo function",function(){
    it("Should return 2 if 2017 is subtracted from 2019",function(){
        assert.equal(yearsAgo(2017),2)
    })
    it("Should return false if 2years is not from subracting 2017 from 2019 ",function(){
        assert.equal(yearsAgo("2017"),2)
    })
})
