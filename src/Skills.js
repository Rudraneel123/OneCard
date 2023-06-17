import React from "react";
import { Card } from "react-bootstrap";

function Skills() {
    const skills = [
        { name: 'HTML & CSS', image: 'htmlcss.png' },
        { name: 'JavaScript', image: 'JavaScript.png' },
        { name: 'React', image: 'logo192.png' },
        { name: 'Git', image: 'git.png' },
        { name: 'Python', image: 'py.png' },
      ];
  return <div>
    <Card style={{border:'palegreen',paddingLeft:'20px',marginTop:'78px',background:'linear-gradient(to bottom,#D2E529, #2E6575)',marginRight:'196px',marginLeft:'20px',marginTop:'15px',height:'132px'}}>
    <h2>
        <ul style={{listStyleType:"none",padding:0}}>
            <h6>Skills:</h6>
            {skills.map((skill,index)=>(
                 <li key={index} style={{display:'flex',alignItems:'center',fontSize:'12px',fontFamily:"sans-serif"}}>
                    
                     <span>{skill.name}</span>
                    <img src={skill.image} alt={skill.name} style={{height:'20px',width:'20px',border:'black',borderRadius:'15px'}}/>
                   
                    </li>
            ))}
        </ul>
    </h2>
    </Card>
  </div>;
}

export default Skills;
