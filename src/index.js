import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import { FuncProvider } from './funcProvider';
import { Navigate } from 'react-router-dom';
import Dashboard from './layout/dashboard';
import { Routes , Route ,BrowserRouter as Router} from 'react-router-dom';
import { ControllerProvider } from './context';
import Authentication from './layout/authentication';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    //     <FuncProvider>
    //         <Dashboard/>
    //     </FuncProvider> 
    // </BrowserRouter>
    
        <ControllerProvider>
            <Router>
                <FuncProvider>
                    <Routes>
                        <Route path="/dashboard/*" element={<Dashboard />} />
                        <Route path="/auth/*" element={<Authentication />} />
                        <Route path="*" element={<Navigate to="/dashboard" replace />} />
                    </Routes>
                </FuncProvider>
            </Router>
        </ControllerProvider>
    
);
