import React from 'react'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import GoogleMap from '../components/GoogleMap'

const images = [
    '/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg'
]

export default function Home() {
    return (
        <div className="home">
            <Gallery images={images} />
            <ContactForm />
            <GoogleMap />
        </div>
    )
}