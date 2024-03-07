function prima(n) {
    if(n < 2) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("Bilangan prima dari 1 sampai 1000 :")
for(let bil = 1; bil <= 1000; bil++) {
    if(prima(bil)) {
        console.log(bil)
    }
}
