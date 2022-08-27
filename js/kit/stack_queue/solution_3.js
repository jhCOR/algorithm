function solution(progresses, speeds) {
    var answer = [];
    let task = [];
    for(let i = 0; i < progresses.length; i++){
        let leftTime = (((100 - progresses[i]) % speeds[i]) != 0) 
        ?  parseInt(((100 - progresses[i]) / speeds[i]) + 1) 
        : ((100 - progresses[i]) / speeds[i]);
        
        task.push(leftTime);
    }
    
    task.reverse();
    let day = task[task.length-1];
   console.log(day)
    while(task.length>0){
        let finishTask_perDay = 0;
        
        if(task[task.length-1]==day){

            for(let i = task.length-1; i>-1; i--){
                if(task[i]<=day){
                    let items = task.pop();
                    console.log(day, items)
                    finishTask_perDay += 1;
                    
                }else{
                    day = task[i];
                    break;
                }
            }
        }
        if(finishTask_perDay>0){
            answer.push(finishTask_perDay);
        }
    }
    return answer;
}