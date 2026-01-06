import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import './input.css'


AOS.init({ duration: 1200, once: true });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
