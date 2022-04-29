   var array =[1,2,3,4,5]
   k = 2
   ans = []
   i  = 0
   j = k - 1
  while(j < array.length){
          sum = 0
          for (k = i;k<=j;k++) sum += array[k]
          i++
          j++
          ans.push(sum)
  }	
  console.log(ans)