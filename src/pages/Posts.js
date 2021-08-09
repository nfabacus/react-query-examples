import { useQuery } from "react-query";

const Posts = () => {
  const { isLoading, error, data, isFetching } = useQuery("posts", () =>
    fetch("api/posts").then(res => res.json())
  )

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>Posts</h1>
      <p>{ isFetching ? "Updating..." : "" }</p>
      <div className="d-flex flex-wrap">
        {
          data.map(post => {
            return (
              <div key={post.id} className="card mb-3" style={{ width: '18rem', marginRight: '1rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Username: {post.title}</h5>
                  <div className="card-subtitle">Website: {post.body}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Posts;