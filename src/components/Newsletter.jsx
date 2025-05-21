import React from 'react'
import { MdOutlineHandshake } from "react-icons/md";
import Button from './reusable/Button'
import Input from './reusable/Input';

const Newsletter = () => {
  return (
    <div className='newsletterBox'>
        <h3 className="subheadline">📩 Zyskaj przewagę dzięki wiedzy IT!</h3>
        <p className="text">Dołącz do naszego newslettera i otrzymuj wartościowe wskazówki, analizy trendów IT oraz sprawdzone rozwiązania dla Twojej firmy. Zero spamu – tylko konkretne i przydatne informacje!</p>
        <form className="newsletterForm" name="newsletter" method="POST" netlify netlify-honeypot="bot-field">
            {/* Ukryte pole dla botów */}
            <input type="hidden" name="form-name" value="kontakt" />
            <p hidden>
                <label>Nie wypełniaj tego pola: <input name="bot-field" /></label>
            </p>
            <Input name={'email'} type={'email'} label={'Podaj adres email:'} />
            <Button icon={<MdOutlineHandshake/>} modifier='filled' type="submit">Dołącz do naszego newslettera!</Button>
        </form>
        <p className="small-print">🔒 Szanujemy Twoją prywatność – w każdej chwili możesz się wypisać.</p>
    </div>
  )
}

export default Newsletter