function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskList = document.getElementById('taskList');
      const taskText = taskInput.value.trim();

      if (taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
          const span = li.querySelector('span');
          if (checkbox.checked) {
            span.classList.add('completed');
          } else {
            span.classList.remove('completed');
          }
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', function() {
          taskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);
        taskList.appendChild(li);

        taskInput.value = '';
      }
    }