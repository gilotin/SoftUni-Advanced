window.addEventListener("load", solve);

function solve() {
    document.getElementById("clear-btn").addEventListener("click", clearPost);
    document.getElementById("publish-btn").addEventListener("click", createPost);
    let postTitle = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");
    let reviewSection = document.getElementById("review-list");
    let approveSection = document.getElementById("published-list");

    function createPost(e) {
        let titleValue = postTitle.value;
        let categoryValue = category.value;
        let contentValue = content.value;

        if (!titleValue || !categoryValue || !contentValue) {
            return;
        }
        createDOMElements(titleValue, categoryValue, contentValue);

        clearForm();
    }

    function clearForm() {
        postTitle.value = "";
        category.value = "";
        content.value = "";
    }

    function createDOMElements(titleValue, categoryValue, contentValue) {
        let li = document.createElement("li");
        li.classList.add("rpost");

        let article = createArticle(titleValue, categoryValue, contentValue);

        let editBtn = document.createElement("button");
        editBtn.classList.add("action-btn");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editPost);

        let approveBtn = document.createElement("button");
        approveBtn.classList.add("action-btn");
        approveBtn.classList.add("approve");
        approveBtn.textContent = "Approve";
        approveBtn.addEventListener("click", approvePost);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(approveBtn);

        reviewSection.appendChild(li);
    }

    function createArticle(titleValue, categoryValue, contentValue) {
        let article = document.createElement("article");

        let h = document.createElement("h4");
        h.textContent = titleValue;

        let categoryParagraph = document.createElement("p");
        categoryParagraph.textContent = `Category: ${categoryValue}`;

        let contentP = document.createElement("p");
        contentP.textContent = `Content: ${contentValue}`;

        article.appendChild(h);
        article.appendChild(categoryParagraph);
        article.appendChild(contentP);

        return article;
    }

    function editPost(e) {
        let cuttrentPost = e.target.parentElement;
        let articleContent = cuttrentPost.getElementsByTagName("article")[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        postTitle.value = titleValue;
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];
        cuttrentPost.remove();
    }

    function approvePost(e) {
        let currrentPost = e.target.parentElement;
        approveSection.appendChild(currrentPost);
        Array.from(currrentPost.querySelectorAll("button")).forEach((btn) => btn.remove());
    }

    function clearPost(e) {
        Array.from(approveSection.children).forEach((li) => li.remove());
    }
}
