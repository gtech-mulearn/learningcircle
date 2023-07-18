import SheetAPI from "../../../Utils/SheetAPI"
import { mainSheetLink } from "../IComponents/Info"

function getInterestGroupsData(summary, id, setSummary, setIgSummary) {
    if (!summary.length)
        SheetAPI(mainSheetLink, "Summary", setSummary)
    else if (id !== undefined) {
        setIgSummary(summary.find((ig) => ig.id === id))
    }
}
export default getInterestGroupsData