let url = "https://cf6d-122-170-145-242.ngrok.io";
let file = "https://cf6d-122-170-145-242.ngrok.io/api/student";

fetch(file,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer 1365|U7pSkiHpyZi9aZ9p8Nzyy5VtfkfOYQGBZTzk4PYT"
        },
    })
    .then(res => res.json())
    // .then(res2 => console.log("--------------", res2))
    .then(res2 => {
        let studentData = "";
        for (i = 0; i < res2.length; i++) {
            // console.log("-------------------", res2[i].id);

            studentData += `<tr>
            <td><input type="checkbox" value="" class="chk" onchange="checkedSingle(this)"></td>
            <td>${i + 1}</td>
            <td><img class="stdentsImage" src="${url}/storage/${res2[i].image}" alt=""></td>
            <td>${res2[i].name}</td>
            <td>${res2[i].mother_name}</td>
            <td>${res2[i].father_name}</td>
            <td>${res2[i].city}</td>
            <td>${res2[i].school}</td>
            <td>${res2[i].standard}</td>
            <td><button class="edit-btn"><a href="file:///home/dev/Desktop/Pr-niraj/CRUD_API/form_API.html?id=${res2[i].id}">Edit</a></button>
            <button class="delte-btn" onClick="onDelete(${res2[i].id},this)">Delete</button></td>
            </tr>`
        }
        document.getElementById("requestData").innerHTML = studentData;

        // var checkboxes = document.getElementsByClassName('chk')
        // console.log("-----------------", checkboxes);
    });

var selectAll = document.querySelectorAll('input[type="checkbox"]')
// console.log("-----------------", selectAll);

var allCheckbox = document.getElementsByClassName('chk')
// console.log("-----------------", allCheckbox);

let listBoolean = [];
function checkedSingle() {
    // console.log("------------",allCheckbox.length);
    var countChk = 0;

    for (let j = 0; j < allCheckbox.length; j++) {
        listBoolean.push(allCheckbox[j].checked)
        if (listBoolean.includes(false)) {
            selectAll[0].checked = false
        } else {
            countChk++;
        }
        listBoolean = []
    }
    if (allCheckbox.length == countChk)
        selectAll[0].checked = true
}

function checkedAll(myCheckBox) {
    if (myCheckBox.checked === true) {
        for (let i = 0; i < allCheckbox.length; i++) {
            if (myCheckBox.checked === true) {
                allCheckbox[i].checked = true
            } else if (allCheckbox[i].checked === true) {
                myCheckBox.checked = true
            }
        }
    } else {
        for (let i = 0; i < allCheckbox.length; i++) {
            // if ((myCheckBox.checked === false)) {
            allCheckbox[i].checked = false
            // }
        }
    }
}

/* function checkedAll(chackAll) {
    if (chackAll.checked === true) {
        // allcheck[i].value
        console.log("All Check");
    }
} */

function onDelete(deleteData, deleterow) {

    let deleteData1 = `${url}/api/student/delete/${deleteData}`
    // console.log("---------delteData---------", deleteData1);

    let text = "Delete Yourdata";
    if (confirm(text) == true) {
        var p = deleterow.parentNode.parentNode;
        p.parentNode.removeChild(p);

        fetch(deleteData1, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer 1365|U7pSkiHpyZi9aZ9p8Nzyy5VtfkfOYQGBZTzk4PYT",
            },
        })
    }
}

// --------------create students--------------------
function formOpen() {
    window.open('file:///home/dev/Desktop/Pr-niraj/CRUD_API/form_API.html', "_self")
}





