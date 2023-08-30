import {useState} from 'react'
import aes from '../assets/images/aes-dashboard.png'
import nfaps from '../assets/images/pshs-nfaps.png'
import sis from '../assets/images/pshs-sis.png'
import ProjectItem from './ProjectItem'
import ModalCard from "./ModalCard";

const projectsList = [
    {
        imgUrl: aes,
        title: 'Automated Examination System',
        description: 'An online platform for examination and certification during the time of COVID-19.'
    },
    {
        imgUrl: sis,
        title: 'Student Information System'
    },
    {
        imgUrl: nfaps,
        title: 'New Freshmen Admissions Processing System'
    }
]

const Projects = () => {
    const [modalData, setModalData] = useState({})

    const openModal = idx => {
        setModalData(projectsList[idx])
    }
 
    return (
        <section id="projects" className="p-5 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">My Projects</h2>
            <ul className="list-none mx-auto my-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl place-items-center">
                {projectsList.map((item, idx) => <ProjectItem key={idx} data={item} openModal={() => openModal(idx)} />)}
            </ul>
            <ModalCard isOpen={modalData && Object.keys(modalData).length} onClose={() => setModalData({})} data={modalData} />
        </section>
    )
}

export default Projects