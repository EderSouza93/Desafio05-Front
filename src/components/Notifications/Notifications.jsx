/* eslint-disable react/prop-types */
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const defaultOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
};

export const Toast = {
    success: ( message, options = {} ) => {
        toast.success( message, { ...defaultOptions, ...options } );
    },

    error: ( message, options = {} ) => {
        toast.error( message, { ...defaultOptions, ...options } );
    },

    info: ( message, options = {} ) => {
        toast.info( message, { ...defaultOptions, ...options } );
    },

    warning: ( message, options = {} ) => {
        toast.warn( message, { ...defaultOptions, ...options } );
    },

    default: ( message, options = {} ) => {
        toast( message, { ...defaultOptions, ...options } );
    },

    custom: ( content, options = {} ) => {
        toast( content, { ...defaultOptions, ...options } );
    },

    dismiss: () => {
        toast.dismiss();
    },

    dismissById: ( id ) => {
        toast.dismiss( id );
    }
};

export const ToastConfirm = {
    delete: ( message, onConfirm, onCancel = null ) => {
        const toastId = toast(
            <div style={{ padding: '10px' }}>
                <div style={{ marginBottom: '15px', fontWeight: 'bold' }}>
                    ⚠️ Confirmar exclusão
                </div>
                <div style={{ marginBottom: '15px', fontSize: '14px' }}>
                    {message}
                </div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button
                        onClick={() => {
                            toast.dismiss(toastId)
                            if (onCancel) onCancel()
                        }}
                        style={{
                            padding: '5px 15px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={() => {
                            toast.dismiss(toastId)
                            onConfirm()
                        }}
                        style={{
                            padding: '5px 15px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Excluir
                    </button>
                </div>
            </div>,
            {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                closeButton: false,
                style: {
                    backgroundColor: '#d1ecf1',
                    color: '#0c5460',
                    border: '1px solid #bee5eb'
                }
            }
        )
        return toastId
    },

    confirm: ( title, message, onConfirm, onCancel = null, confirmText = 'Confirmar', cancelText = 'Cancelar' ) => {
        const toastId = toast(
            <div style={{ padding: '10px' }}>
                <div style={{ marginBottom: '15px', fontWeight: 'bold' }}>
                    {title}
                </div>
                <div style={{ marginBottom: '15px', fontSize: '14px' }}>
                    {message}
                </div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button
                        onClick={() => {
                            toast.dismiss(toastId)
                            if (onCancel) onCancel()
                        }}
                        style={{
                            padding: '5px 15px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={() => {
                            toast.dismiss(toastId)
                            onConfirm()
                        }}
                        style={{
                            padding: '5px 15px',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>,
            {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                closeButton: false,
                style: {
                    backgroundColor: '#d1ecf1',
                    color: '#0c5460',
                    border: '1px solid #bee5eb'
                }
            }
        )
        return toastId
    }
};

export const ToastProvider = ( {
    position = 'top-right',
    autoClose = 3000,
    hideProgressBar = false,
    newestOnTop = false,
    closeOnClick = true,
    rtl = false,
    pauseOnFocusLoss = true,
    draggable = true,
    pauseOnHover = true,
    theme = "light",
    children
} ) => {
    return (
        <>
            { children }
            <ToastContainer
                position={ position }
                autoClose={ autoClose }
                hideProgressBar={ hideProgressBar }
                newestOnTop={ newestOnTop }
                closeOnClick={ closeOnClick }
                rtl={ rtl }
                pauseOnFocusLoss={ pauseOnFocusLoss }
                draggable={ draggable }
                pauseOnHover={ pauseOnHover }
                theme={ theme }
            />
        </>
    );
};