function solution(price) {
    let sale = 0
    if (price >= 100_000 && price < 300_000)  sale = 0.05
    else if (price >= 300_000 && price < 500_000) sale = 0.1
    else if (price >= 500_000) sale = 0.2
        
    return Math.floor(price * (1 - sale))
}