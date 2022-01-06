$(document).ready(function(){
   
    $("form").submit(function(event){
        console.log("form submitted");
        event.preventDefault();
        student = {
            fname: $("#fname").val(),            
            lname: $("#lname").val(),
            mail: $("#studentEmail").val    ()
        };
        console.log(student);
        addStudent(student);
    });
});

var a = [1, 2, 4, 6, 50, 100, 1000];

a.sort(function (a, b) {
    return a - b;
});

console.log('a,', a);

function binarySearch(arr, i) {
   
    var mid = Math.floor(arr.length / 2);
    console.log(arr[mid], i);

    if (arr[mid] === i) {
        console.log('match', arr[mid], i);
        return arr[mid];
    } else if (arr[mid] < i && arr.length > 1) {
        console.log('mid lower', arr[mid], i);
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (arr[mid] > i && arr.length > 1) {
        console.log('mid higher', arr[mid], i);
        return binarySearch(arr.splice(0, mid), i);
    } else {
    // ...
    }
}
var result = binarySearch(a, 50);
    alert(result);
