import React, { ReactElement, useRef, useEffect } from 'react'
import { ScrollSection0 as Section, StickyElemCanvas } from './styles'
import { MainMessage } from '../styles'

interface Props {
  setSection0Ref: (
    container: HTMLElement,
    messageA: HTMLDivElement,
    messageB: HTMLDivElement,
    messageC: HTMLDivElement,
    messageD: HTMLDivElement,
    canvasRef: HTMLCanvasElement
  ) => void
  setCanvasImages: (img: HTMLImageElement[]) => void
  videoImageCount: number
}

function ScrollSection0({
  setSection0Ref,
  videoImageCount,
  setCanvasImages,
}: Props): ReactElement {
  const sectionRef: React.RefObject<HTMLElement> = useRef(null)
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null)
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
      mainMessageD.current !== null &&
      canvasRef.current !== null
    ) {
      setSection0Ref(
        sectionRef.current,
        mainMessageA.current,
        mainMessageB.current,
        mainMessageC.current,
        mainMessageD.current,
        canvasRef.current
      )
    }
  }, [setSection0Ref])

  useEffect(() => {
    Promise.all(
      Array(videoImageCount)
        .fill(null)
        .map((_, i: number) => i)
        .map((i: number) =>
          import(`./video/001/IMG_${6726 + i}.JPG`)
            .then((module) => `${module.default}`)
            .then((path: string) => {
              const imgElem = new Image()
              imgElem.src = path
              return imgElem
            })
        )
    ).then((imgs) => setCanvasImages(imgs))

    // for (let i = 0; i < videoImageCount; i++) {
    //   import(`./video/001/IMG_${6726 + i}.JPG`).then((img) => {
    //     const imgElem = new Image()
    //     imgElem.src = img.default
    //     // console.log(imgElem)
    //     setCanvasImages(imgElem)
    //   })
    // }
  }, [setCanvasImages, videoImageCount])

  return (
    <Section ref={sectionRef} className="scroll-section" id="scroll-section-0">
      <h1>AirMug Pro</h1>
      <StickyElemCanvas className="sticky-elem sticky-elem-canvas">
        <canvas
          id="video-canvas-0"
          width="1920"
          height="1080"
          ref={canvasRef}
        ></canvas>
      </StickyElemCanvas>
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
