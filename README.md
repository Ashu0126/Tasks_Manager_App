# Tasks_Manager_App
This is NodeJs app. In this i used yarn and mongoose modules. You can CRUD operations in this task manager app.

For Creating a task
node index create --description="description-name" --completed="true or false"
![image](https://user-images.githubusercontent.com/91365712/154816830-df8e1814-18ba-4490-8bac-264ff224b46e.png)

For Listing All Task
node index list
![image](https://user-images.githubusercontent.com/91365712/154816880-bb2a87c2-fe67-4d49-b586-c922ae19c29b.png)

For Listing the incomplete task
node index incomplete
![image](https://user-images.githubusercontent.com/91365712/154816907-6ff4eca0-5184-4a9a-91b3-4b8f461cb474.png)

For Updating a task (changing the incomplete task to complete)
node index update --description="description-name" --completed="true"
![image](https://user-images.githubusercontent.com/91365712/154816924-1222b80f-029d-407f-a57c-96663ba37ad4.png)
Note:- You can check whether its change of not by running the list command or incomplete command

For Deleting a task 
node index delete --id="id-no."
![image](https://user-images.githubusercontent.com/91365712/154816985-fc7c3f3e-813a-4656-bfa3-4ee6333ed0fd.png)
Note:- Id-no. can get from the the list and incomplete task
