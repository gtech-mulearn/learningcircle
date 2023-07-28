const mainSheetLink = "https://docs.google.com/spreadsheets/d/1C7MyDDpRCIq3bnXi-bdWQrUdYMJ0_2cBkpoJ7POQA6A/edit#gid=0"
const parentIntro={
    title: 'Interest Groups',
    description: <>
    Listed below are the various domains that comes under this interest group. Feel free to select your domain and learn.
    </>
}
const mentorIntro = {
    title: 'Mentor Details',
    description: <>
    Have Doubts?Our Mentors are here to help you get all your
    doubts cleared and help you along your journey.Join in for
    our Office Hours and get all your doubts cleared.
    </>
}
const studentLeadIntro = {
    title: 'Interest Group Leads',
    description: <>
    Interest group leads manage the activities and events within
    interest groups and serve as a point of contact for students
    interested in getting involved.Students can connect with
    these leads to learn about opportunities within their
    interests.
    </>
}
const courseIntro = {
    title: 'Course Structure',
    description: <>
    Every subject or skill has some core set of things to be
    learned.Here are a few resources curated by us to
    understand them
    </>
}
const courseStructure = [
    {
    title: 'Beginner Level Courses',
    desc: 'Designed for those with little to no prior knowledge. Covers foundational concepts, terminology, and practical examples to build a strong understanding.',
    link: 'beginner'
    },
    {
    title: 'Intermediate Level Courses',
    desc: ' Intended for learners with some prior knowledge. Explores complex ideas, theories, and methodologies to bridge the gap between foundational and advanced concepts.',
    link: 'intermediate'
    },
    {
    title: 'Advanced Level Courses',
    desc: 'Targets experienced individuals. Focuses on specialized and research-oriented topics, aiming to develop expertise and proficiency within the subject area.',
    link: 'advanced'
    }
]
export {courseIntro, courseStructure, mentorIntro, studentLeadIntro, mainSheetLink,parentIntro}