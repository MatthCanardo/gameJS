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

// Évènement(s)
start.addEventListener('click', function(){
   
    const actionPlayer1 = setInterval(function(){
        if (player1.pv <= 0) {
            clearInterval(actionPlayer1);
            texte.textContent = `${player2.nom} a gagné`;
        }
        // A modifié, à mettre dans une autre condition.
        
        else{
            // Selection d'une attaque aléatoire pour player 1. 
            const mouvementPlayer1 = Math.floor(Math.random() * 2);
            // Condition selon l'attaque.
            if (mouvementPlayer1 == 0){
                if (player2.pv <= 0){
                    
                    clearInterval(actionPlayer1);
                    
                }
                else{
                    player2.pv = player2.pv - player1.charge
                    texte.textContent = `${player1.nom} utilise charge`;
                    player2.pv <= 0 ? player2.pv = 0 : "";
                    // Pv(s) textContent
                    pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                    console.log(texte.textContent);
                }
            }
            if (mouvementPlayer1 == 1){
                if (player2.pv <= 0){
                    clearInterval(actionPlayer1);  
                }
                else{
                    player1.pv = player1.pv + player1.soin
                    texte.textContent = `${player1.nom} se soigne`;

                    // Pv(s) textContent
                    pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                    console.log(texte.textContent);
                }
            }
        }
        
        console.log(`${player1.nom} a joué `, player1.nom, player1.pv , player2.nom, player2.pv);
        
    }, 4000)

    setTimeout(function(){
        const actionPlayer2 = setInterval(function(){
            if (player2.pv <= 0) {
                clearInterval(actionPlayer2);
                
                texte.textContent = `${player1.nom} a gagné`;
            }
            else{
                
                // Selection d'une attaque aléatoire pour player 2. 
                const mouvementPlayer2 = Math.floor(Math.random() * 2);
                mouvementPlayer2 == 0 ? player1.pv = player1.pv - player2.charge : player2.pv = player2.pv + player2.soin;
                if (mouvementPlayer2 == 0){
                    if (player1.pv <= 0){
                        
                        clearInterval(actionPlayer2); 
                    }
                    else{
                        texte.textContent = `${player2.nom} utilise charge`;
                        player1.pv <= 0 ? player1.pv = 0 : "";
                        pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                        pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                        }
                    
                }
                if (mouvementPlayer2 == 1 ){
                    if (player1.pv <= 0){
                        clearInterval(actionPlayer2);  
                    }
                    else{
                        texte.textContent = `${player2.nom} se soigne`;
                        pvPlayer[0].textContent = `${player2.pv}/${pvMax} pv(s)`;
                        pvPlayer[1].textContent = `${player1.pv}/${pvMax} pv(s)`;
                    }
                    
                }
            }
            console.log(`${player2.nom} a joué`,player1.nom, player1.pv, player2.nom, player2.pv);
            }, 4000)
        
    }, 2000)
    
    
});

// Console.log()
console.log(player1, player2);
