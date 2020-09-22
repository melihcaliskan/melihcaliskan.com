import React, { useState } from 'react';

import Github from '../components/Github'
import Hackerrank from '../components/Hackerrank'
import Modal from './Modal'
import SwipeableViews from 'react-swipeable-views';
import Tab from '../components/Tab'
import fetcher from '../helpers/fetcher'
import styled from 'styled-components'
import useSWR from 'swr'

const SwipeItem = styled.div`
  max-width:95%;
`

const ProjectContainer = styled.div`
  display:inline-flex;
  flex-direction:column;
  background:${({ theme }) => theme.body_100};
  border:2px solid ${({ theme }) => theme.body_200};
  max-width:360px;
  width:100%;
  border-radius:10px;
  cursor:pointer;
  transition: all .4s;

  &:hover{
    background:${({ theme }) => theme.body_200};
  }
  
  div{
    padding:1em;
  }
  
  h2{
    font-size:28px;
    color:${({ theme }) => theme.body_900};
  }
`

const LogoContainer = styled.div`
  width:100%;
  height:240px;
  background-image:url(${props => props.img});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  
  border-top-left-radius:10px;
  border-top-right-radius:10px;
`

export const Projects = (props) => {
  const { t, theme, open, setOpen, title, children } = props

  const [tabIndex, setTabIndex] = useState(3);

  const projects = useSWR('/api/projects', fetcher).data
  const hackerrank = useSWR('/api/hackerrank', fetcher).data
  const github = useSWR('/api/github', fetcher).data

  return (
    <Modal {...props}>
      <Tab
        items={["React", "React Native", "Hackerrank", "Github"]}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />

      <SwipeableViews
        enableMouseEvents
        index={tabIndex}
        onChangeIndex={(i) => setTabIndex(i)}>
        <SwipeItem>
          Coming soon...
        </SwipeItem>

        <SwipeItem>
          {1 == 2 && projects &&
            <Lightbox images={projects[0].images} />
          }
          {tabIndex == 1 && projects && projects.map(item => {
            if (item.platform == "rn") {
              return (
                <ProjectContainer>
                  <LogoContainer img={item.logo} />
                  <div>
                    <h2>{item.name}</h2>
                  </div>
                </ProjectContainer>
              )
            }
          })
          }
        </SwipeItem>

        <SwipeItem>
          {(tabIndex == 2 && hackerrank) &&
            <Hackerrank t={t} data={hackerrank} />
          }
        </SwipeItem>
        <SwipeItem>
          {(tabIndex == 3 && github) &&
            <Github repos={github} />
          }
        </SwipeItem>
      </SwipeableViews>
    </Modal >
  )
}

export default Projects