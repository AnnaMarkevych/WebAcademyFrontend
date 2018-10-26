import './index.scss';


class TaskList {
    constructor (rootElement) {
        this.rootElement = rootElement;
        this.render();
        this.handleEvents();
        this.fetchListData();
    }

    render () {
        this.rootElement.classList.add("taskList");

        const tittle = document.createElement("h1");
        tittle.textContent = "Task List";

        this.form = document.createElement("form");
        this.input = document.createElement("input");
        this.ul = document.createElement("ul");

        this.form.appendChild(this.input);

        this.rootElement.appendChild(tittle);
        this.rootElement.appendChild(this.form);
        this.rootElement.appendChild(this.ul);
    }

    renderList(taskList) {
        taskList.forEach((task) => {
            this.renderOne(task);
        })
    }

    renderOne(task){
        const  li = document.createElement('li');
        li.textContent = task.title;
        this.ul.appendChild(li);
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

}

new TaskList(document.querySelector('#taskList'));


