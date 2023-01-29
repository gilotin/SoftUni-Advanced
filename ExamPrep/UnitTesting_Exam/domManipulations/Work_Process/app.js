function solve() {
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let email = document.getElementById("email");
    let dateOfBirth = document.getElementById("birth");
    let position = document.getElementById("position");
    let salary = document.getElementById("salary");
    let tbody = document.getElementById("tbody");
    let sumOfSalries = document.getElementById("sum");

    document.getElementById("add-worker").addEventListener("click", hireWorker);

    function hireWorker(e) {
        e.preventDefault();

        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let dateOfBirthValue = dateOfBirth.value;
        let positionValue = position.value;
        let salaryValue = salary.value;

        if (
            !firstNameValue ||
            !lastNameValue ||
            !emailValue ||
            !dateOfBirthValue ||
            !positionValue ||
            !salaryValue
        ) {
            return;
        }

        let tr = document.createElement("tr");

        let fNameTd = document.createElement("td");
        fNameTd.textContent = `${firstNameValue}`;

        let lNameTd = document.createElement("td");
        lNameTd.textContent = `${lastNameValue}`;

        let emailTd = document.createElement("td");
        emailTd.textContent = `${emailValue}`;

        let dateOfBirthTd = document.createElement("td");
        dateOfBirthTd.textContent = `${dateOfBirthValue}`;

        let positionTd = document.createElement("td");
        positionTd.textContent = `${positionValue}`;

        let salaryTd = document.createElement("td");
        salaryTd.textContent = `${Number(salaryValue)}`;

        let btnTd = document.createElement('td');

        let firedBtn = document.createElement("button");
        firedBtn.classList.add("fired");
        firedBtn.textContent = "Fired";
        firedBtn.addEventListener("click", (e) => fired(e, salaryValue));

        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", (e) =>
            editInfo(
                e,
                firstNameValue,
                lastNameValue,
                emailValue,
                dateOfBirthValue,
                positionValue,
                salaryValue
            )
        );

        tr.appendChild(fNameTd);
        tr.appendChild(lNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(dateOfBirthTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        btnTd.appendChild(firedBtn);
        btnTd.appendChild(editBtn)
        tr.appendChild(btnTd)

        tbody.appendChild(tr);

        let currentSalary = Number(sumOfSalries.textContent);
        sumOfSalries.textContent = (Number(salaryValue) + currentSalary).toFixed(2);

        clearInputs();
    }

    function editInfo(e, _firstName, _lastName, _email, _dateOfBirth, _position, _salary) {
        e.preventDefault();
        firstName.value = _firstName;
        lastName.value = _lastName;
        email.value = _email;
        dateOfBirth.value = _dateOfBirth;
        position.value = _position;
        salary.value = _salary;

        e.target.parentNode.parentNode.remove();


        reduceSalary(_salary);
    }

    function clearInputs() {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        dateOfBirth.value = "";
        position.value = "";
        salary.value = "";
    }

    function reduceSalary(salary) {
        let currentSalary = Number(sumOfSalries.textContent);
        sumOfSalries.textContent = Math.abs(Number(salary) - currentSalary).toFixed(2);
    }
    function fired(e,salary){
        e.preventDefault();
        e.target.parentNode.parentNode.remove();

        reduceSalary(salary)
    }
}

solve();
