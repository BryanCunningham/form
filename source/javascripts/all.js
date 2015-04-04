//= require_tree .

$(document).on("blur", ".input input", function(){
  if ($(this).val().length) {
    $(this).addClass("has-val");
  }
  else {
    $(this).removeClass("has-val");
  }
})

$(document).ready(function(){
  var form = $("#upworthy");
  form.validate({
    rules: {
      url: {
        required: true,
        url: true
      },
      email: {
        required: true,
        email: true
      }
    }
  });

})
