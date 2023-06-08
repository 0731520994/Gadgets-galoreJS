document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogPostsContainer = document.getElementById('blogPosts');

    blogPosts.forEach(function(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('card', 'mb-3');

        const imageElement = document.createElement('img');
        imageElement.src = post.imageUrl;
        imageElement.alt = post.title;
        imageElement.classList.add('card-img-top');

        const cardBodyElement = document.createElement('div');
        cardBodyElement.classList.add('card-body');

        const titleElement = document.createElement('h5');
        titleElement.textContent = post.title;
        titleElement.classList.add('card-title');

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = post.description;
        descriptionElement.classList.add('card-text');

        cardBodyElement.appendChild(titleElement);
        cardBodyElement.appendChild(descriptionElement);

        postElement.appendChild(imageElement);
        postElement.appendChild(cardBodyElement);

        blogPostsContainer.appendChild(postElement);
    });
});