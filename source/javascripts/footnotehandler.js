
function footnoteHandler() {

  $('<a href="#" class="fn-close-button">return to text</a>').appendTo('.fn-block');

  $( 'sup' ).click(function(){
    
    var reference_id = $(this).attr('id').split("_").pop();
    var footnote_id = "#foot_" + reference_id;
    
    // Hide any visible footnote
    $('.footnote').fadeOut();

    if ($(footnote_id).hasClass('active')) {
      $(footnote_id).fadeOut();
      $(footnote_id).removeClass('active');     
    }
    else {
      if (!$(footnote_id).hasClass('active')) {
        $(footnote_id).fadeToggle();        
        $(footnote_id).addClass('active');
      }
    }

    $('.fullscreen-fn').dblclick(function(){
      $(footnote_id).fadeOut();
      $(footnote_id).removeClass('active');     
    });

    $('.fn-close-button').click(function(){
      $(footnote_id).fadeOut();
      $(footnote_id).removeClass('active');       
    });

  });



}