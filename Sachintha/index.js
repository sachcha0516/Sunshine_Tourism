function formSubmitFunc() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var querysubject = document.getElementById("querysubject").value;
    var destination = document.getElementById("destination").value;
    var query = document.getElementById("query").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var adultSelect = document.getElementById("adultSelect").value;
    var kidsSelect = document.getElementById("kidsSelect").value;

    if (name == "") {
        alert("Please fill the name field");
        return false;
    }

    if (age == "") {
        alert("Please fill the age field");
        return false;
    }

    if (email == "") {
        alert("Please fill the email field");
        return false;
    }
    if (querysubject == "") {
        alert("Please fill the query subject field");
        return false;
    }

    if (query == "") {
        alert("Please fill the query field");
        return false;
    }
    if (destination == "") {
        alert("Please fill the destination field");
        return false;
    }

    if (name != "" || age != "" || email != "" || querysubject != "" || query != "" || destination != "") {
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("age", age);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("querysubject", querysubject);
        sessionStorage.setItem("query", query);
        sessionStorage.setItem("checkin", checkin);
        sessionStorage.setItem("checkout", checkout);
        sessionStorage.setItem("adultSelect", adultSelect);
        sessionStorage.setItem("kidsSelect", kidsSelect);
        sessionStorage.setItem("destination", destination);

        window.location.href = "viewData.html";
    }
}


function onBodyLoad() {
    document.getElementById("name").value = sessionStorage.getItem("name");
    document.getElementById("age").value = sessionStorage.getItem("age");
    document.getElementById("email").value = sessionStorage.getItem("email");
    document.getElementById("querysubject").value = sessionStorage.getItem("querysubject");
    document.getElementById("query").value = sessionStorage.getItem("query");
    document.getElementById("checkin").value = sessionStorage.getItem("checkin");
    document.getElementById("checkout").value = sessionStorage.getItem("checkout");
    document.getElementById("adultSelect").value = sessionStorage.getItem("adultSelect");
    document.getElementById("kidsSelect").value = sessionStorage.getItem("kidsSelect");
    document.getElementById("destination").value = sessionStorage.getItem("destination");
}

function formEditFunction() {
    window.location.href = "index.html";
}


function emailSend() {

    var name = sessionStorage.getItem("name");
    var age = sessionStorage.getItem("age");
    var email = sessionStorage.getItem("email");
    var subject = sessionStorage.getItem("querysubject");
    var details = sessionStorage.getItem("query");
    var checkin = sessionStorage.getItem("checkin");
    var checkout = sessionStorage.getItem("checkout");
    var adultselect = sessionStorage.getItem("adultSelect");
    var kidsselect = sessionStorage.getItem("kidsSelect");
    var destination = sessionStorage.getItem("destination");

    
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sunshinetours22@gmail.com",
        Password: "aqombxeieybbovna",
        To: email,
        From: "sunshinetours22@gmail.com",
        Subject: subject,
        Body: "<h1>Query Form</h1><p>Name : " + name + "</p><p>Details : " + details + "</p><p>Designation : " + destination + "</p><p>Age : " + age + "</p><p>Check In Date : " + checkin + "</p><p>Check Out Date : " + checkout + "</p><p>Adults : " + adultselect + "</p><p>Kids : " + kidsselect + "</p>",
    }).then(
        message => alert(message),
        sessionStorage.clear(),
    );
    alert('Successfully Updated');
    
    setInterval(
        function(){window.location = 'index.html'},
        5000
      );

    

}
