import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profile } from "../data/siteContent.js";

const emptyForm = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  emailAddress: "",
  message: "",
};

const receiptStorageKey = "contactSubmission";

/*
 * Checks every field and returns an object of error messages.
 * An empty object means the form is valid.
 * Rules: names are required, the phone number needs at least 10 digits,
 * the email must look like name@example.com, and the message needs
 * at least 8 characters.
 */
function validateContactForm(formValues) {
  const fieldErrors = {};
  const firstName = formValues.firstName.trim();
  const lastName = formValues.lastName.trim();
  const contactNumber = formValues.contactNumber.trim();
  const emailAddress = formValues.emailAddress.trim();
  const message = formValues.message.trim();
  // Count only the digits, so "437-249-1217" and "(437) 249 1217" both pass.
  const digitCount = contactNumber.replace(/\D/g, "").length;

  if (!firstName) {
    fieldErrors.firstName = "Enter a first name.";
  }
  if (!lastName) {
    fieldErrors.lastName = "Enter a last name.";
  }
  if (digitCount < 10) {
    fieldErrors.contactNumber =
      "Enter a contact number with at least 10 digits.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
    fieldErrors.emailAddress = "Enter an email address like name@example.com.";
  }
  if (message.length < 8) {
    fieldErrors.message = "Enter a message of at least a short sentence.";
  }

  return fieldErrors;
}

export default function Contact() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(emptyForm);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    document.title = "Contact Me | Jude Anandaraj";
  }, []);

  // One change handler for every field. It uses the input's name
  // to know which value in formValues to update.
  function updateField(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setFormValues((current) => ({ ...current, [fieldName]: fieldValue }));
  }

  /*
   * The form does not send email. It checks the fields, keeps the values
   * in this browser, and moves the user back to the home page with that data.
   */
  function submitContactForm(event) {
    event.preventDefault();
    const nextErrors = validateContactForm(formValues);
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const contactSubmission = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      contactNumber: formValues.contactNumber.trim(),
      emailAddress: formValues.emailAddress.trim(),
      message: formValues.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    sessionStorage.setItem(
      receiptStorageKey,
      JSON.stringify(contactSubmission),
    );
    navigate("/", { state: { contactSubmission } });
  }

  return (
    <div className="page">
      <header className="page-intro">
        <p className="kicker">Contact me</p>
        <h1>Contact me</h1>
        <p className="lede">
          Interested in working together? Send me a message to discuss
          projects, opportunities, or collaborations.
        </p>
      </header>

      <div className="contact-layout">
        <aside className="contact-panel">
          <h2>{profile.legalName}</h2>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={profile.emailHref}>{profile.email}</a>
              </dd>
            </div>
          </dl>
        </aside>

        <form className="contact-form" onSubmit={submitContactForm} noValidate>
          <div className="name-row">
            <div className="form-row">
              <label htmlFor="firstName">
                First name
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={formValues.firstName}
                  onChange={updateField}
                  aria-invalid={Boolean(fieldErrors.firstName)}
                  aria-describedby={
                    fieldErrors.firstName ? "firstName-error" : undefined
                  }
                />
              </label>
              {fieldErrors.firstName && (
                <p className="field-error" id="firstName-error">
                  {fieldErrors.firstName}
                </p>
              )}
            </div>
            <div className="form-row">
              <label htmlFor="lastName">
                Last name
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={formValues.lastName}
                  onChange={updateField}
                  aria-invalid={Boolean(fieldErrors.lastName)}
                  aria-describedby={
                    fieldErrors.lastName ? "lastName-error" : undefined
                  }
                />
              </label>
              {fieldErrors.lastName && (
                <p className="field-error" id="lastName-error">
                  {fieldErrors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="form-row">
            <label htmlFor="contactNumber">
              Contact number
              <input
                id="contactNumber"
                name="contactNumber"
                type="tel"
                autoComplete="tel"
                value={formValues.contactNumber}
                onChange={updateField}
                aria-invalid={Boolean(fieldErrors.contactNumber)}
                aria-describedby={
                  fieldErrors.contactNumber ? "contactNumber-error" : undefined
                }
              />
            </label>
            {fieldErrors.contactNumber && (
              <p className="field-error" id="contactNumber-error">
                {fieldErrors.contactNumber}
              </p>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="emailAddress">
              Email address
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                value={formValues.emailAddress}
                onChange={updateField}
                aria-invalid={Boolean(fieldErrors.emailAddress)}
                aria-describedby={
                  fieldErrors.emailAddress ? "emailAddress-error" : undefined
                }
              />
            </label>
            {fieldErrors.emailAddress && (
              <p className="field-error" id="emailAddress-error">
                {fieldErrors.emailAddress}
              </p>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formValues.message}
                onChange={updateField}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={
                  fieldErrors.message ? "message-error" : undefined
                }
              />
            </label>
            {fieldErrors.message && (
              <p className="field-error" id="message-error">
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button className="button" type="submit">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
