window.addEventListener("load", solve);

function solve() {
    let genre = document.getElementById("genre");
    let songName = document.getElementById("name");
    let author = document.getElementById("author");
    let date = document.getElementById("date");
    let divContainer = document.getElementsByClassName("all-hits-container")[0];
    let savedContainer = document.getElementsByClassName("saved-container")[0];
    document.getElementById("add-btn").addEventListener("click", addSong);

    function addSong(ev) {
        ev.preventDefault();

        let genreValue = genre.value;
        let songNameValue = songName.value;
        let authorValue = author.value;
        let dateValue = date.value;

        if (genreValue === "" || songNameValue === "" || authorValue === "" || dateValue === "") {
            return;
        }
        let div = document.createElement('div')
        div.setAttribute("class", "hits-info");

        let img = document.createElement("img");
        img.src = "./static/img/img.png";
        div.appendChild(img);

        e("h2", `Genre: ${genreValue}`, div);
        e("h2", `Name: ${songNameValue}`, div);
        e("h2", `Author: ${authorValue}`, div);
        e("h3", `Date: ${dateValue}`, div);

        let saveBtn = e("button", "Save song", div);
        saveBtn.classList.add("save-btn");
        saveBtn.addEventListener("click", onSave);

        let likeBtn = e("button", "Like song", div);
        likeBtn.classList.add("like-btn");
        likeBtn.addEventListener("click", onLike);

        let deleteBtn = e("button", "Delete", div);
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", onDelete);

        divContainer.appendChild(div);
        clearFields();
    }

    function e(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

    function onLike(e) {
        e.preventDefault();
        let likes = document.getElementById("total-likes").children[0].children[0];
        let [text, numberOfLikes] = likes.textContent.split(": ");
        numberOfLikes = Number(numberOfLikes);
        numberOfLikes++;

        likes.textContent = `${text}: ${numberOfLikes}`;

        e.target.setAttribute("disabled", true);
    }

    function onSave(e) {
        let div = e.target.parentElement;
        savedContainer.appendChild(div);

        div.childNodes[5].remove();
        div.childNodes[5].remove();
    }

    function onDelete(e) {
        e.preventDefault();

        let div = e.target.parentElement;
        div.remove();
    }

    function clearFields() {
        genre.value = "";
        songName.value = "";
        author.value = "";
        date.value = "";
    }
}
