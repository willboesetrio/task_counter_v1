import React from "react";

export default function ExistingTasks({values, addExisting, tasks, setTasks}) {

    return(
        <>
        <div>
        <button className="button-19" onClick={() => addExisting(1)}>{values[1]}</button>
        <button className="button-19" onClick={() => addExisting(2)}>{values[2]}</button>
        <button className="button-19" onClick={() => addExisting(3)}>{values[3]}</button>
        <button className="button-19" onClick={() => addExisting(4)}>{values[4]}</button>
        </div>
        <div>
        <button className="button-19" onClick={() => addExisting(5)}>{values[5]}</button>
        <button className="button-19" onClick={() => addExisting(6)}>{values[6]}</button>
        <button className="button-19" onClick={() => addExisting(7)}>{values[7]}</button>
        <button className="button-19" onClick={() => addExisting(8)}>{values[8]}</button>
        </div>
        </>
    )
}