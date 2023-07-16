import React from 'react'
import Profile from '../../assets/profilePhoto.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css'

const Home = () => {
    return (
        <section className='home section grid'>
            <img src={Profile} alt="" className="home__img" />

            <div className="home__content" >
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Akshay Shankariya.</span> Frontend Developer</h1>

                    <p className="home__description">
                        I'm an experienced frontend developer skilled in building modern web applications using various tech stacks.
                        Proficient in responsive design and cross-browser compatibility.
                    </p>
                    <Link to='/about' className='button'>More About Me
                        <span className='button__icon'><FaArrowRight /></span></Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home