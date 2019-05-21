describe("totalPhoneBill function",function(){
    it("Should return R3.40 if a 'call' and an 'sms' is added  ",function(){
        assert.equal(totalPhoneBill("call, sms"),'R3.40')
    })
    it("Should return R2.75 if a 'call' and an 'sms' is not added ",function(){
        assert.equal(totalPhoneBill("call"),"R2.75")
    })
})