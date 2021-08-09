import {Link} from 'react-router-dom';

const SideNav = () => {
  return (
    <nav className="p-5 border">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="list-group-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;