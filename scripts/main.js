
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
                    ,"ATLANTIS"
                    ];

var superManArray = ["In the DC Comic book universe, Metropolis is by far one of the biggest and most renowned cities of the United States. She is located in Delaware and her skyline is modeled after that of Toronto's and has been greatly influenced by Manhattan. This has been home to the incomparable Superman since 1939. New Adventures of Superboy #22 (October 1981) and the 1990 Atlas of the DC Universe both show maps of Gotham City in New Jersey and Metropolis in the state of Delaware."
                    ,"Metropolis contains Six Boroughs: Bakerline, Hell's Gate, New Troy, Park Ridge, Queensland Park, and St. Martin's Island. There are several neighborhoods including Hypersector, Lafayette, Little Africa, Midvale, Mount Royal, New Town, Oak Town, Southside, and Hob’s Bay. Hoob’s River and West River connect to the Metropolis Bay. There are several Laboratories, Museums, Parks, and Businesses such as S.T.A.R Labs and Lexcorp."
                    ,"Italian navigator Vincenzo Gnanatti discovered the area while discovering territory for the Dutch in 1542. The territory had previously been occupied by the Algonquin Native Americans. Paul De Vries named the first settlement De Vries Village in 1634 and would go on to be known as “Old Town”. The Daily Planet would become one of the most renowned publishing houses in 1775. The first Metropolitan Bank was built in 1783. Waldo Glenmorgan, an adventuror, inventor, and science hero, began  trend of scientific entrepreneurship which coined the phrase “the Citiy of Tomorrow”."
                    ,"Metropolis has been depicted as a firmly established coastal city somewhere on the eastern seaboard. It is often speculated to be Manhattan, New York, but early issues in comics stated that Metropolis is located in Delaware. This is very close to Gotham City which is in New Jersey. "
                    ,"There are several movies and television series which depict the exploits of Superman and his companions Lois Lane and Jimmy Olsen attempt to survive a litany of nefarious foes. Here are links to said content. "
                    ,"METROPOLIS"
                    ];

var batManArray = ["Gotham is best known as the fictional home of the Batman appearing in comic books published by DC Comics. The city was identified as Batman's place of residence in Batman #4 (December 1940) and has since been the primary setting for stories featuring the character. Gotham is traditionally depicted as being located in the U.S. state of New Jersey. Gotham's look and atmosphere were primarily influenced by New York City and Chicago, although it was designed to more generally resemble any major American city. "
                    ,"Gotham City, like other cities in the DC Universe, has varied in its portrayals over the decades, but the city's location is traditionally depicted as being in the state of New Jersey. In Amazing World of DC Comics #14 (March 1977), publisher Mark Gruenwald discusses the history of the Justice League and indicates that Gotham City is located in New Jersey. In The World's Greatest Super Heroes (August 13, 1978) comic strip, a map is shown placing Gotham City in New Jersey and Metropolis in Delaware. World's Finest Comics #259 (November 1979) also confirms that Gotham is in New Jersey."
                    ,"The 2011 comic book series Batman: Gates of Gotham details a history of Gotham City in which Alan Wayne (Bruce Wayne's ancestor), Theodore Cobblepot (Oswald Cobblepot's ancestor), and Edward Elliot (Thomas Elliot's ancestor), are the founding fathers of Gotham. In 1881, they constructed three bridges called the Gates of Gotham, each bearing one of their names. Edward became jealous of the Wayne family during this period, jealousy that would spread to his great-great-grandson, Thomas Elliot or Hush. The occult origins of Gotham are further delved into by Peter Milligan's 1990 story arc 'Dark Knight, Dark City', which reveals that some of the American Founding Fathers are involved in summoning a bat-demon which becomes trapped beneath old 'Gotham Town', its dark influence spreading as Gotham City evolves. A similar trend is followed in 2005's Shadowpact #5 by Bill Willingham, which expands upon Gotham's occult heritage by revealing a being who has slept for 40,000 years beneath the land upon which Gotham City was built."
                    ,"Batman writer and editor Dennis O'Neil has said that, figuratively, Batman's Gotham City is akin to 'Manhattan below Fourteenth Street at eleven minutes past midnight on the coldest night in November.' Batman artist Neal Adams has long believed that Chicago has been the basis for Gotham, stating 'one of the things about Chicago is Chicago has alleys (which are virtually nonexistent in New York). Back alleys, that's where Batman fights all the bad guys.'. This has been an important part of mentioned culture"
                    ,"Gotham is an American action crime drama television series developed by Bruno Heller, produced by Warner Bros. Television and based on characters published by DC Comics and appearing in the Batman franchise, primarily those of James Gordon and Bruce Wayne. The series premiered on Fox on September 20, 2013, and concluded on April 25, 2019. The series although initially intended for Gordon and the city, included the Bruce Wayne character and the origin stories of Batman's rogues gallery. Development for a prequel series based on Batman began in September 2012, with Bruno Heller hired by Fox to serve as a writer and executive producer. In March 2014, Fox originally ordered 16 episodes for its first season before expanding it to 22."
                    ,"GOTHAM"
                    ];

