import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import {Container} from '@mui/material';
import CustomNavbar from "./components/CustomNavbar";
import "./App.css"


function App() {
    return (
            <Router>
                <CustomNavbar></CustomNavbar>

                <Container>
                    <Routes>
                        <Route path="/" element={<BlogList />} />
                        <Route path="/post/:slug" element={<BlogPost />} />
                    </Routes>
                </Container>
            </Router>
    );
}

export default App;
