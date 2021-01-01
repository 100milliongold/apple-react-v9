import React, { ReactElement } from 'react'
import Section from './styles'
import { MainMessage, DescMessage, Pin } from '../styles'

interface Props {}

function ScrollSection2({}: Props): ReactElement {
  return (
    <Section className="scroll-section" id="scroll-section-2">
      <MainMessage className="sticky-elem main-message a">
        <p>
          <small>편안한 촉감</small>
          입과 하나 되다
        </p>
      </MainMessage>
      <DescMessage className="sticky-elem desc-message b">
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
          하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
          AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
          오롯이 당신과 음료만 남게 되죠.
        </p>
        <Pin className="pin"></Pin>
      </DescMessage>
      <DescMessage className="sticky-elem desc-message c">
        <p>
          디자인 앤 퀄리티 오브 스웨덴,
          <br />
          메이드 인 차이나
        </p>
        <Pin className="pin"></Pin>
      </DescMessage>
    </Section>
  )
}

export default ScrollSection2
