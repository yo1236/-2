import React from "react";
function TodoHeader() {
    return (
        <div className="TodoHeader">
            <h1>{new Date().toDateString()}</h1>

        </div>
    )
};
export default TodoHeader;