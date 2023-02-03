export const ImageGalleryItem = ({ picture, toShowModal }) => {
  return (
    <>
      {picture.map(el => {
        return (
          <li key={el.id} className="gallary__item">
            <img
              src={el.webformatURL}
              alt=""
              onClick={() => toShowModal(el.largeImageURL, el.tags)}
            />
          </li>
        );
      })}
    </>
  );
};
