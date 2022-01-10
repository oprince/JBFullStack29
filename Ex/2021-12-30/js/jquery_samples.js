<<<<<<< HEAD
function changeDiv() {
  document.getElementById("myDiv").innerHTML = "Changed with DOM APIs";
}

//$(function(){
$(document).ready(function () {
  $("#changeDivjQuery").click(function () {
    $("#myDiv").html("Changed with jQuery");
    $(".special").css("background", "pink");
  });
  $("#changeFirstDiv").click(function () {
    $("div:first").html("I am the first div");
  });
  $("#changeLink").click(function () {
    $("div:has(a)").css("border", "8px solid navy");
  });
  $("#changeVisability").click(function () {
    //let theElementToChange = $("div:first");
    /*         if($("div:first").css('display') == 'none'){ 
=======
function changeDiv(){
    document.getElementById("myDiv").innerHTML = "Changed with DOM APIs";
}

//$(function(){
$(document).ready(function(){
    $("#changeDivjQuery").click(function(){
        $("#myDiv").html("Changed with jQuery");
        $(".special").css("background", "pink");
    });            
    $("#changeFirstDiv").click(function(){
        $("div:first").html("I am the first div");
    });            
    $("#changeLink").click(function(){
        $("div:has(a)").css("border", "3px solid navy");
    });      
    $("#changeVisability").click(function(){
        //let theElementToChange = $("div:first");
/*         if($("div:first").css('display') == 'none'){ 
>>>>>>> master
            $("div:first").show('slow'); 
        } else { 
            $("div:first").hide('slow'); 
        }  */
<<<<<<< HEAD
    //$("div:first").toggle('slow');
    //$("div:first").fadeToggle('1000');
    //$("div:first").slideToggle('1500');

    /*$("div:first").animate({
                left: 100
        });*/

    /*$("div:first").animate({
=======
        //$("div:first").toggle('slow'); 
        //$("div:first").fadeToggle('1000');
        //$("div:first").slideToggle('1500');

        /*$("div:first").animate({
                left: 100
        });*/


        /*$("div:first").animate({
>>>>>>> master
            left: "300px",
            top: "30px"
        });*/

<<<<<<< HEAD
    /*$("div:first").animate({
=======
        /*$("div:first").animate({
>>>>>>> master
            left: "+=50px",
            top: "+=20px"
        }); */

<<<<<<< HEAD
    $("div:first")
      .animate({
        top: "+=20px",
      })
      .animate(
        {
          left: "+=50px",
        },
        function () {
          console.log("this is the animate callback function");
          $("div:first").css("background", "pink");
        }
      );
  });
  $("#changeDOM").click(function () {
    newdiv = document.createElement("div");
    newdiv.innerHTML = "I am new here";
    //$("div:has(a)").append(newdiv);
    //$("#contains").append(newdiv);
    $("#contains").prepend(newdiv);
  });
});
=======
        $("div:first").animate({            
            top: "+=20px"
        }).animate({
            left: "+=50px"
        }, function(){
            console.log("this is the animate callback function");
            $("div:first").css("background", "pink");
        }); 


    }); 
    $("#changeDOM").click(function(){
        newdiv = document.createElement( "div" );
        newdiv.innerHTML = "I am new here";
        //$("div:has(a)").append(newdiv);
        //$("#contains").append(newdiv);
        $("#contains").prepend(newdiv);
    });     
});
>>>>>>> master
