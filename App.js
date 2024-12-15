import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Diaryheader from "./Diaryheader";
import DiaryEditor from "./DiaryEditor";
import Playlist from "./Playlist";
import TodoHeader from "./Todo/TodoHeader";
import "./List.css";
import NewTodo from "./Todo/NewTodo";
import Todolist from "./Todo/Todolist";
import News from "./News";

function App() {
    const [todo, setTodo] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const idRef = useRef(todo.length > 0 ? Math.max(...todo.map(t => t.id)) + 1 : 0);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo]);

    function onCreate(content) {
        const newTodoItem = {
            id: idRef.current,
            isDone: false,
            content,
            createDate: new Date().getTime(),
        };
        setTodo([newTodoItem, ...todo]);
        idRef.current += 1;
    }

    function onUpdate(targetId) {
        setTodo(todo.map((item) =>
            item.id === targetId
                ? { ...item, isDone: !item.isDone }
                : item)
        );
    }

    function onDelete(targetId) {
        setTodo(todo.filter((item) => item.id !== targetId));
    }

    function onEdit(targetId, newContent) {
        setTodo(
            todo.map((item) => item.id === targetId ? {
                ...item, content: newContent
            } : item)
        )
    }
    return (
        <div className="all">

            <div className="list">

                <Playlist />
                <News />
            </div>

            <div className="App">
                <Diaryheader></Diaryheader>
                <DiaryEditor />
            </div>

            <div className="Todo_main">
                <TodoHeader />
                <NewTodo onCreate={onCreate} />

                <Todolist todo={todo}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    onEdit={onEdit} />

            </div>
        </div>
    );
};
export default App;
