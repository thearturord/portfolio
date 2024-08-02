import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SkillComponent (props) {
    return(
        <div className='col single-skill shadow rounded'>
            <div className='skill'> 
                <FontAwesomeIcon icon={props.icon} size='2xl' style={{color: props.skillColor, fontSize: "100px"}}/>
            </div>
            <div className='skill-content'>
                <h3>{props.skillName}</h3>
                <p>{props.skillDescription}</p>
            </div>
        </div>
    );
}

export default SkillComponent;