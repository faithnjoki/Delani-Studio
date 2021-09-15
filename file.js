 //development
 //id devpic
 //id devtext
 $(document).ready(function(){ 
  
  $("#devpic").click(function(){
  $("#devpic").hide()
  $("#devtext").show()

  })
  $("#devtext").click(function(){
  $("#devtext").hide()
  $("#devpic").show()
  })
 })
 
 
//prod Management
//id prdmapic
//id prdmatext
 $(document).ready(function(){
 $("#prdmanpic").click(function(){
 $("#prdmanpic").hide()
 $("#prdmantext").show()


  })
  $("#prdmantext").click(function(){
  $("#prdmantext").hide()
  $("#prdmanpic").show()

  })

 })

 //design
 //id designpic
 //id designtext
 $(document).ready(function(){
 $("#designpic").click(function(){
 $("#designpic").hide()
 $("#designtext").show()
  })
  $("#designtext").click(function(){
  $("#designtext").hide()
  $("#designpic").show()

  })

  //form
  $("#btn").click(function(){
   var name = $("input#name").val();
   alert (name + " we have received your message,Thank you for reaching out.")
  })
 })

 //HOVER
$('#port1').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p1').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p1').addClass('text');//addclass adds one or more class names to the selected elements
});

$('#port2').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p2').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p2').addClass('text');//addclass adds one or more class names to the selected elements
});

$('#port3').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p3').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p3').addClass('text');//addclass adds one or more class names to the selected elements
});

$('#port4').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p4').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p4').addClass('text');//addclass adds one or more class names to the selected elements
});

$('#port5').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p5').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p5').addClass('text');//addclass adds one or more class names to the selected elements
});


$('#port6').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p6').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p6').addClass('text');//addclass adds one or more class names to the selected elements
});

$('#port7').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p7').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p7').addClass('text');//addclass adds one or more class names to the selected elements
});

$('#port8').hover(function () {
    $(this).css("opacity", "1.7");
    $('.p8').removeClass('text');//removeclass removes one or more class names from the selected elements
}, function () {
    $(this).css("opacity", "1");
    $('.p8').addClass('text');//addclass adds one or more class names to the selected elements
});






