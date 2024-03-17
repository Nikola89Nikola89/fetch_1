fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        const list = document.querySelector(".post__list");
        json.forEach((item, index) => {
            const post = document.createElement("li");
            const postIndex = document.createElement("span");
            const postTitle = document.createElement("h4");
            const postText = document.createElement("p");
            const postReadMoreLink = document.createElement("a");

            post.classList.add('post__list-item')
            postIndex.classList.add('post__index')
            postTitle.classList.add('post__title')
            postText.classList.add('post__text')
            postReadMoreLink.classList.add('post__link')

            postIndex.innerHTML = index + 1;
            postTitle.innerHTML = item.title;
            postText.innerHTML = item.body;
            postReadMoreLink.innerHTML = 'Read more'

            post.append(postIndex, postTitle, postText, postReadMoreLink)
            list.appendChild(post);
        });
      });





