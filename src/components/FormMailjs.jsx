import React from 'react';
import emailjs from 'emailjs-com';


export default function FormMailjs() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_i3az6er', 'template_k7lrcg5', e.target, 'user_fRxVHcWY8IYV6Riirw3P4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <h1>FORM MAILJS : </h1>
            <form className="contact-form" onSubmit={sendEmail}>
                <br></br>
                <label>Surname (nom)</label><br></br>
                <input type="text" name="surname" />
                <br></br>
                <label>Name (prénom)</label><br></br>
                <input type="text" name="name" />
                <br></br>
                <label>Company</label><br></br>
                <input type="text" name="company" />
                <br></br>
                <label>Phone</label><br></br>
                <input type="text" name="phone" />
                <br></br>
                <label>Email</label><br></br>
                <input type="email" name="email" />
                <br></br>
                <label>Message</label><br></br>
                <textarea name="message" />
                <br></br>
                <br></br>
                <input type="submit" value="Send" />
            </form>
            <br></br>
        </>
    );
}

// Template example : [EmailJS Test] New message from {{name}}

// Hey,

// Nouveau message de : {{name}} {{surname}}

// Entreprise : {{company}}

// Téléphone : {{phone}}

// Email : {{email}}

// Message :

// {{{message}}}

// Best wishes, EmailJS team