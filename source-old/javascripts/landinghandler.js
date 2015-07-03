function landingHandler() {
  if(!window.location.hash && window.location.pathname.split(/\/(?=.)/).length == 1){
    if( $('body').is('.d7, .d6')) {
      $( "#about" ).show();  
      console.log("landing on narrow view");
    }
    else {
      if( $('body').is('.d5, .d4, .d3')) {
        $( "#about" ).hide();  
        console.log('landing on wide view');
      }
    }
  }
  console.log("landing handler loaded successfully!");
}