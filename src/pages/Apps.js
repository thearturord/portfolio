import AppsComponent from '../components/AppsComponent.js';
import diazClothes from '../img/diazclothes.jpg';
import ayPanda from '../img/aypanda.jpg';
import underDevelopment from '../img/under development.jpg';
import reactRouter from '../img/reactrouter.jpg';

function Apps () {
    return(
        <div className="row apps-wrap">
                    <AppsComponent img={diazClothes} appName="Diaz Clothes" hrefApp="https://diazclothes.com/" 
                    hrefCode={undefined}
                    appSkills = {{
                    skillName: ["Wordpress"],
                    skillPorcentage: ["100%"],
                    SkillColor: ["progress-bar progress-bar-striped bg-info"]
                    }} />
                    <AppsComponent img={ayPanda} appName="Ay Panda" hrefApp="https://aypanda.com/"
                    hrefCode={undefined}
                    appSkills = {{
                    skillName: ["Wordpress"],
                    skillPorcentage: ["100%"],
                    SkillColor: ["progress-bar progress-bar-striped bg-info"]
                    }} />  
                    <AppsComponent img={reactRouter} appName="React Router" hrefApp="https://react-router-blog1212.netlify.app/"
                    hrefCode="https://github.com/thearturord/React_router_blog" 
                    appSkills = {{
                    skillName: ["JavaScript", "HTML"],
                    skillPorcentage: ["55%","45%"],
                    SkillColor: ["progress-bar progress-bar-striped", "progress-bar progress-bar-striped bg-success"]
                    }}/>                          
                    <AppsComponent img={underDevelopment} appName="On development" hrefApp={undefined}
                    hrefCode={undefined}
                    appSkills = {{
                    skillName: [undefined],
                    skillPorcentage: [undefined],
                    SkillColor: [undefined]
                    }} /> 
                    <AppsComponent img={underDevelopment} appName="On development" hrefApp={undefined}
                    hrefCode={undefined}
                    appSkills = {{
                    skillName: [undefined],
                    skillPorcentage: [undefined],
                    SkillColor: [undefined]
                    }} />       
                </div>
    );
} 

export default Apps;