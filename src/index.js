const TIME_FOR_ONE_TIME = 300;

let a=9;
console.log('a: ',a)

function wringOut(count) {
    return new Promise((resolve, reject) => {
        if (count>100) {
            reject (new Error("ERROR 1"));
        }
        setTimeout(() => {
            resolve(
                console.log('Count: ',count),
                console.log('Into wringOut'),
                a=12,
                console.log('a: ',a)
            );
        }, count * TIME_FOR_ONE_TIME)
    })
}

function squatOut(count) {
    return new Promise((resolve, reject) => {
        if (count>100) {
            reject (new Error("ERROR 2"));
        }
        setTimeout(() => {
            resolve(
                console.log('Count: ',count),
                console.log('Into squatOut'),
                a=22,
                console.log('a: ',a)
            );
        }, count * TIME_FOR_ONE_TIME)
    })
}

async function getTraining() {
    try{
    console.log('Training start');
    await wringOut(10);
    console.log('10 ok!');
    await squatOut(20);
    console.log('10 ok!');
    return true;
    } catch(err){
        console.log(err.toString());
        return false;
    }
}

getTraining().then((result) => {
    console.log(result)
})