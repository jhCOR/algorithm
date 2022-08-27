function solution(clothes) {
    var answer = 0;
    var itemObject = {};
    for(let item of clothes){
        if(!itemObject[item[1]]){
            itemObject[item[1]] = [];
        }
        itemObject[item[1]].push(item[0])
    }
    let keys = Object.keys(itemObject)
    let num = 1;
    for(let key of keys){
        num *= ((itemObject[key]).length+1);
    }
    answer = num-1;
    return answer;
}