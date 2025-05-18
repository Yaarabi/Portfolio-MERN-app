

import { Navigate } from 'react-router-dom';

const ProtectProf = ({ children }) => {
    const token = localStorage.getItem("token");

    return token ? children : <Navigate to="/" />;
};

export default ProtectProf;
