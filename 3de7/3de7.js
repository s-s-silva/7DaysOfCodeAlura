
let op = document.getElementById('op');
let especializacao = document.getElementById('especializacao')

op.addEventListener("change", function (event) {
    let res = document.querySelector('input[name="oparea"]:checked').value;

    if (res == 'Front-end') {
        var elemento = "";
        elemento += '<fieldset id = "opespecifico">'
        elemento += '<legend>Você quer aprender oque?</legend>'
        elemento += '<input type="radio" id"react" name = "opdentroarea" value="React">';
        elemento += '<label for="react">React</label><br>';
        elemento += '<input type="radio" id="vue" name = "opdentroarea" value="Vue">';
        elemento += '<label for="vue">Vue</label><br>';
        elemento += '</fieldset>'

        var opdentroarea = document.getElementById("opdentroarea");
        opdentroarea.innerHTML = elemento;
    } else {
        var elemento = "";
        elemento += '<fieldset id = "opespecifico">'
        elemento += '<legend>Você quer aprender oque?</legend>'
        elemento += '<input type="radio" id"c" name = "opdentroarea" value="C#">';
        elemento += '<label for="c">C#</label><br>';
        elemento += '<input type="radio" id="java" name = "opdentroarea" value="Java">';
        elemento += '<label for="java">Java</label><br>';
        elemento += '</fieldset>'

        var opdentroarea = document.getElementById("opdentroarea");
        opdentroarea.innerHTML = elemento;
    }
});

especializacao.addEventListener("change", function (event) {
    let res = document.querySelector('input[name="opfinal"]:checked').value;

    if (res == 'Especializar') {
        var elemento = "";
        alert(`Continue se especializando em ${document.querySelector('input[name="opdentroarea"]:checked').value} para dominar a área ${document.querySelector('input[name="oparea"]:checked').value}`);
    } else {
        alert(`Chegou a hora de começar a aprender outras linguagens além de ${document.querySelector('input[name="opdentroarea"]:checked').value} se você quer se tornar Fullstack!`);
    }

    var elemento = "";
    elemento += 'Obrigada por participar!'
    var textfinal = document.querySelector("h3");
    textfinal.innerHTML = elemento;
});
