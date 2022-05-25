player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

question_turn = "Player1";
answer_turn = "Player2";

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in Lowercase : " + word);

    charAt1 = word.charAt(1);
    console.log("Char at 1 : " + charAt1);

    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = get_word.charAt(length_divide_2);
    console.log("Char at 2 : " + charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = get_word.charAt(length_minus_1);
    console.log("Char at 3 : " + charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log("Modified String : " + remove_charAt3);

    question_word = "<center><h4 id='word_display'>Q. " + remove_charAt3 + "</h4>";
    answer_word = "<br><input id='inptCheckBox' type='text'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check </button></center>";
    row = question_word + answer_word + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""
}

function check() {

    get_answer = document.getElementById("inptCheckBox").value;
    answer = get_answer.toLowerCase();
    console.log("Input Answer : " + answer);

    if (answer == word) {
        if (answer_turn == "Player1") {
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "Player1") {
        question_turn = "Player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    } else {
        question_turn = "Player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }

    if (answer_turn == "Player1") {
        answer_turn = "Player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    } else {
        answer_turn = "Player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}