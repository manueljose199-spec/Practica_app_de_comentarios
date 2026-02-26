document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commentForm");
  const commentInput = document.getElementById("commentInput");
  const commentsSection = document.getElementById("commentsSection");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = commentText;

    const date = new Date();
    const dateText = document.createElement("small");
    dateText.textContent = date.toLocaleString();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
      commentDiv.remove();
    });

    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(dateText);
    commentDiv.appendChild(deleteButton);

    commentsSection.appendChild(commentDiv);
    commentInput.value = "";
  });
});