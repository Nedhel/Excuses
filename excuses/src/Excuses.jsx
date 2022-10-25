import React from "react";

export const Excuses = ({excuse})=>{
    return(
        <div>
            <h1>Excusa # {excuse.id}</h1>
            <p>{excuse.excuse}</p>
            <h2>Se puede aplicar en {excuse.category}</h2>
        </div>
    )
}