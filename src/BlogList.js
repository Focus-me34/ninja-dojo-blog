const BlogList = ({ blogs, title, handleDelete }) => {
  console.log(blogs)
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {
        blogs.map(blog =>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Blog written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
          </div>
        )
      }
    </div>
  );
}

export default BlogList;