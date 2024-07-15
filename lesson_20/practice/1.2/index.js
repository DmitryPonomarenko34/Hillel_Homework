
$(function() {
  $('#slider div:first-child').addClass('active');

  setInterval(() => {
      if (!$('#slider div.active').next().hasClass('slide')) {
        $('#slider div.active').removeClass('active').next('.slide').addClass('active');
        $('#slider div:first-child').addClass('active');

        return;
      }

      $('#slider div.active').removeClass('active').next('.slide').addClass('active');
  }, 5000);
});