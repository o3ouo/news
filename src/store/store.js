import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../reducer/listSlice";

let store = configureStore({
  // 생성한 slice를 store의 reducer에 추가 
  reducer:{
    List : listReducer // List 부분은 마음대로 작명해도 되지만, slice의 name과 같이 맞춰주면 좋음
  }
});

export default store;