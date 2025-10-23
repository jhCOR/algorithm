def solution(k, n, reqs):
    mentor_total = [[] for i in range(k)]
    for req in reqs:
        mentor_total[req[-1]-1].append(req)
        
    def get_time(people_list, mentor_num, verbose):
        if verbose is True:
            print(mentor_num)
        if len(people_list) < 1:
            return 0
        schedule = [0] * mentor_num
        total_delay = 0
        
        for person in people_list:
            assinged = False
            minimun = 100000
            minimun_idx = 0
            for idx in range(len(schedule)):
                m = schedule[idx]
                if m <= person[0]:
                    schedule[idx] = person[0] + person[1]
                    assinged = True
                    minimun = 0
                    break
                if minimun > m:
                    minimun = m
                    minimun_idx = idx
                if verbose is True:
                    print(schedule)
            if assinged is False:
                total_delay += minimun - person[0]
                schedule[minimun_idx] = schedule[minimun_idx] + person[1]
        return total_delay
    
    distribute = [1] * k
    for i in range(n-k):
        cost = []
        for type in range(k):
            current = distribute[type]
            first = get_time(mentor_total[type], current, False)
            last = get_time(mentor_total[type], current+1, False)
            cost.append(first-last)
        idx = cost.index(max(cost))
        distribute[idx] += 1

    total = 0
    for l in range(k):
        total += get_time(mentor_total[l], distribute[l], False)
    answer = total
    return answer
