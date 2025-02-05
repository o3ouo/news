import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../reducer/listSlice';
import NewsItem from './NewsItem';

function NewsList({ category }) {
  // api 주소에 해당하는 category text 추가
  const dataId = category === "All" ? "" : `&category=${category}`

  const dispatch = useDispatch();
  // news api list 가져오기
  const { list, status, error } = useSelector(state => state.List);

  // const [article, setArticle] = useState([]);

  useEffect(() => {
    dispatch(fetchData(dataId)); // API 요청 실행
  }, [dispatch, category]);

  // API 상태 체크
  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  console.log('Fetched List:', list);

  return <div className="newsBox"><NewsItem list={list}/></div>
}

export default NewsList;
