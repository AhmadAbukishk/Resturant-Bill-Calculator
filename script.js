let bill;
let people;
let per;
let clicked = false


$(".per-btn").click(function (e) { 
    e.preventDefault()

    $(".per-btn").removeClass("clicked-btn");    
    $(this).addClass("clicked-btn");

    per = parseInt($(this).attr("id"));
    clicked = true;
    console.log(bill);
});


$("#custom-per").focus(function (e) { 
    e.preventDefault();
    
    $(".per-btn").removeClass("clicked-btn");  
    clicked = false
});

$("#reset-btn").click(function (e) { 
    e.preventDefault();

    let boolBill = true, boolPeople = true, boolPer = true;
    people = parseInt(($("#people").val()));
    bill = parseFloat($("#bill").val())
  
    $("#bill-label").text("Bill");
    $("#people-label").text("Number Of People");
    $("#per-label").text("Select Tip %");
    
    if(clicked ===false)
        per = parseInt($("#custom-per").val());

    console.log(per);    
    if(isNaN(bill) === true || bill < 0) {
        boolBill = false;
        invalidInputBorder("bill")
        $("#bill-label").append('<span style = "color: red"> only numbers and higher than zero</span>');
    } else {
        resetBorder("bill")
    }

    if((isNaN(per) === true || per > 100 || per < 0 ) && clicked === false) {
        boolBill = false;
        invalidInputBorder("custom-per")
        $("#per-label").append('<span style = "color: red"> only numbers (0-100) </span>');
    } else {
        resetBorder("custom-per");
    }
    
    if(isNaN(people) === true || people <= 0 || Number.isInteger(people) === false){
        invalidInputBorder("people");
        $("#people-label").append("<span style = 'color: red'> only numbers and higher than zero and don't have decimals </span>");
    } else {
        resetBorder("people");
    }

    if(boolPeople === true && boolBill === true && boolPer ===true ){
        let tip = (per / 100.0) * parseFloat(bill / people);
        let total = parseFloat((bill / people) + tip);
        $("#tip").text(tip.toFixed(2) + "$");
        $("#total").text(total.toFixed(2) + "$");

        reset();
    }
});


function reset(){
    $("#bill").val("");
    $("#people").val("");
    $("#custom-per").val("");
    $(".per-btn").removeClass("clicked-btn");
    clicked = false;
}

function resetBorder(id) {
    $("#" + id).css("border", "0px #28c1ac solid");
}

function invalidInputBorder(id){
    $("#" + id).css("border", "3px red solid");
}

