import React, { useEffect, useState } from 'react';

import Modal from './Modal'
import SwipeableViews from 'react-swipeable-views';
import fetcher from '../helpers/fetcher'
import styled from 'styled-components'
import useSWR from 'swr'

const TabContainer = styled.div`
  scroll-snap-type: x mandatory;
  display:flex;
  position:relative;
  overflow:auto;
  margin-bottom:2em;
`
const TitleContainer = styled.div`
  margin-right:1em;
  cursor:pointer;
  scroll-snap-align: start;
`

const TabTitle = styled.h2`
  font-size:28px;
  white-space: nowrap;
  transition: color .4s;
  color:${props => props.active ? props.theme.body_900 : props.theme.body_600};
`


const Title = styled.h3`
`

const HackerrankContainer = styled.div`
  display:flex;
  align-items:center;

  &:first-of-type {
      margin-bottom:5em;
  }
`

const HackerrankItem = styled.img`
  width:96px;
  margin-right:1em;
`

const SwipeItem = styled.div`
  max-width:95%;
`


export const Projects = (props) => {
  const { t, theme, open, setOpen, title, children } = props

  const [tabIndex, setTabIndex] = useState(0);

  const hackerrank = useSWR('/api/hackerrank', fetcher).data
  const github = useSWR('/api/github', fetcher).data

  useEffect(() => {
    setTabIndex(tabIndex)
  }, [tabIndex]);

  return (
    <Modal {...props}>
      <TabContainer>
        {["React", "React Native", "Hackerrank", "Github"].map((item, index) =>
          <TitleContainer>
            <TabTitle
              key={index}
              active={tabIndex === index}
              onClick={() => setTabIndex(index)}>
              {item}
            </TabTitle>
          </TitleContainer>
        )}
      </TabContainer>

      <SwipeableViews index={tabIndex} onChange={(i) => setTabIndex(i)}>
        <SwipeItem>
          Coming soon...
        </SwipeItem>
        <SwipeItem>
          Coming soon...
        </SwipeItem>
        <SwipeItem>
          <Title>Certificates</Title>
          {hackerrank &&
            <HackerrankContainer>
              {hackerrank["certs"].map(item =>
                <HackerrankItem
                  width={32}
                  draggable="false"
                  src={item.photo}
                />
              )}
            </HackerrankContainer>
          }

          <Title>Badges</Title>
          {hackerrank &&
            <HackerrankContainer>
              {hackerrank["badges"].map(item =>
                <HackerrankItem
                  width={32}
                  draggable="false"
                  src={item.photo}
                />
              )}
            </HackerrankContainer>
          }
        </SwipeItem>
        <SwipeItem>
          Coming soon...
        </SwipeItem>
      </SwipeableViews>
    </Modal >
  )
}

export default Projects