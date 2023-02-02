export const ImageGalleryItem = ({ picture }) => {
  return (
    <>
      {picture.map(el => {
        return (
          <li key={el.id} className="gallary__item">
            <img src={el.webformatURL} alt="" />
            {/* <a href={el.largeImageURL} className="gallaty__link"></a> */}
          </li>
        );
      })}
    </>
  );
};
