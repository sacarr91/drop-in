import '../../utils/modal.css';

const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;