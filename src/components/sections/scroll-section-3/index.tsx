import React, { ReactElement, useRef, useEffect } from 'react'
import Section from './styles'
import { MidMessage, CanvasCaption } from '../styles'

interface Props {
  setObj: (index: number, obj: HTMLElement) => void
}

function ScrollSection3({ setObj }: Props): ReactElement {
  const sectionRef: React.RefObject<HTMLElement> = useRef(null)

  useEffect(() => {
    if (sectionRef.current != null) setObj(3, sectionRef.current)
  }, [sectionRef.current])

  return (
    <Section ref={sectionRef} className="scroll-section" id="scroll-section-3">
      <MidMessage className="mid-message">
        <strong>Retina 머그</strong>
        <br />
        아이디어를 광활하게 펼칠
        <br />
        아름답고 부드러운 음료 공간.
      </MidMessage>

      <CanvasCaption className="canvas-caption">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
        fuga quae perspiciatis veniam impedit et, ratione est optio porro.
        Incidunt aperiam nemo voluptas odit quisquam harum in mollitia. Incidunt
        minima iusto in corporis, dolores velit. Autem, sit dolorum inventore a
        rerum distinctio vero illo magni possimus temporibus dolores neque
        adipisci, repudiandae repellat. Ducimus accusamus similique quas earum
        laborum. Autem tempora repellendus asperiores illum ex! Velit ea
        corporis odit? Ea, incidunt delectus. Sapiente rerum neque error
        deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione
        soluta similique harum nihil vel. Quas inventore perferendis iusto
        explicabo animi eos ratione obcaecati.
      </CanvasCaption>
    </Section>
  )
}

export default ScrollSection3
