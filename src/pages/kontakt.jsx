import * as React from "react"

const ContactPage = () => {
  return (
    <main >
      <h1>Skontaktuj się z nami</h1>
      <form name="kontakt" method="POST" action="/sukces" netlify>
        <input type="hidden" name="form-name" value="kontakt" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {/* Hidden static version for Netlify detection */}
      <form name="kontakt" netlify hidden>
        <input type="text" name="email" />
        <textarea name="message"></textarea>
      </form>
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Contact Page</title>
