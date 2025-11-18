import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return response.json();
    }
);

export const addUser = createAsyncThunk(
    "users/addUser",
    async(newUser) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method : 'POST',
            headers : { "Content-type" : "application/json"},
            body : JSON.stringify(newUser)
        });

        return response.json();
    }
);

const userSlice = createSlice({
    name: "users",
    initialState : {
        users : [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch users";
      })
      
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state,action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load data";
      });
      
  }
});

export default userSlice.reducer;