import React from 'react'
import { images } from '../constants'
import { Features, Optimize, Footer } from '../components'

export const About = () => {
  return (
    <div className='about'>
        <div className="upper__about">
        <h1>Trusted Dispatch Experts</h1>
        </div>
        <div className="middle__about">
            <h1>With roots in Delaware, Global Dispatch LLC has been a leading name in the truck dispatching industry since 2021.</h1>
            <div className="middle__paragraphs">
            <p className="left-p">Backed by years of experience and a team of skilled professionals, we bring a wealth of expertise to the table in handling dispatch services and load management for trucking operations.</p>
            <p className="right-p">Having served a diverse range of clients including trucking companies, owner operators, and individual truck drivers, we pride ourselves on delivering customized logistics solutions tailored to meet specific business needs.</p>
            </div>
        </div>
        <div className="lower__about">
        <div className="about__image">
            <img src={images.contactMain} alt="About Image" />
        </div>
        <div className="about__features">
        <Features />
        </div>
        </div>
        <Optimize />
        <Footer />
    </div>
  )
}
