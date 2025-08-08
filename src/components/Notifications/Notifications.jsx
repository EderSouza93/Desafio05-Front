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

    dismissById: ( id ) => {
        toast.dismiss( id );
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