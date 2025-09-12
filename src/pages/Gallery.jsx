import React, { useState } from "react";
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

const Gallery = () => {
  const [modal, setModal] = useState({
    open: false,
    groupIdx: 0,
    imgIdx: 0,
  });

  const openModal = (groupIdx, imgIdx) => {
    setModal({ open: true, groupIdx, imgIdx });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal({ ...modal, open: false });
    document.body.style.overflow = "";
  };

  const nextImg = () => {
    const group = galleryGroups[modal.groupIdx];
    setModal((prev) => ({
      ...prev,
      imgIdx: (prev.imgIdx + 1) % group.images.length,
    }));
  };

  const prevImg = () => {
    const group = galleryGroups[modal.groupIdx];
    setModal((prev) => ({
      ...prev,
      imgIdx: (prev.imgIdx - 1 + group.images.length) % group.images.length,
    }));
  };

  return (
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
          {galleryGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="gallery-group">
              <h3 className="gallery-group-title">{group.title}</h3>
              <div className="gallery-grid">
                {group.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="gallery-item">
                    <img
                      src={img}
                      alt={`${group.title}-${imgIdx + 1}`}
                      className="gallery-img-bordered"
                      onClick={() => openModal(groupIdx, imgIdx)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Fullscreen Viewer */}
      {modal.open && (
        <div className="gallery-modal-overlay">
          <div className="gallery-modal-content">
            <button className="gallery-modal-close" onClick={closeModal} title="Close">&times;</button>
            <button className="gallery-modal-prev" onClick={prevImg} title="Previous">&#8592;</button>
            <img
              src={galleryGroups[modal.groupIdx].images[modal.imgIdx]}
              alt="Gallery Full"
              className="gallery-modal-img"
            />
            <button className="gallery-modal-next" onClick={nextImg} title="Next">&#8594;</button>
            <div className="gallery-modal-caption">
              {galleryGroups[modal.groupIdx].title} ({modal.imgIdx + 1} of {galleryGroups[modal.groupIdx].images.length})
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
