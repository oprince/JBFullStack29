class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
    setNext(next){
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    setFirst(node){
        this.head = node;    }
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
}

let students = new LinkedList();

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        student = {
            fname: $("#fname").val(),            
            lname: $("#lname").val(),
            info: $("#info").val(),
            mail: $("#studentEmail").val()
        };
        addStudent(student);
        showStudent(student);
    });
});

function addStudent(student){
    if (students.isEmpty()){
        students.setFirst(new ListNode(student));
    }else{
        students.add(new ListNode(student));
    }
    students.print();
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


