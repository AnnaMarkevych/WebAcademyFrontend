import './index.scss';


class TaskList {
    constructor (rootElement) {
        this.rootElement = rootElement;
        this.render();
        this.handleEvents();
        this.fetchListData();
        // this.cleanInput();
    }

    render () {
        this.rootElement.classList.add("taskList");

        const tittle = document.createElement("h1");
        tittle.textContent = "todos";
        tittle.classList.add("taskTittle");

        this.form = document.createElement("form");

        this.label = document.createElement("label");
        this.label.classList.add("checkAll");

        this.checkboxAll = document.createElement("input");
        this.checkboxAll.type = "checkbox";
        this.checkboxAll.classList.add("checkboxAll");

        this.checkboxAllCustom = document.createElement("div");
        this.checkboxAllCustom.textContent = "✔";
        this.checkboxAllCustom.classList.add("checkboxAllCustom");

        this.input = document.createElement("input");
        this.input.classList.add("newTask");
        this.input.placeholder = "What needs to be done?";
        this.ul = document.createElement("ul");
        this.ul.classList.add("list");

        this.form.appendChild(this.label);
        this.form.appendChild(this.input);
        this.label.appendChild(this.checkboxAll);
        this.label.appendChild(this.checkboxAllCustom);

        this.rootElement.appendChild(tittle);
        this.rootElement.appendChild(this.form);
        this.rootElement.appendChild(this.ul);


        // checkAll.textContent = "☑";
    }

    renderList(taskList) {
        taskList.forEach((task) => {
            this.renderOne(task);
        })
    }

    renderOne(task){
        const  li = document.createElement('li');
        li.classList.add("tasks");

        this.labelLi = document.createElement("label");
        this.labelLi.classList.add("labelLi");

        this.titleTask = document.createElement("div");
        this.titleTask.classList.add("titleTask");
        this.titleTask.textContent = task.title;

        this.checkboxLi = document.createElement("input");
        this.checkboxLi.type = "checkbox";
        this.checkboxLi.classList.add("checkboxLi");

        this.checkboxLiCustom = document.createElement("div");
        this.checkboxLiCustom.textContent = "✓";
        this.checkboxLiCustom.classList.add("checkboxLiCustom");

        this.ul.appendChild(li);
        li.appendChild(this.labelLi);
        li.appendChild(this.titleTask);
        this.labelLi.appendChild(this.checkboxLi);
        this.labelLi.appendChild(this.checkboxLiCustom);

        const button = document.createElement("button");
        // button.classList.add("btnDelete");
        button.textContent = "✖";
        button.id = task.id;
        li.appendChild(button);

        button.addEventListener("click",()=>{
            const id = button.id;
            this.deleteTask(id);
            li.remove();
        })
    }


    deleteTask(id) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', 'http://localhost:4001/list/' + id, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        // debugger;
        xhr.send();
        // xhr.onreadystatechange = () => {
        //     if (xhr.readyState === 4) {
        //         if (xhr.status === 200) {
        //             this.renderOne(JSON.parse(xhr.response));
        //         } else {
        //             console.error(xhr.status, xhr.statusText);
        //         }
        //     }
        // };
    }

    handleEvents() {
        this.form.addEventListener("submit", (eventObject) => {
            eventObject.preventDefault();
            this.addTask();
        });
    }

    addTask() {
        const reguestBody = {
            title: this.input.value
        };
        this.cleanInput();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:4001/list', true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(reguestBody));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.renderOne(JSON.parse(xhr.response));
                } else {
                    console.error(xhr.status, xhr.statusText);
                }
            }
        };
        // console.log(reguestBody);
    }

    fetchListData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:4001/list', true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.renderList(JSON.parse(xhr.response));
                } else {
                    console.error(xhr.status, xhr.statusText);
                }
            }
        };
    }

    cleanInput() {
        this.input.value = "";
        console.log("Clean input!");
    }

}

new TaskList(document.querySelector('#taskList'));


