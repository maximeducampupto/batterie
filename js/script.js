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