import '../css/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Main from './Main';
import PostList from './PostList';
import PostDetail from './PostDetail';
import MyPage from './MyPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      Welcome Saessac!
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/mypage' element={<MyPage />}></Route>
        <Route path='/postlist' element={<PostList />}></Route>
        <Route path='/postdetail' element={<PostDetail />}></Route>
      </Routes>
      <Link to="/"><p>메인</p></Link>
      <Link to="/signup"><p>회원가입</p></Link>
      <Link to="/signin"><p>로그인</p></Link>
      <Link to="/mypage"><p>마이페이지</p></Link>
      <Link to="/postlist"><p>글 목록</p></Link>
      <Link to="/postdetail"><p>글 내용</p></Link>
      </BrowserRouter>
    </div>
  );
}

export default App;