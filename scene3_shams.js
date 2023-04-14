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
        1: {"nom": "Jules",
            "texte": "On a parlé avec JB...",
            "switch": false,
            "mood": "neutral",
            "role": 1
        },
        2: {"nom": "Jules",
            "texte": "Et on est tous les deux d'accord pour parler des chats d'appartement, de leur vie au quotidien et de leurs émotions.",
            "switch": false,
            "mood": "shiny",
            "role": 1
        },
        3: {"nom": "Jules",
            "texte": "Une thématique à ne pas prendre à la légère...",
            "switch": false,
            "mood": "sassy",
            "role": 1
        },
        4: {"nom": "Shams",
            "texte": "...",
            "switch": true,
            "mood": "bruh",
            "role": 2
        },
        5: {"nom": "Shams",
            "texte": "Je préfère éviter ce genre de sujet.",
            "switch": false,
            "mood": "bruh",
            "role": 2
        },
        6: {"nom": "Shams",
            "texte": "Je te pensais plus créatif que ça.",
            "switch": false,
            "mood": "thinking",
            "role": 2
        },
        7: {"nom": "Jules",
            "texte": "Van Gogh n'est devenu célèbre qu'après sa mort.",
            "switch": true,
            "mood": "smiling",
            "role": 1
        },
        8: {"nom": "Jules",
            "texte": "Personne ne comprend mon génie.",
            "switch": false,
            "mood": "neutral",
            "role": 1
        },
        9: {"nom": "Jules",
            "texte": "Tout le monde me déteste.",
            "switch": false,
            "mood": "sad",
            "role": 1
        },
        10: {"nom": "Shams",
            "texte": "Voilà, ça doit être ça.",
            "switch": true,
            "mood": "bruh",
            "role": 2
        },
        11: {"nom": "Shams",
            "texte": "Je vais demander à JB.",
            "switch": false,
            "mood": "variant",
            "role": 2
        }
}

var audio1 = new Audio();
audio1.src = "sounds/jules.mp3";
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
      if(indiceDialogue == 12){
        setTimeout(() => {
          bouton.classList.add('visible');
        }, 300);
      }
  });
  






    
