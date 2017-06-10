var Rx  = require('@reactivex/rxjs');

//var source = Rx.Observable.range(0,3);

var source = Rx.Observable.range(0,4).map(x => x * 2).filter(x => x < 6);
//.subscribe(x => console.log(`Next ${x}`));

var observer = {
    next: x => console.log(`Next ${x}`), 
    error: x => console.log('Error '),
    complete: ()=>console.log('Completed')
};

source.subscribe({next: x => console.log(`Next ${x}`)});

var source2 = Rx.Observable.create(observer => {
    
});


// apka
// rxjs


//var subscription = source.subscribe(observer);
//var subscription = source.subscribe({next: x => console.log(`Next ${x}`)});