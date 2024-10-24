document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    const commentSection = document.getElementById('commentsSection');

    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    const commentContent = `
        <h3>${name}</h3>
        <p>${comment}</p>
    `;

    newComment.innerHTML = commentContent;
    commentSection.appendChild(newComment);

    document.getElementById('commentForm').reset();
    
});

document.getElementById("getInTouchButton").onclick = function() {
    window.open("https://wa.link/yvzulc", "_blank");
};
