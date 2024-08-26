document.addEventListener('DOMContentLoaded', function() {
    fetch('blogs.json')
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById('blogs-grid');

            // Slice the data array to only include the first two blogs
            const firstTwoBlogs = data.slice(0, 2);

            firstTwoBlogs.forEach(blog => {
                const blogCard = document.createElement('div');
                blogCard.className = 'blogs';

                // Determine additional class based on blog.tag
                let additionalClass = '';
                if (blog.tag === 'LEADERSHIP') {
                    additionalClass = 'leadership';
                } else if (blog.tag === 'HABIT') {
                    additionalClass = 'habit';
                }

                blogCard.innerHTML = `
                    <div class="blog-cover">
                        <div class="blog-img">
                            <img src="${blog.imgSrc}" alt="">
                        </div>
                        <div class="blog-category-time">
                            <div class="blog-tag ${additionalClass}">
                                <h4>${blog.tag}</h4>
                            </div>
                            <span class="blog-upload-read">
                                <h4 class="blog-upload-time">${blog.uploadTime}</h4> / 
                                <h4 class="blog-read-time">${blog.readTime}</h4>
                            </span>
                        </div>
                        <h1 class="blog-title">${blog.title}</h1>
                        <p class="blog-snippet">${blog.snippet}</p>
                        <div class="blog-interaction">
                            <div class="blog-comment-bottom">
                                <img src="assets/icon-comment.png" alt="Comment icon" />
                                <h2>${blog.comments}</h2>
                            </div>
                            <div class="blog-like">
                                <img src="assets/icon-heart.png" alt="Like icon" />
                                <h2>${blog.likes}</h2>
                            </div>
                            <div class="blog-share">
                                <img src="assets/icon-share.png" alt="Share icon" />
                            </div>
                        </div>
                    </div>
                `;

                blogContainer.appendChild(blogCard);
            });
        })
        .catch(error => console.error('Error fetching blog data:', error));
});
