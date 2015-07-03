function yeildHandler() {
  if($('#yield').children().length <= 0 ) {
    $( "#yield" ).hide();
    console.log('hiding yeild');
  }
  else {
    $( "#yield" ).show();
    console.log('showing yeild');
  }
}