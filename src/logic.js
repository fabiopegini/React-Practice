import { characters } from "./constants"
import { gfs } from "./constants"

export function getSourceBySelect(choosedChar) {
    if(choosedChar === "squall") return characters.squall
    if(choosedChar === "quistis") return characters.quistis
    if(choosedChar === "zell") return characters.zell
    if(choosedChar === "rinoa") return characters.rinoa
    if(choosedChar === "selphie") return characters.selphie
    if(choosedChar === "irvine") return characters.irvine

}

function getStatsAffected(nameFromButton) {
    let resultObj = []
    resultObj = gfs.filter((gf) => gf.name === nameFromButton)
    return resultObj[0].statsAffected

}

function statIsAffected(statForCheck,arrayOfStats) {
    return arrayOfStats.some((stat) => stat === statForCheck)

}

export function checkButton(button, stat) {
    let arrayOfStats = getStatsAffected(button.name)
    let result = statIsAffected(stat,arrayOfStats)
    let addOrSub = 0
    if(result) {
        if(button.active) addOrSub += 1
        if(!button.active) addOrSub -= 1
    } 

    return addOrSub
}