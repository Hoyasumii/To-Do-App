class Task {

    constructor (value) {
        value = value.toString().split(',');
        this.title = value[0];
        this.checked = value[1];
    }
    
    changeChecked() {
        this.checked = (this.checked == true) ? false : true;
    }

}

let taskList = [];

//TODO: createTask()

function readTasks() {
    for (let index = 0; index < localStorage.length; index++) {
        taskList.push(new Task(localStorage[index]));
    }
}

//TODO: updateTask()

//TODO: removeTask()

//TODO: showTasks()

readTasks();

// TODO: Existe um erro que pode acontecer aqui: Se por exemplo, o length for 1, mas o índice ativo for 2, o programa irá substituir esse índice ativo, e isso ocorrerá um loop. E para evitar esse problema, eu vou precisar criar uma condição para evitar isso.

/* 
    O localStorage armazena na web as informações em Objetos<str, str>. E a partir daí, surgiu a seguinte ideia:
    ID, sendo ID o valor somado a um do último índice. Caso não tenha índice nenhum, ele voltará a 0.
    value, sendo o value a string a ser retornada que irá virar um objeto ao ser iniciado
 */

// localStorage.clear();

console.log("Hello World");

// let newTask = new Person(`Alan`, `Reis Anjos`);
// localStorage.setItem(`task${Math.random(999999999999)}`, Object.values(newTask));