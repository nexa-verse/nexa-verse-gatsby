import React from 'react'
import Button from './reusable/Button'
import { LuSend } from "react-icons/lu";
import Input from './reusable/Input';

const ContactForm = () => {
  return (
    <section className='contact-form' id='form'>
        <h2 className='subheadline'>📬 czekamy na twoją wiadomość!</h2>
        <form className='form' name="kontakt" method="POST" netlify netlify-honeypot="bot-field">
          {/* Ukryte pole dla botów */}
          <input type="hidden" name="form-name" value="kontakt" />
          <p hidden>
            <label>Nie wypełniaj tego pola: <input name="bot-field" /></label>
          </p>
          <div className="grid">
            <fieldset className='fieldset'>
            <legend className='text-buttons'>Dane osobowe</legend>
            <Input name={'full name'} label={'Podaj swoje imię i nazwisko:'} />
            <Input name={'email'} type={'email'} label={'Podaj kontaktowy adres email:'} />
            <Input name={'phone'} type={'tel'} label={'Podaj numer telefonu:'} />
            </fieldset>
            <fieldset className='fieldset'>
                <legend className='text-buttons'>Dane firmowe</legend>
                <Input name={'company_name'} label={'Podaj nazwę firmy:'} />
                <Input name={'company_nip'} type={'number'} label={'Podaj numer NIP firmy:'} />
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