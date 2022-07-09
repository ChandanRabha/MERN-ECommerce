import { Container } from "react-bootstrap";
import React from "react";

import Footer from "./components/common/footer/footer";
import Header from "./components/common/header/header";

import './App.css'


const App = () => (
    <main>
        <Header />
        <main className="py-3">
            <Container>
                <h1>Welcome to MERN Ecommerce</h1>
            </Container>
        </main>
        <Footer />
    </main>
)

export default App
