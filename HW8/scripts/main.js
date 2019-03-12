var platterSelector = "#platter";
var pancakesSelector = "#pancakes";
var allFoods = new Array();
class PlatterInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}
    class PancakeInfo{
        constructor(selector, imagePath)
        {
            this.selector = selector;
            this.imagePath = imagePath;
        }
    
        get theSelector(){
            return this.selector;
        }
    
        get theImagePath(){
            return this.imagePath;
        }
    
        toString()
        {
            return this.selector + ":" + this.imagePath; 
        }
    }
}

function initializeArray()
{
    var platter = new PlatterInfo("#platter", "images/platter.jpg");
    allPlatter.push(platter);
    var pancakes = new PancakeInfo("#pancakes", "images/pancakes.jpg");
    allPancakes.push(pancakes);

}
$(document).ready(function(){
    console.log(allFoods[2].toString());
    console.log(allFoods[2].theSelector);
    console.log(allFoods[2].theImagePath);
    
    
    $(allFoods[2].theSelector).attr("src", allFoods[2].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
          
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

