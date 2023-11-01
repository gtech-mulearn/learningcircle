

function SheetAPI(spreadsheetId, sheetName, setData) {
    if (spreadsheetId === undefined || sheetName === undefined) {
        return undefined
    }

    if (spreadsheetId?.length >= 83) {
        try {

        }
        catch (err) {
            console.error(err)
        }
    }
}
export default SheetAPI