import "./ExampleMsg.css";

const ExampleMsg = ({
  firstLine,
  linkText = "My repository URL is",
  link,
  hashtag,
  img,
  imgMaxWidth = 35,
}) => (
  <div className='sample_container'>
    <p className='sample_header'>Example Message</p>
    <p className='sample_message'>
      {firstLine}.<br></br>
      {linkText} <a href={link}>{link}</a>
      <br></br>
      {hashtag}
    </p>
    <img
      className='sample_img'
      src={img}
      alt=''
      style={{ maxWidth: imgMaxWidth }}
    />
  </div>
);

export default ExampleMsg;
