import React, { useState } from "react";
import Todo from "./Todo";
import "./Todolist.css";

function Todolist({ todo, onUpdate, onDelete, onEdit }) {
    const [search, setSearch] = useState("");

    function onChangeSearch(e) {
        setSearch(e.target.value);
    }

    function getSearchResult() {
        return search === ""
            ? todo
            : todo.filter((item) => item.content.toLowerCase().includes(search));
    }


    return (
        <div className="Todolist">
            <h2>Todo list</h2>
            <input className="todo_searchbar"
                value={search}
                onChange={onChangeSearch}
                placeholder="할 일 검색어 입력" />

            <div>
                {getSearchResult().map((item) => (
                    <Todo
                        key={item.id}
                        {...item}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                        onEdit={onEdit}>
                    </Todo>
                ))}
            </div>
        </div>
    );
}

export default Todolist;