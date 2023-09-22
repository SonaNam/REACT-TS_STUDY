import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { useProfileData } from "./modules/todo/frofile/data";

function Layout() {
  // swr 데이터 -> 상태값
  // 데이터가 변경되면 컴포넌트가 다시 렌더링된다.
  const { profiledata } = useProfileData();
  const { nickname } = profiledata;
  // console.log(profiledata);
  console.log();

  return (
    <div>
      <header>
        <em>{nickname}</em>
      </header>
      {/* 링크들이 들어가는 곳 */}
      <nav>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* 페이지이동 */}
            {/* <href="/" */}
            {/* url에 맞는 컴포넌트만 로딩 */}
            {/* a태그를 쓰면 새로 다시 다 받아옴
                link 를 쓰면 해당부분만 */}
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/Post">Post</Link>
          </li>
        </ul>
      </nav>
      {/* 세부 화면들이 나오는 곳 */}
      <main>
        {/* Outlet 세부경로의 컴포넌트들이 로딩위치 */}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
export default Layout;
