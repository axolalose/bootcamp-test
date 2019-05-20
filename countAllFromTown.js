function countAllFromTown(reg, town) {
    var all = reg.split(",");
    var num = [];
    for(var i=0;i<all.length; i++){
      //var current = all[i];
      if (all[i].startsWith(town)){
          num.push(all[i])
        }
     }
    return(num);
  }