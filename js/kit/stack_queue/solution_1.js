function solution(arr)
{
    var answer = [];
    let list = [];
    
    for(let index = 0; index<arr.length; index++){
        if(list.length==0){
             list.push(arr[index]);
        }else{
            if(list[list.length-1] != arr[index]){
                list.push(arr[index])
            }
        }
    }

    answer = list
    return answer;
}