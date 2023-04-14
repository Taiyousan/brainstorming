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

//on charge l'audio





    //nouveau json
    const dialogue = {
        1: {"nom": "Shams",
            "texte": "Pff...",
            "switch": false,
            "mood": "neutral",
            "role": 1
        },
        2: {"nom": "Shams",
            "texte": "On a encore la SAE de dev à rendre, pas mal de rendus et maintenant on doit faire ça.",
            "switch": false,
            "mood": "bruh",
            "role": 1
        },
        3: {"nom": "Shams",
            "texte": "T'as des idées pour le projet ?",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        4: {"nom": "Alice",
            "texte": "Mmmh...",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        5: {"nom": "Shams",
            "texte": "Vu qu'on a que deux jours, faut que ce soit simple, rapide, efficace.",
            "switch": true,
            "mood": "thinking",
            "role": 1
        },
        6: {"nom": "Alice",
            "texte": "Ouais, je suis d'accord.",
            "switch": true,
            "mood": "neutral",
            "role": 2
        },
        7: {"nom": "Alice",
            "texte": "Perso, je suis fan de mythologie.",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        8: {"nom": "Alice",
            "texte": "On peut faire un truc sur une légende ou un mythe, comme dans l'exemple sur l'Odyssée qu'on nous a donné en cours.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        9: {"nom": "Alice",
            "texte": "On a rien à inventer. On trouve un mythe, on l'adapte, on fait un truc interactif, et hop.",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        10: {"nom": "Shams",
            "texte": "Ah, pas bête, pas bête.",
            "switch": true,
            "mood": "smiling",
            "role": 1
        },
        11: {"nom": "Shams",
            "texte": "Genre quelle mythologie ? Grecque ?",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        12: {"nom": "Alice",
            "texte": "Ouais, grecque, nordique, égytienne...",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        13: {"nom": "Shams",
            "texte": "Ah bah tu vois, mythologie égyptienne je suis bien fan aussi.",
            "switch": true,
            "mood": "shiny",
            "role": 1
        },
        14: {"nom": "Shams",
            "texte": "Genre le mythe d'Osiris là, avec les bandelettes et tout.",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        15: {"nom": "Alice",
            "texte": "Ah, oui, quand Osiris se fait tailler en morceaux par son frère Seth,",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        16: {"nom": "Alice",
            "texte": "...puis jeter dans le Nil,",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        17: {"nom": "Alice",
            "texte": "...puis recoller par Isis, sa femme et sa soeur, dans des bandelettes ?",
            "switch": false,
            "mood": "smiling",
            "role": 2
        },
        18: {"nom": "Shams",
            "texte": "...ouais voilà, ça.",
            "switch": true,
            "mood": "bruh",
            "role": 1
        },
        19: {"nom": "Alice",
            "texte": "Allez.",
            "switch": true,
            "mood": "smiling",
            "role": 2,
            "end": "true"
        },
}

var audio1 = new Audio();
audio1.src = "sounds/shams.mp3";
var audio2 = new Audio();
audio2.src = "sounds/alice.mp3";
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
      if(indiceDialogue == 20){
        setTimeout(() => {
          bouton.classList.add('visible');
        }, 300);
      }
  });
  






    
