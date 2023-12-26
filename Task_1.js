//Task 1
let testObj = { 'one': 123,
        'two': 234,
        3: 456,
        4: 456}

function getKeys(obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key);
        }
    }
}

getKeys(testObj);