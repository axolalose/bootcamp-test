describe("countAllFromTown function",function(){
    it("Should return true all the registration numbers in the string that is for that Town  ",function(){
        assert.deepEqual(countAllFromTown("CS 123","CS"),["CS 123"])
    })
    it("Should return false if registration from Town  ",function(){ 
        assert.deepEqual(countAllFromTown("CY 123,CS 123,CY 543","CY"),["CY 123","CY 543"])
    })
})
