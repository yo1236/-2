import React, { useState, useRef } from "react";


function NewTodo({ onCreate }) {
    const [content, setContent] = useState("");
    const testRef = useRef(null);

    function onChangeContent(e) {
        setContent(e.target.value);
    };

    function onSubmit() {
        if (content === "") {
            testRef.current.focus();
        } else {
            onCreate(content);
            setContent("");
        }
    };

    function onKeyPress(e) {
        if (e.key === "Enter") {
            onSubmit();
        }
    }
    return (
        <div className="Newtodo">
            <h2>Day Todo</h2>
            <div className="Inputtext">
                <input
                    ref={testRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyPress} //엔터 추가
                    placeholder="new Todo 작성" />

                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
};

export default NewTodo;