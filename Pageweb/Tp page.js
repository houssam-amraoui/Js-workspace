// Déclaration des tableaux
const voitures = ['Peugeot', 'Renault', 'BMW', 'Mercedes', 'Toyota'];
const fruits = ['Pomme', 'Poire', 'Banane', 'Orange', 'Fraise', 'Kiwi'];

// Référence aux éléments du DOM
const output = document.getElementById('output');

// Afficher les voitures
document.getElementById('btnVoitures').addEventListener('click', function() {
    output.innerHTML = '<div class="result-title">Tableau de voitures:</div>';
    output.innerHTML += '<div class="array-display">[' + voitures.join(', ') + ']</div>';
});

// Afficher les fruits sans le dernier élément
document.getElementById('btnFruitsSansDernier').addEventListener('click', function() {
    const fruitsSansDernier = fruits.slice(0, -1);
    output.innerHTML = '<div class="result-title">Tableau de fruits sans le dernier élément:</div>';
    output.innerHTML += '<div class="array-display">[' + fruitsSansDernier.join(', ') + ']</div>';
});

// Afficher les fruits dans l'ordre alphabétique inverse
document.getElementById('btnFruitsInverse').addEventListener('click', function() {
    const fruitsInverse = [...fruits].sort().reverse();
    output.innerHTML = '<div class="result-title">Tableau de fruits dans l\'ordre alphabétique inverse:</div>';
    output.innerHTML += '<div class="array-display">[' + fruitsInverse.join(', ') + ']</div>';
});

// Afficher les fruits sous forme de liste à puces
document.getElementById('btnFruitsPuces').addEventListener('click', function() {
    output.innerHTML = '<div class="result-title">Liste à puces des fruits:</div>';
    output.innerHTML += '<ul class="fruit-list">';
    
    for (let i = 0; i < fruits.length; i++) {
        output.innerHTML += '<li>' + fruits[i] + '</li>';
    }
    
    output.innerHTML += '</ul>';
});