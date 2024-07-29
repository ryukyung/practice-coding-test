function solution(my_string) {
    const nums = my_string.split('').filter(str => Number(str) == str)
    return nums.reduce((a,b) => parseInt(a) + parseInt(b))
}