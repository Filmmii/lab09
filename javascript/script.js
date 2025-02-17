document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list");

    try {
        // ดึงข้อมูลผู้ใช้จาก API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        // แสดงรายชื่อผู้ใช้
        users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");
            userDiv.innerHTML = `<a href="user-detail.html?id=${user.id}">${user.name}</a>`;
            userList.appendChild(userDiv);
        });

    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
    }
});
