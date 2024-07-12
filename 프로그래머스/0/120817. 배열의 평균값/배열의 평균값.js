function solution(numbers) {
    const avg = numbers.reduce((a,b) => a+b) / numbers.length
    const temp = String(avg).split('.')
    if(temp[1] == 0 || temp[1] == 5 || temp.length === 1)
        return avg
     else
        return Math.floor(avg)
}