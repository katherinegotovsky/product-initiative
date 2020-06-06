/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  $(document.getElementById("nav-button").click(function(){
      
      /* this if else to change the text in the button */
      if($(document.getElementById("nav-button")).text() == "☰"){
       $(document.getElementById("nav-button")).text("🞬");
      }else{
        $(document.getElementById("nav-button")).text("☰");
      }
    
    /* this function toggle the visibility of our "li" elements */
    $("li").toggle("slow");
  });
});