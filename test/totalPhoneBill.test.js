describe("totalPhoneBill function",function(){
    it("Should return R3.40 from Phone  ",function(){
        assert.equal(totalPhoneBill("call, sms"),'R3.40')
    })
    it("Should return R2.75 from Phone ",function(){
        assert.equal(totalPhoneBill("call"),"R2.75")
    })
})