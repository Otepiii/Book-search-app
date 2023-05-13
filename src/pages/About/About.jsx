import React from 'react';
import "./About.css"
import aboutImg from "../../images/about-img.jpg"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Book Search</h2>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis commodi architecto recusandae deleniti. Ipsa similique animi voluptatem praesentium enim eveniet excepturi nulla labore itaque minus. Officia ullam recusandae, quis, esse molestias porro maiores, iusto perspiciatis non nemo architecto illum.</p>
            <p className='fs-17'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis ea, perferendis cumque adipisci voluptas doloribus tempora debitis autem! Explicabo odit, facere tempora velit unde voluptate. Fuga, ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About