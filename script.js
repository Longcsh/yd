// Hàm để hiển thị thông báo khi nhấp vào avatar
function showAlert(memberName) {
    alert("Bạn đã nhấp vào " + memberName);
}

// Thêm sự kiện cho các avatar trên trang chính
document.querySelectorAll('.avatar').forEach((avatar) => {
    avatar.addEventListener('click', function(event) {
        const memberName = event.target.alt; // Lấy tên thành viên từ thuộc tính alt
        showAlert(memberName);
    });
});

