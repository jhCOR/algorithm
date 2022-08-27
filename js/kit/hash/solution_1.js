function solution(participant, completion) {
    var answer = "";
    function sortList(a, b){
        if(a>b)return 1;
        if(a===b)return 0;
        if(a<b)return -1;
    }
    
    participant.sort(sortList, participant);
    completion.sort(sortList, completion);
    let previousPoint = 0;
    for(let person in participant){
        let index = completion.indexOf(participant[person], previousPoint)
        if(index>-1){
            completion[index] = null;
            previousPoint = index;
        }else{
            answer = participant[person]
            return answer;
        }
    }   
}