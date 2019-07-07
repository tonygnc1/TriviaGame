// $(document).ready(function () {
//     $(startButton).click(function () {
//         $("p").fadeOut("fast");
//     });


// $( "#clickme" ).click(function() {
//     $( ".startButton" ).fadeOut( "slow", function() {
//       // Animation complete.
//     });
//   });

$(function() {
    $("button").click(function(e) {
      $(".startButton").show();
  
      e.stopPropagation(); // if the event occur inside the container, prevent it from bubbling up to the document and fires the bellow function
    });
  
    $(button).click(function(e) { // if the click target is the .container (or something inside it) this event will never reach the document because of the stop propagation inside the above listener. So if this is fired then the target is not the wrapper, therefore we should hide the button
      $(".startButton").hide();
    });
//   });







    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
