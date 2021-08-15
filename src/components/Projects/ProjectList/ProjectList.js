import ProjectItem from '../ProjectItem/ProjectItem';
import './styles.css';

const projects = [
    {
        id: 'proj1', 
        name: 'Moria Bookstore', 
        description: 'An e-commerce website made using React',
        image: 'images/projects/moria-bookstore.png',
        url: 'https://moria-bookstore.netlify.app'
    },
    {
        id: 'proj2', 
        name: 'Rodwin\'s Gaming Blog', 
        description: 'A gaming blog made using Next.js',
        image: 'images/projects/blog.png',
        url: 'https://rodche-gaming-blog.netlify.app'
    },
    {
        id: 'proj3', 
        name: 'Note app', 
        description: 'A note-taking app made using React.js',
        image: 'images/projects/note-app.png',
        url: 'https://notetaker-app.netlify.app'
    },
    {
        id: 'proj4', 
        name: 'Quizzer', 
        description: 'A quiz site made using React.js',
        image: 'images/projects/quizzer.png',
        url: 'https://rodche-react-quizzer.netlify.app'
    },
    {
        id: 'proj5', 
        name: 'Rodwin\'s Tavern', 
        description: 'A restaurant website made using Next.js',
        image: 'images/projects/tavern.png',
        url: 'https://rodche-tavern.netlify.app'
    },
    {
        id: 'proj6', 
        name: 'Countries Database', 
        description: 'A searchable countries database website using React',
        image: 'images/projects/countriesdb.png',
        url: 'https://countries-db.netlify.app'
    },
]

const ProjectList = () => {
    return (
        <div className='project_list'>
            {projects.map(project => (
                <ProjectItem
                key={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                url={project.url}
                />
            ))}
        </div>
    )
}

export default ProjectList
