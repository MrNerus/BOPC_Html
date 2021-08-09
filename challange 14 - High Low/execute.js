toggle = 0;
Info_Toggle = 0
Previous = (Math.floor(Math.random() * 100)) + 1;
Current = (Math.floor(Math.random() * 100)) + 1;
Score_User = 0;
Score_Bot = 0;
Play_Count = 0;
Next()

function Toggle() {
    if (toggle == 0) {
        document.getElementById("Slider").style.left = "75%";
        toggle = 1;
    } else {
        document.getElementById("Slider").style.left = "25%";
        toggle = 0;
    }
}

function Play() {
    Play_Count++;
    Unhide_Hidden2("Response", "#Response_Container");
    
    if (toggle == 0 && Current < Previous){
        document.getElementById("Message").innerHTML = `Great! Computer choosed ${Current}`;
        Score(0);
    }
    else if (toggle == 1 && Current > Previous){
        document.getElementById("Message").innerHTML = `Great! Computer choosed ${Current}`;
        Score(0);
    }
    else {
        document.getElementById("Message").innerHTML = `Hah! Computer choosed ${Current}`;
        Score(1);
    }
    Next();
}

function Next() {
    Previous = Current;
    Current = (Math.floor(Math.random() * 100)) + 1;
    document.getElementById("Previous_Guess").innerText = Previous;
    if (Previous == Current) {
        Next();
    }
}


function Close_Message() {
    document.getElementById("Response").style.height = "0px";
}

function Score(x){
    if (x == 0) {
        Score_User++;
        document.getElementById("Score_Board").innerText = `You ${Score_User}/${Score_Bot} Bot`
    } else {
        Score_Bot++;
        document.getElementById("Score_Board").innerText = `You ${Score_User}/${Score_Bot} Bot`
    }

    let a = Score_User / Play_Count;
    if (a == 1) {
        document.getElementById("Luck_Board").innerText = "You can't get anu Luckier";
    }
    else if (a >= 0.75) {
        document.getElementById("Luck_Board").innerText = "Stratigically Lucky";
    }
    else if (a >= 0.6) {
        document.getElementById("Luck_Board").innerText = "Slightly Luckier";
    }
    else if (a >= 0.4) {
        document.getElementById("Luck_Board").innerText = "Let the god roll dice.. Lucky enough";
    }
    else if (a >= 0.25 ) {
        document.getElementById("Luck_Board").innerText = "Slightly Unlucky";
    }
    else if (a > 0) {
        document.getElementById("Luck_Board").innerText = "Meh.. You could do better";
    }
    else {
        document.getElementById("Luck_Board").innerText = "Absolute 0 Luck";
    }
}

function Click_Info(){
    if (Info_Toggle == 0) {
        Info_Toggle = 1;
        Unhide_Hidden2("Help_Box", "#Help_Container");
    }
    else {
        Info_Toggle = 0;
        document.getElementById("Help_Box").style.height = "0px";
    }
}

function Unhide_Hidden2(Id, RefrenceId) {
    a = document.querySelector(RefrenceId).clientHeight + "px";
    console.log(a);
    document.getElementById(Id).style.height = a;

}