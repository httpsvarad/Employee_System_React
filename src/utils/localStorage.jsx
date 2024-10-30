

const localData = [
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "123",
      "role": "employee",
      "tasks": [
        {
          "taskTitle": "Prepare Financial Report",
          "taskDescription": "Compile the financial report for Q4.",
          "taskDate": "2024-11-10",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Discuss project progress with the team.",
          "taskDate": "2024-11-15",
          "priority": "medium",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Client Presentation",
          "taskDescription": "Present the project proposal to the client.",
          "taskDate": "2024-11-20",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "password": "123",
      "role": "employee",
      "tasks": [
        {
          "taskTitle": "Database Update",
          "taskDescription": "Update the customer database with new entries.",
          "taskDate": "2024-11-05",
          "priority": "medium",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Security Check",
          "taskDescription": "Run a security check on all systems.",
          "taskDate": "2024-11-10",
          "priority": "high",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "System Backup",
          "taskDescription": "Perform a full system backup.",
          "taskDate": "2024-11-12",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "password": "123",
      "role": "employee",
      "tasks": [
        {
          "taskTitle": "Design Review",
          "taskDescription": "Review the latest design drafts.",
          "taskDate": "2024-11-07",
          "priority": "medium",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Feedback",
          "taskDescription": "Gather feedback from clients on the recent updates.",
          "taskDate": "2024-11-09",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "name": "David Williams",
      "email": "david.williams@example.com",
      "password": "123",
      "role": "employee",
      "tasks": [
        {
          "taskTitle": "Market Research",
          "taskDescription": "Research competitor products.",
          "taskDate": "2024-11-05",
          "priority": "medium",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Product Update",
          "taskDescription": "Update the product specifications.",
          "taskDate": "2024-11-06",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Check inventory levels for product stock.",
          "taskDate": "2024-11-08",
          "priority": "low",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "name": "Emma",
      "email": "emma.davis@example.com",
      "password": "123",
      "role": "employee",
      "tasks": [
        {
          "taskTitle": "Weekly Report",
          "taskDescription": "Organize and lead the monthly team meeting, including preparing a comprehensive agenda, assigning roles for key speakers & gathering necessary reports.",
          "taskDate": "2024-11-02",
          "priority": "high",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Project Planning",
          "taskDescription": "Update and review detailed project timelines with the team, ensuring each milestone is accurately recorded and potential delays are flagged.",
          "taskDate": "2024-11-10",
          "priority": "high",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Training",
          "taskDescription": "Prepare and present an in-depth quarterly performance summary, gathering data from all relevant departments, analyzing key metrics, and creating a visually engaging presentation.",
          "taskDate": "2024-11-12",
          "priority": "medium",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "name": "Admin",
      "email": "admin@abc.com",
      "password": "123",
      "role": "admin",
      "tasks": []
    }
  ]

export function setLocalStorage(){
    localStorage.setItem('localData',JSON.stringify(localData))

} 

export function getLocalStorage(){

    const local =  JSON.parse(localStorage.getItem('localData'))
    
    return {local}
    
} 
  