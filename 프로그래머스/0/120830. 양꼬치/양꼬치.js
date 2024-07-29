function solution(n, k) {
    const discount = Math.floor(n/10);
    return n * 12_000 + (k-discount) * 2_000;
}