import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

function Todo({ id, isDone, content, createdDate, onUpdate, onEdit, onDelete }) {

    const [isEdit, setEdit] = useState(false);
    const [editContent, seteditContent] = useState(content);

    function onChangeEdit(e) {
        seteditContent(e.target.value);
    }

    function handleEditSumit() {
        if (editContent !== content) {
            onEdit(id, editContent);
        }
        setEdit(false);

    }
    function onChangeCheckbox() {
        onUpdate(id);
    }
    function onClickDelete() {
        onDelete(id);
    }

    function onClickEdit() {
        if (isEdit) {
            handleEditSumit();
        } else {
            setEdit(true);
        }
    }
    return (
        <div className="Todo">
            <input onChange={onChangeCheckbox} className="todo_checkbox"
                checked={isDone} type="checkbox" />
            {isEdit ? (
                <input value={editContent}
                    onChange={onChangeEdit}
                    onBlur={handleEditSumit} //수정
                />) : (null)}

            <Link className="content" to={`/todo/${id}`}>{content}</Link>
            <div className="Day">{new Date().toDateString()}</div>

            <button className="Edit" onClick={onClickEdit}>{isEdit ? "수정완료" : "수정"} </button>

            <button className="del" onClick={onClickDelete}>삭제</button>
        </div>
    )
}

export default Todo;