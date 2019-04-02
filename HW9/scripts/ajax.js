 $(document).ready(function () {
            $("button").click(function () {
                $("#castironInformation").load("data/castironInfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#castironInformation").fadeOut("slow").fadeIn("slow");
        }