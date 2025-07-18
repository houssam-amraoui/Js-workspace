function typeNum(a) {
    let type;
    if (a>0) {
        type= 'the number is positive ';
    }else{
        type = 'the number is not positive';
    }
    return type;
}
console.log(typeNum(-5));