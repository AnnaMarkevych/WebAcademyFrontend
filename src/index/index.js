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

        const button = document.createElement("button");
        button.classList.add("btnDelete");
        button.textContent = "X";
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
        debugger;
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