var flashArray = ["Home of the second scarlet speedster, Barry Allen, Central City is located in Missouri, USA. This first appeared in Showcase No.4 September-October 1956. Central City's population has been depicted as dynamic over the years. In Flash v2, No. 2 (1987) it was cited as being 290,000. In 1990, the Atlas of the DC Universe listed it as 750,000. As of Flash Secret Files and Origins 2010, the population stands as 1,395,600. In Flash v.4 # 1, Central City Police Captain Darryl Frye is quoted as describing the population as having \"tripled\" during Barry Allen's years-long absence."
                    ,"Central City, is positioned across the Missouri River from Keystone City, Kansas. Points of Interest include: Brookfield Heights, Chubbuck, City Center, Danville, Englewood, Lawrence Hills, Leawood, Mounds View, New Brighton, Petersburg, University Town, Utopia Towers, Westminster, Windsor Heights, Ivo Laboratories"
                    ,"Instituted in the 19th century and became an important stop for cattle drives. It began to see tremendous growth after the completion of the Transcontinental Railroad, becoming the first major hub west of Chicago. A second period of growth occurred after World War I, and it has burgeoned to the present day."
                    ,"Central City has most often been set in Missouri. Maps in the series Young Justice place Central City in Missouri across from Keystone City, Kansas. Additionally, the 2014 television series The Flash also places Central City in Missouri (although opening scenes show Portland, Oregon),  most explicitly in a letter sent to S.T.A.R. Labs in the episode \"The Man in the Yellow Suit.\" Portland, Oregon is also the city-scape in the episode \"Flash vs The Arrow\" in season 1 of the series. Season 4, episode 13: True Colors mentions Central City being located in the Midwest. In season 6, episode 6, the location of Central City is shown through the targeting system of the Ring of Fire. The location points to the Richmond, Virginia metro area."    
                    ,"Central City has been depicted in the 1990’s television series, The Flash as well as the CW 2014 Arrow-verse spin off series of the same name. New shows even feature cameos of the original cast. CSI Barry Allen learns about his powers as a metahuman and solves crime with the rest of Team Flash. https://www.imdb.com/title/tt0098798/"
                    ,"CENTRAL"
                    ]

var greenArrowArray = ["Also known as Starling City and at a time Fort Plymouth, Star City is a lively tech capital in northern California. It has long been defended by the Emerald Archer, the Green Arrow. First mentioned in Adventure Comic vol. 1 #265. However, Star City has also been depicted in New England, Connecticut, north of San Francisco, California, Michigan, and Indiana. "
                        ,"The city has several landmarks like Star Bridge, Papp Stadium, and the Grell Museum. There are also several neighborhoods such as: The Triangle, Lamb Valley, The South End, The Glades, Orchid Bay, and Adams Heights."
                        ,"Colonel Jeb Star founded the territory of Fort Plymouth in the year 1797. In the early half of the 19th century, Fort Plymouth grew into a prosperous trading community luring prospectors all the way from Canada to ply their trades. With the establishment of the continental railroad system in the 1860s, Fort Plymouth developed into a thriving cattle town with large ranches, slaughterhouses, and stockyards."
                        ,"Star City's population is given in Green Arrow (\"City Walls\" Pt.3) as being roughly five million. The population is given as just under 600,000 in the CW series Arrow. In the third season episode “Guilty”, Felicity mentions there being \“roughy 86,000 ‘Paco’s’, give or take a few nick names\". This estimates the total population being almost 15% named “Paco”."
                        ,"This city has been featured on the sixth episode of television series Smallville, but is notably more integral to the CW Arrow-verse. "
                        ,"STAR"
                    ]

switch(title){
    case "ATLANTIS":
        selectedArray = aquaManArray;
        break;
    case "CENTRAL":
        selectedArray = flashArray;
        break;
    case "GOTHAM":
        selectedArray = batManArray;
        break;
    case "METROPOLIS":
        selectedArray = superManArray;
        break;
    case "STAR":
        selectedArray = greenArrowArray;
        break;
    default:
        selectedArray = batManArray
    
}

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
            console.log(selectedArray[1]);
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
            newTitle = selectedArray[5];
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
