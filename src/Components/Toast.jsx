import { useRef, useState } from 'react';
import './Toast.css';

const Toast = () => {
    const [toasts, setToasts] = useState([]);
    const timeRef = useRef({});

    const showToast = (message, type) => {
        const id = new Date().getTime();
        const newToasts = [...toasts, {id, message, type}];
        setToasts(newToasts);
        timeRef.current[id] = setTimeout(() => closeToast(id), 5000);
    };

    const closeToast = (id)=> {
        clearTimeout(timeRef.current[id]);
        delete timeRef.current[id];
        setToasts((prevToast) => {
            const filterToast = prevToast.filter((toast) => {
                return toast.id !== id;
            });
            return filterToast;
        });
    };
  return (
    <>
    <div className="container">
        <div className="toast-container">
            {toasts.map((toast) => (
                <div className={`toast ${toast.type}`} key={toast.id}>
                    {toast.message}
                    <span onClick={()=> closeToast(toast.id)}>&times;</span>
                </div>))}
        </div>
        <div className="button-container">
            <button onClick={()=> showToast("success message", "success")} className='success'>Success</button>
            <button onClick={()=> showToast("warning message", "warning")} className='warning'>Warning</button>
            <button onClick={()=> showToast("info message", "info")} className='info'>Info</button>
            <button onClick={()=> showToast("danger message", "danger")} className='danger'>Danger</button>
        </div>
    </div>
    </>
  )
}

export default Toast
