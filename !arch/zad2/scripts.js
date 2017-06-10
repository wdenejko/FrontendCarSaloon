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
    const listOfCars = new ListOfCars();
    data.forEach(item => listOfCars.addCar(item))
    const context = document.getElementById('table');
    context.innerHTML = listOfCars.toTable();
}