type CaseStudyGalleryProps = {
  images: string[];
  title: string;
};

const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({ images, title }) => {
  if (images.length === 0) return null;

  return (
    <div className="case-study-gallery">
      {images.map((image, index) => (
        <div key={image} className="case-study-gallery__item">
          <img
            src={image}
            alt={`${title} — image ${index + 1}`}
            className="case-study-gallery__image"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default CaseStudyGallery;