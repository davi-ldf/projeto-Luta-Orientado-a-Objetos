let char = new Knight("Cavaleiro");
let monster = new Boss();


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')

);

stage.start();