import DnD from '../../assets/images/dungeonsAndDevs.png';
import DnDReact from '../../assets/images/dungeonsAndDevsReact.png';
import KYM from '../../assets/images/knowYourMusic.png';
import CodeQuiz from '../../assets/images/jsCodingQuiz.png';
import JFForm from '../../assets/images/jfRequestForm.png';
import PasswordGen from '../../assets/images/passwordGenerator.png';
import Refactor from '../../assets/images/horiseon.png';


const CarouselData = [
    {
        image: `${DnDReact}`,
        alt: 'Dungeons and Devs app screenshot',
        description: 'Dungeons and Devs is a the redesign of a previous card style web app, built with React and GraphQL. My involvment included JavaScript logic, wireframe/design, as well as deployment and database management.',
        title: 'Dungeons and Devs',
        github: 'https://github.com/hackpres/DnDevs_React',
        deployed: 'https://dungeons-n-devs.herokuapp.com/',
    },
    {
        image: `${DnD}`,
        alt: 'DnDevs app screenshot',
        description: 'DnDevs is a simple card style web game. My involvment included battle logic, character class structure, design, and database structure.',
        title: 'DnDevs',
        github: 'https://github.com/wtguenthner/Dungeons-Devs',
        deployed: 'https://dungeons-devs.herokuapp.com/',
    },
    {
        image: `${KYM}`,
        alt: 'Know Your Music screenshot',
        description: 'Know Your Music is an application that allows a user to search for an artist. Using the Spotify API, Know Your Music will allow the user to see artist data such as albums/album covers, artist images, artist popularity, etc.',
        title: 'Know Your Music',
        github: 'https://github.com/hackpres/KnowYourMusic',
        deployed: 'https://hackpres.github.io/KnowYourMusic/',
    },
    {
        image: `${CodeQuiz}`,
        alt: 'JavaScript Coding Quiz screenshot',
        description: 'Test your knowledge of JavaScript! This coding quiz was built to practice JS logic, and utilizes local storage to save a users Username, and HighScore!',
        title: 'JavaScript Quiz',
        github: 'https://github.com/hackpres/codingQuiz',
        deployed: 'https://hackpres.github.io/codingQuiz/',
    },
    {
        image: `${JFForm}`,
        alt: 'Johnson Ferry Baptist Church video production request form',
        description: 'A design concept for a video request form, built for the Production Department at Johnson Ferry Baptist Church.',
        title: 'Johnson Ferry Form',
        github: 'https://github.com/hackpres/JFSurveyForm',
        deployed: 'https://hackpres.github.io/JFSurveyForm/',
    },
    {
        image: `${PasswordGen}`,
        alt: 'Dungeons and Devs app screenshot',
        description: 'A simple password generator. Utilizing JavaScript this app randomly generates alphanumeric and/or special characters to create a unique password based on user input for length and types of characters.',
        title: 'Password Generator',
        github: 'https://github.com/hackpres/passwordGen',
        deployed: 'https://hackpres.github.io/passwordGen/',
    },
    {
        image: `${Refactor}`,
        alt: 'Horiseon site screenshot',
        description: 'Very basic HTML code refactor',
        title: 'Horiseon',
        github: 'https://github.com/hackpres/horiseonRefactor',
        deployed: 'https://hackpres.github.io/horiseonRefactor/#social-media-marketing',
    },
];

export default CarouselData;