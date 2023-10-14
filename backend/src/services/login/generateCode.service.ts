export default function generateCode(n: number) {
    const add = 1
    const max = Math.pow(10, n + add);

    const min = max / 10; 
    const number = Math.floor( Math.random() * (max - min + 1) ) + min;
    
    return ("" + number).substring(add);
}