// storage.ts
// Fonction pour récupérer les tâches sauvegardées
export function getTasks() {
    // On récupère les données depuis localStorage
    // JSON.parse transforme le texte stocké en tableau JavaScript
    // Si aucune tâche n'existe, on retourne un tableau vide
    let data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
}
// Fonction pour sauvegarder toutes les tâches
export function saveTasks(tasks) {
    // JSON.stringify transforme le tableau en texte
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Fonction pour supprimer une tâche
export function deleteTask(tasks, index) {
    tasks.splice(index, 1);
    saveTasks(tasks);
}
