import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppCanvas } from "./AppCanvas";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <AppCanvas />
        </>
    );
}

export default App;
