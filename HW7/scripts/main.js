var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title)
    {
        this.image = image;
        this.title = title;
        this.author = author;
        this.description = description;
        this.year = year;
        
    }
   

    toStringTitle()
    {
        return "Title: " + this.title;    
        
    }
    toStringAuthor()
    {
        return "Author" + this.author;

    }
    toStringImage()
    {
        return "Image" + this.image;

    }
    toStringDescription()
    {
        return "Description" + this.description;

    }
    toStringYear()
    {
        return "Year" + this.year;

    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("images/apple.jpg", "Fresh made apple juice", "By: RawPixel", "2019");
    var myViewFinder1 = new ViewFinder("images/colddrinks.jpg", "Coffee in the cold snow", "By: Kristine Camacho", "2019");
    var myViewFinder2 = new ViewFinder("images/cupcakes.jpg", "Delicious cupcakes and coffee while studying", "By: PlushDesignStudio", "2019");
    var myViewFinder3 = new ViewFinder("images/latte.jpg", "Pouring a hot latte", "By: StockSnap", "2016");
    var myViewFinder4 = new ViewFinder("images/mug.jpg", "A woman holding a cup of coffee outside", "By: Free-Photos", "2017");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}
function getRandomIndex(a){
    return Math.floor(Math.random(a) * 5);  
}

function accessInformation()
{
    randIndex = getRandomIndex(5);
    console.log(getRandomIndex());
    
    document.getElementById("image").innerHTML = myViewFinderArray[randIndex].toStringImage();
    document.getElementById("title").innerHTML = myViewFinderArray[randIndex].toStringTitle();
    document.getElementById("author").innerHTML = myViewFinderArray[randIndex].toStringAuthor();
    document.getElementById("description").innerHTML = myViewFinderArray[randIndex].toStringDescription();
    document.getElementById("year").innerHTML = myViewFinderArray[randIndex].toStringYear();

}