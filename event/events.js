/**
 * JavaScript Events Reference File
 * This file contains examples of various JavaScript events with explanations.
 */

// 1️⃣ Mouse Events
const button = document.getElementById("myButton");

// Click event
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

// Double Click event
document.addEventListener("dblclick", () => {
    console.log("Double Clicked anywhere on the page!");
});

// Mouseover event (when the mouse enters an element)
button.addEventListener("mouseover", () => {
    console.log("Mouse is over the button");
});

// Mouseout event (when the mouse leaves an element)
button.addEventListener("mouseout", () => {
    console.log("Mouse left the button");
});

// Context Menu event (Right-click)
document.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevents the default right-click menu
    console.log("Right-click detected");
});


// 2️⃣ Keyboard Events
document.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

document.addEventListener("keyup", (event) => {
    console.log(`Key released: ${event.key}`);
});

document.addEventListener("keypress", (event) => {
    console.log(`Key pressed continuously: ${event.key}`);
});


// 3️⃣ Form Events
const inputField = document.getElementById("myInput");

// Focus event (when an input field is focused)
inputField.addEventListener("focus", () => {
    console.log("Input field focused");
});

// Blur event (when focus leaves an input field)
inputField.addEventListener("blur", () => {
    console.log("Input field lost focus");
});

// Change event (when input field value changes)
inputField.addEventListener("change", () => {
    console.log("Input field value changed");
});

// Input event (triggers whenever input changes, even while typing)
inputField.addEventListener("input", (event) => {
    console.log(`Current Input: ${event.target.value}`);
});


// 4️⃣ Window Events
// Load event (when page loads completely)
window.addEventListener("load", () => {
    console.log("Page fully loaded");
});

// Resize event (when window size changes)
window.addEventListener("resize", () => {
    console.log(`Window resized to ${window.innerWidth}x${window.innerHeight}`);
});

// Scroll event (when scrolling happens)
window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});

// BeforeUnload event (when the user tries to leave the page)
window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = "Are you sure you want to leave?";
});


// 5️⃣ Drag & Drop Events
const draggableItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");

draggableItem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
    console.log("Dragging started");
});

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("Dragging over drop zone");
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData("text");
    const draggedItem = document.getElementById(draggedItemId);
    dropZone.appendChild(draggedItem);
    console.log("Dropped successfully!");
});


// 6️⃣ Custom Events
const customEvent = new Event("customAction");

document.addEventListener("customAction", () => {
    console.log("Custom event triggered");
});

// Triggering the custom event after 3 seconds
setTimeout(() => {
    document.dispatchEvent(customEvent);
}, 3000);