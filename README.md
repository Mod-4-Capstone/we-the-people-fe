# We the People


![CI Badge](https://github.com/Mod-4-Capstone/we-the-people-fe/actions/workflows/main.yml/badge.svg)  ![CD Badge](https://github.com/Mod-4-Capstone/we-the-people-fe/actions/workflows/deploy.yml/badge.svg)

![image](https://user-images.githubusercontent.com/63659270/170382980-d398f76c-595e-4e52-9868-e9441a22be2e.png)

## Description

We The People is a team-project written with the React JavaScript framework in 14 days.

### Summary 

We The People is our Mod 4 capstone project at [Turing School of Software and Design](https://turing.edu/). The capstone project involves developers from the Front End and Back End program working together to create a full-stack application.

We recognize that the 117th Congress of the United States is [more diverse](https://www.pewresearch.org/fact-tank/2021/03/10/the-changing-face-of-congress/) than preceding 116 congresses. However, we can see that congress does not proportionally represent the people of the United States. Our site shows how Congress' demographics do not align with the general population. Furthermore, the user is able to examine each representative based on how the following organizations, reflective their stance on particular issues, rate them:
- Abortion - Planned Parenthood
- Budget, Spending, Taxes - Americans for Prosperity
- Civil Liberties & Civil Rights - American Civil Liberties Union
- Campaign Finance - End Citizens United
- Criminal Justice - National Association of Police Organization
- Education - National Education Association
- Environment - National Parks Convervation Association
- Gun Control - National Rifle Association
- Immigration - NumbersUSA
- Marijuana - National Organization for the Reform of Marijuana Laws

## Technology Used
- [React](https://reactjs.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) / [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React Router(v5)](https://v5.reactrouter.com/)
- [React Context API](https://reactjs.org/docs/context.html)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Cypress](https://www.cypress.io/)
- [Postman](https://www.postman.com/)
- [Excalidraw](https://excalidraw.com/)
  
## Wireframe
This site was built using this [wireframe](https://excalidraw.com/#room=4cf813c075fa07f1f8b0,0TMMUQkLfs2zU2xTwAmx4Q) as guidance.

## Deployment
You can see the site deployed on via surge [here](https://wethepeople.surge.sh/).

You can also clone down the [backend repo](https://github.com/Mod-4-Capstone/we_the_people_be) to see endpoints, JSON contract, etc or access the [deployed backend](https://we-the-people-be.herokuapp.com/).

## Features

### Landing Page and Representatives with Quiz Result

The landing page of <em>We The People</em> shows a header with a quote from the constitution and demographic disparities between the US Population and the body of Congress. After viewing these statistics the user is encouraged to fill out a questionaire by responding to 10 statements via a likert scale, ranging from strongly disagree to strongly agree. Once the user click the `Get My Results` button, they are taken to a page that displays congressional representatives based on the entered zipcode and compares the user's responses to the policticians views as rated by thir-party organizations. The user can then look at other states and see how other representatives compare to their current quiz answers.

![we-the-people-demo](https://user-images.githubusercontent.com/92049763/170544523-da554ee4-237c-4572-bedf-7def90dfd83a.gif)

<details>
  <summary>Under the Hood</summary>
    Components `App`, `Layout`, `Header`, `Footer`, and the controlled-form of `Quiz` are being rendered. Within `Header` the component `State Dropdown` is being rendered. The user is able to fill out two inputs and respond to the 10 statements via a rating on a likert scale. Once the user clicks `Get My Results!` they are taken to the Representatives with Quiz Result view. The user's quiz responses are sent to our backend server, along with the user's zipcode. The user's congressional representatives based on zip code and state senators are returned from the server. The user's responses are held in state as well as being sent to the backend and are used to calculate matches, in percentages, to how representatives are rated by third-party organizations. The user can select other states to see how they apply based on their current quiz responses that are held in state by React.
</details>
</br>

### Representatives without Quiz Result

If a user does not want to take the quiz they are able to select a state from the dropdown menu and see <em>all</em> the representatives for that state as well as how the representative is rated via Special Interest Groups(SIG). The user can also navigate to other states using the dropdown menu.

![we-the-people-new-state-demo](https://user-images.githubusercontent.com/92049763/170546639-adfc9d80-ae3d-47b1-b3c6-bc4cdf4c1503.gif)

<details>
  <summary>Under the Hood</summary>
  A POST request is sent the the server and responses similar to those shown for a user who has taken the quiz are displayed. These cards conditionally display information to the user that are particular to the representative, but do not include the user's thoughts as those would have to be gathered throught the quiz.
</details>
</br>

### Testing

We The People is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed. Cypress runs during continuous integration on each push to or merge into `main`, and all passing tests are reflected via the passing check (as seen in second image below).

![To be inserted... demo gif of Cypress running](https://media.giphy.com/media/yW7Ntn4RwJKbaaOwp4/giphy.gif)
<img width="800" alt="Screen Shot 2022-05-26 at 11 52 00 AM" src="https://user-images.githubusercontent.com/92831895/170550656-2d1cc1a9-b182-4c00-88f1-4e42a6d18e11.png">


### Responsive Design & Accessibility

We The People was built to be responsive across desktop, laptop, tablet, and mobile screen sizes and be fully tab and touch focusable for screen-reader accessibility. We are committed to continually improving to ensure our site is accessible to all users and welcome any and all feedback!

![mobile-we-the-people-with-the-quiz](https://user-images.githubusercontent.com/63659270/170545377-e8edbaf7-4894-4f2b-bd84-791326a84a7a.gif)

## Future Iterations
- Add information related to upcoming elections to representatives' cards for user to engage with
- Employ agile methodology by gathering and tailoring features based on user feedback. For example, determine the most effective phrasing of statements ranked by users using A/B testing
- Expand scope to inlcude information regarding upcoming elections
- Expand scope to include local elections (e.g. State, County, City) and focus on providing information on new reps rather than incumbents

## Credits
### Authors: 
<table style="width:75%">
    <tr>
        <th>Jess Fatta</th>
        <th> Maddie Law</th>
        <th> Nicole Valentini</td>
        <th> Zach Liibbe</td>
    </tr>
    <tr>
        <td>  
        <a href="https://github.com/JessFatta">GitHub  -
        <a href="https://www.linkedin.com/in/jessica-fatta/">LinkedIn</td>
        </td>
        <td>
        <a href="https://github.com/maddielaw">GitHub  -
        <a href="https://www.linkedin.com/in/mlaw1/">LinkedIn</td>
        </td>
        <td>
        <a href="https://github.com/nvalentini21">GitHub  -
        <a href="https://www.linkedin.com/in/nicole-valentini-9a576516b/">LinkedIn</td>
        </td>
        <td>
        <a href="https://github.com/zliibbe">GitHub  -
        <a href="https://www.linkedin.com/in/zachliibbe/">LinkedIn
        </td>
    </tr>
    <tr>
    </tr>
    <tr>
<td><img src="https://github.com/JessFatta.png" alt="Jess"
 width="150" height="auto" /></td>
<td><img src="https://github.com/maddielaw.png" alt="Maddie"
 width="150" height="auto" /></td>
 <td><img src="https://github.com/nvalentini21.png" alt="Nicole"
 width="150" height="auto" /></td>
 <td><img src="https://github.com/zliibbe.png" alt="Zach"
 width="150" height="auto" /></td>
</table>
</tr>

[Turing School of Software and Design's](https://github.com/turingschool-examples) Project Expectations, Evaluation, & Rubric that served as guidance for this project can be found [here](https://mod4.turing.edu/projects/capstone/).