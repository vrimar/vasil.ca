import React, { createRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Callout } from "./Callout";
import { Button } from "./Button";
import { azureUrl } from "@/api";

const recaptchaKey = "6LcEu68UAAAAAChABp_Lt2hhDFhp00pbBqc-3f7O";

export const ContactForm = () => {
  const recaptchaRef = createRef<ReCAPTCHA>();
  const [state, setState] = useState({
    error: false,
    success: "",
    isSubmitting: false,
    data: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState({ ...state, isSubmitting: true });
    recaptchaRef.current.execute();
  };

  const handleInputChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    e.persist();
    setState({
      ...state,
      data: {
        ...state.data,
        [target.name]: target.value,
      },
    });
  };

  const handleCaptchaChange = () => {
    setState({ ...state, isSubmitting: false });

    fetch(azureUrl, {
      method: "post",
      body: JSON.stringify(state.data),
    }).then((res) => {
      if (res.ok && res.status === 200) {
        setState({
          ...state,
          data: {
            name: "",
            email: "",
            message: "",
          },
          error: false,
          isSubmitting: false,
          success: "Success",
        });
      } else {
        setState({
          ...state,
          isSubmitting: false,
          error: true,
        });
      }
    });
  };

  const handleCalloutDismiss = () =>
    setState({
      ...state,
      error: false,
      success: "",
    });

  return (
    <form
      className="contact-form"
      onChange={handleInputChange}
      onSubmit={handleSubmit}
    >
      {state.success && (
        <Callout
          type="positive"
          onDismiss={handleCalloutDismiss}
        >
          Email successfully sent.
        </Callout>
      )}
      {state.error && (
        <Callout
          type="negative"
          onDismiss={handleCalloutDismiss}
        >
          An error has occurred.
        </Callout>
      )}
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          rows={7}
        ></textarea>
      </div>
      <ReCAPTCHA
        sitekey={recaptchaKey}
        ref={recaptchaRef}
        theme="dark"
        size="invisible"
        badge="bottomleft"
        onChange={handleCaptchaChange}
      />
      <Button isLoading={state.isSubmitting}>Submit</Button>
    </form>
  );
};
