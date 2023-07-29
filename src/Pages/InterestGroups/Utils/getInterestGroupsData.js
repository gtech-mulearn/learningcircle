import SheetAPI from "../../../Utils/SheetAPI"
import { mainSheetLink } from "../IComponents/Info"

function getInterestGroupsData(summary, id, setSummary, setIgSummary, link = mainSheetLink, sheetName = "landing_pages") {
    if (!summary.length)
        SheetAPI(link, sheetName, setSummary)
    else if (id !== undefined) {
        setIgSummary(summary.find((ig) => ig.code === id))
    }
}

export default getInterestGroupsData


function handleData(mainIg, setMainIg, id, sub, setIgSummary, setSubSummary, setPeople) {
    if (!mainIg.length) {
        SheetAPI(mainSheetLink, 'landing_pages', setMainIg)
    }
    else if (sub === undefined) {
        const main = mainIg.find((ig) => ig.code === id)
        setIgSummary(main)
    }
    else {
        const subIg = mainIg.find((ig) => ig.code === sub)
        if (subIg.code)
            setIgSummary(subIg)
        if (subIg.sheetlink) {
            SheetAPI(subIg.sheetlink, 'summary', setSubSummary)
            SheetAPI(subIg.sheetlink, 'people', setPeople)
        }
    }
}

export { handleData }

