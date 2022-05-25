
# We the People
## See the app, deployed on Surge [here](https://wethepeople.surge.sh/).


![CD Badge](https://github.com/github/docs/actions/workflows/main.yml/badge.svg))  ![CI Badge](https://github.com/Mod-4-Capstone/we-the-people-fe/actions/workflows/deploy.yml/badge.svg)

[To be inserted... Screenshot/GIF of landing page]
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
You can see the site deployed on [surge](https://wethepeople.surge.sh/).

You can also clone down the [backend repo](https://github.com/Mod-4-Capstone/we_the_people_be) to see endpoints, JSON contract, etc or access the [deployed backend](https://we-the-people-be.herokuapp.com/).

## Features

### Landing Page and Quiz

The landing page of <em>We The People</em>

[To be inserted... demo gif of main dashboard]
<details>
  <summary>Under the Hood</summary>
  Components `App`, `Layout`, `Header`, `Footer`, and the controlled-form of `Quiz` are being rendered. Within `Header` the component `State Dropdown` is being rendered. The user is able to fill out two inputs and respond to the 10 statements via a rating on a likert scale. Once the user clicks `Get My Results!` they are taken to the Representatives with Quiz Result view.
</details>
</br>

### Representatives with Quiz Result

Description of what the component does

[To be inserted... demo gif of Representatives with Quiz Result]
<details>
  <summary>Under the Hood</summary>
   The user's quiz responses are sent to our backend server, along with the user's zipcode. The user's congressional representatives based on zip code and state senators are displayed for the user. The user's responses are held in state as well as being sent to the backend and are used to calculate matches, in percentages, to how representatives are rated by third-party organizations. The user can select other states to see how they apply based on their current quiz responses.
</details>
</br>

### Representatives without Quiz Result

Description of what the rep w/o a quiz does/looks like

[To be inserted... demo gif of Representatives without Quiz Result via state dropdown]
<details>
  <summary>Under the Hood</summary>
  A POST request is sent the the server and responses similar to those shown for a user who has taken the quiz are displayed. These cards conditionally display information to the user that are particular to the representative, but do not include the user's thoughts as those would have to be gathered throught the quiz.
</details>
</br>

### Testing

We The People is fully end-to-end tested with Cypress. URLs are tested and network requests are stubbed. Cypress runs during continuous integration on each push to or merge into `main`

[To be inserted... demo gif of Cypress running]


### Responsive Design & Accessibility

We The People was built to be responsive across desktop, laptop, tablet, and mobile screen sizes and be fully tab and touch focusable for screen-reader accessibility. We are committed to continually improving to ensure our site is accessible to all users and welcome any and all feedback!

[Demo gif of Responsive Design

## Future Iterations
- Add information related to upcoming elections to representatives' cards for user to engage with
- 
- Employ agile methodology by gathering and tailoring features based on user feedback. For example, determine the most effective phrasing of statements ranked by users using A/B testing

## Credits
### Authors: 
<table>
    <tr>
        <td> Jess Fatta  <a href="https://github.com/JessFatta">GitHub</td>
        <td> Maddie Law  <a href="https://github.com/maddielaw">GitHub</td>
        <td> Nicole Valentini  <a href="https://github.com/nvalentini21">GitHub</td>
        <td> Zach Liibbe <a href="https://github.com/zliibbe">GitHub</td>
    </tr>
<td><img src="https://github.com/JessFatta.png" alt="Jess"
 width="150" height="auto" /></td>
<td><img src="https://github.com/maddielaw.png" alt="Maddie"
 width="150" height="auto" /></td>
 <td><img src="https://github.com/nvalentini21.png" alt="Nicole"
 width="150" height="auto" /></td>
 <td><img src="https://github.com/zliibbe.png" alt="Zach"
 width="150" height="auto" /></td>
</table>

[Turing School of Software and Design's](https://github.com/turingschool-examples) Project Expectations, Evaluation, & Rubric that served as guidance for this project can be found [here](https://mod4.turing.edu/projects/capstone/).