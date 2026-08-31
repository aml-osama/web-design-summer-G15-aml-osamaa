var courses = ["html", "css", "javascript", "react"];

var searchCourse = prompt("enter course name to search");

var result = courses.find((course) => course === searchCourse);

if (result) {
    alert("found");
} else {
    courses.push(searchCourse);
    console.log(courses);
}