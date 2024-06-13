const course = {
    courseName : "javaScript",
    price : '999',
    courseInstructor : "Hitesh"
}

//destructuring syntax -------------------------------------------------------

let {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor : instructor} = course
console.log(instructor);

//API ------------------- work like call the api and give all work that api have
/* 
{
    "name" : "John Shelby",
    "courseName" : "How to become gangster",
    "price" : "your fearless heart"
} 
*/
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json()) // Parse the JSON data from the server response
    .then((data) => console.log(data))   // Print the data, useful for debugging