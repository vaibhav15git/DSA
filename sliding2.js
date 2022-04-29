arr = [1, 5, 3, 1, 2]

k = 2

max = 0;
sum = 0;
for (i = 0; i < k; i++) {
    sum += arr[i];
}
max = Maximum(sum, max);
for (i = k; i < arr.length; i++) {
    sum -= arr[i - k];
    sum += arr[i];
    max = Maximum(sum, max);
}
console.log(max);