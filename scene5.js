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
const perso3 = document.querySelector(".perso3 img");
const perso4 = document.querySelector(".perso4 img");
const moods = document.querySelectorAll(".mood");
const etiquette = document.querySelector(".etiquette");
const bouton = document.querySelector(".suivant");

//on charge l'audio

    //nouveau json
    const dialogue = {
        1: {"nom": "Shams",
            "texte": "Bon, je peux vous raconter mon idée ?",
            "switch": false,
            "mood": "neutral",
            "role": 2
        },
        2: {"nom": "Jules",
            "texte": "Yes, go.",
            "switch": true,
            "mood": "smiling",
            "role": 2
        },
        3: {"nom": "Jb",
            "texte": "Vas-y, dis nous ?",
            "switch": true,
            "mood": "smiling",
            "role": 1
        },
        4: {"nom": "Shams",
            "texte": "Ok, alors, imaginez.",
            "switch": true,
            "mood": "smiling",
            "role": 2
        },
        5: {"nom": "Shams",
            "texte": "On raconte justement tout ce qu'on fait depuis 4 heures.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        6: {"nom": "Shams",
            "texte": "Toutes les étapes de réflexion par lesquelles on est passées.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        7: {"nom": "Shams",
            "texte": "Chaque idée qu'on a pu avoir, nos discussions, on met tout ça dans l'histoire.",
            "switch": false,
            "mood": "thinking_hard",
            "role": 2
        },
        8: {"nom": "Shams",
            "texte": "Pas mal, non ?",
            "switch": false,
            "mood": "shiny",
            "role": 2
        },
        9: {"nom": "Alice",
            "texte": "...",
            "switch": true,
            "mood": "surprised",
            "role": 1
        },
        10: {"nom": "Alice",
            "texte": "Pas super convaincue...",
            "switch": false,
            "mood": "bruh",
            "role": 1
        },
        11: {"nom": "Alice",
            "texte": "C'est pas un peu barbant ?",
            "switch": false,
            "mood": "bruh",
            "role": 1
        },
        12: {"nom": "Jb",
            "texte": "Ouais non, moi non plus, j'aime pas trop le concept.",
            "switch": true,
            "mood": "thinking",
            "role": 1
        },
        13: {"nom": "Jb",
            "texte": "Genre, vraiment vraiment pas fan.",
            "switch": false,
            "mood": "thinking",
            "role": 1
        },
        14: {"nom": "Jules",
            "texte": "Depuis le début on avait des idées éclatées au sol, mais celle-là...",
            "switch": true,
            "mood": "shiny",
            "role": 2
        },
        15: {"nom": "Jules",
            "texte": "Force, courage et honneur, Shams !",
            "switch": false,
            "mood": "sassy",
            "role": 2
        },
        16: {"nom": "Shams",
            "texte": "Mais... mais non ça passerait super bien !",
            "switch": true,
            "mood": "variant",
            "role": 2
        },
        17: {"nom": "Shams",
            "texte": "Le lecteur pourrait suivre toute notre démarche, nos...",
            "switch": false,
            "mood": "thinking_hard",
            "role": 2
        },
        18: {"nom": "Jules",
            "texte": "Ouais, nan, laisse j'aime pas.",
            "switch": true,
            "mood": "thinking",
            "role": 2
        },
        19: {"nom": "Alice",
            "texte": "Naze de chez naze.",
            "switch": true,
            "mood": "bruh",
            "role": 1
        },
        20: {"nom": "Jb",
            "texte": "Franchement bof...",
            "switch": true,
            "mood": "thinking",
            "role": 1
        },
        21: {"nom": "Jules",
            "texte": "On cherche une autre idée ?",
            "switch": true,
            "mood": "sassy",
            "role": 2
        },
}

var audio1 = new Audio();
audio1.src = "sounds/alice.mp3";
var audio2 = new Audio();
audio2.src = "sounds/jules.mp3";
var audio3 = new Audio();
audio3.src = "sounds/jb.mp3";
var audio4 = new Audio();
audio4.src = "sounds/shams.mp3";
var musiquedefond = new Audio();
musiquedefond.src = "sounds/musiquedefond.mp3";
musiquedefond.loop = true;
musiquedefond.volume = 0.01;

