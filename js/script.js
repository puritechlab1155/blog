document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const searchContainer = document.getElementById("searchContainer");
    const menuBtn = document.getElementById("menuBtn");
    const menuPanel = document.getElementById("menuPanel");

    // 검색창 토글
    searchBtn.addEventListener("click", function () {
        searchContainer.classList.toggle("active");
    });

    // 메뉴 패널 드롭다운 방식 토글
    menuBtn.addEventListener("click", function () {
        menuPanel.classList.toggle("active");
        menuBtn.classList.toggle("active"); // 햄버거 버튼 상태 변경
    });
});