const container = document.getElementById("StudentContainer");

if(container){

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach((student,index)=> {
        
        container.innerHTML += `
        
        <div class= "student-card">
        
        <h2>Student Details</h2>

        <img src="${student.simage}" width="120">

        <p> Name ${student.sname} </p> 

        <p>Email:  ${student.semail}</p>

        <p>Phone: ${student.spno}</p>

        <p>Date Of Birth: ${student.sdob}</p>

        <p>Gender: ${student.sgender}</p>

        <p>Skills: ${student.sskills}</p>

        <p>Education: ${student.seducation}</p>

        <p>Address: </br> <br>${student.saddress}</p>

        <button  class="dt-btn" onclick= "deleteStudent(${index})" >Delete </button>

        </div>
        `
    });

    function deleteStudent(index){

            let students = JSON.parse(localStorage.getItem("students")) || [];
            students.splice(index,1);

            localStorage.setItem("students", JSON.stringify(students));

            location.reload();
        }


}

