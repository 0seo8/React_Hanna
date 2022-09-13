# Redux-Toolkit

## createAsyncThunk

### 1. 생성

redux toolkit에서는 createAsyncThunk와 createSlice를 사용해 비동기 처리를 할 수 있습니다.

```jsx
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// First, create the thunk
//createAsyncThunk(type, callback, option)
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  },
)
```

createAsyncThunk는 결과에 상관없이 항상 이행된 프로미스를 반환하기 때문에 try,catch문을 사용하지 않아도 괜찮습니다.

### 2. 사용

비동기 처리를 할 때, 대표적으로 사용되는 3가지 상태가 있습니다.

- pending : 비동기 호출 이전
- fulfilled : 비동기 호출 성공
- rejected : 비동기 호출 실패

`createSlice`의 `extraReducres`를 통해 이런 비동기 상태를 쉽게 제어할 수 있습니다.
