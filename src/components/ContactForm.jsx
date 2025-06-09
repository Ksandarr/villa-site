import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then(() => setStatus('Изпратено!'))
            .catch(() => setStatus('Грешка, опитайте пак'))
    }

    return (
        <section id="contact" className="contact-form">
            <h2>Свържете се с нас</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Име" required />
                <input type="email" name="email" placeholder="Имейл" required />
                <textarea name="message" placeholder="Вашето съобщение..." required />
                <button type="submit">Изпрати</button>
            </form>
            {status && <p className="status">{status}</p>}
        </section>
    )
}