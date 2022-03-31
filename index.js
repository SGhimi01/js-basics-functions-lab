// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks-42);
}
console.log(distanceFromHqInBlocks(50));


function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)*264;
}

function distanceTravelledInFeet(a,b) {
    return Math.abs(a-b)*264;
}

function calculatesFarePrice(a,b) {
    let x = distanceTravelledInFeet(a,b);
    if (x <=400){ 
        return 0
    } else if (x > 400 && x <= 2000) {
        return (x-400)*0.02
    } else if (x > 2000 && x < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}