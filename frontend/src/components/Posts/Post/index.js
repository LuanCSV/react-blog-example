import React from 'react';
import './style.css';

const Post = ({...post}) => {
    const placeholderImg = './mel.jpg'

    const { 
        userId, 
        id, 
        title, 
        body
    } = post;

    return(
        <article className="post-item">
            <img src={placeholderImg} alt={`Imagem do post ${id}`} width="100%" height="auto" />
            <h3 className="post-item-title">{title}</h3>
            <small className="post-item-details">
            <span className="post-item-details-post-id">{`Post ID: ${id}`}</span> |
             <span className="post-item-details-author-id">{`ID author: ${userId}`}</span>
            </small>
            <p className="post-item-details-content">${body}</p>
      </article>
    )
}

export default Post;