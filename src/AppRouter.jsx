import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import DocumentUploadPanel from './components/adminUploadDocument/DocumentUploadPanel';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/munothDocumentUploadPanel" element={<DocumentUploadPanel />} />
        </Routes>
    );
};

export default AppRouter;
