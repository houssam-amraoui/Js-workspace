/**
 * Jeu du nombre secret
 * 
 * L'utilisateur doit deviner un nombre aléatoire en 5 tentatives ou moins.
 * Des indices sont fournis après chaque tentative.
 */

// Fonction pour générer un nombre aléatoire entre min et max (inclus)
function genererNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Fonction principale du jeu
  function jouerJeuNombreSecret() {
    // Paramètres du jeu
    const MIN = 1;
    const MAX = 100;
    const CHANCES_TOTALES = 5;
    
    // Générer le nombre secret
    const nombreSecret = genererNombreAleatoire(MIN, MAX);
    
    // Variables pour suivre l'état du jeu
    let chancesRestantes = CHANCES_TOTALES;
    let aGagne = false;
    
    // Message d'accueil
    alert(`Bienvenue au jeu du nombre secret!
  Devinez un nombre entre ${MIN} et ${MAX}.
  Vous avez ${CHANCES_TOTALES} chances.`);
    
    // Boucle de jeu principale
    while (chancesRestantes > 0 && !aGagne) {
      // Demander à l'utilisateur de saisir un nombre
      let saisieUtilisateur = prompt(`Chance ${CHANCES_TOTALES - chancesRestantes + 1}/${CHANCES_TOTALES}: 
  Entrez un nombre entre ${MIN} et ${MAX}:`);
      
      // Vérifier si l'utilisateur a annulé
      if (saisieUtilisateur === null) {
        if (confirm("Voulez-vous vraiment quitter le jeu?")) {
          alert("Jeu annulé. À bientôt!");
          return;
        } else {
          continue; // L'utilisateur ne veut pas quitter, on continue la boucle
        }
      }
      
      // Convertir la saisie en nombre
      let nombreSaisi = parseInt(saisieUtilisateur);
      
      // Vérifier si la saisie est valide
      if (isNaN(nombreSaisi) || nombreSaisi < MIN || nombreSaisi > MAX) {
        alert(`Veuillez entrer un nombre valide entre ${MIN} et ${MAX}.`);
        continue; // Ne pas décrémenter les chances pour une saisie invalide
      }
      
      // Décrémenter le nombre de chances
      chancesRestantes--;
      
      // Comparer avec le nombre secret
      if (nombreSaisi > nombreSecret) {
        alert(`Le numéro que vous avez saisi est supérieur au numéro secret.
  Chances restantes: ${chancesRestantes}`);
      } else if (nombreSaisi < nombreSecret) {
        alert(`Le numéro que vous avez saisi est inférieur au numéro secret.
  Chances restantes: ${chancesRestantes}`);
      } else {
        aGagne = true;
        alert("Bravo vous avez gagné le jeu!!!");
        
        // Proposer de rejouer
        if (confirm("Voulez-vous jouer à nouveau?")) {
          jouerJeuNombreSecret(); // Relancer le jeu
        }
        return;
      }
    }
    
    // Si on sort de la boucle sans avoir gagné
    if (!aGagne) {
      alert(`Désolé vous avez perdu le jeu!!!!
  Le nombre secret était: ${nombreSecret}`);
      
      // Proposer de rejouer
      if (confirm("Voulez-vous jouer à nouveau?")) {
        jouerJeuNombreSecret(); // Relancer le jeu
      }
    }
  }
  
  // Lancer le jeu
  jouerJeuNombreSecret();