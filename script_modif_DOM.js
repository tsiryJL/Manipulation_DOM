//  Modification 1: changer le titre 
    function changeTitle(){
         document.querySelectorAll('h1.jumbotron-heading')[0].innerHTML = "Ce que j'ai appris à THP";
         document.getElementsByClassName('lead')[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
        }

//  Modification 2: change call to action
    function changeCallToActions(){
         document.querySelectorAll('section p > a.btn-primary')[0].innerHTML = "OK je veux tester !";
         document.querySelectorAll('section p > a.btn-primary')[0].href = "http://www.thehackingproject.org";
        }

// Modification 3: change logo Name and size
    function changeLogoName(){
         document.querySelectorAll('header a > strong')[0].innerHTML =  "The THP Experience";
         document.querySelectorAll('header a > strong')[0].style.fontSize = "2em";
        }

// Modification 4: populate image
var imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    
    function populateImage(){
        for (let i = 0 ; i < imagesArray.length ; i++){
            document.getElementsByClassName('card-img-top')[i].src = imagesArray[i];
        }
    }

// Modification 5: delete last card les 3 derniers
    function deleteLastCard(){
    }

//=============================
    // Call function //
//=============================   
changeTitle();
changeCallToActions();
changeLogoName();
populateImage();