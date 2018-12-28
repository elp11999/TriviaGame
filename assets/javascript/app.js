//
// JavaScript for Trivia Game
//
$(document).ready(function() {
    console.log("Trivia Game game started...");

    var StarWarsTheme = {
        themeName: "Star Wars",
        currentQuestionIndex: 9,
        questions: [
            {
                question: "What were Luke Skywalker's aunt and uncle's job on Tatooine?",
                answer: "Moisture farmers",
                choices: ["Crop farmers", "Slaves", "Moisture farmers", "No Job"]
            },
            {
                question: "In how many languages is C-3P0 fluent?",
                answer: "More than 6 million",
                choices: ["More than 1 hundred", "More than 1 thousand", "More than 1 million", "More than 6 million"]
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
                choices: ["Star Troopers", "Star Wars", "Adventures of Luke Starkiller", "The Force"]
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
            }
        ]
    };

    var StarTrekTheme = {
        name: "Star Trek",
        currentQuestionIndex: 0,
        questions: []
    };

    var TrivaGame = {
        themes: [StarWarsTheme, StarTrekTheme],
        time: 0,
        timer: null,
        currentThemeIndex: 0,

        initializeGame: function() {
            console.log("initializeGame...");
            $(".gamearea").css("display", "block");
        },

        startGame: function() {
            console.log("startGame...");
            var theme = this.themes[this.currentThemeIndex];
            var question = theme.questions[theme.currentQuestionIndex];
            $(".time").text(this.time + " seconds");
            $(".timeleft").css("display", "block");
            $(".question").text(question.question);
            $(".question").css("display", "block");
            $(".choices").html("");
            question.choices.forEach(function(element) {
                console.log(element);
                var li = $("<li class=choice></li>");
                $(li).text(element);
                $(".choices").append(li);                
            });
            $(".choices").css("display", "block");
            this.time = 10;
            this.timer = setInterval(this.timeGame, 1000);
            //
            // Callback for the question's choices
            //
            $(".choice").click(function(event) {
                console.log("List item selected. " + $(this).text());
            });
        },

        timeGame: function() {
            console.log("timeGame...");
            TrivaGame.time--;
            if (TrivaGame.time > 0)
                $(".time").text(TrivaGame.time + " seconds");
            else {
                clearInterval(TrivaGame.timer);
                TrivaGame.timer = null;
                //$(".timeleft").css("display", "none");
                //$(".question").css("display", "none");
                //$(".choices").css("display", "none");
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
    setTimeout(TrivaGame.initializeGame, 2000);
});
