function getAvg() {
    const arr = [1, 2, 3];
    var sum = 0;
    var avg;
    var le = arr.length;
    for (var i = 0; i < le; i++) {
        sum += arr[i];
    }
    avg = sum / le;
    return avg;
}
console.log(getAvg());



const search = (y, x) => {
    var result = false;
    for (var i = 0; i < y.length; i++) {
        if (y[i] == x) {
            result = true;
        }
    }
    result ? console.log("True") : console.log("False");
}
search([0, 1, 2, 3, 4], 8);



const removeDuplicates = (x, y) => {
    for (var i = 0; i < x.length; i++) {
        var result = false;
        for (var j = i + 1; j < x.length; j++) {
            if (x[i] == x[j]) {
                result = true;
                break;
            }
        }
        if (result == false) { y.push(x[i]) }
    }
    return y;
}
console.log(removeDuplicates([0, 1, 2, 3, 3, 5], []))


function getMinMax() {
    var array = [3, 4, 5, 20, 25, 30];
    var max = array[0];
    var min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    let result = "min :" + min + " " + "\nmax :" + max;
    return result;

}
console.log(getMinMax());



const shuffle = (x, y, z) => {
    for (var i = 1; i < x.length; i++) {
        y.push(x[i])
    }
    y.push(x[0]);

    z[0] = x[x.length - 1];
    for (var j = 0; j < x.length - 1; j++) {
        z.push(x[j])
    }

    let result = "right: " + z + " " + "\nleft: " + y;
    return result;
}
console.log(shuffle([0, 1, 2, 3, 4, 5], [], []));


const intersect = (x, y, z) => {
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < y.length; j++) {
            if (x[i] == y[j]) {
                z.push(x[i]);
            }
        }
    }
    return z;
}
console.log(intersect([0, 1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9, 0], []));



const union = (x, y, z) => {
    for (var i = 0; i < y.length; i++) {
        x.push(y[i]);
    }
    removeDuplicates(x, z);
    return z;
}
console.log(union([0, 1, 2, 3, 4, 5], [4, 5, 6, 7, 8, 9, 0], []));



function toBinary(number) {
    var bin = number.toString(2);
    return bin;
}
console.log(toBinary(5));



const hashArray = (x, y) => {
    for (var i = 0; i < x.length; i++) {
        y.push(toBinary(x[i]));
    }
    return y;
}
console.log(hashArray([0, 1, 2, 3, 4], []));