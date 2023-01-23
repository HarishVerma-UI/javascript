// call function borawing and pass a this refrence to function with indusial value  like line 12
// Apply function borawing and pass a this refrence to function with array value like line 13 
// bind function it's return new function we can call letter like value 15

const data = {fname:'harish',lname:"verma" }

const data1 = {fname:'oshin',lname:"raj" }

const fullname = function(city){
    console.log(this,city)
}

fullname.call(data,"dausa")
fullname.apply(data1,['dausa','jaipur'])
const fn = fullname.bind(data,"dausa");
console.log(fn())