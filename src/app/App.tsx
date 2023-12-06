/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';

function App() {

    return (
        <div className="App h-screen">
            <div className="app-content">
                <Outlet></Outlet>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
    )
}

export default App
