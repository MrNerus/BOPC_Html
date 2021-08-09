Help_Toggle = 0;
var Setup = "****";
var Punchline = "***";
var Url = 'https://official-joke-api.appspot.com/random_joke';
var captured;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
Set_Joke();

// =====================


function Click_Info() {
    if (Help_Toggle == 0) {
        Show_Info();
    }
    else if (Help_Toggle == 1) {
        Hide_Info();
    }
}

function Show_Info() {
    Help_Toggle = 1;
    Unhide_Hidden2("Help_Box", "#Help_Container");
}

function Hide_Info() {
    Help_Toggle = 0;
    document.getElementById("Help_Box").style.height = "0px";
}

function initialize() {
    document.getElementById("Buffer").style.height = "30px";


    return new Promise(function (resolve, reject) {
        fetch(Url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                captured = data;
                Setup = captured["setup"];
                Punchline = captured["punchline"];
                resolve();
            })
            .catch(function (err) {
                console.log('error: ' + err);
                reject();
            });
    })
}

function Set_Joke(){
    initialize().then(function () {
        Update_Setup();
        document.getElementById("Buffer").style.height = "0px";
    })
    .catch(function (errorx) {
        console.log('error: ' + errorx);
    });
}



function Update_Setup() {
    document.getElementById("Setup").innerHTML = Setup;
    document.getElementById("Punchline").innerHTML = "...";
}
function Update_Punchine() {
    document.getElementById("Punchline").innerHTML = Punchline;
}

function Unhide_Hidden2(Id, RefrenceId) {
    a = document.querySelector(RefrenceId).clientHeight + "px";
    console.log(a);
    document.getElementById(Id).style.height = a;

}