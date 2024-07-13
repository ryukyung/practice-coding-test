function solution(hp) {
    let count = 0;
    let power = [5,3,1]
    for(let i = 0; i< power.length; i++){
        const temp = parseInt(hp / power[i])
        if(temp > 0){
            count += temp
            hp -= temp * power[i]
        }
    }
    return count
}