function solution(nums) {
    var answer = 0;
    var myNumber = nums.length/2;

    let uniqueList = [];
    for(let item of nums){
        if(uniqueList.indexOf(item)<0){
            uniqueList.push(item);
        }
    }
    if(myNumber>=uniqueList.length){
        return uniqueList.length;
    }else if(myNumber<uniqueList.length){
        return myNumber;
    }
}