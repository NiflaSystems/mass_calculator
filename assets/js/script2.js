

$(document).ready(function() {



var setNum2 = 1;

 
    var valToConvert2;
    var proceed2 = 1;

   $("#calc2").click(function(){

    var comma = false;

    $("#error").html("");

    valToConvert2 = $("#valToConvert2").val();

    if (valToConvert2.indexOf(',') > -1) {
        valToConvert2 =  valToConvert2.replace(",", ".");
        comma = true;
    }


     //valToConvert2 = $("#valToConvert2").val().replace(",", ".").replace(".", "");

     if(!$.isNumeric(valToConvert2)){

        proceed2 = 0;

            if(lang == "en"){

                var message2 = "This system expects a number. pls review entry."

            } else {

                var message2 = "Dieses System erwartet eine Nummer. Bitte überprüfen Sie den Eintrag."

            }


        //$("#error").html(error(message2));
        $("#result2").val(message2);

         setTimeout(function() {

            if($("#result2").val() == message2){

                $("#result2").val("");

            }       

         }, 2000);




     } else{
        proceed2 = 1;
     }

     if(proceed2){


     $("#result2").val("");

     var first_param2 = $("#param__1 :input").val();
     var second_param2 = $("#param__2 :input").val();

     //var variable_id2  = $("#variants2").val();
     var variable_id2  = "Value";

     if(first_param2 === second_param2){

             $("#result2").val(valToConvert2);
     }

     else {


        $.each(data__1, function(i, v) {
                    if ((v.Unit_1 == first_param2) && (v.Unit_2 == second_param2)) {
                        

                        var result2 = v[variable_id2];
                        
                        result2 = result2 * valToConvert2;
                        result2 = format(result2);

                        if(comma){
                            result2 = result2.replace(".", ",");
                        }
                        
                        $("#result2").val(result2);


                        return false; // stops the loop
                    } else{

                          $("#result2").val(err(lang));

                    }
            });


     } 
 
                 
    }//proceed

  //alert("The paragraph was clicked."+first_param+","+second_param); passed

});



 //swap select fields
 $("#swap_btn2").click(function(){

     //capture values
     var first_param2 = $("#param__1 :input").val();
     var second_param2 = $("#param__2 :input").val(); 

     //var set_1 = $("#set_container_1 span").text();

     var element__1 = $("#set_container__1").html();
     var element__2 = $("#set_container__2").html();

        $("#set_container__1").html(element__2);
        $("#set_container__2").html(element__1);

         $("#param__1 :input").val(second_param2);
     $("#param__2 :input").val(first_param2);

   
 // alert("initset."+set_1);
});


});


