'use client'
import styles from './EmailForm.module.css';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { Button } from './Button';

function EmailForm() {
    const url = "https://computefutures.us8.list-manage.com/subscribe/post?u=65c2aba71bc6d41953c14cc83&amp;id=5a1e70d2cb&amp;f_id=007105e0f0";
  // The url looks like the url below:
  // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
  const {
      loading,
      error,
      success,
      message,
      handleSubmit
    } = useMailChimpForm(url);
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
  });

  return (
    <div className={styles["email-form-container"]}>
      <form className="flex-column"
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <p>Subscribe to our newsletter <br/> 
        Learn about our latest events, resources,
programs, and more!</p>
        <input
            id="FNAME"
            autoFocus
            type="text"
            placeholder="First name"
            value={fields.FNAME}
            onChange={handleFieldChange}
        />
        <input
            id="LNAME"
            autoFocus
            type="text"
            placeholder="Last name"
            value={fields.LNAME}
            onChange={handleFieldChange}
        />
        <input
          id="EMAIL"
          autoFocus
          type="email"
          placeholder="Email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
        />
        <button>Submit</button>
        
      </form>
      {loading && "Submitting..."}
      {error && message}
      {success && message}
    </div>
  );
}

export default EmailForm;