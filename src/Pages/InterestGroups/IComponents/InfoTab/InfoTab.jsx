import { useState } from "react"
import TableStyles from '../../Dropdown.module.css'
const InfoTab = ({ courses, title }) => {
    const [open, setOpen] = useState(false)
    const [modal, setModal] = useState(false)
    const [link, setLink] = useState('')

    return (
        <div className={TableStyles.container}>
            <div className={`${TableStyles.tab} ${open ? '' : TableStyles.open}`}
                onClick={() => setOpen(!open)}
            >
                <div className={TableStyles.first} >
                    <ion-icon name={`chevron-${open ? 'up' : 'down'}-outline`} />
                    <p>{title}</p>
                </div>
                {courses.length} Courses
            </div >
            <div className={TableStyles.scrollContainer}>
                {open &&
                    <table className={TableStyles.tabler}>
                        <thead className={TableStyles.thead}>
                            <tr className={TableStyles.row}>
                                <th className={TableStyles.head}>Sl.no</th>
                                <th className={TableStyles.head}>
                                    <div className={TableStyles.box}>
                                        Name
                                    </div>
                                </th>
                                <th className={TableStyles.head}>Type</th>
                                <th className={TableStyles.head}>Hashtag</th>
                                <th className={TableStyles.head}>Karma</th>
                                <th className={TableStyles.head}>Link</th>
                            </tr>
                        </thead>
                        <tbody className={TableStyles.tbody}>
                            {courses.map((course, index) => (
                                <tr key={index} className={TableStyles.row}>
                                    <td className={TableStyles.block}>{index + 1}</td>
                                    <td className={TableStyles.block}>
                                        <div className={TableStyles.box}>
                                            {course.course_name}
                                        </div>
                                    </td>
                                    <td className={TableStyles.block}>

                                        {course.course_type === 'Video' ? 'Study Material' : course.course_type}


                                    </td>
                                    <td className={TableStyles.block}>{course.hashtag}</td>
                                    <td className={TableStyles.block}>{course.karma}</td>
                                    <td className={TableStyles.block}>
                                        {course.course_type === 'Video' &&
                                            course.link.includes('youtube') ?
                                            <p className={TableStyles.linked} onClick={() => {
                                                setLink(course.link)
                                                setModal(true)
                                            }}>Preview</p>
                                            : <a href={course.link}
                                                className={TableStyles.linked}
                                                target="_blank" rel="noreferrer">View</a>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }
            </div>
            {modal &&
                <div className={TableStyles.modal} onClick={() => setModal(false)}>
                    <iframe src={`https://www.youtube.com/embed/${link.split('=')[1].split('&')[0]}`}
                        className={TableStyles.iframe}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            }
        </div >
    )
}
export default InfoTab