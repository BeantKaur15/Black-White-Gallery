//color galary select maximum 4 images js

function check(val1) {
  var chk_arr = document.getElementsByName("color-checkbox");
  var chklength = chk_arr.length;
  //check checkchbox length who are checked            
  var tot = 0; // define total 0
  var i = -1;
  for (k = 0; k < chklength; k++)

  {
    if (chk_arr[k].checked)
    //check checkbox if less than 4
    {
      tot++;
      if (i < 0) i = k;
    }
    if (tot > 4) {
      //if greater than 4 then alert message
      chk_arr[i].checked = false;
      alert("Select Maximum 4 Color images");
    }
  }
}
//*** black add to cart select maximum 4 images  js
function checkBlack(val1) {
  var chk_arr = document.getElementsByName("black-checkbox");
  //check checkchbox length who are checked   
  var chklength = chk_arr.length;
  var tot = 0; // define total 0
  var i = -1;
  for (k = 0; k < chklength; k++) {
    if (chk_arr[k].checked)
    //check checkbox if less than 4
    {
      tot++;
      if (i < 0) i = k;
    }
    if (tot > 4)
    //if greater than 4 then alert message
    {
      chk_arr[i].checked = false;
      alert("Select Maximum 4 Black&White images");
    }
  }
}

//clicking on showme function ,disable or enable select value
// it contains id name of select box
function showMe(it, box)

{
  if (box.checked) {
    document.getElementById(it).removeAttribute("disabled");
  } else {
    document.getElementById(it).setAttribute("disabled", "disabled");
    document.getElementById(it).value = '0';
  }


}
//***** color gallery add to  cart total ***********

$(document).ready(function()
  // clicking on color gallery addtocart implement calcualteprice function
  {
    $("#orderTotal").click(function() {
      calculatePrice();
    });
    // clicking on black gallery addtocart implement calcualteprice function
    $("#orderTotalprice").click(function() {
      calculateColorPrice();
    });
  })

function calculatePrice() {
  //define image price 
  var sunset = 1000;
  var red = 500;
  var net = 1500;
  var bicyle = 1000;
  var mirror = 900;
  var highway = 600;
  //get quantity of image (selected images)
  var quantitysunset = $("#quantitysunset").val();
  var quantityred = $("#quantityred").val();
  var quantitynet = $("#quantitynet").val();
  var quantitybicyle = $("#quantitybicyle").val();
  var quantitymirror = $("#quantitymirror").val();
  var quantityhighway = $("#quantityhighway").val();


  //calculate final cost
  var total = (quantitysunset * sunset) + (quantityred * red) + (quantitynet * net) + (quantitybicyle * bicyle) + (quantitymirror * mirror) + (quantityhighway * highway);

  console.log(total);
  //print value to orderTotal
  $("#orderTotal").val(total + ".00");
}

//********** black gallery
function calculateColorPrice() {
  //define image price 
  var italy = 1000;
  var water = 500;
  var alone = 1500;
  var light = 1000;
  var nature = 900;
  var graphic = 600;
  //define image price 
  var quantityitaly = $("#quantityitaly").val();
  var quantitywater = $("#quantitywater").val();
  var quantityalone = $("#quantityalone").val();
  var quantitylight = $("#quantitylight").val();
  var quantitynature = $("#quantitynature").val();
  var quantitygraphic = $("#quantitygraphic").val();


  //calculate final cost
  var total = (quantityitaly * italy) + (quantitywater * water) + (quantityalone * alone) + (quantitylight * light) + (quantitynature * nature) + (quantitygraphic * graphic);

  console.log(total);
  //print value to orderTotal
  $("#cart-total").val(total + ".00");
}