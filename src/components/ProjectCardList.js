import React, { useState, Fragment } from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data/portfolio-data'

const ProjectCardList = (props) => {
  return (
    <div className='project-card-grid'>
      {PROJECTS.map((project) => {
        return <ProjectCard key={project.id} {...project} />
      })}
    </div>
  )
}

export default ProjectCardList
