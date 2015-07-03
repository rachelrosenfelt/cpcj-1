function mapHandler() {
  $( ".pin:not(.active), .pin-title" ).click(function(){
    $('.detail').hide();
    $(this).siblings().show();
    $(this).addClass('active');
  });  

  $( ".pin.active" ).click(function(){
    $(this).siblings().hide();
    $(this).removeClass('active');
  });
  $( '.detail .close').click(function() {
    $(this).parent().hide();
  });

  $('.map').mousedown(function(){
    $(this).addClass('dragged-map');
  });

  $('.map').mouseup(function(){
    $(this).removeClass('dragged-map');
  });

  $('.map').dblclick(function(){
    window.location.href = "/";
  });

  console.log("map handler loaded successfully!");
}