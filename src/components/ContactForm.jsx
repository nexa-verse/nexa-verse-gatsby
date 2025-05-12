import React from 'react'
import Button from './reusable/Button'
import { LuSend } from "react-icons/lu";

const ContactForm = () => {
  return (
    <section className='contact-form'>
        <h2 className='subheadline'>📬 czekamy na twoją wiadomość!</h2>
        <form className='form' name="kontakt" method="POST" netlify netlify-honeypot="bot-field">
          {/* Ukryte pole dla botów */}
          <input type="hidden" name="form-name" value="kontakt" />
          <p hidden>
            <label>Nie wypełniaj tego pola: <input name="bot-field" /></label>
          </p>
          <div className="grid">
            <fieldset>
            <legend className='text-buttons'>Dane osobowe</legend>
            <div className='field'>
                <label htmlFor="full name">Podaj swoje imię i nazwisko:</label>
                <input type='text' name="full name"/>
            </div>
            <div className='field'>
                <label htmlFor="email">Podaj kontaktowy adres email:</label>
                <input type="email" name="email" />
            </div>
            <div className='field'>
                <label htmlFor="phone">Podaj numer telefonu:</label>
                <input type="tel" name="phone" />
            </div>
            </fieldset>
            <fieldset>
                <legend className='text-buttons'>Dane firmowe</legend>
                <div className='field'>
                    <label htmlFor="company_name">Podaj nazwę firmy:</label>
                    <input type='text' name="company_name"/>
                </div>
                <div className='field'>
                    <label htmlFor="company_nip">Podaj numer NIP firmy:</label>
                    <input type="number" name="company_nip" />
                </div>
                <div className='branch_field'>
                    <label htmlFor="company_branch">Wybierz branżę:</label>
                    <fieldset className='radio-buttons'>
                        <div>
                            <input type="radio" name="company_branch" id="construction" value="construction"/>
                            <label htmlFor="construction">Budownictwo</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="transport" value="transport"/>
                            <label htmlFor="transport">Transport/Logistyka</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="it" value="it"/>
                            <label htmlFor="it">IT i technologia</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="trade" value="trade"/>
                            <label htmlFor="trade">Handel</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="professional_services" value="professional_services"/>
                            <label htmlFor="professional_services">Usługi profesjonalne</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="energetics" value="energetics"/>
                            <label htmlFor="energetics">Energetyka</label>
                        </div><div>
                            <input type="radio" name="company_branch" id="industry" value="industry"/>
                            <label htmlFor="industry">Przemysł/produkcja</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="education" value="education"/>
                            <label htmlFor="education">Edukacja</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="healthcare" value="healthcare"/>
                            <label htmlFor="healthcare">Opieka zdrowotna</label>
                        </div>
                        <div>
                            <input type="radio" name="company_branch" id="other" value="other"/>
                            <label htmlFor="other">Inne</label>
                        </div>
                    </fieldset>
                </div>
            </fieldset>
            <div className="message">
                <label htmlFor="message">Podaj treść wiadomości:</label>
                <textarea name="message" id="message" rows="10" placeholder=" "></textarea>
            </div>
          </div>          
          <Button icon={<LuSend/>} modifier='filled' type="submit" color='accent'>Wyślij wiadomość!</Button>
        </form>
    </section>
  )
}

export default ContactForm