import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd';
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaInstagram
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_wch9vlc', 'template_puqgar3', form.current, 'nMT8tF0lE9gcGT6Tq')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                message.success('Email sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy !</h3>
                    <p className='contact__description'>
                        Feel free to get in touch with me. I am always open to discussing
                        new projects, creative ideas or opportunities to be part of your
                        visions.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info__title">Mail me</span>
                                <h4 className="info__desc">
                                    <a className='linkStyling' href="mailto:akshayshankariya@gmail.com">akshayshankariya@gmail.com</a>
                                </h4>
                            </div>
                        </div>

                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon" />

                            <div>
                                <span className="info__title">Call me</span>
                                <h4 className="info__desc">
                                    <a className='linkStyling' href="tel:+919881846437">+91 98 818 46 437</a>
                                </h4>
                            </div>

                        </div>

                    </div>

                    <div className="contact__socials">

                        <a href="https://www.linkedin.com/in/akshay-shankariya/" target='_blank' rel="noreferrer" className="contact__social-link">
                            <FaLinkedinIn />
                        </a>

                        <a href="https://github.com/aashank" target='_blank' rel="noreferrer" className="contact__social-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/akshay.shankariya.1" target='_blank' rel="noreferrer" className="contact__social-link">
                            <FaFacebookF />
                        </a>

                        <a href="https://www.instagram.com/akshayshankariya/" target='_blank' rel="noreferrer" className="contact__social-link">
                            <FaInstagram />
                        </a>
                    </div>

                </div>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" name="user_name" placeholder='Your Name' className='form__control' />
                        </div>

                        <div className="form__input-div">
                            <input type="email" name="user_email" placeholder='Your Email' className='form__control' />
                        </div>

                        <div className="form__input-div">
                            <input name="subject" type="text" placeholder='Your Subject' className='form__control' />
                        </div>

                    </div>

                    <div className="form__input-div">
                        <textarea name="message" placeholder='Your Message' className='form__control textarea'></textarea>
                    </div>

                    <button className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>

                </form>
            </div>
        </section>
    )
}

export default Contact