import React, { useState } from 'react'
import './Gallery.css'
export default function Gallery({ images }) {
    const [lightbox, setLightbox] = useState(null);
    return (
        <>
            <div className="gallery">
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`Къща ${i + 1}`} onClick={() => setLightbox(i)} />
                ))}
            </div>
            {lightbox !== null && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <img src={images[lightbox]} alt="" />
                </div>
            )}
        </>
    )
}