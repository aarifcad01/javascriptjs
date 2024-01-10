/*
console.log ("welcome to javascript")
console.log(10);
console.log(10.10);
console.log([10,20,30,40]);
console.table([10,20,30,40]);
console.log(true);
var a=14;
let b=7;
const c=10;

console.log(a);
console.log(b);
console.log(c);

a=6;
console.log(a);
b=22;
console.log(b);
console.log(c);
a=6.5
console.log(a);
b=8.5;
console.log(b);

a="Aarif";
console.log(a);
b="dinesh";
console.log(b);
a={firstname:"Aarif",age:"25", gender:"male"};
console.log(a);
console.table(a);
a=[12,20,30,70];
console.log(a);
console.table(a);
b=[14,24,43,34,56];
console.log(b);


a="1";
console.log(typeof a);
a=1.10;
console.log(typeof a);
a="aarif"
console.log(a+" : "+typeof a);
a=true; 
console.log(a+" : "+typeof a);

a=[12,54,78];
console.log(typeof a);

a={firstname:"Aarif", gender:"male"};
console.log(typeof a);

a=50;
a=a.toString();
console.log(typeof a);

a=true;
console.log(typeof a);

a=parseInt(a);
console.log(typeof a);
console.log(a);

a=parseFloat(a);
console.log(typeof a);


a="60"
b=40;
a=a+b;
console.log(a)


g="50";
b=70;
b=String(b);
g=Number(g);
var a=g+b;
console.log(a);


var x=false; 
console.log(x,typeof x);

x=Number(x);
console.log(x,typeof x);

const f={name:"aarif", gender:"male", age:"25"};
console.log(f, typeof f)
f.name="aki";
f.gender="female";
f.age="24"
console.log(f, typeof f);


let v1=15;
let v2=30;

console.log(v1+v2);
console.log(v1-v2);
console.log(v1*v2);
console.log(v1%v2); 
console.log(v1/v2);
console.log(v1**v2);

v1=++v1;
console.log(v1);

v1=--v1;
console.log(v1);

v1=20;
console.log(v1);

v1+=45;
console.log(v1);

v1-=45;
console.log(v1);

v1*=45;
console.log(v1);

v1/=45;
console.log(v1);

v1%=45;
console.log(v1);

v1=5;
console.log(v1==5);
console.log(v1=="5",typeof v1);
console.log(v1!=1);
console.log(v1!==5,typeof v1);


//relation operators
v1=10
console.log(v1>9);
console.log(v1<9);
console.log(v1>=9);
console.log(v1<=9);

v1="k"
console.log(7==5 || 7<2 || 7>8);
console.log(v1=="k");


v1=10;
console.log(v1);
var output=v1=="10"? "v1 has value" :
"v1 doesnot have value";
console.log(output);


mark=34;
var mark= (35<mark && mark<60) ? 
"grade C" : (60<=mark && mark<80) ?
"grade B" : (80<=mark && mark<90) ?
"grade A" : (90<=mark && mark<100) ?
"grade A+" : "fail";
console.log(mark); 
*/

function findGrade(){
    mark=60;
    var mark= (35<mark && mark<60) ? 
    "grade C" : (60<=mark && mark<80) ?
    "grade B" : (80<=mark && mark<90) ?
    "grade A" : (90<=mark && mark<=100) ?
    "grade A+" : "fail";
    console.log(mark); 
    
}

findGrade();

function findGrade(dinesh,mark){
mark=67;
var mark= (35<mark && mark<60) ? 
"grade C" : (60<=mark && mark<80) ?
"grade B" : (80<=mark && mark<90) ?
"grade A" : (90<=mark && mark<=100) ?
"grade A+" : "fail";
console.log(dinesh,mark); 
}
findGrade("dinesh");

var findGrade2=(dinesh,mark)=>{ 
var mark=(35<=mark && mark<60) ? "grade C":
(60<=mark && mark<80) ? "grade B" :
(80<=mark && mark<90) ? "grade A" :
(90<=mark && mark<=100) ? "grade A+" : "Fail"
console.log(dinesh,mark)
}
console.log("dinesh",76)