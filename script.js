// Cette fonction saveName() est une fonction qui permet de sauvegarder une donnée dans le localStorage
// Elle se lance au clic du bouton 'Sauvegarder'
function saveName() {
    // ici on stock dans name la valeur du nom
    const name = document.getElementById('nameInput').value;
    // ici on envoie la valeur de name (donc le nom) dans le localStorage
    localStorage.setItem('username', name); // Sauvegarde dans le localStorage
}

// Cette fonction loadName() permet d'afficher le nom du lcoalStorage
// Elle se lance au clic du bouton 'Afficher'
function loadName() {
    const savedName = localStorage.getItem('username'); // sayadali
    if (savedName) { // ici on vérifie si savedName existe et s'il n'est pas null
      document.getElementById('output').innerText = "Bonjour " + savedName + " !";
    } else { // sinon si savedName est null, alors on affiche "Aucun prénom sauvegardé."
      document.getElementById('output').innerText = "Aucun prénom sauvegardé.";
    }
}
