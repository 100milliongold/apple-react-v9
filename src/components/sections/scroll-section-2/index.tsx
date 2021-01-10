import React, { ReactElement, useRef, useEffect } from 'react'
import Section from './styles'
import { MainMessage, DescMessage, Pin } from '../styles'

interface Props {
  setSection2Ref: (
    obj: HTMLElement,
    messageARef: HTMLDivElement,
    messageBRef: HTMLDivElement,
    messageCRef: HTMLDivElement,
    pinB_Ref: HTMLDivElement,
    pinC_Ref: HTMLDivElement
  ) => void
}

function ScrollSection2({ setSection2Ref }: Props): ReactElement {
  const sectionRef: React.RefObject<HTMLElement> = useRef(null)
  const messageARef: React.RefObject<HTMLDivElement> = useRef(null)
  const messageBRef: React.RefObject<HTMLDivElement> = useRef(null)
  const messageCRef: React.RefObject<HTMLDivElement> = useRef(null)
  const pinB_Ref: React.RefObject<HTMLDivElement> = useRef(null)
  const pinC_Ref: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    if (
      sectionRef.current !== null &&
      messageARef.current !== null &&
      messageBRef.current !== null &&
      messageCRef.current !== null &&
      pinB_Ref.current !== null &&
      pinC_Ref.current !== null
    ) {
      setSection2Ref(
        sectionRef.current,
        messageARef.current,
        messageBRef.current,
        messageCRef.current,
        pinB_Ref.current,
        pinC_Ref.current
      )
    }
  }, [setSection2Ref])

  return (
    <Section ref={sectionRef} className="scroll-section" id="scroll-section-2">
      <MainMessage ref={messageARef} className="sticky-elem main-message a">
        <p>
          <small>편안한 촉감</small>
          입과 하나 되다
        </p>
      </MainMessage>
      <DescMessage ref={messageBRef} className="sticky-elem desc-message b">
        <p>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
          하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
          AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
          오롯이 당신과 음료만 남게 되죠.
        </p>
        <Pin className="pin" ref={pinB_Ref}></Pin>
      </DescMessage>
      <DescMessage ref={messageCRef} className="sticky-elem desc-message c">
        <p>
          디자인 앤 퀄리티 오브 스웨덴,
          <br />
          메이드 인 차이나
        </p>
        <Pin className="pin" ref={pinC_Ref}></Pin>
      </DescMessage>
    </Section>
  )
}

export default ScrollSection2
