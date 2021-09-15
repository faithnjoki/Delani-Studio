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
  $("#btn").click(function(){
   var name = $("input#name").val();
   alert (name + " we have received your message,Thank you for reaching out.")
  })
 })

 HOVER
//   $(document).ready(function(){
//    $("#wok1").mouseenter(function(){
//   $("#work1").show();
//   }, function(){
//   $("#work1text").css("visibility", "hidden");
// });

// })
$(document).ready(function(){
 $("#wok1").mouseenter(function () {
 $("#work1text").show();
  })
    .mouseleave(function () {
      $("#work1").hide();
    })

})


