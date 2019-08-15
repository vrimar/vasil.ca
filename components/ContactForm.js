import * as React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Callout } from './Callout';
import { Button } from './Button';

const AZURE_URL = 'https://vasilca.azurewebsites.net/api/SendEmail';
const recaptchaKey = '6LcEu68UAAAAAChABp_Lt2hhDFhp00pbBqc-3f7O';

const recaptchaRef = React.createRef();

export class ContactForm extends React.Component {
  state = {
    error: false,
    success: false,
    isSubmitting: false,
    data: {
      name: '',
      email: '',
      message: ''
    }
  };

  render() {
    return <form className="contact-form" onChange={this.onInputChange} onSubmit={this.onSubmit}>
      {this.state.success && <Callout type="positive" onDismiss={this.dismissCallout}>Email successfully sent.</Callout>}

      {this.state.error && <Callout type="negative" onDismiss={this.dismissCallout}>An error has occurred.</Callout>}

      <div className="form-group">
        <label>Name</label>
        <input name="name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input name="email" required email />
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
        badge="bottomleft"
        onChange={this.onCaptchaChange}
      />,

      <Button isLoading={this.state.isSubmitting}>Submit</Button>
    </form>;
  }

  onInputChange = (e) => {
    e.persist();
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  }

  onCaptchaChange = () => {
    this.setState({ ...this.state, isSubmitting: false });

    fetch(AZURE_URL, {
      method: 'post',
      body: JSON.stringify(this.state.data)
    })
      .then(res => {
        if (res.ok && res.status === 200) {
          this.setState({
            ...this.state,
            data: {},
            error: undefined,
            isSubmitting: false,
            success: 'Success'
          });
        } else {
          this.setState({
            ...this.state,
            isSubmitting: false,
            error: true
          });
        }
      });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({ ...this.state, isSubmitting: true });
    recaptchaRef.current.execute();
  }

  dismissCallout = () => {
    this.setState({
      ...this.state,
      error: undefined,
      success: undefined
    })
  }
}
