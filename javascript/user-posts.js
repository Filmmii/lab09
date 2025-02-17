document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    const postsList = document.getElementById("posts-list");

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await response.json();

        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            postsList.appendChild(postDiv);
        });

    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error);
    }
});
