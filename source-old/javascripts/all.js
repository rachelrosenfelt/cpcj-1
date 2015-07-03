//= require jquery
//= require_tree .

$(window).load(function(){
  if ( $('body').is('.d7')){
      // do
    $( '.menu ul').addClass('collapsed').toggle();  
  }
});