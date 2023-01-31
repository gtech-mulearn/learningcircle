import styles from './subcourse.module.css'

import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

import Intro from "./Components/Intro"
import SubModules from "./Components/SubModules";
import CompletionTasks from "./Components/CompletionTasks";
import Help from "./Components/Help";

const Subcourse = (data) => {
    return (
        <>
            <Navbar />
            <div className={styles.main_container}>
                <div className={styles.first_view_container}>
                    <Intro
                        heading={data.data.intro_heading}
                        description={data.data.intro_description}
                        points={data.data.karma_points}
                        image={data.data.intro_image} />
                    <SubModules
                        heading={"Learning"}
                        highlighted_heading={"Materials"}
                        description={data.data.learning_description}
                        cards={data.data.learning_cards} />
                    <SubModules
                        heading="Course"
                        highlighted_heading="Assignment"
                        description={data.data.course_description}
                        cards={data.data.course_cards} />
                    <CompletionTasks
                        heading="Once"
                        highlighted_heading="Completed"
                        description1={data.data.completed_description}
                        description2={data.data.completion_requirments}
                        hashtags={data.data.completion_courses}
                        example={data.data.example} />
                    <Help />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Subcourse;
