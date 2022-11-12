import React from "react";




const App = () => {
    function change() {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        const root = document.getElementById("root");
        console.log(`rgb(${red},${green},${blue})`);

        return (
            root.style.backgroundColor = `rgb(${red},${green},${blue})`
        )
    }
    return (
        <>
            <button onClick={change}>Change Color</button>
        </>
    )
}

export default App;