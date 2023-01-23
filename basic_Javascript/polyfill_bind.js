const data = {fname:'oshin',lname:"raj" }

const fullname = function(a,b){
    console.log(this,a,b)
}



Function.prototype.mybind = function(...ar){
  let obj = this;
  let parm = ar.slice(1);
  return function(...a){
    obj.apply(ar[0],[...a,...parm]);
  }
}

const fn = fullname.mybind(data,'harish','fgf');
fn('fghfg')