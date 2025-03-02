const buttons = document.querySelectorAll(".task-button button");

let clickCount = 0;

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        alert('Board Updated Successfully!');

        clickCount += 1;

        if (clickCount == buttons.length) {
            alert('Congrates! You have completed all the tasks!');
        }

        event.target.classList.remove('bg-blue-800')
        event.target.classList.add('bg-gray-500')
        event.target.disabled = true;


        let taskCountTag = document.getElementById('task-count');
        let taskCount = parseInt(taskCountTag.innerText);
        taskCount -= 1;
        taskCountTag.innerText = taskCount;

        const completeTaskTag = document.getElementById('complete-task');
        let cTaskCount = parseInt(completeTaskTag.innerText)
        cTaskCount += 1;
        completeTaskTag.innerText = cTaskCount;

        const taskTitleDiv = event.target.closest(".single-task");
        const taskTitle = taskTitleDiv.querySelector('.task-title h3').innerText;

        const time = new Date();
        const modifiedTime = time.toLocaleTimeString("en-US", { hour12: true });


        const activityLists = document.getElementById('activity-lists');
        activityLists.innerHTML += `
            <li class="single-activity">You have complete the task <strong>${taskTitle}</strong> at ${modifiedTime}</li>
        `
    })
}

document.getElementById('clear-button').addEventListener('click', function (event) {
    document.getElementById('activity-lists').innerHTML = '';
})

document.getElementById('change-bg-button').addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.querySelector('body').style.backgroundColor = randomColor;
})

function getRandomColor() {
    const letters = "0123456789ABCDEF"; // Hex values
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const date = new Date();
const formattedDate = date.toDateString();

document.getElementById('current-time').innerText = formattedDate;
