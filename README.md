<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<p align="center">
    <img src="./resource/images/carleton-u-logo.jpg" height="250">
</p>

<p align="center">
    <a href="">
        <img alt="Carleton University" src="https://img.shields.io/static/v1.svg?label=bootcamp&message=Carleton&color=blue" /></a>
    <a href="" >
        <img alt="JavaScript - Functions" src="https://img.shields.io/static/v1.svg?label=JavaScripts&message=functions&color=red" /></a>
    <a href="" >
        <img alt="JavaScript - Functions" src="https://img.shields.io/static/v1.svg?label=JavaScripts&message=arrays&color=yellow" /></a>
    <a href="" >
        <img alt="JavaScript - Prompts" src="https://img.shields.io/static/v1.svg?label=deployment&message=production&color=green" /></a>
    <a href="https://www.linkedin.com/in/gustavo-miller-42188481/">
        <img alt="LinkedIn Platforms" src="https://img.shields.io/static/v1.svg?label=linkedIn&message=linkedin&color=blue" />
    </a>
</p>
<br/>

# Carleton University - Bootcamp

## Module 04 JavaScript: Code Quiz Application

The challenge this week is to create an application that enables users to participate on a Quiz Game. The application will give user a set time of 60 seconds to complete the task. No worries, if you fail you can try again and you miss them all, we will give you some time to deal with your emotions and encourage you to try again.

<img src="./documents/images/CQC-001.png" height="750">

<!-- Source Section -->
## Source code
The source code is stored and maintained in Github; https://github.com/gusmiller/Code-Quiz-App. If you are reading this then you already have the URL. It includes additional documents that helped the development of the Code Quiz application. The public application can be found here:

```
https://gusmiller.github.io/Code-Quiz-App/
```
The latest version is <strong>Version 004</strong>. To visit the application and participate please click <a href="https://gusmiller.github.io/Code-Quiz-App/">Code-Quiz-App</a>

<!-- Business Requirements Section -->
## Business Requirements
The Code Quiz application should welcome the user and offer the option to participate. When user starts the process it will be presented with 5 questions prompted one at the time. Each question answered correctly will earn the user 20 points, but in the other hand if user answers incorrectly then is penalize with 10 seconds. The prompts are as follow:

<ul>
    <li>The internet has been around for more time that you think. Search engines are a very important feature of any browser.<br/> <strong>Which one was the first search engine in internet</strong>",</li>
    <li>An Internet Protocol Version 6 address (IPv6 address) is a numeric label that is used to identify and locate a network interface of a computer<br/><strong>Number of bit used by the IPv6 address</strong>"</li>
    <li>A web browser is an application for accessing websites. The purpose of a web browser is to fetch content from the World Wide Web or from local storage and display it on a user's device<br/><strong>Which one is the first web browser invented in 1990</strong>"</li>
    <li>A programming language is a system of notation for writing computer programs.[1] Most programming languages are text-based formal languages, but they may also be graphical.<br/><strong>Which of the following programming language is used to create programs like applets?</strong>"</li>
    <li>A computer virus is a type of malware that, when executed, replicates itself by modifying other computer programs and inserting its own malicious code into those programs.<br/><strong>First computer virus is known as</strong>"</li>
</ul>

# Quiz - Questions layout
The Layout of the Code Quiz is very simple. The index.html has a card styled using CSS and inside this object we have four divisions -Sections, <strong>Introduction Section, Questions Section, Completed Section and Time-out Section</strong>. These sections are hidden with exception of the Introduction which is where the process starts. Once the user starts the Quiz the Questions Section is revealed and timer is started. The questions are stored in an array; therefore we can display the correct question at any given time. 

User will select their choice and application will validate response. Business rules will determine whether user is granted 20 points or timer is reduces in 10 seconds, either way process will move to next question.

Here is the layout of the index.html
<img src="./documents/images/CQC-008.png" height="500">

During this process the JavaScript code keeps track of the time. If time runs out, the user's Quiz will be terminated.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Notes Section -->
## Notes to consider
The Code Quiz Game though it seems pretty simple, it was not. There was a lot of coding behind, plus there was a timer that ended the process, making it very difficult to handle

> **Note**: Parameters required in the process are as follow:
>
> * Validate time has not run out.
>
> * Validate user has completed the process and timer needs to be stopped.
>
> * Calculation of scores; in case it goes negative.
>
> * Option to restart process when Quiz is failed to be handled.

<!-- ROADMAP -->
## Roadmap
In the process of developing this application I have been using more and more the git commands and github features, such <strong>issues and wiki</strong>. Please visit my [Code Quiz Wiki](https://github.com/gusmiller/Code-Quiz-App/wiki) This will add great value to my resume and keep me sharp using this tool

- [ ] Dev-001 Build index page
  - [ ] Dev-001 Styling CSS Files
  - [ ] Dev-001 Questions flow
  - [ ] User Penalize for wrong answers
- [ ] Err-001 Page does not load
- [ ] Dev-002 Scores are to be shown
  - [ ] Dev-002 Build Score page
  - [ ] Dev-002 Add Scores Form
  - [ ] Dev-002 Complete the script
- [ ] Dev-003 Quiz not advancing (bug)
- [ ] Dev-004 Create README (documentation)
- [ ] Err-002 Link to scoreboard not showing

See the [open issues](https://github.com/gusmiller/Code-Quiz-App/issues) for a full list of proposed features (and known issues).
Note: last two issue have been intentionaly left open for graders to see that I am using this feature.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- LICENSE Section -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.



<!-- CONTACT Section -->
## Contact

In case you have any questions or would like me to help you in your IT needs, you may contact me at - gustavo.miller@miller-hs.com

Project Link: [https://gusmiller.github.io/Code-Quiz-App/](https://gusmiller.github.io/Code-Quiz-App/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Error Handling
There is no errr handling but there is a failed Quiz Message

<img src="./documents/images/CQC-007.png" height="550">

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved. Developed by Gustavo Miller
