import { useState } from "react";

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props;

    // Fungsi untuk menangani perubahan pada input
    function handleChange(event) {
        setTodoValue(event.target.value);
    }

    // Fungsi untuk menangani klik tombol "Add"
    function handleClick() {
        if (todoValue.trim() === '') {
            return; // Tidak menambahkan todo jika input kosong
        }
        handleAddTodos(todoValue); // Menambahkan todo
        setTodoValue(''); // Mengosongkan input setelah menambahkan
    }

    return (
        <header>
            <div className="BoxInput">
                <input
                    className="inputS"
                    type="text"
                    placeholder="Ketikkan Kegiatan"
                    value={todoValue} // Menetapkan nilai input ke todoValue
                    onChange={handleChange} // Menangani perubahan input
                />
                <button className="ButtonS" onClick={handleClick}>Add</button> {/* Menambahkan todo */}
            </div>
        </header>
    );
}
