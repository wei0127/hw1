let closebtn = document.getElementById("close"); // 取得網頁上 id 為 "close" 的元素，並儲存到變數 closebtn 中
closebtn.style.position = "absolute"; // 設置 closebtn 元素的定位方式為絕對定位
closebtn.style.left = "53%"; // 設置 closebtn 元素距離左邊界的距離為 53% 的畫面寬度

closebtn.onclick = function (){ //當點擊按鈕時觸發以下動作
    window.opener=null; // 設置開啟此網頁的原始網頁為 null
    window.open("","_self"); // 開啟空白頁面
    window.close(); // 關閉此網頁
}

let refreshbtn = document.getElementById("refresh"); // 取得網頁上 id 為 "refresh" 的元素，並儲存到變數 refreshbtn 中
refreshbtn.style.position = "absolute"; // 設置 refreshbtn 元素的定位方式為絕對定位
refreshbtn.style.left = "40%"; // 設置 refreshbtn 元素距離左邊界的距離為 40% 的畫面寬度
