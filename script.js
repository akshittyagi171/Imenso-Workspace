/*
*
*
DAY - 1 (Read and Implement JSON)
W3-School : https://www.w3schools.com/js/js_json_intro.asp
*/

// Creating a JSON Array
function createJSONArray() {
    var jsonArray = [
        { "name": "Akshit Tyagi", "age": 21 },
        { "name": "Karan Rao", "age": 21 },
        { "name": "Abhay Deep Varshney", "age": 21 }
    ];

    return JSON.stringify(jsonArray);
}

var jsonArrayString = createJSONArray();
console.log(jsonArrayString);

// Adding Values to JSON Array
function addValue(jsonArrayString, newName, newAge) {
    var jsonArray = JSON.parse(jsonArrayString);
    jsonArray.push({ "name": newName, "age": newAge });//push on a particular index

    return JSON.stringify(jsonArray);
}

var updatedJSONArrayString = addValue(jsonArrayString, "Aman", 22);
console.log(updatedJSONArrayString);

// Edit Values in JSON Array
function editValue(jsonArrayString, index, newName, newAge) {
    var jsonArray = JSON.parse(jsonArrayString);
    jsonArray[index].name = newName;
    jsonArray[index].age = newAge;
// send whole JSON and find whole json and then update..ToDo
    return JSON.stringify(jsonArray);
}

var editedJSONArrayString = editValue(updatedJSONArrayString, 3, "Aman Kumar Singh", 21);
console.log(editedJSONArrayString);

// Splice Values from JSON Array
function spliceValue(jsonArrayString, index) {
    var jsonArray = JSON.parse(jsonArrayString);
    jsonArray.splice(index, 3);

    return JSON.stringify(jsonArray);
}

var splicedJSONArrayString = spliceValue(jsonArrayString, 1); 
console.log(splicedJSONArrayString);

