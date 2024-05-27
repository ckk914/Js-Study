
// 서버 URL
const URL = 'https://jsonplaceholder.typicode.com/posts';

const URL2 = 'http://localhost:8383/api/v1/replies/30';

// ul태그 가져오기
const $postUl = document.querySelector('.posts');

// 화면에 게시물을 렌더링하는 함수
const renderPosts = postList => {
  
  /*
        <!-- 동적으로 렌더링될 태그를 템플릿화 -->
  <template id="single-post">
    <li class="post-item">
      <h2>게시물제목</h2>
      <p>내용</p>
      <buttoen>삭제
    </li>
  </template>
  */
  postList.forEach(post => {
    // 게시물 하나를 li태그로 만들어서 ul에 집어넣기
  console.log(post.title);
    // 템플릿 태그 가져오기
    const $template = document.getElementById('single-post');
    // 템플릿 태그에서 li태그 추출
    // 복사 !! true는 깊은 복사 안에 내용 전체 복사
    const $li = document.importNode($template.content, true);
    // console.log($li);
    $li.querySelector('h2').textContent = post.title;
    $li.querySelector('p').textContent = post.body;
    //자식에 추가
    $postUl.appendChild($li);
  });
};


// 서버에서 게시물 정보 받아오기
fetch(URL)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    // 게시물 정보 화면에 그리기
    renderPosts(json);
  });
