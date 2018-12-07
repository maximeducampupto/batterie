function playAnimation(element)
{
    console.log('test');
    element.addClass('playing');
    setTimeout(function() {
        element.removeClass('playing');
    }, 100);
}

function playSound(num)
{
    let div = $('div[data-key="' + num + '"]');
    let audio = $('audio[data-key="' + num + '"]');


    if (div.length !== 0 && audio.length !== 0)
    {
        playAnimation(div);
        audio[0].play();
    }
}


$('html').on('keydown', function(e)
{
    playSound(e.which);
});