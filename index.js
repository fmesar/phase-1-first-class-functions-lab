// Code your solution in this file!
function returnFirstTwoDrivers(array){
    return array.slice(0, 2)
}
function returnLastTwoDrivers(array){
    return array.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function fareMultiplier (){
        return num * num
    }
}

// function fareDoubler(num){
//     return function fareMultiplier (){
//         return num**2
//     }

const fareDoubler = (callback) => {
    return callback *2
}

const fareTripler = (callback) => {
    return callback *3
}
const selectDifferentDrivers = (drivers, callback) =>{
    return callback(drivers)

}