import React from 'react';

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props;

    // Daftar warna yang akan digunakan untuk setiap todo
    const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

    // Menggunakan indeks untuk menentukan warna
    const color = colors[index % colors.length];
    return (
        <li className='todoItem' style={{ backgroundColor: color }}>
            {children} {/* Menampilkan isi todo yang dipass dari TodoList */}
            <div className='actionContainer'>
                <button className='butDelete' onClick={() => handleDeleteTodo(index)} aria-label="Delete todo">
                <i class="fa-solid fa-trash"></i> {/* Ikon untuk hapus */}
                </button>
                
                <button className='butEdit' onClick={() => handleEditTodo(index)} aria-label="Edit todo">
                    <i className="fa-regular fa-pen-to-square"></i> {/* Ikon untuk edit */}
                </button>
            </div>
        </li>
    );
}
