 let castiron = {
                "Manufacturer" : "Griswold",
                "Model" : "#12",
                "Etsy owner" : {
                    "firstName" : "Mixed",
                    "lastName" : "Kreations"
                },
                "sizes" : [
                    "12 inch Skillet"
                ]
            }
        
        $(function () {
            $("button").click(function () {
                showCastironInfo();
            });

        });
       
        function showCastironInfo()
            {
                $("#castironInfo").html("Manufacturer: " + castiron.manufacturer 
                + "<br>Model:" + castiron.model + "<br>First Name:" + castiron.owner.firstName + "<br>Last Name:" 
                + castiron.owner.lastName + "<br>Sizes Available:<br>" +
                castiron.sizes[0];
            }