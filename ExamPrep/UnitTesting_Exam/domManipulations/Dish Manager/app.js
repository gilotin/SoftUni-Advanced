window.addEventListener("load", solve);

function solve() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let age = document.getElementById("age");
    let gender = document.getElementById("genderSelect");
    let dishDescription = document.getElementById("task");
    let progressCounter = document.getElementById("progress-count");
    let ul = document.getElementById("in-progress");
    let finishedWindow = document.getElementById("finished");

    document.getElementById("form-btn").addEventListener("click", onSubmit);
    document.getElementById("clear-btn").addEventListener("click", onClear);

    function onSubmit(e) {
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let ageValue = age.value;
        let genderValue = gender.value;
        let dishDescriptionValue = dishDescription.value;

        if (!firstNameValue || !lastNameValue || !ageValue || !dishDescriptionValue) {
            return;
        }

        let article = document.createElement("article");

        let li = document.createElement("li");
        li.classList.add("each-line");

        let h4 = document.createElement("h4");
        h4.textContent = `${firstNameValue} ${lastNameValue}`;

        let sexAgeParagraph = document.createElement("p");
        sexAgeParagraph.textContent = `${genderValue}, ${ageValue}`;

        let p = document.createElement("p");
        p.textContent = `${dishDescriptionValue}`;

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", editPost);

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Mark as complete";
        completeBtn.classList.add("complete-btn");
        completeBtn.addEventListener("click", completePost);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(completeBtn);
        article.appendChild(h4);
        article.appendChild(sexAgeParagraph);
        article.appendChild(p);
        ul.appendChild(li);

        progressCounter.textContent++;

        clearFields();
    }

    function clearFields() {
        firstName.value = "";
        lastName.value = "";
        age.value = "";
        dishDescription.value = "";
    }

    function editPost(e) {
        e.preventDefault();
        let ulElement = e.target.parentElement.parentElement;
        let liElement = e.target.parentElement;

        let fullName = e.target.parentElement.firstElementChild.children[0].textContent;
        [firstName.value, lastName.value] = fullName.split(" ");

        let genderAge = e.target.parentElement.firstElementChild.children[1].textContent;
        [gender.value, age.value] = genderAge.split(", ");

        let descriptionInfo = e.target.parentElement.firstElementChild.children[2].textContent;
        dishDescription.value = descriptionInfo;

        ulElement.removeChild(liElement);
        progressCounter.textContent--;
    }

    function completePost(e) {
        e.preventDefault();
        let ulElement = e.target.parentElement.parentElement;
        let liElement = e.target.parentElement;

        finishedWindow.appendChild(liElement);

        progressCounter.textContent--;

        ulElement.removeChild;

        let firstBtn = liElement.children[1];
        let secondBtn = liElement.children[2];

        liElement.removeChild(firstBtn);
        liElement.removeChild(secondBtn);
    }

    function onClear(e) {
        e.preventDefault();
        let ulElement = e.target.parentElement.parentElement

        Array.from(ulElement.children).forEach((el) => ulElement.remove(el))
    }
}


