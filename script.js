const comments = [];
const btn = document.querySelector('#commentBtn');
const input = document.querySelector('#commentInput');

function displayComments(comments, containerNode) {
    function addParagraph(text) {
        const commentParagraph = document.createElement("p");
        commentParagraph.innerText = text;
        return commentParagraph;
    };

    function addTitle(title) {
        const h2 = document.createElement("h2");
        h2.innerText = title;
        return h2;
    };

    function addImage(){
        const img = document.createElement("img");
        img.setAttribute("src","https://furtaev.ru/preview/user_3_small.png");
        img.classList.add("image");
        return img;
    };

    function addDeleteBtn(){
        const deleteBtn = document.createElement("input");
        deleteBtn.type = "submit";
        deleteBtn.value = "Delete";
        deleteBtn.classList.add("deleteBtn");

        const id = comments.length;
        deleteBtn.addEventListener("click", function(e){
            e.preventDefault();
            const commentDiv = document.getElementById(id);
            commentDiv.remove(comments);
            for (let i=0; i<comments.length; i++){
                if(comments[i].id === id){
                    comments.splice(i,i)  
                };
            };
        });
        return deleteBtn;    
    };
    
    function createCommentNode(comment) {
        const containerBox = document.createElement('div');
        const title = addTitle(comment.name);
        const p = addParagraph(comment.msg);
        const image = addImage(comment.img);
        const delBtn = addDeleteBtn(comment.delBtn);
        containerBox.appendChild(image);
        containerBox.appendChild(title);
        containerBox.appendChild(p);
        containerBox.appendChild(delBtn);
        containerBox.id = comments.length;
        containerBox.classList.add("comments");
        return containerBox;
    };
  
    for (let idx = comments.length-1; idx < comments.length; idx++) {
        const comment = comments[idx]; 
        const commentNode = createCommentNode(comment);
        containerNode.appendChild(commentNode);
    };
};

btn.addEventListener('click', function(event) {
    event.preventDefault();
    comments.push({
        name: "Marcian",
        msg: input.value,
        img: "",
        delBtn: "",
    });
    displayComments(comments, document.body);
});
