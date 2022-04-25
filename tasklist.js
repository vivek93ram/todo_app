

async function loadTaskList()
{

        async function fetchTaskList (url) 
        {
            let response = await fetch(url);
            let data = await response.json();
            return data;
          }


          var taskList = await fetchTaskList("https://jsonplaceholder.typicode.com/todos");  
                
          var tasklistDiv = document.getElementById("form-check-label");
    

          taskList.forEach(task => {

            if(task.completed === false)
            {
              tasklistDiv.innerHTML+="<div class='listItem'>"+"<input type='checkbox' class='form-check-input' id='form-check-input'>"+task.title+"</div>";
              

            }

            else
            {
              tasklistDiv.innerHTML+="<div class='listItem'>"+"<input type='checkbox' class='form-check-input' id='form-check-input' Disabled checked checkbox>"+task.title+"</div>";

            }
          
          });

};


loadTaskList();

