$(document).ready(function(){
    
    $('.services').click(function () {
        $(this).children('.hider').slideToggle(1200);
        $(this).children('.design').toggle(1500);
      });

    $('.card').hover(function(event){
      $(".card").hover(function () {
        $(this).children(".card-1").fadeToggle('fast', "linear");
      });
      });
      event.preventDefault();
    

    $('form#myForm').submit(function(){
      var name = $('#name').val();
      var pass = $('#email').val();
      var mess = $('#mess').val();
      alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
    });
    
    $("button").on('click', function(){
      $('form').each(function(){
        this.reset();
      });
    
});
});


$(document).ready(function () {
    $("#blanks form").submit(function(event) {
        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput = $("input#animal").val();
        var exclamationInput = $("input#exclamation").val();
        var verbInput = $("input#verb").val();
        var nounInput = $("input#noun").val();
        $(".person1").text(person1Input);
        $(".person2").text(person2Input);
        $(".animal").text(animalInput);
        $(".exclamation").text(exclamationInput);
        $(".verb").text(verbInput);
        $(".noun").text(nounInput);

        $("#story").show();

        event.preventDefault();
    });
});