
let  binarySearch = (arr,target) => 
{
   let start =0
   let end = arr.length-1
   

   while(start<=end)
   {  
      let middle = Math.floor((start+end)/2)

      if(arr[middle]===target)
      {
        return middle;
      }
      else if (arr[middle]<target)
      {
        start = middle+1
      }
      else 
    {
     end = middle-1
    }
   }
   return -1
}
console.log(binarySearch([10,20,30,40,50,60],50))