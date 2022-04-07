import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-details">
          <img src={imageUrl} alt={`item${id}`} className="blog-item-image" />
          <div className="blog-item-info">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-info">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="avatar-image"
              />
              <p className="avatar">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
