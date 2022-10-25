import React from "react";

export const Excuses = ({excuse})=>{
    return(
        <div className="flex flex-col items-center border border-white border-4 p-2 mb-3">
            <h1 className="text-xl font-bold text-white">Excusa # {excuse.id}</h1>
            <p className="text-orange-600">{excuse.excuse}</p>
            <h2 className="text-white font-semibold">Se puede aplicar en {excuse.category}</h2>
        </div>
    )
}