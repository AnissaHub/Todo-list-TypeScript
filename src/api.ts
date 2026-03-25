// api.js
// Module pour récupérer des suggestions de tâches depuis l'API JSONPlaceholder


// Définition d'une interface pour typer les objets reçus
export interface Suggestion {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export async function loadSuggestions(list: HTMLUListElement)  {
    
    try {

        // 1. Appel à l'API pour récupérer 5 tâches
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");

        // 2. Transformer la réponse en format JSON
        const data: Suggestion[]= await response.json();

        // 3. Parcourir chaque tâche reçue
        data.forEach(input => {

            // créer un élément li
            let li = document.createElement("li");
            li.textContent = input.title;

            // ajouter le li dans la liste
            list.appendChild(li);
        });

    } catch (error) {

        // Gestion des erreurs si l'API ne répond pas
        console.error("Erreur lors du chargement des suggestions :", error);

        let li = document.createElement("li");
        li.textContent = "Impossible de charger les suggestions";

        list.appendChild(li);
    }
}