// salon samochodowy

var data = [
    {"producent":"Fiat", "model":"Multipla"}, 
    {"producent":"Ford", "model":"Fiesta"},
    {"producent":"VW", "model":"Polo"}
];

function Car(json) {
    var self = this;
    self.pr = json.producent;
    self.mo = json.model;

    self.toTableRow = function() {
        return `<tr><td> ${self.pr} </td><td> ${self.mo} </td></tr>`;
    }

    self.fullName = function() {
        return sum(self.pr, self.mo)
    }

    var sum = function(a,b) {
        return `${a} ${b}`;
    }
}

function ListOfCars() {
    var car = [];
    var self = this;
    
    self.addCar = function(json) {
        car.push(new Car(json));
    }

    self.toTable = function() {
        var table = '<table>';
        table += generateTableHeader();
        for(var i = 0; i < car.length; i++) {
            table += car[i].toTableRow();
        }

        table += '</table>'
        return table;
    }

    var generateTableHeader = function() {
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