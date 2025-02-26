document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
  
    if (commentForm) {
      commentForm.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        const name = document.getElementById("name").value;
        const content = document.getElementById("content").value;
  
        const userId = user.id;
        const postId = 1;
  
        const data = { name, content, userId, postId };
  
        try {
          const response = await fetch("/comment/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
  
          if (response.ok) {
            alert("Comment created successfully!");
          } else {
            alert("Failed to create comment. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while creating the comment.");
        }
      });
    }
  });