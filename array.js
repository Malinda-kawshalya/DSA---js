
//we can add any data type to array(strings/objects...)
let person={
    name:"malinda",
    age:24
}
let arr =[10,4,50,"mmm",person];

//to access to the array
console.log(arr[4].name); 

//length of the array 
console.log(arr.length);

//to add end of the array
arr.push("mk");
console.log(arr);

//remove from the end
arr.pop();
console.log(arr);

//to start end of the array
arr.unshift("nithi");
console.log(arr);

//remove from the start
arr.shift();
console.log(arr);

// add elemet to the special index
arr.splice(1,0,"kk")  // index , how many elements to delete,adding element)
console.log(arr)

// remove elemet from the special index
arr.splice(1,0) //(startindex , how many elements to delete)
console.log(arr)

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

let i=0 ;
while ( i<arr.length)
{
    console.log(arr[i])
    i++;
}

let arr2 =[45,56,550,6,66];

//map method
let divideArray = arr.map(function(item,index){
    return item/2;
});
console.log(divideArray);

let multiplyArray = arr2.map((item,index) =>
{
    return item*3+index;
});
console.log(multiplyArray);

//filter method
let moreThantwo = arr2.filter((item,index)=>{
    return item<=50;
});
console.log(moreThantwo);

//reduce method 
let sumArr = arr2.reduce((pre,crr,i,num)=>{
    return pre+crr;
},100);
console.log(sumArr);

//foreach 
let frr = arr2.forEach((item,index)=>{
console.log(item*2);
}
); 

// q1
let students = [
    {name: "mkk" , marks:65},
    {name: "mkkf",marks:55},
    {name: "mkkd",marks:45},
]

//show only the student name in upper case
let capt = students.map((item,index,arrr)=>
{
      return item.name.toUpperCase()
}
);
console.log(capt);

//student marks >60

let marks=students.filter((item,index)=>
{
    return item.marks>60;
}
) ;
console.log(marks);

//total marks of the students
let sum=students.reduce((pre,crr)=>
{
    return pre+crr.marks;
},0
) ;
console.log(sum);

let sommee=students.some((item,index)=>
{
    return item.marks>60;
}
) ;
console.log(sommee);