// document.addEventListener("DOMContentLoaded", function () {
//     const searchBtn = document.getElementById("searchBtn");
//     const searchContainer = document.getElementById("searchContainer");
//     const menuBtn = document.getElementById("menuBtn");
//     const menuPanel = document.getElementById("menuPanel");

//     // 검색창 토글
//     searchBtn.addEventListener("click", function () {
//         searchContainer.classList.toggle("active");
//     });

//     // 메뉴 패널 드롭다운 방식 토글
//     menuBtn.addEventListener("click", function () {
//         menuPanel.classList.toggle("active");
//         menuBtn.classList.toggle("active"); // 햄버거 버튼 상태 변경
//     });
// });



// // 검색기능
// const iconArea = document.querySelector('.icon-area');  // 버튼 전체
// const searchContainer = document.querySelector('.search-container'); // 검색창
// const searchInput = document.querySelector('.search-input'); // 인풋창
// const searchIcon = iconArea.querySelector('.search-icon'); // 돋보기 이미지
// const closeIcon = iconArea.querySelector('.close-icon');   // 닫기 이미지

// // 초기 상태 설정 (CSS에 이미 있음, JS에서도 명확히 초기화 가능)
// searchIcon.style.display = 'block';
// closeIcon.style.display = 'none';

// // 클릭 이벤트
// iconArea.addEventListener('click', () => {
//   const isActive = searchContainer.classList.contains('active');

//   if (isActive) {
//     // 검색창 닫기
//     searchContainer.classList.remove('active');
//     searchInput.value = '';

//     // 아이콘 전환
//     searchIcon.style.display = 'block';
//     closeIcon.style.display = 'none';
//   } else {
//     // 검색창 열기
//     searchContainer.classList.add('active');

//     // 아이콘 전환
//     searchIcon.style.display = 'none';
//     closeIcon.style.display = 'block';
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  // 메뉴 관련 요소 선택
  const menuBtn = document.getElementById("menuBtn");
  const menuPanel = document.getElementById("menuPanel");

  // 검색 관련 요소 선택
  const searchBtn = document.querySelector('.icon-area'); // 버튼 전체 클릭 이벤트
  const searchContainer = document.querySelector('.search-container'); // 검색창
  const searchInput = document.querySelector('.search-input'); // 인풋창
  const searchIcon = document.querySelector('.search-icon'); // 돋보기 아이콘
  const closeIcon = document.querySelector('.close-icon');   // 닫기 아이콘

  // 메뉴 패널 드롭다운 방식 토글
  menuBtn.addEventListener("click", function () {
    menuPanel.classList.toggle("active");
    menuBtn.classList.toggle("active"); // 햄버거 버튼 상태 변경
  });

  // 검색 버튼(돋보기/닫기) 클릭 이벤트
  searchBtn.addEventListener('click', function() {
    const isActive = searchContainer.classList.contains('active');

    if (isActive) {
      // 검색창 닫기
      searchContainer.classList.remove('active');
      searchInput.value = '';
      searchIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    } else {
      // 검색창 열기
      searchContainer.classList.add('active');
      searchIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    }
  });

  // 초기 상태
  searchIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});
