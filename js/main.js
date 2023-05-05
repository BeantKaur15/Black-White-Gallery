//login page js start

function check(form) {
  if (form.userid.value == "admin" && form.pswrd.value == "12345") {
    alert("Welcome to my website!");
    window.open('welcome.html')
  } else {
    alert("Incorrect Password or Username");
    document.getElementById('userid').style.color = "red";
    document.getElementById('pswrd').style.color = "red";
  }
}

// login page js end


// black & white page js start 

$(document).ready(function() {
  //Click event to scroll to top
  //scroll body to 0px on click according to ID
  $("#backTop").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  $("#backTop1").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  $("#backTop2").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  $("#backTop3").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  $("#backTop4").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  $("#backTop5").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
});


// black & white page js end

// color gallery page js start

function SelectedText()
//search images with option value
{
  var e = document.getElementById("colorgallery");
  var result = e.options[e.selectedIndex].text;
  document.getElementById("detail").style.display = "table-row"
  var output = e.options[e.selectedIndex].value;

  if (output == 'womeninred') {

    document.getElementById("womenred").style.display = "table-row";
    document.getElementById("womensunset").style.display = "none";
    document.getElementById("net").style.display = "none";
    document.getElementById("highway").style.display = "none";
    document.getElementById("bicyclerun").style.display = "none";
    document.getElementById("mirror").style.display = "none";
  } else if (output == 'womeninsunset') {
    document.getElementById("womensunset").style.display = "table-row";
    document.getElementById("womenred").style.display = "none";
    document.getElementById("net").style.display = "none";
    document.getElementById("highway").style.display = "none";
    document.getElementById("bicyclerun").style.display = "none";
    document.getElementById("mirror").style.display = "none";
  } else if (output == 'net') {
    document.getElementById("net").style.display = "table-row";
    document.getElementById("womensunset").style.display = "none";
    document.getElementById("womenred").style.display = "none";
    document.getElementById("highway").style.display = "none";
    document.getElementById("bicyclerun").style.display = "none";
    document.getElementById("mirror").style.display = "none";
  } else if (output == 'highway') {
    document.getElementById("highway").style.display = "table-row";
    document.getElementById("net").style.display = "none";
    document.getElementById("womensunset").style.display = "none";
    document.getElementById("womenred").style.display = "none";
    document.getElementById("bicyclerun").style.display = "none";
    document.getElementById("mirror").style.display = "none";
  } else if (output == 'bicyclerun') {
    document.getElementById("bicyclerun").style.display = "table-row";
    document.getElementById("highway").style.display = "none";
    document.getElementById("net").style.display = "none";
    document.getElementById("womensunset").style.display = "none";
    document.getElementById("womenred").style.display = "none";
    document.getElementById("mirror").style.display = "none";
  } else if (output == 'mirror') {
    document.getElementById("mirror").style.display = "table-row";
    document.getElementById("bicyclerun").style.display = "none";
    document.getElementById("highway").style.display = "none";
    document.getElementById("net").style.display = "none";
    document.getElementById("womensunset").style.display = "none";
    document.getElementById("womenred").style.display = "none"
  } else {
    document.getElementById("detail").style.display = "none";
  }

}

// back to top events                

$(document).ready(function() {
  //Click event to scroll to top
  //scroll body to 0px on click according to ID
  $("#Top1").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top2").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top3").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top4").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top5").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top6").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top7").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top8").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top9").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top10").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top11").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $("#Top12").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});



// color gallery page js end                            




//invoice page js start 

function normalizeYear(year) {
  var YEARS_AHEAD = 20;
  if (year < 100) {
    var nowYear = new Date().getFullYear();
    year += Math.floor(nowYear / 100) * 100;
    if (year > nowYear + YEARS_AHEAD) {
      year -= 100;
    } else if (year <= nowYear - 100 + YEARS_AHEAD) {
      year += 100;
    }
  }
  return year;
}

function onOrder() {

  //************cardnumber******************

  var z = document.getElementById("cardnumber").value; // get cardnumber value
  if (!/^[0-9]+$/.test(z))
  //check the card number value whether it is false or true
  {
    alert("Please Enter Valid Card Number");
    z.focus(); //If the card number is wrong then the cursor will remain in the textbox
    return false;
  }

  //***************cvc***************************
  var cvc1 = document.getElementById("cvc"); //get cvc value
  if (cvc1.value.length != 3 || isNaN(cvc1.value)) //check the equal value of 3 digits is required 

  {
    alert("Please Entervalid CVC Number");
    cvc1.focus(); //If the CVC number is wrong then the cursor will remain in the textbox
    return false;
  }

  //*************name on card  ****************

  var nameoncard = /^[A-Za-z]+$/; // alphabet value expression
  var isValid = nameoncard.test(document.getElementById("nameoncard").value);
  //Check if the name alphabet value is correct or not

  if (!isValid) {
    alert("Enter alphabets in NameOncard Filed");
    return false;
  }

  //************Expire date ***************
  var match = $('#expire').val().match(/^\s*(0?[1-9]|1[0-2])\/(\d\d|\d{4})\s*$/);
  //Check with expiry date value whether expire date is numeric format or not
  if (!match)
  //check match or not
  {
    alert('Expiration date format or date fragments are invalid.')
    return false;
  }
  var exp = new Date(normalizeYear(1 * match[2]), 1 * match[1] - 1, 1).valueOf();
  //match expire date 

  var now = new Date(); //get curret date
  var currMonth = new Date(now.getFullYear(), now.getMonth(), 1).valueOf();
  //Will check if it has not already expired
  if (exp <= currMonth) {
    alert('Expired');
    return false;
  }

  //**************terms and conditions*******

  var paymentCheckbox = document.getElementById("payment-checkbox");
  // get checkbox value check or not
  if (paymentCheckbox.checked == false) {
    alert("Please Accept Terms and Conditions");
    paymentCheckbox.focus();

  }
  // **************name *******************
  var usrName = document.getElementById("usrname");
  //get user name value
  if (usrName.value === "") {
    alert("Please Enter Your Name");
    return false;
  }

  //************Address********************
  var address = document.getElementById("address");
  if (address.value === "") {
    alert("Please Enter your Address");
    return false;
  }
  //************city**********************
  var city = /^[A-Za-z]+$/;
  //alphabet expression
  var isCity = city.test(document.getElementById("city").value);
  //Check if the name City value is correct or not

  if (!isCity) {
    alert("Please Enter Valid  City Name");
    return false;
  }

  //**********postal code *******************

  var postcode = document.getElementById("postalcode");
  //get postcode value
  if (postcode.value.length != 4 || isNaN(postcode.value))
  //check the equal value of 4 digits is required 
  {
    alert("Please Enter 4 numbers for your Postcode");
    return false;
  }
  // **************province***********************
  var province = document.getElementById("province");
  if (province.value === "")
  //if province value is empty then alert error message 
  {
    alert("Please Enter province");
    return false;
  }
  alert("Thank You for Your Shopping");

}
//Clicking reset button will clear text values
function onReset() {
  document.getElementById("payment-form").reset();
}

//invoice page js end