import * as React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const AZURE_URL = 'https://vasilca.azurewebsites.net/api/SendEmail';
const recaptchaKey = '6LcEu68UAAAAAChABp_Lt2hhDFhp00pbBqc-3f7O';

const recaptchaRef = React.createRef();

export class ContactForm extends React.Component {
  state = {
    error: undefined,
    success: undefined,
    data: {
      name: '',
      email: '',
      message: ''
    }
  };

  render() {
    return <form className="contact-form" onChange={this.onChange} onSubmit={this.onSubmit}>
      {this.state.success && <div>Email successfully sent.</div>}

      {this.state.error && <div>An error has occured.</div>}

      <div className="form-group">
        <label>Name</label>
        <input name="name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" required />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" rows="7"></textarea>
      </div>

      <ReCAPTCHA
        sitekey={recaptchaKey}
        ref={recaptchaRef}
        theme="dark"
        size="invisible"
        onChange={console.log}
      />,

      <button className="btn">Submit</button>
    </form>;
  }

  onChange = (e) => {
    e.persist();
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    recaptchaRef.current.execute();

    fetch(AZURE_URL, {
      method: 'post',
      body: JSON.stringify(this.state.data)
    })
      .then(this.handleResponse)
      .catch(console.log);
  }

  handleResponse = (res) => {
    if (res.ok) {
      this.setState({
        ...this.state,
        success: 'Success'
      });
    } else {
      this.setState({
        ...this.state,
        error: 'Error'
      });
    }
  }
}
