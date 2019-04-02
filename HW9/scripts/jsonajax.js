 $(document).ready(function () {
            $("button").click(function () {
                $("#castironInformation").load("data/castiron.json", function(responseText){
                    var castiron = JSON.parse(responseText);
                    $("#castironInformation").html("Manufacturer: " + castiron.manufacturer 
                + "<br>Model:" + castiron.model + "<br>First Name:" + castiron.owner.firstName + "<br>Last Name:" 
                + castiron.owner.lastName + "<br>Sizes Available:<br>" +
                castiron.sizes[0];
                });
            });
        });

       /* function fadeText()
        {
            $("#castironInformation").fadeOut("slow").fadeIn("slow");
        }
        */