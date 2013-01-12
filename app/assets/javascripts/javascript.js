$(document).ready(ready);
$(document).on('page:load', ready);

function ready()
{
  $('.container').hide().fadeIn('slow');
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    mode: 'fade',
    captions: true
  });
}