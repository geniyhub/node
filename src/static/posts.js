document.addEventListener('DOMContentLoaded', () => {
    const createPostBtn = document.getElementById('createPostBtn');

    createPostBtn.addEventListener('click', async () => {
        const posts = {
            name: 'New Post',
            author: 'New Author',
        };

        try {
            const response = await fetch('http://localhost:7000/post/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(posts)
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Post created:', data.post);
            } else {
                console.error('Failed to create post:', data);
            }
        } catch (error){
            console.error('Error:', error);
        }
    });
});