import React, { useState, useEffect } from "react";
import { Excuses } from "./Excuses";

function App() {
    const [excuses, setExcuses] = useState();
    const [input, setInput] = useState(0);
    const [numberExcuses, setNumberExcuses] = useState(0);
    useEffect(() => {
        fetch(`https://excuser.herokuapp.com/v1/excuse/${input}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setExcuses(json);
            })
            .catch((error) => console.log(error));
    }, [numberExcuses]);

    function handleOnChangeInput(e) {
        setInput(e.target.value);
    }

    function handleClick() {
        setNumberExcuses(input);
    }

    return (
        <div className="h-screen">
            <div className="flex flex-col bg-slate-800 justify-around items-center h-1/3">
                <h1 className="text-3xl text-white font-bold">
                    Escribe el numero de Excusas que deseas solicitar
                </h1>
                <input
                    type="number"
                    className="rounded-md"
                    value={input}
                    onChange={handleOnChangeInput}
                />
                <input
                    type="button"
                    value="Solicitar"
                    className="rounded-md bg-green-300 p-3"
                    onClick={handleClick}
                />
            </div>
            <div className="h-2/3 bg-gray-900">
                {numberExcuses > 0 &&
                    excuses.map((excuse) => {
                        return <Excuses key={excuse.id} excuse={excuse} />;
                    })}
            </div>
        </div>
    );
}

export default App;
