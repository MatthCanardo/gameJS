// Déclaration des personnages
const player1 = {
    nom:"Pikachu",
    pv:100,
    charge:40,
    soin:10,
}

const player2 = {
    nom:"Evee",
    pv:100,
    charge:40,
    soin:10
}
// DOM HTML
const start = document.getElementById("start"); 
const pvPlayer = document.querySelectorAll("p.pv");
const names = document.querySelectorAll("p.name");
const texte = document.querySelector("p.texte");
const pvMax = 100;

// TEXT CONTENT
pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
names[0].textContent = player2.nom;
names[1].textContent = player1.nom;

// Évènement(s) clique.
start.addEventListener('click', function(){
   
    // Interval 
    const actionPlayer1 = setInterval(function(){
        // Si le combat n'est pas continuable car pv = 0.
        if (player1.pv <= 0) {
            clearInterval(actionPlayer1);
            texte.textContent = `${player2.nom} a gagné`;
        }
        else{
            // Selection d'une attaque aléatoire pour player 1. 
            const mouvementPlayer1 = Math.floor(Math.random() * 2);
            // Si le random = charge.
            if (mouvementPlayer1 == 0){
                // Si le combat n'est pas continuable car pv = 0.
                if (player2.pv <= 0){
                    clearInterval(actionPlayer1);
                }
                // Sinon utilisation normal de charge.
                else{
                    player2.pv = player2.pv - player1.charge
                    texte.textContent = `${player1.nom} utilise charge`;
                    player2.pv <= 0 ? player2.pv = 0 : "";
                    // Pv(s) textContent.
                    pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                }
            }
            // Si le random = soin
            if (mouvementPlayer1 == 1){
                // Si le combat n'est pas continuable car pv = 0.
                if (player2.pv <= 0){
                    clearInterval(actionPlayer1);  
                }
                // Sinon utilisation normal de soin.
                else{
                    player1.pv = player1.pv + player1.soin
                    texte.textContent = `${player1.nom} se soigne`;
                    // Pv(s) textContent
                    pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                }
            }
        }
        // Test dans la console :
        //console.log(`${player1.nom} a joué `, player1.nom, player1.pv , player2.nom, player2.pv);
        
    }, 4000)

    // Déclanchement de l'action 
    setTimeout(function(){
        // Interval
        const actionPlayer2 = setInterval(function(){
            // Si le combat n'est pas continuable car pv = 0.
            if (player2.pv <= 0) {
                clearInterval(actionPlayer2);
                texte.textContent = `${player1.nom} a gagné`;
            }
            else{
                // Selection d'une attaque aléatoire pour player 2. 
                const mouvementPlayer2 = Math.floor(Math.random() * 2);
                // Si random = charge
                if (mouvementPlayer2 == 0){
                    // Si le combat n'est pas continuable car pv = 0.
                    if (player1.pv <= 0){
                        clearInterval(actionPlayer2); 
                    }
                    // Sinon utilisation normal de charge
                    else{
                        player1.pv = player1.pv - player2.charge;
                        texte.textContent = `${player2.nom} utilise charge`;
                        player1.pv <= 0 ? player1.pv = 0 : "";
                        pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                        pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    }
                }
                // Si random = soin
                if (mouvementPlayer2 == 1 ){
                    // Si le combat n'est pas continuable car pv = 0.
                    if (player1.pv <= 0){
                        clearInterval(actionPlayer2);  
                    }
                    // Sinon utilisation normal de soin
                    else{
                        player2.pv = player2.pv + player2.soin;
                        texte.textContent = `${player2.nom} se soigne`;
                        pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                        pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    }  
                }
            }
            // Test dans la console : 
            //console.log(`${player2.nom} a joué`,player1.nom, player1.pv, player2.nom, player2.pv);
            }, 4000) 
    }, 2000)
});

// Test dans la console :
//console.log(player1, player2);
