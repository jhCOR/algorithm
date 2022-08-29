function solution(numbers) {
    var answer = '';
    numbers.sort(sortNum, numbers);
    for(let item of numbers){
        answer+=item;
    }
    if(answer[0]<1){
        answer = parseInt(answer)+""
    }
    
    return answer;
}
function sortNum(a, b){
    a = a + '';
    b = b + '';
    if(a[0]>b[0])return -1;
    if(a[0]<b[0])return 1;
    if(a[0]==b[0]){
        if(parseInt(a+b)>parseInt(b+a))return -1;
        if(parseInt(a+b)<parseInt(b+a))return 1;
        if(parseInt(a+b)===parseInt(b+a))return 0;
    }
}