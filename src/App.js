import './css/base.css';
import './css/App.css';
import './css/font.css';
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Categories from './component/Categories';
import NewsList from './component/NewsList';
import Header from './component/Header';

function App() {  
  const [category, setCategory] = useState("All");

  // listSlice에서 categories 가져오기
  const menuName = useSelector((state) => state.List.categories);
  console.log(menuName);

  // 카테고리가 변경될 때 실행되는 함수
  const onSelect =  useCallback((category) => setCategory(category), []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="main">
          <Categories category={menuName} onSelect={onSelect}/>
          <NewsList category={category}/>
        </div>
    
      </div>
      
    </div>
  );
}

export default App;
