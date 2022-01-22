function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  var form = document.getElementsByTagName("form")[0];
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
  var submitButton = document.getElementsByTagName("button")[0];
  
  submitButton.addEventListener("click", function (event) {
    var curp = document.getElementById("name").value.toUpperCase();
    var curpDate = curp.substr(4, 6);
    var month = curpDate.substr(2, 2);
    var day = curpDate.substr(4, 2);
    var year = curpDate.substr(0, 2);
    var thisYear = new Date().getFullYear() - 2000;
    if (Number(year) > thisYear) {
      year = "19" + year;
    } else {
      year = "20" + year;
    }
    var birthdate = month + "-" + day + "-" + year;
    var age = getAge(birthdate);
    var gender = curp[10];
    if (gender === "H") {
      gender = "Hombre";
    } else {
      gender = "Mujer";
    }
    alert("Edad: " + age + " y Genero: " + gender);
  });