let arr=[1,2,2,5,6,6,7]



function removeDuplicates(array)
{ 
    return array.filter  //This goes through each item in the array and decides whether to keep it or not.
    (
        (e1 , index ) => array.indexOf(e1) === index     
    )
}


console.log("filter method " +removeDuplicates(arr))

// e1: the current element in the array. 
// index: the position of e1 in the array.
// array.indexOf(e1): finds the first place this value appears in the array
// for the first 2 (at index 1): array.indexOf(2) is 1 → keep it ✅
// For the second 2 (at index 2): array.indexOf(2) is still 1 → skip it ❌

//--------------------------------------------------------------------------------------------------------------

function removeDuplicates2(array) {
  const unique = [];

  array.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });

  return unique;
}
console.log("foreach method " +removeDuplicates2(arr))

//go through the each element and checks this value already include in unique array and if not add to it

//--------------------------------------------------------------------------------------------------------------


function removeDuplicates3(array) 
{
  const map = new Map(array.map(item => [item, true])); //make key value pairs 
  return [...map.keys()];
}
console.log("map method " +removeDuplicates3(arr))

//-----------------------------------------------------------------------------------------------------------------

let removeDuplicates4 = [...new Set(arr)]
console.log("set method " +removeDuplicates4)

//-----------------------------------------------------------------------------------------------------------