//validation
$(function() {
   
    $("form[name='logform']").validate({
    
      rules: {
        
        
        email: {
          required: true,
          
          email: true
        },
        password: {
          required: true,
        }
      },
    //error messages
      messages: {
        
        password: {
          required: "Password Required",
          minlength: "Invalid  Password"
        },
        email: "Invalid Email Address"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });