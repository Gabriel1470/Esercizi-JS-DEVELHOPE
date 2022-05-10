/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
} */

function sum(...arry) {
    let sum = 0;
    for (let num of arry) sum += num;

    return sum;
}



console.log(sum(12,34,6,45,8));