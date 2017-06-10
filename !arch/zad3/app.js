var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(50).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        console.log(x);
    })
    .subscribe(function(x) {
         var d = $('#results').text(x);
         console.log(d.toArray());
         for(var i=0; i<x[1].length; i++) {
                document.getElementById('results').innerHTML += `
                <p>${x[1][i]}</p>
                <p>${x[2][i]}</p>
                <p>link: <a href="${x[3][i]}" target="_blank">${x[3][i]}</a><hr /></p>`;
            }
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}