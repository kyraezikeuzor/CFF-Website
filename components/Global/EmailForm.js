'use client'
import styles from './EmailForm.module.css';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

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
      <form
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <input
          id="EMAIL"
          className={styles.input}
          autoFocus
          type="email"
          placeholder="Enter email address"
          value={fields.EMAIL}
          onChange={handleFieldChange}
        />
        <input
            id="FNAME"
            className={styles.input}
            autoFocus
            type="text"
            placeholder="Enter first name"
            value={fields.FNAME}
            onChange={handleFieldChange}
        />
        <input
            id="LNAME"
            className={styles.input}
            autoFocus
            type="text"
            placeholder="Enter last name"
            value={fields.LNAME}
            onChange={handleFieldChange}
        />
        <button className={styles["submit-btn"]}>Sign Up</button>
      </form>
      {loading && "Submitting..."}
      {error && message}
      {success && message}
    </div>
  );
}

export default EmailForm;