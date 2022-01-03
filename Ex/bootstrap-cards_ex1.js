class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
    setNext(next){
        this.next = next;
    }
    match(node){}    
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
}

    collect(student){
        if (student.data.name ==this.data.name)
             return true;
             return false;
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
}

    find(node){
       let lastNode = this.getFirst();
        if (lastNode) {            
        while (!lastNode.collect(node) && lastNode.next) {
            lastNode = lastNode.next
        }
        if (lastNode.collect(node))
            return lastNode;            
    }
    return null;
}

let students = new LinkedList();

$(document).ready(function(){
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
});

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
