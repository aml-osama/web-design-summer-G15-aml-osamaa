var courses = ["html", "css", "js"];

function checkAndAddCourse() {
    var courseName = prompt("Enter course name:");
    
    if (courseName) {
        courseName = courseName.toLowerCase().trim();
        
        if (courses.includes(courseName)) {
            alert("found");
        } else {
            courses.push(courseName);
            console.log(courses);
        }
    }
}

checkAndAddCourse();
checkAndAddCourse();