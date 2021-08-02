// fetch api to show challanges
fetch('./JSONs/portal.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendLinks(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });
// append the fetched information
function appendLinks(data) {
    var container = document.getElementById("portal");
    for (var item = 0; item < data.length; item++) {
        var ins = document.createElement("div");
        ins.innerHTML = `<a class="box" href="./${data[item].folder}/index.html">
                            <div class="preview">
                                <img src="./icons/${data[item].icon}" alt="${data[item].alt}" class="icon">
                                <p class="title">${data[item].title}</p>
                            </div>
                            <div class="hidden">
                                Challange ${data[item].challange}
                            </div>
                        </a>`
        container.appendChild(ins);
    }
}

// search filter
function start_serching() {
    // Declare variables
    var input, normalize, scope, lis, obj, i, txtValue;
    input = document.getElementById('Search');
    normalize = input.value.toUpperCase();
    scope = document.getElementById("portal");
    obj = scope.getElementsByTagName('a');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < obj.length; i++) {
        p_value = obj[i].getElementsByClassName("title")[0];
        c_value = obj[i].getElementsByClassName("hidden")[0];
        txtValueP = p_value.textContent || p_value.innerText;
        txtValueC = c_value.textContent || c_value.innerText;
        if (txtValueP.toUpperCase().indexOf(normalize) > -1 || txtValueC.toUpperCase().indexOf(normalize) > -1) {
            obj[i].style.display = "";
        } else {
            obj[i].style.display = "none";
        }
    }
}