import React from 'react';
import './styles.css';

const ProjectItem = ({name, description, image, url}) => {
    return (
        <div className='project_item'>
            <img src={image} alt={name} />
            <div className='project_item_text'>
                <h3>{name}</h3>
                <p>{description}</p>
                <a href={url}>Visit</a>
            </div>
        </div>
    )
}

export default ProjectItem
