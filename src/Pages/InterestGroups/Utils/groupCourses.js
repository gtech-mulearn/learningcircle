function groupCourses(courses, setGroupedCourses) {
    const transformedObject = courses.reduce((acc, item) => {
        const { dropdown_header } = item;
        if (!acc[dropdown_header]) {
            acc[dropdown_header] = [];
        }
        acc[dropdown_header].push(item);
        return acc;
    }, {});
    setGroupedCourses(transformedObject)
}
export default groupCourses