import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
    'todos/fetchById',
    // Declare the type your function argument here:
    async (userId: number) => {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      // Inferred return type: Promise<MyData>
      return (await response.json()) as any;
    },
);


interface TodosSliceState {
  entities: any[];
  error: any
}

const initialState: TodosSliceState = {
  entities: [],
  error: null,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<string>) => {
    //   state.todos = [
    //     ...state.todos,
    //     {
    //       id: state.todos.length,
    //       text: action.payload,
    //       done: false,
    //     },
    //   ];
    // },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.entities = state.entities.filter(({ id }) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action: PayloadAction<any>) => {
      state.entities= [action.payload.data];
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.error= action.error;
    });
  },
});

export const { removeTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
