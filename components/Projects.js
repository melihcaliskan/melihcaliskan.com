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
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;

  &:first-of-type {
      margin-bottom:5em;
  }
`

const HackerrankItem = styled.img`
  width:96px;
  margin-right:1em;
  @media only screen and (max-width: 740px) {
    width:72px;
  }
`

const SwipeItem = styled.div`
  max-width:95%;
  overflow:hidden;
`

export const Projects = (props) => {
  const { t, theme, open, setOpen, title, children } = props

  const [tabIndex, setTabIndex] = useState(2);

  const hackerrank = useSWR('/api/hackerrank', fetcher).data
  const github = useSWR('/api/github', fetcher).data

  useEffect(() => {
    let container = document.getElementById("tab-container")
    if (container) {
      container.scroll({
        behavior: 'smooth',
        left: tabIndex * 40
      });
    }
  }, [tabIndex]);

  return (
    <Modal {...props}>
      <TabContainer id="tab-container">
        {["React", "React Native", "Hackerrank", "Github"].map((item, index) =>
          <TitleContainer>
            <TabTitle
              id={index}
              key={index}
              active={tabIndex === index}
              onClick={() => setTabIndex(index)}>
              {item}
            </TabTitle>
          </TitleContainer>
        )}
      </TabContainer>

      <SwipeableViews
        enableMouseEvents
        index={tabIndex}
        onChangeIndex={(i) => setTabIndex(i)}>
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