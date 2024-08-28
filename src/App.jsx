import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Message from './components/Message';

function App() {
  // State untuk menyimpan daftar todo
  const [todos, setTodos] = useState([]);
  // State untuk menyimpan nilai input todo
  const [todoValue, setTodoValue] = useState('');

  // Fungsi untuk menyimpan todos ke localStorage
  function persistData() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Fungsi untuk menambahkan todo baru
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);  // Memperbarui state todos
    persistData();          // Menyimpan todos ke localStorage
  }

  // Fungsi untuk menghapus todo berdasarkan index
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);  // Memperbarui state todos
    persistData();          // Menyimpan todos ke localStorage
  }

  // Fungsi untuk mengedit todo berdasarkan index
  function handleEditTodo(index) {
    const valueTobeEdited = todos[index];
    setTodoValue(valueTobeEdited);  // Mengatur nilai yang akan diedit ke state
    handleDeleteTodo(index);        // Menghapus todo yang akan diedit
  }

  // Mengambil data todos dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <>
      <Message/>
      {/* Komponen untuk input todo */}
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos}
      />
      {/* Komponen untuk menampilkan daftar todo */}
      <TodoList 
        handleEditTodo={handleEditTodo} 
        handleDeleteTodo={handleDeleteTodo} 
        todos={todos}
      />
    </>
  );
}

export default App;
