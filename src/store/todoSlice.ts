import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TodoType {
    id: string
    task:string,
    date:string,
    important: boolean,
    reminder: boolean ,
    favorite: boolean ,
    completed: boolean
}

export type TodoState = TodoType[]

const initialState:TodoState = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    AddTodo: (state ,action: PayloadAction<TodoType>) => {
    state.push(action.payload)
    console.log(state)
    },

    DeleteTodo: (state , action:PayloadAction<string>)=>{
const index = state.findIndex((item)=> item.id == action.payload)
state.splice(index ,1)
    },

    EditTodo: (state , action:PayloadAction<TodoType>)=>{
 state.forEach((item,i)=>{
    if(item.id !== action.payload.id) return
   state[i] = action.payload
})
 }

    
  },
})

export const {AddTodo,DeleteTodo ,EditTodo } = todoSlice.actions

export default todoSlice.reducer