let arr=[1,2,2,5,6,6,7]


function removeDuplicates(array)
{ 
    return array.filter  //This goes through each item in the array and decides whether to keep it or not.
    (
        (e1 , index ) => array.indexOf(e1) === index     
    )
}


console.log("filter method " +removeDuplicates(arr))

//e1: the current element in the array. 
// index: the position of e1 in the array.
//array.indexOf(e1): finds the first place this value appears in the array

// for the first 2 (at index 1): array.indexOf(2) is 1 → keep it ✅

// For the second 2 (at index 2): array.indexOf(2) is still 1 → skip it ❌


