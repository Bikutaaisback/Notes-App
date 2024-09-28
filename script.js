const createBtn = document.getElementById ('btn');
const notesContainer = document.querySelector('.notes-container');

function showNotes(){
    if (localStorage.getItem('notes')) {
        notesContainer.innerHTML = localStorage.getItem('notes');
        addDeleteFunctionality(); 
        const editableNotes = document.querySelectorAll('.input-box');
        editableNotes.forEach(note =>{
        note.addEventListener('input', updateStorage);
})
    }
};
showNotes();


function createNotes(){
    let notes = document.createElement('P');
    notes.className = 'input-box';
    notes.setAttribute('contenteditable', 'true');

    let del = document.createElement('IMG');
    del.src = 'images/delete.png';

    notes.appendChild(del);
    notesContainer.appendChild(notes);


    del.addEventListener('click', ()=>{
        del.parentElement.remove();
        updateStorage();
    });

    
    notes.addEventListener('input', updateStorage);
    updateStorage();
};
createBtn.addEventListener('click', createNotes);

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}
function addDeleteFunctionality(){
    let notes = document.querySelectorAll('.input-box img');
    notes.forEach(del =>{
        del.addEventListener('click', ()=>{
            del.parentElement.remove();
            updateStorage();
        })
    });
}



