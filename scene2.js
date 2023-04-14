//à faire :
// - faire un json avec les dialogues
// - redéfinir les deux fichiers audio
// - redéfinir les deux images dans le html

let i = 0;
let indiceDialogue = 1;
const bulle = document.querySelector(".bulle-texte");
const bullecontainer = document.querySelector(".bulle-container");
const persos = document.querySelectorAll(".perso");
const perso1 = document.querySelector(".perso1 img");
const perso2 = document.querySelector(".perso2 img");
const etiquette = document.querySelector(".etiquette");
const bouton = document.querySelector(".suivant");
const boutonAlice = document.querySelector(".alice");

//on charge l'audio

    //nouveau json
    const dialogue = {
        1: {"nom": "Jb",
            "texte": "Alors ? Une idée de ce qu'on pourrait faire ?",
            "switch": false,
            "mood": "neutral",
            "role": 1
        },
        2: {"nom": "Jules",
            "texte": "J'ai faim...",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        3: {"nom": "Jb",
            "texte": "Gros, tu forces !",
            "switch": true,
            "mood": "dumb",
            "role": 1
        },
        4: {"nom": "Jules",
            "texte": "Héhé.",
            "switch": true,
            "mood": "smiling",
            "role": 2
        },
        5: {"nom": "Jules",
            "texte": "Déjà en ce qui concerne les contraintes, il nous faut un sujet facile à aborder étant donné qu'on a que deux jours pour faire ce projet.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        6: {"nom": "Jb",
            "texte": "Et du coup, t'as une idée ?",
            "switch": true,
            "mood": "thinking",
            "role": 1
        },
        7: {"nom": "Jules",
            "texte": "J'aime bien les animaux...",
            "switch": true,
            "mood": "smiling",
            "role": 2
        },
        8: {"nom": "Jb",
            "texte": "Ok, merci pour ton aide...",
            "switch": true,
            "mood": "thinking",
            "role": 1
        },
        9: {"nom": "Jb",
            "texte": " Plutôt que de choisir un sujet aléatoire, j’avais à l’esprit quelque chose de plus actuel pour notre animation sur une page Web. ",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        10: {"nom": "Jb",
            "texte": "Je pensais à un sujet qui pourrait susciter une prise de conscience.",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        11: {"nom": "Jb",
            "texte": "Par exemple : l'impact de l'industrie de la mode sur l'environnement et les conditions de travail des ouvriers dans les pays en développement.",
            "switch": false,
            "mood": "smiling",
            "role": 1
        },
        12: {"nom": "Jules",
            "texte": "Ah ouais… T’es sûr de ne pas vouloir partir sur un projet plus gai, comme...",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        13: {"nom": "Jules",
            "texte": "La vie d'un chat d'appartement ?",
            "switch": false,
            "mood": "shiny",
            "role": 2
        },
        14: {"nom": "Jules",
            "texte": "Alice peut faire les dessins, moi je fais le front, puis Shams et toi le back.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        15: {"nom": "Jb",
            "texte": "Nan...",
            "switch": true,
            "mood": "variant",
            "role": 1
        },
        16: {"nom": "Jb",
            "texte": "Parlons d’un sujet qui touche une partie de la population pour que les lecteurs puissent se sentir visés.",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        17: {"nom": "Jb",
            "texte": "Parlons de la déforestation et de la perte de biodiversité ou encore de la consommation excessive de viande et les conséquences sur la santé et l’environnement.",
            "switch": false,
            "mood": "smiling",
            "role": 1
        },
        18: {"nom": "Jules",
            "texte": "Mmmh, ça peut être intéressant, mais...",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        19: {"nom": "Jules",
            "texte": "Partir sur des thématiques de ce calibre pour une histoire interactive à faire en 2 jours, c’est un peu osé non ?",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        20: {"nom": "Jb",
            "texte": "Chill mané.",
            "switch": true,
            "mood": "shiny",
            "role": 1
        },
        21: {"nom": "Jules",
            "texte": "Ok, tu m'as convaincu !",
            "switch": true,
            "mood": "sassy",
            "role": 2,
            "end": "true"
        },
        22: {"nom": "Jules",
            "texte": "Bon, je vais en parler aux autres.",
            "switch": false,
            "mood": "smiling",
            "role": 2,
            "end": "true"
        },
}

var audio1 = new Audio();
audio1.src = "sounds/jb.mp3";
audio1.volume = 0.1;
var audio2 = new Audio();
audio2.src = "sounds/jules.mp3";
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
      if(indiceDialogue == 23){
        setTimeout(() => {
          bouton.classList.add('visible');
          boutonAlice.classList.add('visible');
        }, 300);
      }
  });
  






    
