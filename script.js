const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const pno = document.getElementById("pno");
const password = document.getElementById("password");
const conpass = document.getElementById("conpass");
const dob = document.getElementById("dob");
const textarea = document.getElementById("textarea");
const terms = document.getElementById("terms");
const studentdata = document.getElementById("studentdata");
const form = document.querySelector(".form");
const education = document.getElementById("education");

const fileInput = document.getElementById("file");
const preview = document.getElementById("preview");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nameValue = fullname.value;

    if(nameValue.trim()=== ""){
        alert("Full Name is required");
        return;
    }

    const emailValue = email.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailValue.match(emailPattern)){
        alert("Valid Email Required");
        return;
    }

    const pnoValue = pno.value;
    const pnoPattern = /^[0-9]{10}$/;

    if(!pnoValue.match(pnoPattern)){
        alert("Enter Valid Phone Number");
        return;
    }

    if(password.value.length<8){
        alert("Password must be at least 8 charecters");
        return;
    }

    if(password.value !== conpass.value){
        alert("Password don't match");
        return;
    }

    if(dob.value === ""){
        alert("Enter your DOB");
        return;
    }

    if(textarea.value.trim() === ""){
        alert("Enter your Address");
        return;
    }

    if(!terms.checked){
        alert("Please accept Terms and Conditions");
        return;
    }

    const gender = document.querySelector('input[name="Gender"]:checked');

    if(!gender){
        alert("Please select the gender");
        return;
    }

    const skills = document.querySelectorAll('input[name="skills"]:checked');

    let allskills = [];

    skills.forEach(function(skill){
        allskills.push(skill.value);
    });

    console.log(allskills);

    if(allskills.length===0){
        alert("Please select the Skills");
        return;
    }

const name = nameValue;
const emailID = emailValue;
const Phone = pnoValue;
const dateOfBirth = dob.value;
const studentGender = gender.value;
const studentSkills = allskills.join(", ");
const image = preview.src || "";
const educatonValue = education.value;
const textareaValue = textarea.value;

const student ={

    sname: name,
    semail: emailID,
    spno: Phone,
    sdob: dateOfBirth,
    sgender: studentGender,
    sskills: studentSkills,
    simage: image,
    seducation: educatonValue,
    saddress: textareaValue
};

console.log(student);

let students = JSON.parse(localStorage.getItem("students")) || [];

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

window.location.href = "./students.html";

// studentdata.innerHTML = `

// <h2>Student Details</h2>

// <img src="${image}" width="120">

// <p> Name ${name} </p> 

// <p>Email:  ${emailID}</p>

// <p>Phone: ${Phone}</p>

// <p>Date Of Birth: ${dateOfBirth}</p>

// <p>Gender: ${studentGenter}</p>

// <p>Skills: ${studentSkills}</p>

// <p>Education: ${educatonValue}</p>

// <p>Gender: ${studentGenter}</p>

// <p>Address: </br> <br>${textareaValue}</p>

// `;

});


fileInput.addEventListener("change", function(){
    const file = this.files[0];

    if(file){
        preview.src = URL.createObjectURL(file);
    }
});

form.addEventListener('reset', ()=>{
    preview.src ="";
    studentdata.textContent = "";
})





