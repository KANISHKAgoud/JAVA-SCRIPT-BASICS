// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage

function saveNoteToLocalStorage(note){
    localStorage.setItem("note", JSON.stringify(note))
    JSON.parse(localStorage.getItem("note"))
}

const note ={
    date: "25/07/2009",
    text: "its a rainy season",
    "phone number": 937978937
}

saveNoteToLocalStorage(note)
