function solution(money) {
    const coffee = 5_500
    let count = 0
    while(true){
        if(money - coffee < 0) break;
        money = money - coffee
        count++
    }
    return [count, money]
}