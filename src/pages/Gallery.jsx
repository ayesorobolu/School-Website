import React from "react";
import "../css/Gallery.css";
import img1 from "../assets/school1.jpg";
import img2 from "../assets/school2.jpg";
import img3 from "../assets/school3.jpg";

// Example grouped images (replace/add your real images as needed)
const galleryGroups = [
  {
    title: "Excursions",
    images: [img1, img2, img3, img2, img1, img3],
  },
  {
    title: "Valedictory",
    images: [img2, img3, img1],
  },
  {
    title: "Inter House Sports",
    images: [img3, img1, img2],
  },
  {
    title: "Cultural Day",
    images: [img1, img3, img2],
  },
];

const Gallery = () => (
  <div className="gallery-page">
    {/* Hero Section */}
    <section className="gallery-hero">
      <div className="gallery-hero-text">
        <h1>Gallery</h1>
        <div className='gallery-line'></div>
        <p>Explore moments of learning, fun, and discovery at Crystal Model School.</p>
      </div>
    </section>

    {/* Grouped Image Sections */}
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>Our Memories</h2>
        {galleryGroups.map((group, idx) => (
          <div key={idx} className="gallery-group">
            <h3 className="gallery-group-title">{group.title}</h3>
            <div className="gallery-grid">
              {group.images.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt={`${group.title}-${i + 1}`} className="gallery-img-bordered" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Gallery;
