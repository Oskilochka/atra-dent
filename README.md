# This repository include 2 parts of task

> To check the result for task 1 you need to write url /doctors and to check the second task -> /schedule.

## Task part 1

### Task description:
The main goal is to create a responsive frontend widget with the heading, text lead, and doctors list with pagination, powered by API.

### Task details:
* Design mockups for desktop and mobile versions are attached.
> https://www.dropbox.com/s/miykuagpfntudoc/desktop_about.pdf?dl=0
> https://www.dropbox.com/s/n3lvnq1bbzwyfbc/mobile_about.pdf?dl=0

* Data should be fetched from API endpoint 
> https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors

* Only doctors widget with the heading, lead text, and doctors list with pagination is expected as a result, other page elements can be faked as pictures to give the page a realistic look or can just be ignored.

* Developer should follow design mockup with maximum pixel-perfect similarity (different fake photos from API should at least fit their slots decently). There are no specific design mockups for tablet resolutions, developer should try to adapt the responsive layout for tablet resolutions to look good based on his/her own common sense and feel of beauty.

* Each doctor card should have a slight hover effect (not shown on the design mockup) and open the fake link provided in API in the new tab.

* Doctors list should be paginated, not more than 10 doctors per page, the number of doctors per page can be changed to fit the design better. Pagination controls are not included to design mockups, the developer can create only pagination logic with common buttons, but creating own pagination styles based on other controls design that are presented on-page is a plus.

### Task conditions:
* In this task, the developer must use the actual version of React.js. 
* The result must look good in actual versions of all relevant browsers (Chrome, Firefox, Safari) 
* The developer can choose any libraries that he will use for the task, but please consider building such a simple interface piece from scratch.  

## Task part 2

### Create a component that will accept the following data for example:
> https://www.dropbox.com/s/18qqozhh34rbzxl/doctorsSchedule.json?dl=0

* This JSON describes the doctor's work time, where the "start" field is the beginning of the working day, and the "end" field is the end.
* The file also contains a list of already existing appointments, where for each entry the "start" field is the appointed appointment time, and the "duration" field is the duration of this appointment in minutes.
* You need to split the doctor's working hours into 45-minute cells, excluding those that fall within the range of existing appointments.

For example, for the file above, the output will be like this:
> [10:00, 11:30, 12:15, 13:00, 14:10]

> Please don’t create a fancy interface. The output should be presented as one "div" element with the contents of the array inside.
