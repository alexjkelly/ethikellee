$(document).ready(function(){
  $('body').hide().fadeIn('slow');
  
  $('#btnShowcase').click(function(){
    $('#about').hide();
    $('#showcase').fadeIn('slow');
  });
  
  $('#btnAbout').click(function(){
    $('#showcase').fadeOut();
    $('#about').fadeIn('slow');
  });
});