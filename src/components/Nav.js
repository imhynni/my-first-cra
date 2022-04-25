import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav>
        <p>
          <Link to={`/`}>Home으로 돌아가기</Link>
        </p>
      </nav>
    </div>
  );
}
export default Nav;
