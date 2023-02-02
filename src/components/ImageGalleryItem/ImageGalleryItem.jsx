

export const ImageGalleryItem = ({picture}) => {
  return (
    <>
      {picture.map(el => {
        return (
          <li key={el.id} className="gallary__item">
            <img src={el.userImageURL} alt="" />
            {/* <a href={el.userImageURL} className="gallaty__link"></a> */}
          </li>
        )
      })}
    
    </>
)
}
