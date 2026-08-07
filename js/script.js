const menuItems = document.querySelectorAll(
    ".works, .language, .about"
);

menuItems.forEach(function(item) {
    item.addEventListener("click", function() {

        // 기존에 선택되어 있던 메뉴의 active 제거
        menuItems.forEach(function(menu) {
            menu.classList.remove("active");
        });

        // 지금 누른 메뉴에 active 추가
        this.classList.add("active");
    });
});

fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-area").innerHTML = data;

        // 현재 페이지 주소 확인
        const currentPage = window.location.pathname;

        // language 페이지라면 language 메뉴 활성화
        if (currentPage.includes("language.html")) {
            document.querySelector(".language").classList.add("active");
        }
    });