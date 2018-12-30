//
// JavaScript for Trivia Game
//
$(document).ready(function() {
    console.log("Trivia Game game started...");

    var StarWarsTheme = {
        themeName: "Star Wars",
        currentQuestionIndex: 0,
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
        time: 30,
        timer: null,
        currentTheme: null,
        currentQuestion: null,
        currentThemeIndex: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        unAnswered: 0,

        initializeGame: function() {
            //console.log("initializeGame...");
            $(".gamearea").css("display", "block");
        },

        startGame: function() {
            //console.log("startGame...");
            // Get a theme
            this.currentTheme = this.themes[this.currentThemeIndex];
            this.currentTheme.currentQuestionIndex = -1;

            // Set page header based off the theme
            $(".header").text(this.currentTheme.themeName + " Trivia!!");

            // Set the question from theme
            this.setQuestion();
            
        },

        setQuestion: function() {
            ++TrivaGame.currentTheme.currentQuestionIndex;
            if (TrivaGame.currentTheme.currentQuestionIndex >= TrivaGame.currentTheme.questions.length) {
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
            TrivaGame.time = 5;
            $(".time").text(TrivaGame.time + " seconds");
            TrivaGame.timer = setInterval(TrivaGame.timeGame, 1000);

            //
            // Callback for the question's choices
            //
            $(".choice").click(function(event) {
                console.log("List item selected. " + $(this).text());
                clearInterval(TrivaGame.timer);
                TrivaGame.timer = null;
                $(".question").css("display", "none");
                $(".choices").css("display", "none");
                if ($(this).text() === TrivaGame.currentQuestion.answer) {
                    TrivaGame.correctAnswers++;
                    $(".result").css("display", "block");
                    $(".result").text("Correct!!!");
                } else {
                    TrivaGame.incorrectAnswers++;
                    $(".result").text("Nope!!");
                    $(".correctanswer").text(TrivaGame.currentQuestion.answer);
                    $(".result").css("display", "block");
                    $(".answer").css("display", "block");
                }

                // Get next question
                setTimeout(TrivaGame.setQuestion, 5000);

            });
        },

        timeGame: function() {
            console.log("timeGame...");
            TrivaGame.time--;
            $(".time").text(TrivaGame.time + " seconds");

            if (TrivaGame.time <= 0) {
                TrivaGame.unAnswered++;
                clearInterval(TrivaGame.timer);
                TrivaGame.timer = null;
                $(".question").css("display", "none");
                $(".choices").css("display", "none");

                $(".result").text("Out of time!!");
                $(".correctanswer").text(TrivaGame.currentQuestion.answer);
                $(".result").css("display", "block");
                $(".answer").css("display", "block");

                // Get next question
                setTimeout(TrivaGame.setQuestion, 5000);
                console.log("TrivaGame.correctAnswers=" + TrivaGame.correctAnswers);
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
    setTimeout(TrivaGame.initializeGame, 3000);
});
