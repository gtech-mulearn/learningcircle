import SheetAPI from "../../../Utils/SheetAPI"

function getPeopleData(igSummary, level, setPeople) {
    if (igSummary.sheet_link && level === undefined) {
      SheetAPI(igSummary.sheet_link, "People", setPeople)
    }
  }
  
function groupPeople(people, setMentors, setLeads) {
  const mentors = [], leads = []
  const groups = people.reduce((acc, item) => {
    if (item.type === 'Mentor')
      mentors.push(item)
    else
      leads.push(item)
    return acc
  }, { mentors, leads })
  setMentors(groups.mentors)
  setLeads(groups.leads)
} 

export default getPeopleData
export { groupPeople }