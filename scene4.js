//à faire :
// - faire un json avec les dialogues
// - redéfinir les deux fichiers audio
// - redéfinir les deux images dans le html
// - redéfinir la fin
// - redéfinir le background

let i = 0;
let indiceDialogue = 1;
const bulle = document.querySelector(".bulle-texte");
const bullecontainer = document.querySelector(".bulle-container");
const persos = document.querySelectorAll(".perso");
const perso1 = document.querySelector(".perso1 img");
const perso2 = document.querySelector(".perso2 img");
const etiquette = document.querySelector(".etiquette");
const bouton = document.querySelector(".suivant");

//on charge l'audio

    //nouveau json
    const dialogue = {
        1: {"nom": "Alice",
            "texte": "C'est quoi cette histoire de roux ?",
            "switch": false,
            "mood": "surprised",
            "role": 1
        },
        2: {"nom": "Shams",
            "texte": "Hein ?",
            "switch": true,
            "mood": "variant",
            "role": 2
        },
        3: {"nom": "Alice",
            "texte": "Jules veut parler de l’avenir des roux pour aider JB…",
            "switch": true,
            "mood": "gasp",
            "role": 1
        },
        4: {"nom": "Shams",
            "texte": "Qu'est-ce qu'il t'a encore raconté celui-là ?",
            "switch": true,
            "mood": "bruh",
            "role": 2
        },
        5: {"nom": "Shams",
            "texte": "Il m'a parlé d'un truc de chats d'appartement à moi...",
            "switch": false,
            "mood": "thinking_hard",
            "role": 2
        },
        6: {"nom": "Shams",
            "texte": "Bref, pas grave.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        7: {"nom": "Shams",
            "texte": "Avec JB on a plutôt pensé à une aventure textuelle.",
            "switch": false,
            "mood": "variant",
            "role": 2
        },
        8: {"nom": "Shams",
            "texte": "T'en penses quoi ?",
            "switch": false,
            "mood": "shiny",
            "role": 2
        },
        9: {"nom": "Alice",
            "texte": "J'aime bien ! D'ailleurs ça me donne une idée.",
            "switch": true,
            "mood": "smiling",
            "role": 1
        },
        10: {"nom": "Alice",
            "texte": "On pourrait faire une course contre la montre où le joueur doit accomplir une tâche ou résoudre un problème avant que le temps ne s’écoule.",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        11: {"nom": "Shams",
            "texte": "Pas mal, pas mal, j'aime bien l'idée.",
            "switch": true,
            "mood": "neutral",
            "role": 2
        },
        12: {"nom": "Shams",
            "texte": "Mais ça risque pas d'être contradictoire avec le principe d'une histoire interactive ?",
            "switch": false,
            "mood": "thinking_hard",
            "role": 2
        },
        13: {"nom": "Shams",
            "texte": "C'est pas mieux si on peut prendre son temps pour lire, observer et réfléchir sur les choix proposés ?",
            "switch": false,
            "mood": "thinking_hard",
            "role": 2
        },
        14: {"nom": "Alice",
            "texte": "T'as raison, mais on fait quoi du coup ?",
            "switch": true,
            "mood": "thinking",
            "role": 1
        },
        15: {"nom": "Alice",
            "texte": "Ça va bientôt faire un bon 4h qu’on n’a rien trouvé…",
            "switch": false,
            "mood": "surprised",
            "role": 1
        },
        16: {"nom": "Shams",
            "texte": "J'ai une idée. On va chercher les autres ?",
            "switch": true,
            "mood": "shiny",
            "role": 2
        },
        
}

var audio1 = new Audio();
audio1.src = "sounds/alice.mp3";
var audio2 = new Audio();
audio2.src = "sounds/shams.mp3";
var musiquedefond = new Audio();
musiquedefond.src = "sounds/musiquedefond.mp3";
musiquedefond.loop = true;
musiquedefond.volume = 0.01;

//jouer la musique dès la première interaction avec la page
document.addEventListener("click", function(){
  musiquedefond.play();
});



//La fonction qui écrit le texte lettre par lettre
function ecrireTexte(element, texte, role) {
  i = 0;
  element.innerHTML = "";
  function ajouterLettre() {
    if (i < texte.length) {
      element.innerHTML += texte.charAt(i);
      i++;
      setTimeout(ajouterLettre, 5);
      if (role == 1) {
        audio1.play();
      } else {
        audio2.play();
      }
    }
  }
  
  setTimeout(() => {
    ajouterLettre();
  }, 200);
  //fonction pour jouer un son
    
}

//On appelle la fonction pour écrire le texte au chargement de la page
setTimeout(() => {
  ecrireTexte(bulle, dialogue[indiceDialogue].texte);
  indiceDialogue++;
}, 300);

//On écoute le clic sur la bulle et on appelle la fonction pour écrire le texte suivant
bullecontainer.addEventListener("click", (e) => {
    if(dialogue[indiceDialogue].switch == true){

      //on change de perso
      persos.forEach(perso => {
        if(perso.classList.contains('opaque')){
          perso.classList.remove('opaque');
        } else {
          perso.classList.add('opaque');
        };
      });

      //on change d'étiquette
      if(etiquette.classList.contains('left')){
        etiquette.classList.remove('left');
        etiquette.classList.add('right');
      } else {
        etiquette.classList.remove('right');
        etiquette.classList.add('left');
      };
    }

    //on change l'image
    //on change l'image
    if(dialogue[indiceDialogue].role == 1){
      let nom = dialogue[indiceDialogue].nom.toLowerCase();
    (perso1).src = "img/" + nom + "/" + dialogue[indiceDialogue].mood + ".png";
    } else {
      let nom = dialogue[indiceDialogue].nom.toLowerCase();
    (perso2).src = "img/" + nom + "/" + dialogue[indiceDialogue].mood + ".png";
    
    }
    //on change le nom de l'étiquette
        etiquette.innerHTML = dialogue[indiceDialogue].nom;

      //on écrit le texte
      bulle.innerHTML = "";
      ecrireTexte(bulle, dialogue[indiceDialogue].texte, dialogue[indiceDialogue].role);
      console.log(indiceDialogue);
      indiceDialogue++;

      //si c'est la fin, on fait apparaître le bouton
      if(indiceDialogue == 17){
        setTimeout(() => {
          bouton.classList.add('visible');
        }, 300);
      }
  });
  






    
