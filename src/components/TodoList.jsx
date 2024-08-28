import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList(props) {
    const { todos, handleEditTodo, handleDeleteTodo } = props;

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex} // Menetapkan key unik untuk setiap item dalam list
                        index={todoIndex} // Mengirimkan index sebagai prop ke TodoCard
                        handleEditTodo={handleEditTodo} // Mengirimkan fungsi edit sebagai prop
                        handleDeleteTodo={handleDeleteTodo} // Mengirimkan fungsi hapus sebagai prop
                    >
                        <p className='boxH1'>{todo}</p> {/* Menampilkan isi todo dalam tag <p> */}
                    </TodoCard>
                );
            })}
        </ul>
    );
}
