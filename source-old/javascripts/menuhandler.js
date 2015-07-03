function menuHandler(){

  $( '.d7 .menu-toggle').click(function(e){
    e.preventDefault();
    $( '.menu ul' ).toggle();
  });

  $('.menu .menu-button').click(function(){
    target = $(this).attr("href");
    window.location.href = "/" + target;
  });

  $( '.menu-button').click(function(){
    // $( '.menu ul' ).toggle();
  });

  $( '.hide-modal').click(function(){
    $( '.modal').hide();
    $( '.menu ul' ).toggle();
  });

  $( '#toc_button').click(function(){
    $( '.modal').hide();
    $( "#toc" ).toggle();
  });

  $( '#panorama_button').click(function(){
    $( '.modal').hide();
    $( "#panorama" ).toggle(); 
  });

  $( '#about_button').click(function(){
    $( '.modal').hide();
    $( "#about" ).toggle();  
  });

  console.log("menu handler loaded successfully!");
}