function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(i) {
            newArr.push(i * 2);
    }) 
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(i) {
        if (i % 2 === 0) {
            newArr.push(i);
        }
    })
    return newArr;
}

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(i) {
        let str = i[0] + i[i.length - 1];
        newArr.push(str);
    })
    return newArr;
}

function addKeyAndValue(arr,key,value){
    let newArr = [];
    arr.forEach(function(i) {
    i[key] = value;
    newArr.push(i);
    })
    return newArr;
}

function vowelCount(str){
    let arr = Array.from(str.toLowerCase());
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newObj = {};

    arr.forEach(function(i) {
        vowels.forEach(function(v){
            if (i === v) {
                if (newObj[i] !== undefined) {
                    newObj[i] ++
                } else {
                    newObj[i] = 1;
                }
            }
        })
    })
    return newObj;
}

function doubleValuesWithMap(arr) {
    return arr.map(function(i) {
        return i * 2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(val, i) {
        return val * i;
    })
}

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
    })
}

function extractFullName(arr){
   return arr.map(function(obj) {
    return `${obj.first} ${obj.last}`;
   }) 
}

function filterByValue(arr, key) {
    return arr.filter(function(obj) {
        return obj[key];
    })
}

function find(arr, searchValue) {
    return arr.filter(function(i) {
        return i === searchValue;
    })
    [0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(obj) {
        return obj[key] === searchValue;
    })[0];
}

function removeVowels(str) {
    let lCStr = str.toLowerCase();
    let arr = Array.from(lCStr);
    return arr.filter(function(char) {
        return char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u';
    }).join('');
}

function doubleOddNumbers(arr) {
    let oddNumbers = arr.filter(function(i) {
        return i % 2 !== 0;
    })
    return oddNumbers.map(function(i) {
        return i * 2;
    })
}