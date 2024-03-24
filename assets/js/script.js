let log = new Log(document.querySelector('.log'));

let char = new Knight("Cavaleiro");
let monster = new Boss();


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);

stage.start();