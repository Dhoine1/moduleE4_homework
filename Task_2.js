//Task 2
let testObj2 = { 'one': 123,
        'two': 234,
        3: 456,
        4: 456}


function testProperty(text, obj){
    for (let key in obj){
        if (key == text){
            return true
        }      
    }
    return false 
}

console.log(testProperty('two', testObj2));
console.log(testProperty(12, testObj2));