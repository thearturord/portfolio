import React from 'react';
import '../App.css';
import SkillComponent from '../components/SkillComponent.js';
import AppsComponent from '../components/AppsComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faHtml5, faJs, faCss3Alt, faReact, faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faIdCard } from '@fortawesome/free-solid-svg-icons';
import cv from '../pdf/CV.pdf';
/*import psImg from '../img/ps.png';*/
import psImg from '../img/photo_2024-08-02_cv.jpg';
import imageFetch from '../img/imagefetch.jpg';
import expensesList from '../img/expenseslist.jpg';
import taskList from '../img/tasklist.jpg';
import whattacook from '../img/whattacook.jpg';
import printHouse from '../img/printhouse.jpg';
import { Outlet, Link, useLocation } from "react-router-dom";



function Home () {
    let location = useLocation();
    return(
        <>
            <div className="block header-contact">
                <a className="text-decoration-none text-white" rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/thearturord'>Contact(at)arturonunez(dot)org</a> 
                <div>
                <a title='Github' rel="noreferrer" target='_blank' href='https://github.com/thearturord?tab=repositories'><FontAwesomeIcon icon={faSquareGithub} size='2xl' className="social-icon" /></a>
                <a title='Linkedin' rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/thearturord'><FontAwesomeIcon icon={faLinkedin} size='2xl' className="social-icon" /></a>
                <a title='Download CV - Resume' rel="noreferrer" target='_blank' href={cv} download="CV"><FontAwesomeIcon icon={faIdCard} size='2xl' className="social-icon" /></a>
                </div>
            </div>
            <main>
                <div className="block about">
                    <div className="about-img-wrap">
                        <img className="img-fluid about-img rounded" src={psImg} alt=""></img>
                    </div>
                    <div className="about-title">
                        <h2>
                            Welcome to my personal portfolio              
                        </h2>
                        <p className="about-title-p"> 
                            My name is Arturo Nuñez. I am from Spain, raised in the Dominican Republic, currently living in Berlin. <br/>
                            In this portfolio you will be able to find a quick overview of my stack and projects.
                        </p>              
                    </div>
                </div>

                <div className="block skill-set">
                    <div className="skill-set-title">
                        <h2>Skills Set</h2>
                    </div>
                    <div className='skill-set-wrap'>
                        <div className='row skill-set-row'>
                        <SkillComponent skillName="HTML" skillDescription="The standard markup language for documents designed to be displayed in a web browser." icon={faHtml5} skillColor="#F56A0A" />   
                        <SkillComponent skillName="Java Script" skillDescription="A programming language and core technology of the Web, alongside HTML and CSS." icon={faJs} skillColor="#F0DC4E" />  
                        <SkillComponent skillName="CSS" skillDescription="A style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML" icon={faCss3Alt} skillColor="#2D53E5" /> 
                        </div>
                        <div className='row skill-set-row'>
                        <SkillComponent skillName="JS React" skillDescription="A free and open-source front-end JavaScript library based on components. Maintained by Meta and the community of developers." icon={faReact} skillColor="#08DBFD"/> 
                        <SkillComponent skillName="NodeJS" skillDescription="A cross-platform, open-source JavaScript runtime environment. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser." icon={faNode} skillColor="#58A149"/> 
                        <SkillComponent skillName="SQL" skillDescription="A domain-specific language used to manage data, especially in a relational database management system." icon={faDatabase} skillColor="#7CC3ED" /> 
                        </div>    
                    </div>        
                </div>

                <div className="block apps">
                    <div className="apps-header">
                        <h2>
                            Apps Library
                        </h2>
                        {
                        location.pathname === "/apps" ? 
                        <Link to='/' className="btn btn-light explore-btn">
                            Hide
                        </Link> 
                        : 
                        <Link to='/apps' className="btn btn-light explore-btn">
                            Load More
                        </Link>
                        }
                    </div>
                    <div className="row apps-wrap">
                        <AppsComponent img={imageFetch} appName="Image Fetcher" hrefApp="https://imagefetch1212.netlify.app/" 
                        hrefCode="https://github.com/thearturord/imagefetch1212"
                        appSkills = {{
                        skillName: ["JavaScript", "HTML"],
                        skillPorcentage: ["55%","45%"],
                        SkillColor: ["progress-bar progress-bar-striped", "progress-bar progress-bar-striped bg-success"]
                        }} />
                        <AppsComponent img={taskList} appName="Task List" hrefApp="https://react-list-app1212.netlify.app/"
                        hrefCode="https://github.com/thearturord/React_task_list" 
                        appSkills = {{
                        skillName: ["JavaScript", "HTML"],
                        skillPorcentage: ["60%","40%"],
                        SkillColor: ["progress-bar progress-bar-striped", "progress-bar progress-bar-striped bg-success"]
                        }} />
                        <AppsComponent img={whattacook} appName="Whattacook" hrefApp="https://whattacook.netlify.app/"
                        hrefCode="https://github.com/thearturord/recipe-redi" 
                        appSkills = {{
                        skillName: ["JavaScript", "HTML"],
                        skillPorcentage: ["98%","2%"],
                        SkillColor: ["progress-bar progress-bar-striped", "progress-bar progress-bar-striped bg-success"]
                        }}/>
                        <AppsComponent img={expensesList} appName="Expenses List" hrefApp={"https://firebaseapp.arturonunez.org/"}
                            hrefCode={"https://github.com/thearturord/expensesList"}
                            appSkills = {{
                            skillName: ["JavaScript","HTML" , "CSS"],
                            skillPorcentage: ["96%","3%", "1%"],
                            SkillColor: ["progress-bar progress-bar-striped", "progress-bar progress-bar-striped bg-success", "progress-bar progress-bar-striped bg-danger"]
                        }} />
                        <AppsComponent img={printHouse} appName="Print House" hrefApp="https://jf-print.netlify.app/"
                        hrefCode="https://github.com/thearturord/fullpage-js" 
                        appSkills = {{
                        skillName: ["PHP", "JavaScript", "HTML", "CSS"],
                        skillPorcentage: ["75%","10%","10%", "5%"],
                        SkillColor: ["progress-bar progress-bar-striped bg-warning", "progress-bar progress-bar-striped", "progress-bar progress-bar-striped bg-success", "progress-bar progress-bar-striped bg-danger" ]
                        }}/>            
                    </div>
                    <Outlet/>                    
                    {
                        location.pathname === "/apps" ? 
                        <Link to='/' className="btn btn-light explore-btn-mobile">
                            See Less
                        </Link> 
                        : 
                        <Link to='/apps' className="btn btn-light explore-btn-mobile">
                            Load More
                        </Link>
                    }
                </div>
            </main>
            <div className="block footer">
                <h4>Portfolio Arturonunez.org</h4>
            </div>                        
        </>
    );
}

export default Home;


