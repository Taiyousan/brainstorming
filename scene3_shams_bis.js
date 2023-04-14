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
        1: {"nom": "Shams",
            "texte": "J'ai parlé avec Jules...",
            "switch": false,
            "mood": "neutral",
            "role": 1
        },
        2: {"nom": "Shams",
            "texte": "Vous avez vraiment décidé de parler d'un chat d'appartement ?",
            "switch": false,
            "mood": "bruh",
            "role": 1
        },
        3: {"nom": "Jb",
            "texte": "Il mérite des claques ce gosse...",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        4: {"nom": "Jb",
            "texte": "J'avais des idées de sujets plus intéressants, moi.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        5: {"nom": "Jb",
            "texte": "Comme la déforestation...",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        6: {"nom": "Jb",
            "texte": "La perte de la biodiversité...",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        7: {"nom": "Jb",
            "texte": "La pollution...",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        8: {"nom": "Jb",
            "texte": "La surconsommation de viande et ses conséquences sur la planète et sur la santé...",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        9: {"nom": "Jb",
            "texte": "Des trucs sympas, quoi !",
            "switch": false,
            "mood": "shiny",
            "role": 2
        },
        10: {"nom": "Shams",
            "texte": "Ouais euh... non, trop dense comme sujets, tout ça.",
            "switch": true,
            "mood": "bruh",
            "role": 1
        },
        11: {"nom": "Shams",
            "texte": "Je propose plutôt de faire une aventure textuelle.",
            "switch": false,
            "mood": "variant",
            "role": 1
        },
        12: {"nom": "Shams",
            "texte": "Genre un truc interactif uniquement en texte.",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        13: {"nom": "Shams",
            "texte": "Le joueur doit lire des descriptions, prendre des décisions en fonction de ce qu'il lit... Un truc comme ça.",
            "switch": false,
            "mood": "thinking_hard",
            "role": 1
        },
        14: {"nom": "Jb",
            "texte": "Aaaaah ouais...",
            "switch": true,
            "mood": "dumb",
            "role": 2
        },
        15: {"nom": "Jb",
            "texte": "Comme une aventure de survie, un mystère à résoudre genre Scoubidou ?",
            "switch": false,
            "mood": "shiny",
            "role": 2
        },
        16: {"nom": "Shams",
            "texte": "Ouais, je sais pas.",
            "switch": true,
            "mood": "bruh",
            "role": 1
        },
        17: {"nom": "Shams",
            "texte": "Tant que c'est pas sur les chats.",
            "switch": false,
            "mood": "thinking_hard",
            "role": 1
        }
}

var audio1 = new Audio();
audio1.src = "sounds/shams.mp3";
var audio2 = new Audio();
audio2.src = "sounds/jb.mp3";
audio2.volume = 0.01;
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
      if(indiceDialogue == 18){
        setTimeout(() => {
          bouton.classList.add('visible');
        }, 300);
      }
  });
  






    
