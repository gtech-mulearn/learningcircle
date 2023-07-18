import "./CourseCard.css";

const CourseCard = ({ title, desc, duration, link }) => (
  <div className='container' >
    <div className='details'>
      <p className='title'>{title}</p>
      <p className='desc'>{desc}</p>
      <p className='duration'>{duration}</p>
    </div>
    <a href={link} className='cta'>
      Checkout Courses
    </a>
  </div>
);

export default CourseCard;
