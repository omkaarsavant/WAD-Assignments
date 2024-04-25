import React from 'react'

export default function index(props) {
    return (
        <div>
            <div className="border">This is the opened file! {props.id}
                <button key={props.id} className="float-right" onClick={() => props.closeFileFunction(props.id)}>Close</button>
                
            </div>
        </div>

    )
}
