//
// JavaScript for Trivia Game
//
$(document).ready(function() {
    console.log("Trivia Game game started...");

    var StarWarsTheme = {
        themeName: "Star Wars",
        currentQuestionIndex: -1,
        questions: [
            {
                question: "What were Luke Skywalker's aunt and uncle's job on Tatooine?",
                answer: "Moisture farmers",
                choices: ["Crop farmers", "Slaves", "Moisture farmers", "No Job"]
            },
            {
                question: "In how many languages is C-3P0 fluent?",
                answer: "More than 6 million",
                choices: ["1 hundred", "1 thousand", "1 million", "More than 6 million"]
            },
            {
                question: "Which character is partially named after George Lucas's son?",
                answer: "Dexter Jettster",
                choices: ["Jaba the Hutt", "Dexter Jettster", "Boba Fett", "Han Solo"]
            },
            {
                question: "How many Dewbacks were in the original 1977 theatrical cut of the first Star Wars movie?",
                answer: "Two",
                choices: ["One", "Two", "Five", "Ten"]
            },
            {
                question: "Is Leia a Jedi?",
                answer: "False",
                choices: ["True", "False"]
            },
            {
                question: "What was the original name of the first Star Wars movie?",
                answer: "Adventures of Luke Starkiller",
                choices: ["Star Troopers", "Star Wars I", "Adventures of Luke Starkiller", "The Force"]
            },
            {
                question: "Which bounty hunter in The Empire Strikes Back is wearing a costume from a Doctor Who episode?",
                answer: "Bossk",
                choices: ["Bossk", "Han Solo", "Chewbacca", "Boba Fett"]
            },
            {
                question: "Who kissed Leia first?",
                answer: "Luke",
                choices: ["Han", "Luke", "No one kissed her"]
            },
            {
                question: "What does AT-AT stand for?",
                answer: "All Terrain All Transport",
                choices: ["Awesome Transport After Tools", "All Terrain Armored Transport", "All Terrain All Transport"]
            },
            {
                question: "Which species stole the plans to the Death Star?",
                answer: "Bothans",
                choices: ["Mynocks", "Dugs", "Bothans", "Selonians"]
            },
            {
                question: "Who said: I'm out of it for a little while, everyone gets delusions of grandeur!",
                answer: "Han Solo",
                choices: ["C-3PO", "Obi-Wan Kenobi", "Han Solo", "Anakin SkyWalker"]
            },
            {
                question: "Who said: I think it is time we demonstrated the full power of this station.",
                answer: "Grand Moff Tarkin",
                choices: ["Grand Moff Tarkin", "The Emperor", "Admiral Ackbar", "Darth Vader"]
            },
            {
                question: "Who said: Why, you slimy, double-crossing, no-good swindler.",
                answer: "Lando Calrissian",
                choices: ["Greedo", "Han Solo", "Obi-Wan Kenobi", "Lando Calrissian"]
            },
            {
                question: "What's the name of the famous sound effect that can be heard in every 'Star Wars' movie?",
                answer: "Wilhelm Scream",
                choices: ["Growling and Howling", "Wilhelm Scream", "The Breathing", "Beeps and boops"]
            },
            {
                question: "Which 'Star Wars' actor worked with George Lucas on 'American Graffiti' before doing 'Star Wars'?",
                answer: "Harrison Ford",
                choices: ["Anthony Daniels", "Harrison Ford", "Carrie Fisher", "Mark Hamill"]
            },
            {
                question: "Who said: Nooooooooooooooooooo!",
                answer: "Darth Vader",
                choices: ["Han Solo", "The Emperor", "Darth Vader", "Princess Leia"]
            },
            {
                question: "Who said: This bounty hunter is my kind of scum: fearless and inventive.",
                answer: "Jabba The Hutt",
                choices: ["Greedo", "Darth Vader", "Han Solo", "Jabba The Hutt"]
            },
            {
                question: "What was the original name of 'Return of the Jedi'?",
                answer: "Revenge Of The Jedi",
                choices: ["The End Of The Empire", "The New Republic", "Return Of The Jedi", "Revenge Of The Jedi"]
            },
            {
                question: "Who was the actor inside the C-3PO costume?",
                answer: "Anthony Daniels",
                choices: ["Anthony Hopkins", "Kenny Baker", "Anthony Daniels", "Jeff Daniels"]
            },
            {
                question: "What location stood in for Tatooine in the first 1977 'Star Wars' movie?",
                answer: "Tunisian Desert",
                choices: ["Death Valley", "Syrian Desert", "Tunisian Desert", "Desert Near Yuma Arizona"]
            },
            {
                question: "What micro-organisms are said to be conductors of the Force?",
                answer: "Midchlorians",
                choices: ["Force Ghosts", "Chlorimidians", "Mitochondria", "Midchlorians"]
            },
            {
                question: "Who played Darth Vader on the set of the movie?",
                answer: "David Prowse",
                choices: ["David Prowse", "Peter MayHew", "Anthony Daniels", "James Earl Jones"]
            },
            {
                question: "What's Chewbacca's home planet?",
                answer: "Kashyyyk",
                choices: ["Bespin", "Kashyyyk", "Endor", "Mustafar"]
            },
            {
                question: "Who said: I suggest a new strategy, R2. Let the wookiee win.",
                answer: "C-3PO",
                choices: ["Obi-Wan Kenobi", "Han Solo", "Luke Skywalker", "C-3PO"]
            },
            {
                question: "What was Princess Leia's last name?",
                answer: "Organa",
                choices: ["Fisher", "Organa", "Amidala", "Antilles"]
            },
            {
                question: "How old is Padme Amidala when she's elected to the position of Queen of Naboo?",
                answer: "14",
                choices: ["22", "14", "106", "8"]
            },
            {
                question: "Who said: Aren't you a little short for a stormtrooper?",
                answer: "Princess Leia",
                choices: ["The Emperor", "Admiral Motti", "Princess Leia", "Han Solo"]
            },
            {
                question: "Who plays Chewbacca?",
                answer: "Peter Mayhew",
                choices: ["Kenny Baker", "David Prowse", "Peter Mayhew", "Rick Baker"]
            },
            {
                question: "What famous composer has scored all the 'Star Wars' films so far?",
                answer: "John Williams",
                choices: ["John Barry", "Hans Zimmer", "Danny Elfman", "John Williams"]
            },
            {
                question: "What does the 'TIE' in TIE Fighter stand for?",
                answer: "Twin Ion Engine",
                choices: ["Turbo Induction Encabulator", "Twin Ion Engine", "Techo Incantho Envulcanator", "Thermal Inverse Engine"]
            },
            {
                question: "Who played Lando Calrissian?",
                answer: "Billy Dee Williams",
                choices: ["Carl Weathers", "Eddie Murphy", "Billy Dee Williams", "John Williams"]
            },
            {
                question: "Who said: And I thought they smelled bad on the outside.",
                answer: "Han Solo",
                choices: ["Princess Leia", "Luke Skywalker", "Anakin Skywalker", "Han Solo"]
            },
            {
                question: "Who played Count Dooku?",
                answer: "Christopher Lee",
                choices: ["Max Von Sydow", "Christopher Lee", "George Lucas", "Ian McDiardmid"]
            },
            {
                question: "What was Anakin Skywalker's mom's name?",
                answer: "Shmi",
                choices: ["Shmi", "Lakshmi", "Beru", "Smee"]
            },
            {
                question: "What location stood in for Hoth in 'The Empire Strikes Back'?",
                answer: "Finse, Norway",
                choices: ["Glacier National Park", "Malmo, Sweden", "Finse, Norway", "Les Trois Vallees"]
            },
            {
                question: "What game do Chewbacca and R2-D2 play in 'A New Hope'?",
                answer: "Dejarik",
                choices: ["Jugger", "Cheops", "Tri-Dimensional Chess", "Dejarik"]
            },
            {
                question: "Who voiced Jar Jar Binks?",
                answer: "Ahmed Best",
                choices: ["Seth Green", "Michael Winslow", "Ahmed Best", "Tom Kenny"]
            },
            {
                question: "Who was the only actor ever nominated for an Oscar in a 'Star Wars' movie?",
                answer: "Alec Guinness",
                choices: ["Peter Cushing", "Harrison Ford", "Ewan McGregor", "Alec Guinness"]
            },
            {
                question: "Who said: I find your lack of faith disturbing.",
                answer: "Darth Vader",
                choices: ["Obi-Wan Kenobi", "Darth Vader", "The Emperor", "Qui-Gon Jinn"]
            },
            {
                question: "Who cut off half of Anakin Skywalker's right arm with a lightsaber?",
                answer: "Count Dooku",
                choices: ["Darth Maul", "Obi-Wan Kenobi", "Count Dooku", "General Greivous"]
            },
            {
                question: "What is Count Dooku's Sith name?",
                answer: "Darth Tyranus",
                choices: ["Darth Tyranus", "Darth Rex", "Darth Sidious", "Darth Maul"]
            },
            {
                question: "What actor physically played Darth Maul?",
                answer: "Ray Park",
                choices: ["Peter Serafinowicz", "Viggo Mortensen", "Ray Parker, Jr.", "Ray Park"]
            },
            {
                question: "Who said: I am altering the deal. Pray I don't alter it any further.",
                answer: "Darth Vader",
                choices: ["Jabba The Hutt", "Darth Vader", "Grand Moff Tarkin", "Lando Calrissian"]
            },
            {
                question: "In the 'Star Wars' movies, who was Anakin Skywalker's father?",
                answer: "He Didn't Have One",
                choices: ["Senator Palpatine", "Cade Skywalker", "Owen Lars", "He Didn't Have One"]
            },
            {
                question: "Who was the first Jedi to learn how to return from death as a Force Ghost?",
                answer: "Qui-Gon Jinn",
                choices: ["Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Qui-Gon Jinn"]
            },
            {
                question: "Who was the actor inside R2-D2?",
                answer: "Kenny Baker",
                choices: ["David Prowse", "Kenny Baker", "Michael Winslow", "There Was No Actor"]
            },
            {
                question: "Where did Darth Vader reveal himself to be Luke's father?",
                answer: "Cloud City",
                choices: ["Dagobah", "The Death Star", "Endor", "Cloud City"]
            },
            {
                question: "Who adopted Leia at birth?",
                answer: "Bail And Breha Organa",
                choices: ["Bail And Ona Antilles", "Bail And Breha Organa", "Owen And Beru Lars", "Obi-Wan Kenobi"]
            },
            {
                question: "Whose 'foul stench' did Leia say she recognized on the Death Star?",
                answer: "Grand Moff Tarkin",
                choices: ["Darth Vader", "The Emperor", "Dianoga", "Grand Moff Tarkin"]
            },
            {
                question: "Whose DNA was used in the creation of the Clone Army?",
                answer: "Jango Fett",
                choices: ["Count Dooku", "Boba Fett", "Anakin Skywalker", "Jango Fett"]
            },
            {
                question: "What location stood in for the Forest Moon of Endor?",
                answer: "Redwood Forests, California",
                choices: ["Redwood Forests, California", "Monteverde Cloud Forest, Costa Rica", "Daintree Forest, Australia", "Black Forest, Germany"]
            },
            {
                question: "Who said: It's a trap!?",
                answer: "Admiral Ackbar",
                choices: ["Nien Nunb", "Boba Fett", "Obi-Wan Kenobi", "Admiral Ackbar"]
            },
            {
                question: "Who was the puppeteer that voiced Yoda?",
                answer: "Frank Oz",
                choices: ["Jim Henson", "Stuart Freeborn", "Tim Rose", "Frank Oz"]
            },
            {
                question: "What were the two opposing organizations in the Clone Wars?",
                answer: "Galactic Republic And Separist Alliance",
                choices: ["Galactic Republic And Separist Alliance", "Rebel Alliance And Galactic Empire", "Jedi And The Sith", "Grungan Army And Tusken Raiders"]
            },
            {
                question: "Which bounty hunter did Han Solo kill in 'Episode IV: A New Hope'?",
                answer: "Greedo",
                choices: ["Bossk", "Nien Numb", "Greedo", "Boba Fett"]
            },
            {
                question: "Who said: Adventure. Excitement. A Jedi craves not these things?",
                answer: "Yoda",
                choices: ["Qui-Gon Jinn", "Yoda", "Obi-Wan Kenobi", "Luke Skywalker"]
            },
            {
                question: "Which of these was not one of Darth Sidious' Sith apprentices?",
                answer: "General Grievous",
                choices: ["Darth Vader", "Darth Tyranus", "Darth Maul", "General Grievous"]
            },
            {
                question: "Who killed Jango Fett?",
                answer: "Mace Windu",
                choices: ["Mace Windu", "Obi-Wan Kenobi", "Anikin Skywalker", "Boba Fett"]
            },
            {
                question: "What fatal flaw did the rebels exploit to destroy the first Death Star?",
                answer: "Exposed Thermal Exhaust Port",
                choices: ["Unstable Nuclear Reactor Core", "Unstable Hypermatter Reactor", "Incomplete Structural Support", "Exposed Thermal Exhaust Port"]
            },
            {
                question: "Who is the only non-Jedi/Sith character to use a lightsaber in the original trilogy?",
                answer: "Han Solo",
                choices: ["Princess Leia", "Han Solo", "Lando Calrlissian", "Boba Fett"]
            }
        ]
    };

    var StarTrekTheme = {
        themeName: "Star Trek",
        currentQuestionIndex: -1,
        questions: [
            {
                question: "What was the name of the pilot episode?",
                answer: "The Cage",  
                choices: ["The Cage", "Where No Man Has Gone Before", "Star Trek", "The Adventures Of Captain Kirk"]
            },
            {
                question: "What is the registry number for the Star Ship Enterprise?",
                answer: "NCC-1701",
                choices: ["USS-1701", "NCC-1701 A", "CVA-60", "NCC-1701"]
            },
            {
                question: "Why did Spock believe that Captain Kirk was dead ?",
                answer: "He killed him",
                choices: ["He disappeared in transportation", "He killed him", "Killed by the Ferengi", "Lost in the Delta Quadrant"]
            },
            {
                question: "Which Catwoman never guested on Star Trek ?",
                answer: "Ertha Kitt",
                choices: ["Lee Merryweather", "Julie Newmar", "Ertha Kitt"]
            },
            {
                question: "James T Kirk - What does the 'T' stand for?",
                answer: "Tiberius",
                choices: ["Thomas", "Titus", "Tiberius", "Tarquin"]
            },
            {
                question: "Who was Spock's Mother ?",
                answer: "Amanda",
                choices: ["Alisha", "Antonia", "Amanda", "Ailish"]
            },
            {
                question: "What was the first Star Trek movie to win an Oscar?",
                answer: "Star Trek (2009)",
                choices: ["Star Trek: The Motion Picture", "Star Trek (2009)", "Star Trek II: The Wrath Of Khan", "Star Trek: Beyond (2016)"]
            },
            {
                question: "Which 1960s star inspired Gene Roddenberry to draft the character Pavel Chekov?",
                answer: "The Monkees' Davy Jones",
                choices: ["The Stones' Keith Richards", "The Beatles' Ringo Starr", "The Monkees' Davy Jones", "Eric Clapton"]
            },
            {
                question: "Where is Trek Fest celebrated annually?",
                answer: "Riverside, Iowa",
                choices: ["London, England", "New York City", "Sheboygan, Wisconsin", "Riverside, Iowa"]
            },
            {
                question: "What year was James T. Kirk born?",
                answer: "2233",
                choices: ["2233", "2105", "2525", "3419"]
            },
            {
                question: "In what hit movie was the Star Trek Enterprise theme song first heard?",
                answer: "Patch Adams",
                choices: ["Big Lebowski", "Ghost Busters", "Back To The Future", "Patch Adams"]
            },
            {
                question: "How many actors play Spock in Star Trek III: The Search for Spock?",
                answer: "Five",
                choices: ["Two", "Three", "Five", "Seven"]
            },
            {
                question: "What is the only Star Trek TV series to never win an Emmy?",
                answer: "Star Trek",
                choices: ["Star Trek: The Next Generation", "Star Trek", "Star Trek: Voyager", "Star Trek: Deep Space"]
            },
            {
                question: "What is Chekov's first name?",
                answer: "Pavel",
                choices: ["Alexander", "Boris", "Pavel", "Egor"]
            },
            {
                question: "How many seasons did the 'Original Series' run?",
                answer: "Three",
                choices: ["One", "Three", "Five", "Nine"]
            },
            {
                question: "What Episode had the vessel S.S. Botany Bay?",
                answer: "Space Seed",
                choices: ["The Wrath of Khan", "The Trouble with Tribbles", "Space Seed", "Amok Time"]
            },
            {
                question: "In how many Star Trek episodes does Captain Kirk appear shirtless?",
                answer: "13",
                choices: ["13", "1", "7", "0"]
            },
            {
                question: "Who was the captain in the pilot episode?",
                answer: "Christopher Pike",
                choices: ["Gates McFadden", "James Kirk", "Jonathon Archer", "Christopher Pike"]
            },
            {
                question: "In the episode 'The Cage', what color were Number One's nails painted?",
                answer: "Purple",
                choices: ["Red", "Pink", "Purple", "Green"]
            },
            {
                question: "What was the name of the leader of the Kelvans in 'By Any Other Name'?",
                answer: "Rojan",
                choices: ["Troy", "Ansel", "Lotan", "Rojan"]
            },
            {
                question: "What powers the Enterprise to achieve Warp Speed?",
                answer: "Matter/Antimatter Reactor",
                choices: ["Lithium Batteries", "Matter/Antimatter Reactor", "Nuclear Reactor", "Atomic Power"]
            },
            {
                question: "Which of the following occurred in 'Spectre of the Gun'?",
                answer: "Chekov gets killed",
                choices: ["Kirk falls in love", "The Enterprise goes back in time", "Sulu takes a romp with a sword", "Chekov gets killed"]
            },
            {
                question: "Spock's parents were both different species. What were they?",
                answer: "Vulcan and Human",
                choices: ["Klingon and Vulcan", "Vulcan and Human", "Vulcan and Romulan", "Vulcan and Ferengi"]
            },
            {
                question: "According to Chekov, where was the Garden of Eden?",
                answer: "Just Outside Moscow",
                choices: ["Just Outside Moscow", "Just Outside Kaliningrad", "Just Outside Syktyvkar", "Just Outside Kyzyl"]
            },
            {
                question: "What actor played Mr. Spock?",
                answer: "Leonard Nimoy",
                choices: ["Lennard Nimmoy", "Leanord Minoy", "Leonard Nimoi", "Leonard Nimoy"]
            },
            
            {
                question: "Lieutenant Uhura's name translates to what in English?",
                answer: "Freedom",
                choices: ["Love", "Bold", "Brave", "Freedom"]
            },
            {
                question: "What 'Star Trek' cast member was originally approached to play the role of Spock?",
                answer: "Deforest Kelley",
                choices: ["Deforest Kelley", "George Takei", "James Doohan", "William Shatner"]
            },
            {
                question: "In what episode did we see TV's first interracial kiss?",
                answer: "Plato's Stepchildren",
                choices: ["The Man Trap", "Plato's Stepchildren", "Obsession", "Is There In Truth No Beauty?"]
            },
            {
                question: "Who was the Chief Medical Officer in the episode 'Where No Man Has Gone Before'?",
                answer: "Dr. Piper",
                choices: ["Dr. Boyce", "Dr. McCoy", "Dr. Piper", "Dr. M' Benga"]
            },
            {
                question: "What was George Samuel Kirk's (Captain Kirk's brother) occupation?",
                answer: "Research Biologist",
                choices: ["Doctor", "Mechanical Engineer", "Botanist", "Research Biologist"]
            },
            {
                question: "In what episode did the character Pavel Chekov make his debut?",
                answer: "Catspaw",
                choices: ["Catspaw", "Miri", "Shore Leave", "Friday's Child"]
            },
            {
                question: "The creature in 'Immunity Syndrome' is a one celled life form about to:",
                answer: "Divide",
                choices: ["Explode", "Surrender", "Mutate", "Divide"]
            },
            {
                question: "What is Scotty's first name?",
                answer: "Montgomery",
                choices: ["Ainsley", "Montgomery", "Clyde", "Bruce"]
            },
            {
                question: "Sulu holds what position on the Enterprise?",
                answer: "Helmsman",
                choices: ["Security Officer", "Communications Officer", "Helmsman", "First Officer"]
            },
            {
                question: "Vulcans are famous for what?",
                answer: "Logic and supression of emotions",
                choices: ["Love of frigid climates", "Logic and supression of emotions", "Ability to cry at a moment's notice", "Their height"]
            },
            {
                question: "What is Nurse Chapel's first name?",
                answer: "Christine",
                choices: ["Christine", "Catherine", "Caroline", "Cassandra"]
            },
            {
                question: "How many years is Enterprise's Crew's mission?",
                answer: "5",
                choices: ["1", "3", "5", "7"]
            },
            {
                question: "In what Russian city was Checkov born?",
                answer: "Leningrad",
                choices: ["Moscow", "St Petersburg", "Kaliningrad", "Leningrad"]
            },
            {
                question: "What is Captain Kirk's nickname for Doctor McCoy?",
                answer: "Bones",
                choices: ["Doc", "Bones", "Mac", "Lenny"]
            },
            {
                question: "What three colors are the uniforms on 'Star Trek'?",
                answer: "gold, blue, and red",
                choices: ["yellow, blue, and green", "gold, blue, and red", "black, gold, and red", "purple, blue, and red"]
            },
            {
                question: "What is Mr. Sulu's first name?",
                answer: "Hikaru",
                choices: ["Hukiri", "Hikaru", "Haiku", "Hatsuyo"]
            },
            {
                question: "Who was the creator of Star Trek?",
                answer: "Gene Roddenberry",
                choices: ["George Lucas Jr.", "‎James Cameron‎", "Gene Roddenberry", "Ridley Scott"]
            },
            {
                question: "Who steals Spock's brain?",
                answer: "Marj Dusay",
                choices: ["Marj Dusay", "‎Susan Oliver", "Barbara Anderson", "Diana Muldaur"]
            },
            {
                question: "On 'This Side of Paradise,' what planet did this episode revolve around?",
                answer: "Omicron Ceti III",
                choices: ["Psi MM", "‎Earth", "Talos IV", "Omicron Ceti III"]
            },
            {
                question: "Name the episode that Captain Kirk and his crew encounter Alice and a white rabbit.",
                answer: "Shore Leave",
                choices: ["The Squire of Gothos", "This Side of Paradise", "Friday's Child", "Shore Leave"]
            },
            {
                question: "All of the following happened in the episode 'This Side of Paradise' except which one?",
                answer: "Spock dies",
                choices: ["Spock laughs", "Spock disobeys an order", "Spock dies", "Spock says 'I love you'"]
            },
            {
                question: "In what episode do we see Captain Kirk with Spock-like ears?",
                answer: "The Enterprise Incident",
                choices: ["The Enterprise Incident", "Bread and Circuses", "Spock's Brain", "By Any Other Name"]
            },
            {
                question: "In the episode 'The Doomsday Machine' what is the name of the ship that the Enterprise finds crippled?",
                answer: "USS Constellation",
                choices: ["USS Hood", "USS Finnegan", "USS Celeste", "USS Constellation"]
            },
            {
                question: "In which episode does Mr. Spock first use the Vulcan mind-meld?",
                answer: "Dagger of the Mind",
                choices: ["Dagger of the Mind", "Miri", "The Man Trap", "Where No Man Has Gone Before"]
            },
            {
                question: "What is the Vulcan marriage ritual called?",
                answer: "koon-ut-kal-if-fee",
                choices: ["qual-a-quala", "fool-see-zeeloo", "ut-fulakee", "koon-ut-kal-if-fee"]
            },
            {
                question: "What was the name of the wheat like grain in the episode 'The Trouble with Tribbles'?",
                answer: "quadrotriticale",
                choices: ["specialicite", "quadrotriticale", "ferangus", "silicanus"]
            },
            {
                question: "What is Captain Kirk's military serial number?",
                answer: "sc 937-0176-cec",
                choices: ["33444355.5", "41353535", "sc 91111 earth", "sc 937-0176-cec"]
            },
            {
                question: "Who invented the duotronic computer system used on the USS Enterprise?",
                answer: "Richard Daystrom",
                choices: ["Albert Einstein", "Richard Daystrom", "John Resig", "Yukihiro Matsumoto"]
            },
            {
                question: "What was the Horta's life form based on?",
                answer: "silicon",
                choices: ["carbon", "chrylon", "cooper", "silicon"]
            },
            {
                question: "Where was Captain Kirk born?",
                answer: "Iowa",
                choices: ["Iowa", "Kansas", "Talos iv", "Star base 7"]
            },
            {
                question: "In which episode do we first meet the Romulans?",
                answer: "Balance of Terror",
                choices: ["Court Martial", "Arena", "Errand of Mercy", "Balance of Terror"]
            },
            {
                question: "Mr. Spock very rarely showed emotion, but in which episode did we see him cry?",
                answer: "The Naked Time",
                choices: ["The Naked Time", "Mudd's Women", "The Enemy Within", "Miri"]
            },
            {
                question: "Ryetalyn is the only known cure for what disease that strikes the Enterprise?",
                answer: "Rigellian Fever",
                choices: ["Scarlet Fever", "Small Pox", "Vulcan Mating Fever", "Rigellian Fever"]
            },
            {
                question: "Which of the following females does Mr. Spock NOT kiss?",
                answer: "T'Pring",
                choices: ["Leila Kalomi", "Christine Chapel", "Zarabeth", "T'Pring"]
            },
            {
                question: "Which famous American does Captain Kirk seemingly encounter?",
                answer: "Abraham Lincoln",
                choices: ["Ben Franklin", "Abraham Lincoln", "George Washington", "Thomas Jefferson"]
            }
        ]
    };

    var TrivaGame = {
        themes: [StarWarsTheme, StarTrekTheme],
        time: 30,
        timer: null,
        currentTheme: null,
        currentQuestion: null,
        currentThemeIndex: -1,
        correctAnswers: 0,
        incorrectAnswers: 0,
        unAnswered: 0,
        questionNumber: 0,

        initializeGame: function() {
            //console.log("initializeGame...");
            $(".gamearea").css("display", "block");
        },

        startGame: function() {
            //console.log("startGame...");

            // Reset counters
            this.correctAnswers = 0;
            this.incorrectAnswers = 0;
            this.unAnswered = 0;
            this.questionNumber = 0;

            // Get a theme
            if (++this.currentThemeIndex === this.themes.length)
                this.currentThemeIndex = 0;  
            this.currentTheme = this.themes[this.currentThemeIndex];
            if (TrivaGame.currentTheme.currentQuestionIndex >= (TrivaGame.currentTheme.questions.length - 1))
                TrivaGame.currentTheme.currentQuestionIndex = -1;  

            // Set page header based off the theme
            $(".header").text(this.currentTheme.themeName + " Trivia!");

            //console.log("TrivaGame.currentTheme.questions.length=" + TrivaGame.currentTheme.questions.length)

            // Set the question from theme
            this.setQuestion();
            
        },

        setQuestion: function() {
            ++TrivaGame.questionNumber;
            //console.log("questionNumber=" + TrivaGame.questionNumber);            
            if (TrivaGame.questionNumber > 10) {
                $(".timeleft").css("display", "none");
                $(".result").text("All done, here's how you did!!");
                $(".answer").css("display", "none");
                $(".correctcount").text(TrivaGame.correctAnswers);
                $(".incorrectcount").text(TrivaGame.incorrectAnswers);
                $(".unansweredcount").text(TrivaGame.unAnswered);
                $(".gameresults").css("display", "block");
                $(".playgamebutton").text("Play Again");
                $(".playgamebutton").show();
                return; 
            }
            ++TrivaGame.currentTheme.currentQuestionIndex;            
            //console.log("currentQuestionIndex=" + TrivaGame.currentTheme.currentQuestionIndex); 
            TrivaGame.currentQuestion = TrivaGame.currentTheme.questions[TrivaGame.currentTheme.currentQuestionIndex];
            $(".gameresults").css("display", "none");
            $(".result").css("display", "none");
            $(".answer").css("display", "none");
            $(".time").text(TrivaGame.time + " seconds");
            $(".timeleft").css("display", "block");
            $(".question").text(TrivaGame.currentQuestion.question);
            $(".question").css("display", "block");
            $(".choices").html("");
            TrivaGame.currentQuestion.choices.forEach(function(element) {
                //console.log(element);
                var li = $("<li class=choice></li>");
                $(li).text(element);
                $(".choices").append(li);                
            });
            $(".choices").css("display", "block");
            TrivaGame.time = 30;
            $(".time").text(TrivaGame.time + " seconds");
            TrivaGame.timer = setInterval(TrivaGame.timeGame, 1000);

            //
            // Callback for the question's choices
            //
            $(".choice").click(function(event) {
                //console.log("List item selected. " + $(this).text());
                clearInterval(TrivaGame.timer);
                TrivaGame.timer = null;
                $(".question").css("display", "none");
                $(".choices").css("display", "none");
                if ($(this).text() === TrivaGame.currentQuestion.answer) {
                    TrivaGame.correctAnswers++;
                    $(".result").css("display", "block");
                    $(".result").text("Correct!");
                } else {
                    TrivaGame.incorrectAnswers++;
                    $(".result").text("Nope!");
                    $(".correctanswer").text(TrivaGame.currentQuestion.answer);
                    $(".result").css("display", "block");
                    $(".answer").css("display", "block");
                }

                // Get next question
                setTimeout(TrivaGame.setQuestion, 5000);

            });
        },

        timeGame: function() {
            //console.log("timeGame...");
            TrivaGame.time--;
            $(".time").text(TrivaGame.time + " seconds");

            if (TrivaGame.time <= 0) {
                TrivaGame.unAnswered++;
                clearInterval(TrivaGame.timer);
                TrivaGame.timer = null;
                $(".question").css("display", "none");
                $(".choices").css("display", "none");

                $(".result").text("Out of time!");
                $(".correctanswer").text(TrivaGame.currentQuestion.answer);
                $(".result").css("display", "block");
                $(".answer").css("display", "block");

                // Get next question
                setTimeout(TrivaGame.setQuestion, 5000);
            }
        }
    };

    //
    // Callback for the play game button
    //
    $(".playgamebutton").click(function(event) {
        $(this).hide();
        TrivaGame.startGame();
    });

    //
    // Wait a bit to get the game going
    //
    setTimeout(TrivaGame.initializeGame, 50);
});
