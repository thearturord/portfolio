import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode } from '@fortawesome/free-solid-svg-icons';

function AppsComponent (props) {
   
    const appSkills = props.appSkills.skillName;
    const appSkillsPorcentage = props.appSkills.skillPorcentage;
    const appSkillColor = props.appSkills.SkillColor;
    const hrefCode = props.hrefCode;
    const hrefApp = props.hrefApp;
    const appName = props.appName;    

    return(
        
        <div className='col single-app'>
            <div className="app-img-wrap">
                <img className="img-fluid" src={props.img} alt="" title='img'></img>                
            </div>
            <div className="app-name">
                <h3 className="text-center">{props.appName}</h3>
            </div>
            {appName !== "Coming soon" ? <div className="appSkillWrap">
                <div className="progress">
                    {appSkillsPorcentage ? appSkillsPorcentage.map((porcentage, index) => {
                        return (
                            <div key={index} className={appSkillColor[index]} aria-valuenow={porcentage} aria-valuemin="0" aria-valuemax="100" style={{width: porcentage}}></div>
                        )
                    }) : ""}
                </div>
                {appSkills ? appSkills.map((appSkill, index) => {
                    return(                        
                        <span className={"appSkill " + appSkill} key={index}>{appSkill}</span>                    
                    ) 
                }) : ""}
            </div> : ""}
            <div className="app-button-wrap">
                {hrefCode ? <a className="apps-a" title='Github Repo' rel="noreferrer" target='_blank' href={hrefCode}><FontAwesomeIcon icon={faCode} /></a> : ""}
                {hrefApp ? <a className="apps-a" title='View App' rel="noreferrer" target='_blank' href={hrefApp}><FontAwesomeIcon icon={faEye} /></a>: ""}
            </div>
        </div>
        
    );
}

export default AppsComponent;