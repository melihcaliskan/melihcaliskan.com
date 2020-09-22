import React, { useEffect, useState } from 'react';

import styled from 'styled-components'

const TabContainer = styled.div`
  scroll-snap-type: x mandatory;
  display:flex;
  position:relative;
  overflow:auto;
  margin-bottom:1.5em;
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

export const Startups = ({ items, tabIndex, setTabIndex }) => {

    useEffect(() => {
        let container = document.getElementById("tab-container")
        if (1 == 2 && container) {
            let scrollingTabWidth = container.getElementsByTagName('div')[tabIndex].clientWidth;
            container.scroll({
                behavior: 'smooth',
                left: tabIndex * scrollingTabWidth - 50
            });
        }
    }, [tabIndex]);

    return (
        <TabContainer id="tab-container">
            {items.map((item, index) =>
                <TitleContainer>
                    <TabTitle
                        id={`title-${index}`}
                        key={index}
                        active={tabIndex === index}
                        onClick={() => setTabIndex(index)}>
                        {item}
                    </TabTitle>
                </TitleContainer>
            )}
        </TabContainer>
    )
}

export default Startups