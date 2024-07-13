function solution(n) {
    const array = []
    for(let i = 0; i<= n; i++){
        if(n % i === 0) array.push([i, n/i])
    }
    return array.length;
}