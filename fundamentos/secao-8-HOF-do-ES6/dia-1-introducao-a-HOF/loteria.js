const checaNum = (myNum, num) => myNum === num;

const loteria = (myNum, callback) => {
    const number = Math.floor((Math.random() * 5) + 1);
    console.log(number);
    return callback(myNum, number) ? 'Parabéns, ganhasse!!' : 'Deu ruim :/'
};

console.log(loteria(5, checaNum));