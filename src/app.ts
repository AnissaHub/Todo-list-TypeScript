import { getTasks, saveTasks, deleteTask } from './storage.js';
import { loadSuggestions } from './api.js';

const input = document.querySelector("#todo-input") as HTMLInputElement;
const button = document.querySelector("#btn") as HTMLButtonElement;
const list = document.querySelector("#todo-list") as HTMLUListElement;

let taches: string[] = getTasks();

// afficher les tâches sauvegardées
taches.forEach(text => addTaskToDOM(text));

button.addEventListener('click', () => {
    let text: string = input.value.trim();
    
    if (text === '') return;

    addTaskToDOM(text);

    taches.push(text);
    saveTasks(taches);

    input.value = "";
});

function addTaskToDOM(text: string): void {
    const li = document.createElement('li');
    li.textContent = text;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'supprimer';
    btnDelete.classList.add("delete-btn");

    li.appendChild(btnDelete);
    list.appendChild(li);

    btnDelete.addEventListener('click', () => {
        const index = taches.indexOf(text);

        if (index > -1) {
            deleteTask(taches, index);
        }

        li.remove();
    });
}
// Charger les suggestions au démarrage
loadSuggestions(list) 