document.getElementById('blog').addEventListener('submit', function(event){
    event.preventDefault();
    title = document.getElementById('title').value;
    paragraph = document.getElementById('paragraph').value;
    author = document.getElementById('author').value;


    dynamic_content = `<div class=post>
                        <h2>${title}</h2>
                        <p><strong>By:</strong> ${author}</p>
                        <p>${paragraph}</p>
                    `;
    document.getElementById('postedblog').innerHTML = dynamic_content;
    document.getElementById('blog').reset();
})