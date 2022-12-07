// code your solution here

function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun()
saturdayFun("bathe my dog")

const mondayWork = function(activity="go to the office"){
return (`This Monday, I will ${activity}.`);
}
mondayWork()
mondayWork('work from home')


function wrapAdjective(result="*"){
    //const innerFunction = function( item="special")
    return function(item="special") {
        return `You are ${result}${item}${result}!`
    }
}
wrapAdjective("")("a hard worker")
wrapAdjective("||")("a dedicated programmer")
