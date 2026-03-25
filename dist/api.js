// api.js
// Module pour récupérer des suggestions de tâches depuis l'API JSONPlaceholder
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function loadSuggestions(list) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 1. Appel à l'API pour récupérer 5 tâches
            const response = yield fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
            // 2. Transformer la réponse en format JSON
            const data = yield response.json();
            // 3. Parcourir chaque tâche reçue
            data.forEach(input => {
                // créer un élément li
                let li = document.createElement("li");
                li.textContent = input.title;
                // ajouter le li dans la liste
                list.appendChild(li);
            });
        }
        catch (error) {
            // Gestion des erreurs si l'API ne répond pas
            console.error("Erreur lors du chargement des suggestions :", error);
            let li = document.createElement("li");
            li.textContent = "Impossible de charger les suggestions";
            list.appendChild(li);
        }
    });
}
