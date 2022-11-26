import React from "react"
import "./popupMessage.css"

export default function PopMessage({message}) {
    return (
        <div className="popMessage">
            {message}
        </div>
    )
}