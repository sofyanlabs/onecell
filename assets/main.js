  $(".modal-button").click(function() {
    var target = $(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
  });
  
  $(".modal-close").click(function() {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
  });

  $(function() {
    var $startDate = $('.start-date');
    var $endDate = $('.end-date');

    $startDate.datepicker({
      autoHide: true,
    });
    $endDate.datepicker({
      autoHide: true,
      startDate: $startDate.datepicker('getDate'),
    });

    $startDate.on('change', function () {
      $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
    });
  });
