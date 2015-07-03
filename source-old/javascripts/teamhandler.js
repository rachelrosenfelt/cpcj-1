function teamHandler() {
  $( '.bio-trigger' ).click(function(){
    
    var team_member = $(this).attr('id');
    var bio = "#" + team_member + "-bio";
    $('.bio-trigger').removeClass('active');
    $(this).addClass('active');
    $('.bio').hide();
    $('.bio-container').show();
    $(bio).fadeToggle();
  });
}