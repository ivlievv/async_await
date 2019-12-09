'use strict';




const [loadTaskButton, postTaskButton] = document.getElementsByTagName('button');

loadTaskButton.onclick = async function () {
    try {

        const response = await fetch('http://192.168.0.106:3000/tasks');
        const tasks = await response.json();

        console.log(tasks)
    }catch (e) {
        console.error(e);
    }
};

postTaskButton.onclick = async  function f() {
    const  task = {
        value: "Ihor task value",
    };
    const response = await fetch('http://192.168.0.106:3000/task', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(task), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    }
    );

    const myTask = await response.json();
    console.log(myTask);

};



