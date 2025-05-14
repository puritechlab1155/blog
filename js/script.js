
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
    const isMenuActive = menuPanel.classList.contains("active");

    if (!isMenuActive) {
      // 메뉴를 열 때 검색창이 열려 있다면 닫음
      searchContainer.classList.remove("active");
      searchIcon.style.display = "block";
      closeIcon.style.display = "none";
      searchInput.value = "";
    }

    // 메뉴 열기/닫기
    menuPanel.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // 검색 버튼(돋보기/닫기) 클릭 이벤트
  searchBtn.addEventListener("click", function () {
    const isSearchActive = searchContainer.classList.contains("active");

    if (!isSearchActive) {
      // 검색창을 열 때 메뉴가 열려 있다면 닫음
      menuPanel.classList.remove("active");
      menuBtn.classList.remove("active");
    }

    // 검색창 열기/닫기
    if (isSearchActive) {
      searchContainer.classList.remove("active");
      searchIcon.style.display = "block";
      closeIcon.style.display = "none";
      searchInput.value = "";
    } else {
      searchContainer.classList.add("active");
      searchIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
  });

  // 초기 상태 설정
  searchIcon.style.display = "block";
  closeIcon.style.display = "none";
});






// 영상 임베드 방식2
document.getElementById("youtubeInput").addEventListener("input", function () {
  const input = this.value;
  const videoId = extractYouTubeId(input);
  const preview = document.getElementById("youtubePreview");

  if (videoId) {
    preview.innerHTML = `
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>`;
  } else {
    preview.innerHTML = ""; // 유효하지 않으면 미리보기 제거
  }
});

// 유튜브 링크에서 영상 ID 추출 방식2
function extractYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v=|\/embed\/|\/v\/|watch\?v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}
