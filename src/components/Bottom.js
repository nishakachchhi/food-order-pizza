function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-div">
        <div>
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
            et est, fugiat repudiandae neque illo delectus commodi magnam
            explicabo.
          </p>
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-icon-div">
            <i className="bi bi-facebook footer-icon"></i>
            <i className="bi bi-instagram footer-icon"></i>
            <i className="bi bi-linkedin footer-icon"></i>
            <i className="bi bi-twitter footer-icon"></i>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Delivery Time</h3>
          <p className="footer-text footer-bold">Sunday - Thursday</p>
          <p className="footer-text">10.00am - 11.00pm</p>
          <p className="footer-text footer-bold">Friday - Saturday</p>
          <p className="footer-text">Off Day</p>
        </div>
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">Phone : +911234567890</p>
          <p className="footer-text">Email : website@gmail.com</p>
          <p className="footer-text">
            Address : Demo A - 2 Puffin Street Puffinville India
          </p>
        </div>
        <div>
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">Subscribe to our Newsletter</p>
          <form className="input-form">
            <input
              type="email"
              placeholder="Enter your Email"
              className="input-email"
            />
            <input type="button" value="Sign Up" className="input-btn" />
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
