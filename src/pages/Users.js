import { useQuery } from "react-query";

const Users = () => {
  const { isLoading, error, data, isFetching } = useQuery("users", () =>
    fetch("api/users").then(res => res.json())
  )

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>Users</h1>
      <p>{ isFetching ? "Updating..." : "" }</p>
      <div className="d-flex flex-wrap">
        {
          data.map(user => {
            return (
              <div key={user.id} className="card m-3" style={{ width: '18rem' }}>
                <div className="card-body">
                  <h5 className="card-title">Username: {user.username}</h5>
                  <div className="card-subtitle">Website: {user.website}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Users;