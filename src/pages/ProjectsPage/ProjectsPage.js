import ProjectList from '../../components/Projects/ProjectList/ProjectList';
import './styles.css';

const ProjectsPage = () => {
    return (
        <div className='project_page'>
            <h1>My Projects</h1> 
            <hr />
            <ProjectList />     
        </div>
    )
}

export default ProjectsPage
    