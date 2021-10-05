import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'
import DescriptionList from './DescriptionList'

const ProjectCard = ({
  projectName,
  url,
  githubLink,
  description,
  imageLink,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width='100%' src={imageLink} alt={projectName} />
        <CardBody>
          <CardTitle tag='h5'>{projectName}</CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            {description.descriptionText}
          </CardSubtitle>
          <CardText>
            <DescriptionList list={description.descriptionList} />
          </CardText>
          <a href={url} className='btn btn-primary m-1 button-styles'>
            Live Project
          </a>
          <a href={githubLink} className='btn btn-primary m-1 button-styles'>
            Code on Git Hub
          </a>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProjectCard
