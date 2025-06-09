import React from 'react'
export default function GoogleMap() {
    return (
        <section id="location" className="map-container">
            <h2>Къде се намираме</h2>
            <iframe
                title="Lozenets Map"
                src="https://www.google.com/maps/embed?pb=!1m18!2m..."
                width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </section>
    )
}