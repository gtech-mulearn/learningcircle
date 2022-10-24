import "./ExampleMsg.css";

const ExampleMsg = ({ course, link, hashtag }) => (
  <div className='sample_container'>
    <p className='sample_header'>Example Message</p>
    <p className='sample_message'>
      Hi! I've completed the {course}.<br></br>
      My repository URL is <a href={link}>{link}</a>
      <br></br>
      {hashtag}
    </p>
  </div>
);

export default ExampleMsg;
