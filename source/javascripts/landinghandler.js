function landingHandler() {
  if(!window.location.hash && window.location.pathname.split(/\/(?=.)/).length == 1){
    if( $('body').is('.d7, .d6, .d5')) {
      $( "#toc" ).show();  
      console.log("landing on narrow view");
    }
    else {
      if( $('body').is('.d4, .d3')) {
        $( "#toc" ).hide();  
        console.log('landing on wide view');
      }
    }
  }
  console.log("landing handler loaded successfully!");
}