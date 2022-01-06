class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
    setNext(next){
        this.next = next;
    }
    match(node){}  
    hasStr(searchStr){}
}

class StudentNode extends ListNode{
    constructor(data){
        super(data);
    }
    match(student){
        if (student.data.mail == this.data.mail)
            return true;
        return false;
    }
    hasStr(searchStr){
        let fullName = this.data.fname + " " + this.data.lname;
        if (searchStr == fullName){
            return true;
        }
        return false;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    setFirst(node){
        this.head = node;    
    }
    isEmpty(){
        if (this.head == null)
            return true;
        return false;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    getFirst() {
        return this.head;
    }
    add(node){
        this.getLast().setNext(node);
    }
    print(){
        console.log("Current linked list");
        let lastNode = this.getFirst();
        if (lastNode) {
            console.log(lastNode.data);
            while (lastNode.next) {
                lastNode = lastNode.next
                console.log(lastNode.data);
            }
        }
    }
    search(node){
        let lastNode = this.getFirst();
        if (lastNode) {            
            while (!lastNode.match(node) && lastNode.next) {
                lastNode = lastNode.next
            }
            if (lastNode.match(node))
                return lastNode;            
        }
        return null;
    }
    searchAll(searchStr){
        let foundNodes = [];
        let lastNode = this.getFirst();
        while (lastNode) {
            if (lastNode.hasStr(searchStr))
                foundNodes.push(lastNode)
            lastNode = lastNode.next;
        }
        return foundNodes;
    }
}

let students = new LinkedList();

function loadStudents(){
    //Get students list from Web server 
    var xhttp = new XMLHttpRequest();
    //Define the callback function for the HTTP request
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //Process Web server reposne
        studentsJSON = JSON.parse(this.responseText);        
        studentsJSON.forEach(function(student) {
            //Save student in browser cache
            addStudent(student);
            //Show student in HTML page
            showStudent(student);
        })
      }
    };
    //Create connection to Web server
    xhttp.open("GET", "students.json", true);
    //Send request to Web server
    xhttp.send();
}

$(document).ready(function(){
    loadStudents();
    $("form").submit(function(event){
        event.preventDefault();
        let student = {
            fname: $("#fname").val(),            
            lname: $("#lname").val(),
            info: $("#info").val(),
            mail: $("#studentEmail").val()
        };
        if (addStudent(student))
            showStudent(student);
    });
    $("#search").click(function(event){
        event.preventDefault();        
        let similarStudents = searchStudents($("#searchStr").val())
    });
});


function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
    let loop
    while (start <= end) {
        console.log()
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

function searchStudents(searchStr){
    //console.log("searchStudents " + searchStr);
    //let found = students.searchAll(searchStr);
    //console.log(found);
    let sortedArray = [2,3,7,9,100,320,1000,1700,1800,1900,2400,10000];
    let theResult = binarySearch(sortedArray, 1001);
    console.log("binarySearch result = " + theResult);
}

function addStudent(student){
    let newStudentNode = new StudentNode(student);
    let matchStudent = students.search(newStudentNode);
    if (matchStudent){
        alert("Duplicated email");
        return false;
    }
    if (students.isEmpty()){
        students.setFirst(newStudentNode);
    }else{
        students.add(newStudentNode);
    }
    students.print();
    return true;
}

function showStudent(student){

    $(".row").append("<div class='col-4 d-flex align-self-stretch'></div>");
    
    //Create the new card with its sub elements
    $(".col-4:last").append("<div class='card w-100'></div>");

    //create image section for card
    $(".card:last").append("<img class='card-img-top' src='images/sample.svg'/>");

    //creating body section with info on student to card
    $(".card:last").append("<div class='card-body text-center d-flex flex-column'></div>");


    $(".card-body:last").append(
        `<h5 class='card-title'>${student.fname} ${student.lname}</h5>`, 
        `<p class='card-text'>${student.info}</p>`,
        `<a class='btn btn-primary mt-auto'>VIEW PROFILE</a>`
        );
}
