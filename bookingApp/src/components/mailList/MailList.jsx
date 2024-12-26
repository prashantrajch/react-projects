import "./mailList.css";

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" name="mail" id="mail" placeholder="Your Email" />
        <button>Subscripe</button>
      </div>
    </div>
  );
}

export default MailList;