//jouer la musique dès la première interaction avec la page
document.addEventListener("click", function(){
  musiquedefond.play();
});



//La fonction qui écrit le texte lettre par lettre
function ecrireTexte(element, texte, nom) {
    i = 0;
    console.log(nom);
    nom = nom.toLowerCase();
    console.log(nom);
    element.innerHTML = "";
    function ajouterLettre() {
      if (i < texte.length) {
        element.innerHTML += texte.charAt(i);
        i++;
        setTimeout(ajouterLettre, 5);
        if (nom == "alice") {
          audio1.play();
        } else if (nom == "jb") {
          audio2.play();
        } else if (nom == "jules") {
          audio3.play();
        } else if (nom == "shams") {
          audio4.play();
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
  ecrireTexte(bulle, dialogue[indiceDialogue].texte, dialogue[indiceDialogue].nom);
  indiceDialogue++;
}, 300);

//On écoute le clic sur la bulle et on appelle la fonction pour écrire le texte suivant
bullecontainer.addEventListener("click", (e) => {
    if(dialogue[indiceDialogue].switch == true){

      //on change de perso
    //   persos.forEach(perso => {
    //     if(perso.classList.contains('opaque')){
    //       perso.classList.remove('opaque');
    //     } else {
    //       perso.classList.add('opaque');
    //     };
    //   });

    persos.forEach(perso => {
        if(perso.classList.contains(dialogue[indiceDialogue].nom.toLowerCase())){
          perso.classList.remove('opaque');
        }else{
            perso.classList.add('opaque');
        }
    });

      //on change d'étiquette
      if(dialogue[indiceDialogue].nom == "Alice"){
        etiquette.classList.remove('right');
        etiquette.classList.remove('mid-right');
        etiquette.classList.remove('mid-left');
        etiquette.classList.add('left');
      } else if (dialogue[indiceDialogue].nom == "Jb"){
        etiquette.classList.remove('left');
        etiquette.classList.remove('mid-right');
        etiquette.classList.remove('right');
        etiquette.classList.add('mid-left');
      } else if (dialogue[indiceDialogue].nom == "Jules"){
        etiquette.classList.remove('left');
        etiquette.classList.remove('mid-left');
        etiquette.classList.remove('mid-right');
        etiquette.classList.add('right');
      } else if (dialogue[indiceDialogue].nom == "Shams"){
        etiquette.classList.remove('left');
        etiquette.classList.remove('mid-left');
        etiquette.classList.remove('right');
        etiquette.classList.add('mid-right');
      }
    }

    //on change l'image
    //on change l'image
    // if(dialogue[indiceDialogue].role == 1){
    //   let nom = dialogue[indiceDialogue].nom.toLowerCase();
    // (perso1).src = "img/" + nom + "/" + dialogue[indiceDialogue].mood + ".png";
    // } else {
    //   let nom = dialogue[indiceDialogue].nom.toLowerCase();
    // (perso2).src = "img/" + nom + "/" + dialogue[indiceDialogue].mood + ".png";
    // }

    moods.forEach(mood => {
        if(mood.classList.contains(dialogue[indiceDialogue].nom.toLowerCase())){
            let nom = dialogue[indiceDialogue].nom.toLowerCase();
            mood.src = "img/" + nom + "/" + dialogue[indiceDialogue].mood + ".png";
        }
    });

    //on change le nom de l'étiquette
        etiquette.innerHTML = dialogue[indiceDialogue].nom;

      //on écrit le texte
      bulle.innerHTML = "";
      ecrireTexte(bulle, dialogue[indiceDialogue].texte, dialogue[indiceDialogue].nom);
      console.log(dialogue[indiceDialogue].nom);
      indiceDialogue++;

      //si c'est la fin, on fait apparaître le bouton
      if(indiceDialogue == 22){
        setTimeout(() => {
          bouton.classList.add('visible');
        }, 300);
      }
  });
  






    
