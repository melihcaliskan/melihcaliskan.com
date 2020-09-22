import React, { useState } from 'react';

import Modal from './Modal'
import SwipeableViews from 'react-swipeable-views';
import Tab from '../components/Tab'
import fetcher from '../helpers/fetcher'
import styled from 'styled-components'
import useSWR from 'swr'

const SwipeItem = styled.div`
  max-width:95%;
`

const ScreenshotContainer = styled.div`
  padding:1em 0.5em;
`

const Screenshot = styled.img`
  border-radius:5px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
  @media only screen and (max-width: 740px) {
    width:100%;
  }
`

export const Startups = (props) => {
  const { t } = props
  const [tabIndex, setTabIndex] = useState(0);
  const startups = useSWR('/api/startups', fetcher).data

  return (
    <Modal {...props}>
      <Tab
        items={["longus.io", "CathMaterial"]}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
      />

      <SwipeableViews
        enableMouseEvents
        index={tabIndex}
        onChangeIndex={(i) => setTabIndex(i)}>

        {startups && startups.map((item, index) =>
          <SwipeItem>
            <ScreenshotContainer>
              <Screenshot width="640" draggable="false" src={item.ss} />
            </ScreenshotContainer>
          </SwipeItem>
        )}

      </SwipeableViews>
    </Modal >
  )
}

export default Startups