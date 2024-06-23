import { create, StateCreator  } from "zustand";

interface TodoState {
    todos: object[];
    addTodo: (todo: object) => void
}


const initialState: TodoState = {
    todos: [],
    addTodo: (todo) => {}
}

const useTodoStore = create<TodoState>((set) => ({
    ...initialState,
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]}))
}))


export default useTodoStore