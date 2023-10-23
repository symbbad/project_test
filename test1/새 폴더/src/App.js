import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const getPosts = () => {
  return axios.get('http://127.0.0.1:8000/')
    .then(response => response.data);
}

function App() {
  // 상태 변수를 초기화
  const [posts, setPosts] = useState([]);

  // 데이터 가져오는 부분을 useEffect 내에서 수행
  useEffect(() => {
    // 데이터를 가져오는 axios 요청
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        // 가져온 데이터를 상태에 저장
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // []를 빈 배열로 전달하여 이펙트가 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;