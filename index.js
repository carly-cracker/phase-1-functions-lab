function distanceFromHqInBlocks(start){
    if (start> 42){
        return start - 42
    }
    else if( start< 42){
        return 42 - start
    }
}

function distanceFromHqInFeet(start){
    if (start > 42){
        return ((start - 42 )* 264)
    }
    else if (start < 42){
        return ((42 - start) * 264)
    }
}

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return((destination - start) * 264)
    }
    else if (start > destination){
        return((start - destination) * 264)
    }
}

function calculatesFarePrice(start, destination){
    let dist =  Math.abs (start - destination)
    if ((dist *264) <= 400){
        return 0
    }
    else if (((dist *264) > 400) && ((dist *264) < 2000)){
        return (((dist * 264)-400) * 0.02)
    }
    else if (((dist * 264) > 2000) && ((dist*264)<2500)){
        return 25
    }
    else{ 
    return 'cannot travel that far'
    }
}