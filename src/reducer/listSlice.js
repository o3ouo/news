import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// 비동기 액션 생성 (API 요청)
export const fetchData = createAsyncThunk('data/fetchData', async (dataId) => {
  const response = await fetch(`https://newsdata.io/api/1/latest?country=kr${dataId}&apikey=pub_64517ea65789adb43dfbc3d97dfab94e83340`);
  return response.json();
});

const listSlice = createSlice({
  name : "List",
  initialState : {// 초기값 지정
    list: [],
    status: "",
    error: null,
    categories: [
      { name: "All" },
      { name: "Top"},
      { name: "Sports"},
      { name: "Technology"},
      { name: "Business"},
      { name: "Science"},
      { name: "EnterTainment"},
      { name: "Health"},
      { name: "World"},
      { name: "Politics"},
      { name: "Environment"},
    ]
  },
  reducers: { // 액션 타입
    getList(state, action) {
      state.list = action.payload.data;
      console.log(state.list);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading'; // API 요청 중 (로딩 상태)
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded'; // API 요청 성공
        state.list = action.payload; // 받아온 데이터 저장
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed'; // API 요청 실패
        state.error = action.error.message;
      });
  },
});

// dispatch 할 때 액션을 전달하여 상태를 어떻게 변화시킬 지를 결정
export const {getList} = listSlice.actions;
export default listSlice.reducer;