import React from 'react'

const ProjectItem = ({data, openModal}) => {
  return (
    <li className="flex flex-col h-full items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
        <img src={data.imgUrl} alt="Explorer" className="mb-6" />
        <h3 className="text-3xl text-center text-slate-900 dark:text-white">{data.title}</h3>
        <button onClick={openModal} className="mt-5 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            More
        </button>
    </li>
  )
}

export default ProjectItem