function solution(n) {
    if(n <= 7) return 1;
    const pizza = parseInt(n/7)
    return n / 7 === pizza ? pizza: pizza+1;
}