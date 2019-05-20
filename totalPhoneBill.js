function totalPhoneBill(phone) {
    var data = phone.split(', ');
    var calls = [];
    var sms = [];
    var total = 0;
    for (var i=0; i<data.length; i++) {
      var phone = data[i].trim(' ');
      if (phone === 'call'){
        total = 2.75 + total;
      }
      else if (phone === 'sms'){
        total = 0.65 + total; 
      }
    }
    return 'R' + total.toFixed(2); 

}