//similarly its look for my left neighbour is same or not
let removeDuplicates = function(nums) {
    if(nums.length==0)
        return 0;
    
    let k=0;
    for(let i=0;i<nums.length;++i){
        if(nums[i]!=nums[i-1]){
            nums[k++]=nums[i];
        }
    }
    return k;
    
}



//its look for if my right neighbour is same or not

// var removeDuplicates = function(nums) {
//     if(nums.length ==0){
//         return 0;
//     }
    
//     let i =0;
//     for(let j=0;j<=nums.length-1;j++){
//         if(nums[j] != nums[i]){
//             i++
//             nums[i] = nums[j]
//         }
//     }return i+1
    
// };
