/*
Brief Projet :

  - Dans le fichier css, vous trouverez la classe .playing, vous utiliserez cette classe sur l'élément div correspondant
  à la touche utilisée par l'utilisateur

  - Ce projet utilise l'api audio en javascript, faites des recherches si vous ne la connaissez pas ( javascript+audio )

  - Le challenge principal consiste à utiliser jQuery pour selectionner les éléments appropriés en fonction du keyCode
  de la touche préssée par l'utilisateur

A S D F G H J K L
  BONUS : A la fin du projet , les musiciens devront nous faire une démonstration !
 */

function playAnimation(element)
{
    element.addClass('playing');
    setTimeout(function() {
        element.removeClass('playing');
    }, 100);
}

function playSound(num)
{
    let div = $('div[data-key="' + num + '"]');

    if (div)
    {
        playAnimation(div);
        let audio = $('audio[data-key="' + num + '"]');
        audio[0].play();
    }
}


$('html').on('keydown', function(e)
{
    playSound(e.which);
});