let bubleSort=(arr)=>
{
    for(let i=0 ; i<arr.length ; i++)
    {
      for(let j=0 ; j<arr.length-i-1 ;j++)
      {
        if(arr[j]<arr[j+1])
        {
          [arr[j] ,arr[j+1]]=[arr[j+1],arr[j]]       
        }
      }
    }
    return arr;
}
console.log(bubleSort([10,20,80,40,500,60]));