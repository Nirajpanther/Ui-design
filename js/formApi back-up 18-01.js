

function verfication(event) {
    event.preventDefault()

    // ---------------------declare-value----------

    const username = document.getElementById("userName").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
    const contentNum = document.getElementById("contentNum").value;
    const address = document.getElementById("address").value;
    const selectCity = document.getElementById("selectCity").value;
    const selectState = document.getElementById("selectState").value;
    const selectCountry = document.getElementById("selectCountry").value;
    const school = document.getElementById("school").value;
    const standerd = document.getElementsByName("standerd");
    const marks = document.getElementById("marks").value;
    const myfile = document.getElementById("myfile");
    // console.log(myfile.files[0]);

    // console.log("------------->", myfile.files);
    // console.log("-----type-------->", myfile.files[0].type);
    let noNumbers = /\d+$/g;//for no numbers

    // ----------------validation-input-----------------

    // -------------username-------------
    fillcheck = ""

    if (username == "") {
        document.getElementById("userError").innerHTML = "Please enter your Name"
        fillcheck = true
    } else {
        document.getElementById("userError").innerHTML = null
    }
    if (noNumbers.test(username)) {
        document.getElementById("userError").innerHTML = "Enter only Charters"
        fillcheck = true
    }

    // -------------fatherName-------------
    if (fatherName == "") {
        document.getElementById("fatherError").innerHTML = "Please enter your Name"
        fillcheck = true
    } else {
        document.getElementById("fatherError").innerHTML = null
    }
    if (noNumbers.test(fatherName)) {
        document.getElementById("fatherError").innerHTML = "Enter only Charters"
        fillcheck = true

    }
    // -------------motherName-------------
    if (motherName == "") {
        document.getElementById("motherError").innerHTML = "Please enter your Mother Name"
        fillcheck = true
    } else {
        document.getElementById("motherError").innerHTML = null
    }
    if (noNumbers.test(motherName)) {
        document.getElementById("motherError").innerHTML = "Enter only Charters"
        fillcheck = true
    }

    // -------------contentNum-------------
    if (contentNum == "") {
        document.getElementById("ContactError").innerHTML = "Please enter your Content Number"
        fillcheck = true
    } else {
        document.getElementById("ContactError").innerHTML = null
    }
    if (isNaN(contentNum)) {
        document.getElementById("ContactError").innerHTML = "Enter only Numbers"
        fillcheck = true
    }
    // -------------address-------------
    if (address == "") {
        document.getElementById("addressError").innerHTML = "Please enter your Address"
        fillcheck = true
    } else {
        document.getElementById("addressError").innerHTML = null
    }
    // -------------selectCity-------------
    if (selectCity == "") {
        document.getElementById("selectCityError").innerHTML = "Please Select your City"
        fillcheck = true
    } else {
        document.getElementById("selectCityError").innerHTML = null
    }

    // -------------selectState-------------
    if (selectState == "") {
        document.getElementById("selectStateError").innerHTML = "Please Select your State"
        fillcheck = true
    } else {
        document.getElementById("selectStateError").innerHTML = null
    }

    // -------------selectCountry-------------
    if (selectCountry == "") {
        document.getElementById("selectCountryError").innerHTML = "Please Select your Country"
        fillcheck = true
    } else {
        document.getElementById("selectCountryError").innerHTML = null
    }

    // -------------school-------------
    if (school == "") {
        document.getElementById("schoolError").innerHTML = "Please enter your School Name"
        fillcheck = true
    } else {
        document.getElementById("schoolError").innerHTML = null
    } if (noNumbers.test(school)) {
        document.getElementById("schoolError").innerHTML = "Enter only Charters"
        fillcheck = true
    }

    // -------------standard-------------
    let chechkstanderd = "";
    for (let i = 0; i < standerd.length; i++) {
        // console.log(standerd[i].value);

        if (standerd[i].checked === true) {
            chechkstanderd += standerd[i].value;
        }
    }

    // console.log(chechkstanderd.length);
    if (chechkstanderd.length == "0") {
        document.getElementById("standerdError").innerHTML = "Select eny one Standerd "
        fillcheck = true
    } else {
        document.getElementById("standerdError").innerHTML = null
    }

    // -------------marks-------------
    if (marks == "") {
        document.getElementById("marksError").innerHTML = "Please enter your Marks"
        fillcheck = true
    } else {
        document.getElementById("marksError").innerHTML = null
    } if (isNaN(marks)) {
        document.getElementById("marksError").innerHTML = "Enter only Numbers"
        fillcheck = true
    }

    // -------------myfile-------------
    if (myfile.value == "") {
        document.getElementById("myfileError").innerHTML = "please select your image"
        fillcheck = true
    }

    /* if (fillcheck === true || !imageValidation()) {
        return
    }  else {
        console.log("Form submited successfully");
    } */

    // ----------------------------append-data-----------------
    const formData = new FormData();

    formData.append("name", username);
    formData.append("father_name", fatherName);
    formData.append("mother_name", motherName);
    formData.append("contact_no", contentNum);
    formData.append("address", address);
    formData.append("city", selectCity);
    formData.append("state", selectState);
    formData.append("country", selectCountry);
    formData.append("school", school);
    formData.append("standard", chechkstanderd);
    formData.append("mark", marks);
    formData.append("images", myfile.files[0]);

    fetch("https://16b9-122-170-145-242.ngrok.io/api/student/add", {
        method: 'POST',
        body: formData,
        headers: {
            "Authorization": "Bearer 1365|U7pSkiHpyZi9aZ9p8Nzyy5VtfkfOYQGBZTzk4PYT"
        },
    })

    /* .then((response) => response.json())
    .then(result => console.log("--------------", formData.get("name"))) */
    /*  .then((result) => {
         formData.get("name")
     }) */

    // console.log("--------------------------------------", formData.get("image","name","mother_name","father_name","city","namschoole","standard"));
    /* console.log("--------------------------------------", formData.get("image"))
    console.log("--------------------------------------", formData.get("name"))
    console.log("--------------------------------------", formData.get("mother_name"))
    console.log("--------------------------------------", formData.get("father_name"))
    console.log("--------------------------------------", formData.get("city"))
    console.log("--------------------------------------", formData.get("school"))
    console.log("--------------------------------------", formData.get("standard")) */

}

function imageValidation() {

    var myfileValue = myfile.value;
    // console.log("---------name--------------", myfile.name);
    // console.log("---------value--------------", myfile.value);
    // console.log("---------files--------------", myfile.files);

    var allowedExtensions = ["jpeg", "png", "jpg"] //for no other files without images
    if (myfileValue != "") {
        var imgExt = myfileValue.substring(myfileValue.lastIndexOf(".") + 1)
        var result = allowedExtensions.includes(imgExt);//true or false
        // console.log(result);

        if (result == false) {
            document.getElementById("myfileError").innerHTML = "Please upload valid Image"
            return false
        } else {
            document.getElementById("myfileError").innerHTML = null
        }

        if ((myfile.files[0].size / (1024 * 1024) >= 1)) {
            document.getElementById("myfileError").innerHTML = "Image should be less than 1 MB"
            return false
        } else {
            document.getElementById("myfileError").innerHTML = null
        }
    }
    return true
}

