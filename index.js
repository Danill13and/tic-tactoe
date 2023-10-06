const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})

let matrix = [
    [['  '], ['  '], ['  ']],
    [['  '], ['  '], ['  ']],
    [['  '], ['  '], ['  ']]
]

function showMatris(){
    console.log(`${matrix.at(0).at(0)}|${matrix.at(0).at(1)}|${matrix.at(0).at(2)}`)
    console.log('--------')
    console.log(`${matrix.at(1).at(0)}|${matrix.at(1).at(1)}|${matrix.at(1).at(2)}`)
    console.log('--------')
    console.log(`${matrix.at(2).at(0)}|${matrix.at(2).at(1)}|${matrix.at(2).at(2)}`)
}

rl.question('Оберіть режим гри: 2 гравці (Введіть 1) або з ботом (Введіть 2)', (answer) =>{
    if (answer === '1'){
        console.log('Режим гри: 2 гравці');
        showMatris()
    }
    else if (answer === '2'){
        console.log('Режим гри: гра з ботом');
        showMatris()
    }
    else{
        console.log('Некоректний вибор! Будь ласка введіть 1 або 2');
    }
}
)
