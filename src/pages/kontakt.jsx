import * as React from "react"

const ContactPage = () => {
  return (
    <main >
      <h1>Skontaktuj się z nami</h1>
      <form name="Contact Form" method="POST" netlify>
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Contact Page</title>
