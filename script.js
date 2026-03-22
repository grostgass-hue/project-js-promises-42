const btn = document.getElementById("fetch-posts-btn");
const list = document.getElementById("posts-list");

btn.addEventListener("click", async () => {
  list.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const posts = data.slice(0, 5);

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.className = "post-item";
      li.textContent = post.title;
      list.appendChild(li);
    });
  } catch (error) {
    const p = document.createElement("p");
    p.textContent = "Помилка завантаження";
    document.body.appendChild(p);
    console.log(error);
  }
});

const tourCards = document.querySelectorAll(".tour-cards .card");
tourCards.forEach((card) => {
  card.addEventListener("click", () => {
    tourCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

const priceCards = document.querySelectorAll(".pricing-cards .card");
priceCards.forEach((card) => {
  card.addEventListener("click", () => {
    priceCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});
