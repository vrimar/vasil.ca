import React, { createRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Callout } from "./Callout";
import { Button } from "./Button";
import emailjs from "@emailjs/browser";

const captchaKey = "6LdGY-0pAAAAAALem9He7jmfWnAxNs3bgnkUEfL1";

export const ContactForm = () => {
  const captchaRef = createRef<ReCAPTCHA>();
  const formRef = createRef<HTMLFormElement>();
  const [state, setState] = useState({
    error: false,
    success: false,
    isSubmitting: false,
    data: {
      name: "Test",
      email: "test@hotmail.com",
      message: "test",
    },
  });

  const isSubmitDisabled =
    !state.data.name || !state.data.email || !state.data.message;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, isSubmitting: true });

    if (!formRef.current) return;

    try {
      const captchaToken = await captchaRef.current?.executeAsync();

      const templateParams = {
        from_name: state.data.name,
        from_email: state.data.email,
        message: state.data.message,
        "g-recaptcha-response": captchaToken,
      };

      emailjs
        .send("service_nq426vz", "template_12ua6wh", templateParams, {
          publicKey: "wpXlgSuDM1C9BDVjo",
        })
        .then(
          () => setState({ ...state, isSubmitting: false, success: true }),
          () => setState({ ...state, isSubmitting: false, error: true }),
        );
    } catch (e) {
      setState({ ...state, isSubmitting: false, error: true });
    }
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

  const handleCalloutDismiss = () =>
    setState({
      ...state,
      error: false,
      success: false,
    });

  return (
    <form
      ref={formRef}
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
          value={state.data.name}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          value={state.data.email}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          rows={7}
          value={state.data.message}
        />
      </div>
      <ReCAPTCHA
        sitekey={captchaKey}
        ref={captchaRef}
        theme="dark"
        size="invisible"
        badge="bottomleft"
      />
      <Button
        isLoading={state.isSubmitting}
        isDisabled={isSubmitDisabled}
      >
        Submit
      </Button>
    </form>
  );
};
