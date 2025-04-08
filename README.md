Le localStorage est une fonctionnalité fournie par le navigateur Web qui permet de stocker des données localement, sous forme de paires clé/valeur. Ces données sont persistantes : elles restent enregistrées même après que l'utilisateur ait fermé ou rechargé la page.

## 🔑 Caractéristiques du localStorage :
- Capacité : environ 5 à 10 Mo selon le navigateur.

- Les données sont stockées sous forme de chaînes de caractères (string).

- Accessible uniquement côté client (navigateur).

- Les données ne sont jamais envoyées au serveur automatiquement (contrairement aux cookies).

## 🧪 Exemple simple en JavaScript (vanilla)
Imaginons un champ de texte où tu saisis ton prénom, et on le sauvegarde dans le localStorage.

🖥️ HTML :
```html
<input type="text" id="nameInput" placeholder="Ton prénom">
<button onclick="saveName()">Sauvegarder</button>
<button onclick="loadName()">Afficher</button>
<p id="output"></p>
```
⚙️ JavaScript :
```javascript
function saveName() {
  const name = document.getElementById('nameInput').value;
  localStorage.setItem('username', name); // Sauvegarde dans le localStorage
}

function loadName() {
  const savedName = localStorage.getItem('username'); // récupère la valeur asocié à la clé 'username' du localStorage
  if (savedName) {
    document.getElementById('output').innerText = "Bonjour " + savedName + " !";
  } else {
    document.getElementById('output').innerText = "Aucun prénom sauvegardé.";
  }
}
```