import styles from "../../InterestGroup.module.css"
import fvimg from '../../assets/fvimg.png'
const InterestGroupBoard = ({ children, igSummary, subSheetData }) => {
    return (<div className={styles.main_container}>
        <div className={styles.first_view_container}>
            <div className={styles.first_view}>
                <div className={styles.fv_texts}>
                    {igSummary &&
                        <>
                            <p className={styles.fv_heading}>
                                {igSummary?.heading}
                            </p>
                            <p className={styles.fv_content}>
                                {igSummary?.desc}
                            </p>
                            {subSheetData && subSheetData?.office_hour && <p className={styles.officehrs}>
                                <span> Office Hours: </span> {subSheetData?.office_hour + ' @ ' + subSheetData?.offlice_place}
                            </p>}
                        </>
                    }
                </div>
                <div className={styles.fv_image}>
                    <img
                        src={fvimg}
                        alt="Group Learning pic"
                        className={styles.fv_img}
                    />
                </div>
            </div>
        </div>
        {children}
    </div>)
}
export default InterestGroupBoard