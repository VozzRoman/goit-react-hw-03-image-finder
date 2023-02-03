import css from '../Modal/ModalStyle.module.css';

export const Modal = ({ img }) => {
  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
