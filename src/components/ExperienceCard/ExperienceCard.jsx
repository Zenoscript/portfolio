import React from 'react';
import "./ExperienceCard.css"

const ExperienceCard = ({image, title, timeline, bodyText}) => {
  return (
    <div className='experience-card'>
      <div className="experience-card-header">
        <div className="experience-card-header-left">
        <img src={image} alt=""/>
        <h4 className='txt-light'>{title}</h4>
        </div>
        <h6 className='txt-light'>{timeline}</h6>
      </div>
      <div className="experience-card-body">
        <p className='txt-light'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vitae mollitia similique totam laudantium voluptates molestiae dolorum, nobis placeat tenetur iste reiciendis excepturi quod aut. Earum amet, ut quidem fugiat hic nisi suscipit itaque voluptatibus delectus quaerat inventore sit sequi corrupti et impedit optio veniam eos illo iusto commodi quia tempora animi saepe doloremque? Possimus qui ducimus cupiditate autem temporibus.
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard
