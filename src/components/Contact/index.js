import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section id="contact" class="site-section section-form text-center">
    <div class="container">
        <h3>Contact</h3>
    <div class="row">
      <form id="contact-form" onSubmit={handleSubmit}>
      <div class="col-sm-6">
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} class="form-control mt-x-0" placeholder="Name" />
        </div>
        <div class="col-sm-6">
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} class="form-control mt-x-0" placeholder="Email" />
        </div>
        <div class="col-sm-6">
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} class="form-control mt-x-0" placeholder="Message" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button class="btn contact-btn" type="submit">Submit</button>
      </form>
    </div>
    </div>
    </section>
  );
}

export default ContactForm;