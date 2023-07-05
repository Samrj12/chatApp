import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInWithGoogle } from './accountAPI'
const initialState = {
  user: null,
  status: 'idle',
  ereror: null,
}

export const signInWithGoogleAsync = createAsyncThunk(
    'account/signInWithGoogle', async (_, {rejectWithValue}) => {
        try{const data = await signInWithGoogle();
        return data.user;
        }
        catch(err)
        {
            console.log(err)
            rejectWithValue(err);
        }
    }
)

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(signInWithGoogleAsync.pending, (state) =>{
        state.status = 'loading';
        state.error = null;
    })
    .addCase(signInWithGoogleAsync.fulfilled, (state, action) =>{
        state.status = 'idle';
        state.user = action.payload;
    })
    .addCase(signInWithGoogleAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
    })
  }
})

// Action creators are generated for each case reducer function

export const selectUser = (state) => state.account.user;

export default accountSlice.reducer