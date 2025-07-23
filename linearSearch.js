let arr=[23,33,44,55,44]
let target =44

let LinearSearch=((arr,target)=>
{
    let result =[];
for (let i=0 ; i<arr.length ; i++)
{
    if (arr[i]===target){
        result.push(i)
    }    
}

if (result.length===0)
{
return -1
}
return result; 

});

console.log(LinearSearch(arr,target));