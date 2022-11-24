import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-black border-0">
                <img src="/assets/bgAz.jpg" className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">HAZ DE TU HOGAR Y TU VIDA UN PARAISO</h5>
                        <p className="card-text lead fw-bolder fs-2">
                            AQUI ENCONTRARAS TODO LO QUE NECESITAS
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;