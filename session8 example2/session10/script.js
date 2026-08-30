var degree = prompt("enter your degree");

if (degree === null || degree.trim() === "") {
    alert("invalid degree");
} else {
    degree = Number(degree);

    if (isNaN(degree) || degree > 100) {
        alert("invalid degree");
    } else if (degree > 90) {
        alert("Excellent");
    } else if (degree > 80) {
        alert("very good");
    } else if (degree > 70) {
        alert("good");
    } else {
        alert("failed");
    }
}