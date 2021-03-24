// //first way
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

// //second way
// const getAvg = (...a) =>{
//     var sum = 0;
//     for(var i=0 ;i < a.length; i++){
//         sum = sum + a[i];
//     }
//     div = sum / a.length;
//     console.log(div);
// }
// getAvg(1, 2, 3, 4);




// //zero way  :)
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

// //first way
// function search(arr, a) {
//     for (let i = 0; i < arr.length; i++) {
//         if (a === arr[i]) { return true; }
//     } return false;
// }

// //second way
// function search(arr, a) {
//     const result = arr.filter(item => (item === a));
//     return (result.length === 0) ? false : true;
// }

// //third way
// var arr = [1, 2, 3, 4, 5];
// const getAvg = a => {
//     const avg = a.reduce((total, value) => { return total + value })
//     const x = avg / a.length;
//     return x;
// }
// console.log(getAvg(arr));





// //first way
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

// //second way
// function  removeDuplicates(arr){
//     var newArr = [];
//      for (var i = 0; i < arr.length; i++) {
//          if (newArr.indexOf(arr[i]) === -1) {
//              newArr.push(arr[i]);
//          }
//      }
//    return newArr;

//  }
//  console.log("new arr of [1,2,2,3,3,5] : " +removeDuplicates([1,2,2,3,3,5]));




//first way
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

// //second way
// const getMinMax = (array, word) => {

//     if (word == "min") {
//         const min = array.reduce((min, item) => (min > item) ? item : min, array[0])
//         return min
//     } else {
//         const max = array.reduce((max, item) => (max < item) ? item : max, array[0])
//         return max
//     }

// }
// console.log(getMinMax([10, 20, 30]))




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

// var arr = [0,1,2,3,4,5];
// const shuffle = (a,b) =>{ 
//     if(b == 'right'){
//         const x= a.pop();
//        a.unshift(x);
//        console.log(a);
//     }else if(b == 'left'){
//         const y= a.shift();
//         a.push(y);
//         console.log(a);
//      }
// }
// shuffle(arr, 'right');


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