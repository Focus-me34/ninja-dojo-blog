import { useEffect, useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("mario")
  const [isPending, setIsPending] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author }

    setIsPending(true)

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(data => console.log(data))
    .then(() => {
      setIsPending(false)
      setTitle("")
      setContent("")
      setAuthor("mario")
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Blog Title</label>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" required id="input[title]" placeholder="Type your title here..." />

        <label htmlFor="content">Blog Body</label>
        <textarea onChange={(e) => setContent(e.target.value)} value={content} name="content" required id="input[content]" cols="30" rows="4" placeholder="Type the content of your blog here..."></textarea>

        <label htmlFor="author">Blog Author</label>
        <select onChange={(e) => setAuthor(e.target.value)} name="author" required id="input[author]" value={author}>
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
          <option value="peach">Peach</option>
          <option value="bowser">Bowser</option>
        </select>
        {!isPending && <button type="submit">Add this blog</button>}
        {isPending && <button disabled>Adding blog...</button>}

      </form>

      <p>{title}</p>
      <p>{content}</p>
      <p>{author}</p>

    </div>
  );
}

export default Create;
