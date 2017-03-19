// salon samochodowy

var data = [
    {"produqcent":"Fiat", "model":"Multipla"}, 
    {"producent":"Ford", "model":"Fiesta"},
    {"producent":"VW", "model":"Polo"}
];

class Car {
    constructor(json) {
        this.json = json
    }

    toTableRow() {
        return `<tr><td> ${this.json.producent} </td><td> ${this.json.model} </td></tr>`;
    }

    fullName() {
        return sum(this.json.producent, this.json.model)
    }

    sum(a,b) {
        return `${a} ${b}`;
    }
}

class ListOfCars {
    constructor() {
        this.car = [];
    }

    addCar(json) {
        this.car.push(new Car(json));
    }

    toTable() {
        let table = '<table>';
        table += this.generateTableHeader();
        for(var i = 0; i < this.car.length; i++) {
            table += this.car[i].toTableRow();
        }

        table += '</table>'
        return table;
    }

    generateTableHeader() {
        return '<tr><th>Producent</th> <th>Model</th></tr>'
    }
}

function init() {
    var listOfCars = new ListOfCars();
    for(var i = 0; i < data.length; i++) {
        listOfCars.addCar(data[i]);
    }

    var context = document.getElementById('table');
    console.log(listOfCars.toTable())
    context.innerHTML = listOfCars.toTable();
}