function funloop(){
var regvalue = document.getElementById("fname").value;
console.log(typeof regvalue);

regvalue=Number(regvalue);

console.log(regvalue);
console.log(typeof regvalue);




//while loop 

while(regvalue<20)
    
{
    console.log("regvalue "+ regvalue + " is smaller than 20 ");
    regvalue++; 

}

do{
    console.log("reg value is smaller thwan 20")
    regvalue++;
}
while(regvalue<0)
}
funloop()
