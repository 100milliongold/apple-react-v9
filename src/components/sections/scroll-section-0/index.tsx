import React, { ReactElement, useRef, useEffect } from 'react'
import { ScrollSection0 as Section } from './styles'
import { MainMessage } from '../styles'
import { SceneInfo } from 'typings'

interface Props {
  setObj: (index: number, obj: HTMLElement) => void
  setObjs: (
    index: number,
    container: HTMLElement,
    messageA: HTMLDivElement,
    messageB: HTMLDivElement,
    messageC: HTMLDivElement,
    messageD: HTMLDivElement
  ) => void
}

function ScrollSection0({ setObjs }: Props): ReactElement {
  const sectionRef: React.RefObject<HTMLElement> = useRef(null)
  const mainMessageA: React.RefObject<HTMLDivElement> = useRef(null)
  const mainMessageB: React.RefObject<HTMLDivElement> = useRef(null)
  const mainMessageC: React.RefObject<HTMLDivElement> = useRef(null)
  const mainMessageD: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    if (
      sectionRef.current !== null &&
      mainMessageA.current !== null &&
      mainMessageB.current !== null &&
      mainMessageC.current !== null &&
      mainMessageD.current !== null
    ) {
      setObjs(
        0,
        sectionRef.current,
        mainMessageA.current,
        mainMessageB.current,
        mainMessageC.current,
        mainMessageD.current
      )
    }
  }, [setObjs])

  return (
    <Section ref={sectionRef} className="scroll-section" id="scroll-section-0">
      <h1>AirMug Pro</h1>
      <MainMessage className="sticky-elem main-message a" ref={mainMessageA}>
        <p>
          온전히 빠져들게 하는
          <br />
          최고급 세라믹
        </p>
      </MainMessage>
      <MainMessage className="sticky-elem main-message b" ref={mainMessageB}>
        <p>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </p>
      </MainMessage>
      <MainMessage className="sticky-elem main-message c" ref={mainMessageC}>
        <p>
          온종일 편안한
          <br />
          맞춤형 손잡이
        </p>
      </MainMessage>
      <MainMessage className="sticky-elem main-message d" ref={mainMessageD}>
        <p>
          새롭게 입가를
          <br />
          찾아온 매혹
        </p>
      </MainMessage>
    </Section>
  )
}

export default ScrollSection0
