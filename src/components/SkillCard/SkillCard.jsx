import React from "react";
import "./SkillCard.css";

const SkillCard = ({ Icon, text, type }) => {
  return (
    <div className="skillcard" style={{backgroundColor: type==="dark"?"black":'transparent'}}>
      <span>{Icon}</span>
      <p style={{color: type==="dark"?"white":'black'}}>{text}</p>
    </div>
  );
};

export default SkillCard;
