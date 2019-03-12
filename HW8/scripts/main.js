var foodSelector = "#food";
var allFoods = new Array();
class FoodInfo{
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

function initializeArray()
{
    var food = new FoodInfo("#food", "images/platter.jpg");
    allFoods.push(food);

}
$(document).ready(function(){
    console.log(allFoods[0].toString());
    console.log(allFoods[0].theSelector);
    console.log(allFoods[0].theImagePath);
    
    
    $(allFoods[0].theSelector).attr("src", allFoods[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
          
    });
    
});

function moveSquare()
{
    $("#square").animate({left:150}).animate({top:300}).animate({left:0}).animate({top:300});
}

