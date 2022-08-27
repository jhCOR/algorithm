function solution(genres, plays) {
    var answer = [];
    let object = {};
    for(let index = 0; index<genres.length;index++){
        if(!object[genres[index]]){
            object[genres[index]] = {'num' : 0};
        }
        if(!object[genres[index]]['list']){
            object[genres[index]]['list'] = [];
        }
        object[genres[index]]['num'] += plays[index];
        let item = {"num" : plays[index],
            "index":index};
        object[genres[index]]['list'].push(item)
    }
    
    function sortList(a, b){
        if(a.num && b.num){
            if(a.num > b.num) return -1;
            if(a.num === b.num) return 0;
            if(a.num < b.num) return 1;
        }
    }
    
    let keys = Object.keys(object);
    let list = [];
    keys = Array.isArray(keys) ? keys : [keys];
    for(let key of keys){
        list.push(object[key])
    }  

    list.sort(sortList, list)
    for(let i in list){
        let temList = list[i].list.sort(sortList, list[i].list.sort)
        if(temList.length==0){
            
        }else if(temList.length==1){
             answer.push(temList[0].index);
        }else if(temList.length>1){
            answer.push(temList[0].index);
            answer.push(temList[1].index);
        }
    }   

    return answer;
}