import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail.png'
import phone_icon from '../../assets/phone.png'
import linkedin_icon from '../../assets/linkedin.png'
import twitter_icon from '../../assets/twitter.png'
import instagram_icon from '../../assets/instagram.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e2b63630-57f0-41c1-9917-e9e14f434a0d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            console.log("Success", data);
            setResult(data.message);
            event.target.reset();
        }else {
        console.log("Error", data);
    setResult(data.message);
}
    };

return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /> </h3>
            <p>Have a question or project idea?
                Reach out to us via email, phone, or social media—we’ll get back to you quickly!
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />1234567899</li>
                <li><img src={linkedin_icon} /> @Aesthera</li>
                <li><img src={twitter_icon} /> @AestheraOfficial</li>
                <li><img src={instagram_icon} /> @Aesthera</li>

            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>

                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter Your name'
                    required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number'
                    required />
                <label>Write Your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter Your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
)
}

export default Contact
