import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], filter: "all" },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date().getTime(),
        name: action.payload.task,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleTask: (state, action) => {
      const taskId = action.payload.id;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, setFilter, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
