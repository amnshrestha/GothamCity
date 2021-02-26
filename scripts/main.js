
// All text are from wikipedia 
// https://en.wikipedia.org/wiki/Gotham_(TV_series)
$('.bodyContent').css('opacity','0');

var lastScrollTop = 0;
const initialWidth = $('#batmanLogo').width();

const maxWidth = 10000;
const factor = 550;



var scrolledAmount = 0;
// 19683
// 29524.5
$(window).scroll(function(){

    var image = $('#batmanLogo');
    var bodyContent = $('.bodyContent');
    var st = $(this).scrollTop();

    if(st < 600){
        var slope = (maxWidth - initialWidth )/ factor;
        image.width(slope*st + initialWidth);
        
        var slopeOpacity = 1/factor;
        var opacityResult = -slopeOpacity*st + 1;
        image.css('opacity',opacityResult);

        var opacityForBody = slopeOpacity * st + 0;
        bodyContent.css('opacity',opacityForBody);

        
    }

    
    // The following code isn't used in this assignment
    // I've kept it here in case I need it in the future
    // Recognizing the whether it was scrolling up or down isn't my code
    // It was copied from https://stackoverflow.com/questions/814086/how-can-i-know-whether-the-scroll-of-the-user-is-up-or-down

    // if (st > lastScrollTop){
    //     // downscroll code

    //     var widthToBe = (50-st)
    //     if(image.width() < maxWidth){
    //         image.width(imageWidth+0.1*imageWidth);
    //         image.css('opacity',imageOpacity - 0.1* imageOpacity);
    //     }else{
    //         image.css('opacity','0');
    //         maxHeight = image.height();
    //         image.height(0);
    //     }
    // } else {
    //     // upscroll code
    //     if(image.width() > initialWidth){
    //         if(image.height()==0){
    //             image.height(maxHeight);
    //         }
    //         image.width(imageWidth-0.1*imageWidth);
    //         image.css('opacity',imageOpacity + 0.1* imageOpacity)
    //     }else{
    //         image.css('opacity','1')
    //     }
    // }
    // lastScrollTop = st;
   
    
});


var title = $(".title").text();
console.log("This is the one "+title);

var aquaManArray = ["Atlantis is the ancient sunken kingdom in the the North Atlantic. Actually the size of a continent, it is one of the earliest and most highly advanced cultural and magical societies on Earth. It is further divided into city-states like Poseidonis, Tritonis, Venturia, Shayeris and others. By the 21st Century, it was ruled by King Arthur Curry, the hero known as Aquaman, from the capital Poseidonis."
                    ,"The Kingdom of Atlantis is an underwater kingdom located somewhere deep in the Atlantic Ocean. It is home to the ancient, isolated, and highly advanced Atlantean culture. Originally part of a larger Atlantean empire, the present day Atlantis is now one of four surviving kingdoms after the Sinking of Atlantis."
                    ,"Founded by King Atlan, the empire of Atlantis at its peak was the most powerful and technologically advanced nation on the planet. Eventually Atlantis developed a series of new technologies centered upon their greatest achievement - the discovery of an inexhaustible source of energy, allowing the creation of machine walkers, advanced aircraft and the powerful Trident of Atlan. During a test of the Trident, a massive energy pulse violently radiated outward and destroyed Atlantis, causing it to sink into the sea with great loss of life."
                    ,"Heavily isolated from the surface, the only way into Atlantis is a colossal glowing gate in front of an ancient bridge, guarded by customs and enforced by a massive array of powerful hydro-cannons, Stinger squadrons and Shark cavalry also patrol the gate, Stinger Squadrons also patrol the interior for criminal activities."
                    ,"Atlantis, is featured across several DC properties, most notably the cartoon series Young Justice as well as the 2018 Aquaman Movie:https://www.imdb.com/title/tt1477834/"
                    ];
var selectedArray = aquaManArray;

$(".eachCard").click(function(){ 
    $( ".eachCard" ).each(function() {
        $(this).removeClass('selected');
        // $(this).css("background-color", "rgba(0, 0, 0, 0.8)");
    });
    $(this).addClass('selected');

    
    // $(this).css("background-color", "rgba(70, 70, 70, 0.8)");
    var id = $(this).attr('id');
    var newTitle = '';
    var newDescription = '';
    switch(id) {
        case 'geography':
            newTitle = 'GEOGRAPHY';
            newDescription = selectedArray[1];
            break;
        case 'history':
            newTitle = 'HISTORY';
            newDescription = selectedArray[2];
            break;
        case 'culture':
            newTitle = 'Culture';
            newDescription = selectedArray[3];
            break;
        case 'media':
            newTitle = 'Media';
            newDescription = selectedArray[4];
            break;
        default:
            newTitle = 'GOTHAM';
            newDescription = selectedArray[0];
            break;
    }
    var titleToChange = $('.title');
    var descriptionToChange = $('.initialDescription');
    titleToChange.fadeOut(function(){
        titleToChange.text(newTitle);
        titleToChange.fadeIn();
    });
    descriptionToChange.fadeOut(function(){
        descriptionToChange.text(newDescription);
        descriptionToChange.fadeIn();
    });    
    
});
