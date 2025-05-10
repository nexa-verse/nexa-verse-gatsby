import * as React from "react"

const ContactPage = () => {
  return (
    <main >
      <h1>Skontaktuj się z nami</h1>
      <form name="kontakt" method="POST" netlify>
        <input type="hidden" name="kontakt" value="kontakt" />
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {/* Fallback formularz tylko po to, by Netlify go wykrył */}
      <div
        hidden
        dangerouslySetInnerHTML={{
          __html: `
          <form name="kontakt" netlify>
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
        `,
        }}
      />
    </main>
  )
}

export default ContactPage

export const Head = () => <title>Contact Page</title>
