const showToast = (message,color) => {
        const toast = document.createElement('div');

        toast.innerText = message;
        Object.assign(toast.style, {
            position: 'fixed',
            top: '100px',
            right: '30px',
            backgroundColor:`${color}`,
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            zIndex: '9999',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'

        });
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    };
export default showToast;