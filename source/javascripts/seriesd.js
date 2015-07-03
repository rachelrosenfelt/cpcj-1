function assignSeriesD() {
  var width = $(window).width(); 
  $(document.body).removeClass('d3 d4 d5 d6 d7');
  new_class = 
    width > 1441 ? 'd3' : 
    width > 1081 ? 'd4' : 
    width > 822 ? 'd5' : 
    width > 641 ? 'd6' : 
    width > 0 ? 'd7' : '';
  console.log('adding class to body:' + new_class);
  var className = $('body').attr('class');
  console.log('body class:' + className);
  $('body').addClass(new_class);
}