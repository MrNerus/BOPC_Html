choice = ["rock", "paper", "sissors"]
c_win = 0
u_win = 0

function AI(uin, cin) {
    a = document.getElementById("Message")
    if (cin == "rock") {
        switch (uin) {
            case "rock":
                a.innerText = `Computer choosed ${cin} too! It's a draw.`;
                break;
            case "paper":
                a.innerText = `Computer choosed ${cin}! You Won.`;
                u_win++;
                break;
            case "sissors":
                a.innerText = `Computer choosed ${cin}! You Loose.`;
                c_win++;
                break;
            default:
                a.innerText = "Error in user input"
                break;
        }
    }
    else if (cin == "paper") {
        switch (uin) {
            case "paper":
                a.innerText = `Computer choosed ${cin} too! It's a draw`;
                break;
            case "sissors":
                a.innerText = `Computer choosed ${cin}! You Won.`;
                u_win++;
                break;
            case "rock":
                a.innerText = `Computer choosed ${cin}! You Loose.`;
                c_win++;
                break;
            default:
                a.innerText = "Error in user input.";
                break;
        }
    }
    else if (cin == "sissors") {
        switch (uin) {
            case "sissors":
                a.innerText = `Computer choosed ${cin} too! It's a draw`;
                break;
            case "rock":
                a.innerText = `Computer choosed ${cin}! You Won.`;
                u_win++;
                break;
            case "paper":
                a.innerText = `Computer choosed ${cin}! You Loose.`;
                c_win++;
                break;
            default:
                a.innerText = "Error in user input"
                break;
        }
    }
    else {
        a.innerText = "Error in Bot's choice.";
    }
    update();
}

function update() {
    document.getElementById("Info").innerText = `You ${u_win}/${c_win} Bot`
}

function computerChoose(options) {
    return options[Math.floor(Math.random() * options.length)];
}

function Play() {
    Unhide_Hidden2("Response", "#Response_Container");
    User_Input = document.getElementById("RPC").value;
    Computer_Choosed = computerChoose(choice);
    AI(User_Input, Computer_Choosed);
    
}

function Close_Message() {
    document.getElementById("Response").style.height = "0px";
}

function Unhide_Hidden2(Id, RefrenceId) {
    a = document.querySelector(RefrenceId).clientHeight + "px";
    console.log(a);
    document.getElementById(Id).style.height = a;

}