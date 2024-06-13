const id = {
    idNO: 1,
    name: "gautam",
    age: 18,
}
/* 
for (const [key,value] of id) {
    console.log(`${key} :- ${value}`)       -> we can not use for of loop with object
} */

for (const key in id) {
    console.log(key + ":" + id[key]);
}

/* id.forEach((key) => {
    console.log(key.name)       -> can't use that function in object all iteration well work with array
}); */


// NodeList 
query.forEach((items) => {
    items.style.color = "red";
})

for (let items of gridItems) {
    items.style.color = "black"
}