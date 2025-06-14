const ToDoList=[{
    name: '',
    dueDate: ''
}];

renderToDoList();

function renderToDoList(){
    let todoListHTML='';
    for(let i=0;i<ToDoList.length;i++){
        const todoObject=ToDoList[i];
        const {name,dueDate}=todoObject;
        const html=`
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button onclick="
                ToDoList.splice(${i},1);
                renderToDoList();
            " class="del-button" >Delete</button>
            `;
        todoListHTML+=html;
    }

    document.querySelector('.js-name-output').innerHTML=todoListHTML;
}

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;

    const dateInputElement=document.querySelector('.js-dueDate-input');
    const dueDate=dateInputElement.value;

    ToDoList.push({
        name,
        dueDate
    });

    inputElement.value='';
    renderToDoList();
}

//document.querySelector('.js-add-todo-button').addEventListener('click',() => {addTodo();});



