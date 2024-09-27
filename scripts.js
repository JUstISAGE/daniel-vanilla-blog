function createnewblog() {
    var block = document.getElementById("create_blog");
    block.style.display = "inline";
}
function cancelcreate() {
    var block = document.getElementById("create_blog");
    block.style.display = "none";
}

function postnewblog() {
    title = document.getElementById('title').value;
    paragraph = document.getElementById('paragraph').value;
    author = document.getElementById('author').value;
    dynamic_content = ` 
                        <div class="post">
                        <h2>${title}</h2>
                        <p><strong>By:</strong> ${author}</p>
                        <p>${paragraph}</p>
                        </div>
                    `;
    document.getElementById('postedblog').innerHTML += dynamic_content;
    var block = document.getElementById("create_blog");
    block.style.display = "none";
}
