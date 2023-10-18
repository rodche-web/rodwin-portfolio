import {useState} from 'react'
import aes from '../assets/images/aes-dashboard.png'
import nfaps from '../assets/images/pshs-nfaps.png'
import erp from '../assets/images/pshs-erp.png'
import sis from '../assets/images/pshs-sis.png'
// import rgb from '../assets/images/rodwin-game-blog.png'
import ProjectItem from './ProjectItem'
import ModalCard from "./ModalCard";

const projectsList = [
    {
        imgUrl: nfaps,
        title: 'New Freshmen Admissions Processing System',
        description: 'An online platform that lets users apply for the Philippine Science High School National Competitive Examination.',
        url: 'https://nce.pshs.edu.ph/'
    },
    {
        imgUrl: aes,
        title: 'Automated Examination System',
        description: 'An online platform used by National Privacy Commission for examination and certification during the time of COVID-19.'
    },
    {
        imgUrl: erp,
        title: 'Project Monitoring System',
        description: 'A enterprise resource planning web application that enables management of projects and tracking of budget and expenditures.'
    },
    {
        imgUrl: sis,
        title: 'Student Information System',
        description: 'A centralized system used by Philippine Science High School to store, monitor, and analyze student records effectively. It also allows its users to export a PDF copy of a student\'s report card.'
    },
    // {
    //     imgUrl: rgb,
    //     title: 'Rodwin\'s Game Blog',
    //     description: 'A personal project. A mock gaming blog I made back when I was still learning how to code a few years ago. Made using React and Next.js.',
    //     url: 'https://rodche-gaming-blog.netlify.app/'
    // },
]

const Projects = () => {
    const [modalData, setModalData] = useState({})

    const openModal = idx => {
        setModalData(projectsList[idx])
    }
 
    return (
        <section id="projects" className="p-5 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">My Projects</h2>
            <ul className="list-none mx-auto my-12 grid grid-cols-1 sm:grid-cols-4 gap-8 max-w-6xl place-items-center">
                {projectsList.map((item, idx) => <ProjectItem key={idx} data={item} openModal={() => openModal(idx)} />)}
            </ul>
            <ModalCard isOpen={modalData && Object.keys(modalData).length} onClose={() => setModalData({})} data={modalData} />
        </section>
    )
}

export default Projects