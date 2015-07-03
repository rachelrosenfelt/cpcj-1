function urlHandler() {
  var className = $('body').attr('class');
  console.log('body load class:' + className);
  if(window.location.hash){
    var hash = window.location.hash;
    $( hash ).show();
  }
  console.log('url handler loaded successfully!');
}