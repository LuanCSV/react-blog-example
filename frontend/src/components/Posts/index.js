import React, { useState, useEffect } from 'react';
import Post from './Post'
import users from './users.json';
import './style.css';

const Posts = () => {

  const placeholderImg = './mel.jpg'
  
  const [activeUser, setActiveUser] = useState(-1);
  const [activePosts, setActivePosts] = useState([]);

  useEffect(() => {
    let queryParam = activeUser > -1? `?userId=${activeUser}` : ``;

    fetch(`https://jsonplaceholder.typicode.com/posts${queryParam}`)
      .then(res => res.json())
      .then(json => setActivePosts(json));
  }, [activeUser])
  

  const handleClick = userId => setActiveUser(userId);

  return (
    <section className="posts-container">
      <h2 className="posts-container-title">Posts por Usuarios</h2>
      <p className="posts-container-description">
        Esses posts estao sendo chamados do site <a href="htpps://jsonplaceholder.typicode.com"
        target="_blank" rel="noopener noreferrer" title="Acesse o Json Placeholder">JSON Placeholder</a> - veja o <a href="htpps://jsonplaceholder.typicode.com"
        target="_blank" rel="noopener noreferrer" title="Veja o modelo de dos">modelos de dados (JSON)</a> que esta sendo utilizado
      </p>
      <nav className="posts-container-controls">
          { 
            users.map(user => <button 
              key={user.id} 
              className={`posts-container-controls-item ${activeUser === user.userId && 'active'}`}
              onClick={() => handleClick(user.userId)}>User {user.userId}</button>
            ) 
          }
          <button 
            className={`posts-container-controls-item ${activeUser === -1 && 'active'}`}
            onClick={() => handleClick(-1)}>Ver Todos</button>
      </nav>

      <article className="posts-content">
        <h2 className="posts-content-title">Posts {activeUser === -1? 'de todos os usuarios': `do user ${activeUser}`}</h2>
        
        <article className="posts-content-container"> 
          {activePosts.map((post, index) => {
            return (
              <Post key={index} {...post}/>
            )
          })}
        </article>
      </article>
    </section>
  );
};

export default Posts;
