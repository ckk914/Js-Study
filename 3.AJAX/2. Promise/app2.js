
// 서버 URL
const URL = 'https://jsonplaceholder.typicode.com/posts';

const URL2 = 'http://localhost:8383/api/v1/replies/30';
// const URL3=`https://yts.mx/api/v2/list_movies.json?sort_by=rating&order_by=desc`;


// ul태그 가져오기
// const $postUl = document.querySelector('.posts');
const $postUl = document.querySelector('.movie-list');

// 화면에 게시물을 렌더링하는 함수
const renderPosts = postList => {
  /*
    </li>
      <!-- 동적으로 렌더링될 태그를 템플릿화 -->
  <template id="single-post">
    <li class="post-item">
      <h2>게시물제목</h2>
      <p>내용</p>
      <buttoen>삭제
    </li>
  </template>
----------------------------------
   <div class="movie-list clearfix">
       <div class="movie">
            <div class="img-box">
                <img src="https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/large-cover.jpg" alt="표지사진">
            </div>
            <div class="inner">
                <div class="title">제목</div>
                <div class="year">개봉년도</div>
                <div class="rating">평점</div>
            </div>
        </div> 
  */
//  console.log($postUl);
//  console.log($postUl);
  postList.forEach(post => {
    // 게시물 하나를 li태그로 만들어서 ul에 집어넣기
    console.log(post.title);
    // 템플릿 태그 가져오기
    const $template = document.getElementById('single-post');
    // console.log($template);
    // 템플릿 태그에서 li태그 추출
    const $div = document.importNode($template.content, true);
    console.log("ㅁ"+$div);
    // console.log($li);
     $div.querySelector('.title').textContent = post.title;
     $div.querySelector('.rating').textContent = post.rating;
     $div.querySelector('.year').textContent = post.year;
     $div.querySelector(`.img-box img`).setAttribute("src", post.medium_cover_image);
     
    // $div.querySelector('p').textContent = post.body;

     $postUl.appendChild($div);
  });
};

const URL3=`https://yts.mx/api/v2/list_movies.json?sort_by=${condition}`;
// 서버에서 게시물 정보 받아오기
fetch(URL3)
  .then(res => res.json()) 
  .then(json => {
    console.log(json.data.movies);
    
    // 게시물 정보 화면에 그리기
    renderPosts(json.data.movies);
  });

  //a태그 클릭 이벤트
  document.querySelector(`header .gnb ul`).addEventListener(`click`,e =>{
//a태그 링크 이동 기능 중지 (비동기 아님)
e.preventDefault();
console.log(e.target);
const id = e.target.id;
switch(id){
case `s_rate`:
  fetchMovies(`download_count`);
  break;
  case `s_year`:
    fetchMovies(`year_count`);
    break;
    case `s_like`:
      fetchMovies(`like_count`);
      break;
}
  });

        // 초기영화 정보 로딩
        function fetchMovies() {

          fetch(`https://yts.mx/api/v2/list_movies.json`)
            .then(response => console.log(response))
        }