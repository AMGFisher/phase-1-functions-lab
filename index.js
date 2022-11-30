const hq = 42


function distanceFromHqInBlocks(userStreet) {
return Math.abs(userStreet - 42)
}



function distanceFromHqInFeet(userStreet) {
distanceFromHqInBlocks(userStreet);
return distanceFromHqInBlocks(userStreet) * 264;
}



function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}



function calculatesFarePrice(start, destination) {
    let distance = Math.abs((start - destination) * 264)
    if (distance <= 400) {
        return 0
    }
    if (distance > 2500) {
        return "cannot travel that far"
    }
    if (distance > 2000) {
        return 25
    }
    else if (distance > 400) {
        return (distance - 400) * .02
    }

}