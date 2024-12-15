import React, { useState, useRef } from "react";
import "./DiaryEditor.css";

function DiaryEditor({ onWrite = () => { } }) { //내용과 에러 관리
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const textareaRef = useRef(null);

    function textline() {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollheight}px`;
    }

    function onChangeContent(e) {
        const value = e.target.value;
        setContent(value);

        textline();

        setError(value.length > 0 && value.length < 5);
    }
    function onSubmit() {
        if (content === "" || content.length < 5) {
            setError(true);
            textareaRef.current.focus();
            return;
        }

        if (typeof onWrite === 'function') {
            onWrite(content);
        }
        else {
            console.error('onWrite is not a funtion');

            return;
        }

        setContent("");
        setError(false);

    }
    return (
        <div className="DiaryEditor">
            <h2>속마음 털어놓기💭</h2>
            <form onSubmit={onSubmit}>
                <div className="editor">
                    <textarea ref={textareaRef}
                        value={content}
                        onChange={onChangeContent}
                        placeholder="있었던 일을 되돌아보면서..."
                        className="diarytextareasize"
                        maxLength={500} />


                </div>

                <div className="btn_text">
                    {error && (
                        <div className="error_message">
                            {content.length === 0
                                ? "작성해주세요." : "최소 5자 이상 작성해주세요."} </div>
                    )
                    }
                    <div className="count_text">
                        <button onClick={onSubmit}>등록</button>
                        <div className="count">
                            <span>{content.length} / 500자 </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
};

export default DiaryEditor;