    // question 1 : nombre de p
var x = document.getElementsByTagName("p");
    console.log('il y a : ' + x.length + " " +'paragraphe dans cette page');

    //question 2: contenue de l'id coucou
var coucou = document.getElementById("coucou");
    console.log(coucou.textContent);

    //question 3: l'URL de l'element a
var link = document.getElementsByTagName("a");
    console.log(link[2]);

    //question 4: le nombre d'element du class compte-moi
var compte = document.getElementsByClassName("compte-moi");
    console.log('il y a : ' + compte.length  + ' ' + 'element dans la classe compte-moi');

    //question 5: le nombre d'element <li> portant la class compte-moi
var y = document.querySelectorAll("li.compte-moi");
    console.log('il y a ' +  y.length + ' ' + ' element li');

    //question 6: éléments <li> et situés dans une liste ordonnée portent la classe compte-moi
var z = document.querySelectorAll('Ol li.compte-moi');
    console.log(' il y a ' + z.length + ' ' + 'element dans la liste ordonnée portant la class compte-moi');

    //question 7: 
var search = document.body.childNodes[1].childNodes[2];
