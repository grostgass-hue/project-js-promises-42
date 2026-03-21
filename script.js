const burger = document.getElementById("burger");
const menu = document.querySelector("nav .menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const button = document.getElementById("fetch-posts-btn");
const list = document.getElementById("posts-list");
let start = 0;

async function fetchPostsAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const posts = data.slice(start, start + 5);
    start += 5;
    if (start >= data.length) start = 0;
    return posts;
  } catch (error) {
    const app = document.getElementById("hero");
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error");
    errorMsg.textContent = "Помилка завантаження постів!";
    app.appendChild(errorMsg);
  }
}

button.addEventListener("click", async () => {
  const posts = await fetchPostsAsync();
  if (!posts) return;
  list.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.classList.add("post-item");
    li.textContent = `Пост №${post.id}: цікавий запис`;
    list.appendChild(li);
  });
});

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Заповни всі поля!");
    return;
  }
  alert("Дані відправлено!");
  form.reset();
});
