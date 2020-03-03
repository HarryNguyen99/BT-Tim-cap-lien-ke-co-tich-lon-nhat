let arr = [1, 8, 2, 5, 6, 7, 6];

function findMax(array) {
    if (arr.length <= 2)
        return document.write('Mang da cho co khong qua 2 phan tu');
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++) {
        temp.push(arr[i] * arr[i + 1]);
    }
    let maxtemp = temp[0];
    let text = '';
    for (i = 1; i < arr.length - 1; i++) {
        if (temp[i] > maxtemp) maxtemp = temp[i];
    }
    for (i = 0; i < arr.length - 1; i++) {
        if (temp[i] == maxtemp) text += i + ' va ' + (i + 1) + ', ';
    }
    return document.write('mang da cho [' + arr + ']co cap phan tu tich lon nhat o vi tri ' + text);
}

findMax(arr);