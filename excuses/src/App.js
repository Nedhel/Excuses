import { Excuses } from "./Excuses";

function App() {
    return (
        <div className="h-screen">
            <div className="flex flex-col bg-slate-800 justify-around items-center h-1/3">
                <h1 className="text-3xl text-white font-bold">
                    Escribe el numero de Excusas que deseas solicitar
                </h1>
                <input type="number" className="rounded-md " />
                <input
                    type="button"
                    value="Solicitar"
                    className="rounded-md bg-green-300 p-3"
                />
            </div>
            <div className="h-2/3 bg-gray-900"></div>
        </div>
    );
}

export default App;
