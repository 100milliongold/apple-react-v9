import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { SceneInfo } from 'typings'

import ScrollSection0 from './scroll-section-0'
import ScrollSection1 from './scroll-section-1'
import ScrollSection2 from './scroll-section-2'
import ScrollSection3 from './scroll-section-3'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

const initScene: SceneInfo[] = [
  {
    // 0
    type: 'stick',
    heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
      messageA: undefined,
      messageB: undefined,
      messageC: undefined,
      messageD: undefined,
      canvas: undefined,
      context: undefined,
      vidioImages: [],
    },
    values: {
      videoImageCount: 300,
      imageSequemce: [0, 299],
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
      messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
      messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
      messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
      messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
      messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
      messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
    },
  },
  {
    // 1
    type: 'normal',
    // heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
      content: undefined,
    },
  },
  {
    // 2
    type: 'stick',
    heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
      messageA: undefined,
      messageB: undefined,
      messageC: undefined,
      pinB: undefined,
      pinC: undefined,
    },
    values: {
      messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
      messageB_translateY_in: [30, 0, { start: 0.6, end: 0.65 }],
      messageC_translateY_in: [30, 0, { start: 0.87, end: 0.92 }],
      messageA_opacity_in: [0, 1, { start: 0.25, end: 0.3 }],
      messageB_opacity_in: [0, 1, { start: 0.6, end: 0.65 }],
      messageC_opacity_in: [0, 1, { start: 0.87, end: 0.92 }],
      messageA_translateY_out: [0, -20, { start: 0.4, end: 0.45 }],
      messageB_translateY_out: [0, -20, { start: 0.68, end: 0.73 }],
      messageC_translateY_out: [0, -20, { start: 0.95, end: 1 }],
      messageA_opacity_out: [1, 0, { start: 0.4, end: 0.45 }],
      messageB_opacity_out: [1, 0, { start: 0.68, end: 0.73 }],
      messageC_opacity_out: [1, 0, { start: 0.95, end: 1 }],
      pinB_scaleY: [0.5, 1, { start: 0.6, end: 0.65 }],
      pinC_scaleY: [0.5, 1, { start: 0.87, end: 0.92 }],
    },
  },
  {
    // 3
    type: 'stick',
    heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
      canvasCaption: undefined,
    },
    values: {},
  },
]

function Sections(): ReactElement {
  // window.pageYOffset 대신 쓸변수
  const [yOffset, setYOffset] = useState<number>(0)

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  // 현재 스크롤 위치 (yOffset) 보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0)

  // 전체 스크롤 높이
  const [totalScrollHeight, setTotalScrollHeight] = useState<number>(0)

  // 현재 활성화된(눈 앞에 보고 있는) 씬(scroll-section)
  const [currentScene, setCurrentScene] = useState<number>(0)

  const [sceneInfo, setSceneInfo] = useState<SceneInfo[]>(initScene)

  const [enterNewScene, setEnterNewScene] = useState<boolean>(false) // 새로운 scene 이 시작된 순간 true

  /**
   * 투명도 계산
   */
  const calcValues = useCallback(
    (values: any[], currentYOffset: number) => {
      let rv
      // 현재 씬(스크롤섹션)에서 스크롤된 점위를 비율로 구하기

      const scrollHeight = sceneInfo[currentScene]!.scrollHeight
      const scrollRatio = currentYOffset / scrollHeight

      if (values.length !== undefined && values.length === 3) {
        // start ~ end 사이에 애니메이션 진행
        const partScrollStart = values[2].start * scrollHeight
        const partScrollEnd = values[2].end * scrollHeight
        const partScrollHeight = partScrollEnd - partScrollStart

        if (
          currentYOffset >= partScrollStart &&
          currentYOffset <= partScrollEnd
        ) {
          rv =
            ((currentYOffset - partScrollStart) / partScrollHeight) *
              (values[1] - values[0]) +
            values[0]
        } else if (currentYOffset < partScrollStart) {
          rv = values[0]
        } else if (currentYOffset > partScrollEnd) {
          rv = values[1]
        }
      } else {
        rv = scrollRatio * (values[1] - values[0]) + values[0]
      }

      return isNaN(rv) ? 0 : rv
    },
    [currentScene, sceneInfo]
  )

  const playAnimation = useCallback(() => {
    const objs = sceneInfo[currentScene].objs
    const values = sceneInfo[currentScene].values
    const currentYOffset = yOffset - prevScrollHeight

    const scrollHeight = sceneInfo[currentScene].scrollHeight

    const scrollRatio = (yOffset - prevScrollHeight) / scrollHeight //현재 씬의 scrollHeight;

    switch (currentScene) {
      case 0:
        // console.log('0 play')

        if (values !== undefined) {
          let sequence = Math.round(
            calcValues(values.imageSequemce!, currentYOffset)
          )

          if (objs.vidioImages!.length > 0 && sequence <= 300) {
            // console.log(sequence, objs.vidioImages![sequence])
            objs.context!.drawImage(objs.vidioImages![sequence], 0, 0)
          }

          if (scrollRatio <= 0.22) {
            //in
            const messageA_opacity_in = calcValues(
              values.messageA_opacity_in!,
              currentYOffset
            )
            const messageA_translateY_in = calcValues(
              values.messageA_translateY_in!,
              currentYOffset
            )
            objs.messageA!.style.opacity = `${messageA_opacity_in}`
            //translate3d 가 translateY 보다 최적화가 잘되어 있다고 함
            objs.messageA!.style.transform = `translate3d(0, ${messageA_translateY_in}%, 0)`
          } else {
            // out
            const messageA_opacity_out = calcValues(
              values.messageA_opacity_out!,
              currentYOffset
            )
            const messageA_translateY_out = calcValues(
              values.messageA_translateY_out!,
              currentYOffset
            )
            objs.messageA!.style.opacity = `${messageA_opacity_out}`
            objs.messageA!.style.transform = `translate3d(0, ${messageA_translateY_out}%, 0)`
          }

          if (scrollRatio <= 0.42) {
            //in
            const messageB_opacity_in = calcValues(
              values.messageB_opacity_in!,
              currentYOffset
            )
            const messageB_translateY_in = calcValues(
              values.messageB_translateY_in!,
              currentYOffset
            )
            objs.messageB!.style.opacity = `${messageB_opacity_in}`
            objs.messageB!.style.transform = `translate3d(0, ${messageB_translateY_in}%, 0)`
          } else {
            // out
            const messageB_opacity_out = calcValues(
              values.messageB_opacity_out!,
              currentYOffset
            )
            const messageB_translateY_out = calcValues(
              values.messageB_translateY_out!,
              currentYOffset
            )
            objs.messageB!.style.opacity = `${messageB_opacity_out}`
            objs.messageB!.style.transform = `translate3d(0, ${messageB_translateY_out}%, 0)`
          }

          if (scrollRatio <= 0.62) {
            // in
            const messageC_opacity_in = calcValues(
              values.messageC_opacity_in!,
              currentYOffset
            )
            const messageC_translateY_in = calcValues(
              values.messageC_translateY_in!,
              currentYOffset
            )
            objs.messageC!.style.opacity = `${messageC_opacity_in}`
            objs.messageC!.style.transform = `translate3d(0, ${messageC_translateY_in}%, 0)`
          } else {
            // out
            const messageC_opacity_out = calcValues(
              values.messageC_opacity_out!,
              currentYOffset
            )
            const messageC_translateY_out = calcValues(
              values.messageC_translateY_out!,
              currentYOffset
            )
            objs.messageC!.style.opacity = `${messageC_opacity_out}`
            objs.messageC!.style.transform = `translate3d(0, ${messageC_translateY_out}%, 0)`
          }

          if (scrollRatio <= 0.82) {
            // in
            const messageD_opacity_in = calcValues(
              values.messageD_opacity_in!,
              currentYOffset
            )
            const messageD_translateY_in = calcValues(
              values.messageD_translateY_in!,
              currentYOffset
            )
            objs.messageD!.style.opacity = `${messageD_opacity_in}`
            objs.messageD!.style.transform = `translate3d(0, ${messageD_translateY_in}%, 0)`
          } else {
            // out
            const messageD_opacity_out = calcValues(
              values.messageD_opacity_out!,
              currentYOffset
            )
            const messageD_translateY_out = calcValues(
              values.messageD_translateY_out!,
              currentYOffset
            )
            objs.messageD!.style.opacity = `${messageD_opacity_out}`
            objs.messageD!.style.transform = `translate3d(0, ${messageD_translateY_out}%, 0)`
          }
        }
        break
      case 1:
        // console.log('1 play')
        break
      case 2:
        // console.log('2 play')
        if (values !== undefined) {
          if (scrollRatio <= 0.32) {
            // in
            const messageA_opacity_in = calcValues(
              values.messageA_opacity_in!,
              currentYOffset
            )
            const messageA_translateY_in = calcValues(
              values.messageA_translateY_in!,
              currentYOffset
            )
            objs.messageA!.style.opacity = `${messageA_opacity_in}`
            objs.messageA!.style.transform = `translate3d(0, ${messageA_translateY_in}%, 0)`
          } else {
            // out
            const messageA_opacity_out = calcValues(
              values.messageA_opacity_out!,
              currentYOffset
            )
            const messageA_translateY_out = calcValues(
              values.messageA_translateY_out!,
              currentYOffset
            )
            objs.messageA!.style.opacity = `${messageA_opacity_out}`
            objs.messageA!.style.transform = `translate3d(0, ${messageA_translateY_out}%, 0)`
          }

          if (scrollRatio <= 0.67) {
            // in
            const messageB_opacity_in = calcValues(
              values.messageB_opacity_in!,
              currentYOffset
            )
            const messageB_translateY_in = calcValues(
              values.messageB_translateY_in!,
              currentYOffset
            )
            const pinB_scaleY = calcValues(values.pinB_scaleY!, currentYOffset)
            objs.messageB!.style.opacity = `${messageB_opacity_in}`
            objs.messageB!.style.transform = `translate3d(0, ${messageB_translateY_in}%, 0)`
            objs.pinB!.style.transform = `scaleY(${pinB_scaleY})`
          } else {
            // out
            const messageB_opacity_out = calcValues(
              values.messageB_opacity_out!,
              currentYOffset
            )
            const messageB_translateY_out = calcValues(
              values.messageB_translateY_out!,
              currentYOffset
            )
            const pinB_scaleY = calcValues(values.pinB_scaleY!, currentYOffset)
            objs.messageB!.style.opacity = `${messageB_opacity_out}`
            objs.messageB!.style.transform = `translate3d(0, ${messageB_translateY_out}%, 0)`
            objs.pinB!.style.transform = `scaleY(${pinB_scaleY})`
          }

          if (scrollRatio <= 0.93) {
            // in
            const messageC_opacity_in = calcValues(
              values.messageC_opacity_in!,
              currentYOffset
            )
            const messageC_translateY_in = calcValues(
              values.messageC_translateY_in!,
              currentYOffset
            )
            const pinC_scaleY = calcValues(values.pinC_scaleY!, currentYOffset)
            objs.messageC!.style.opacity = `${messageC_opacity_in}`
            objs.messageC!.style.transform = `translate3d(0, ${messageC_translateY_in}%, 0)`
            objs.pinC!.style.transform = `scaleY(${pinC_scaleY})`
          } else {
            // out
            const messageC_opacity_out = calcValues(
              values.messageC_opacity_out!,
              currentYOffset
            )
            const messageC_translateY_out = calcValues(
              values.messageC_translateY_out!,
              currentYOffset
            )
            const pinC_scaleY = calcValues(values.pinC_scaleY!, currentYOffset)
            objs.messageC!.style.opacity = `${messageC_opacity_out}`
            objs.messageC!.style.transform = `translate3d(0, ${messageC_translateY_out}%, 0)`
            objs.pinC!.style.transform = `scaleY(${pinC_scaleY})`
          }
        }

        break
      case 3:
        // console.log('3 play')
        break

      default:
        break
    }
  }, [calcValues, currentScene, prevScrollHeight, sceneInfo, yOffset])

  /**
   * 최초 로딩시 높이값 설정
   * @param height
   */
  /**
   * ScrollSection0 ~ ScrollSection3 항목들의 virtual dom 의 겍체를 적용함
   */
  const setSection0Ref = useCallback(
    (
      container: HTMLElement,
      messageA: HTMLDivElement,
      messageB: HTMLDivElement,
      messageC: HTMLDivElement,
      messageD: HTMLDivElement,
      canvas: HTMLCanvasElement
    ) => {
      sceneInfo[0].objs.container = container
      sceneInfo[0].objs.messageA = messageA
      sceneInfo[0].objs.messageB = messageB
      sceneInfo[0].objs.messageC = messageC
      sceneInfo[0].objs.messageD = messageD
      sceneInfo[0].objs.canvas = canvas
      sceneInfo[0].objs.context = canvas.getContext('2d')!
      sceneInfo[0].objs.container!.style.height = `${sceneInfo[1].scrollHeight}px`
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const setCanvasImages = useCallback(
    (imgs: HTMLImageElement[]) => {
      sceneInfo[0].objs.vidioImages = imgs
      console.log(imgs)
    },
    [sceneInfo]
  )

  /**
   * ScrollSection0 ~ ScrollSection3 항목들의 virtual dom 의 겍체를 적용함
   */
  const setSection1Ref = useCallback(
    (html: HTMLElement, description: HTMLParagraphElement) => {
      sceneInfo[1].objs.container = html
      sceneInfo[1].objs.content = description
      sceneInfo[1].objs.container!.style.height = `${sceneInfo[1].scrollHeight}px`
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  /**
   * ScrollSection0 ~ ScrollSection3 항목들의 virtual dom 의 겍체를 적용함
   */
  const setSection2Ref = useCallback(
    (
      html: HTMLElement,
      messageA: HTMLDivElement,
      messageB: HTMLDivElement,
      messageC: HTMLDivElement,
      pinB_Ref: HTMLDivElement,
      pinC_Ref: HTMLDivElement
    ) => {
      sceneInfo[2].objs.container = html
      sceneInfo[2].objs.messageA = messageA
      sceneInfo[2].objs.messageB = messageB
      sceneInfo[2].objs.messageC = messageC
      sceneInfo[2].objs.pinB = pinB_Ref
      sceneInfo[2].objs.pinC = pinC_Ref

      sceneInfo[2].objs.container!.style.height = `${sceneInfo[2].scrollHeight}px`
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  /**
   * ScrollSection0 ~ ScrollSection3 항목들의 virtual dom 의 겍체를 적용함
   */
  const setSection3Ref = useCallback(
    (html: HTMLElement, canvas: HTMLParagraphElement) => {
      sceneInfo[3].objs.container = html
      sceneInfo[3].objs.canvasCaption = canvas
      sceneInfo[3].objs.container!.style.height = `${sceneInfo[3].scrollHeight}px`
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  /**
   * 스크롤시 이벤트 처리
   */
  useEffect(() => {
    // console.log(yOffset)

    const total = sceneInfo
      .filter((_, index) => index < currentScene)
      .reduce((memo: number, { scrollHeight }) => memo + scrollHeight, 0)

    setPrevScrollHeight(total)
  }, [yOffset, sceneInfo, currentScene])

  /**
   * currentScene 설정 (yOffset 이벤트 시 동작) scrollLoop
   */
  useEffect(() => {
    setEnterNewScene(false)
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      const nextCurrentScene = currentScene + 1
      setEnterNewScene(true)
      setCurrentScene(nextCurrentScene)
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return
      const nextCurrentScene = currentScene + -1
      setEnterNewScene(true)
      setCurrentScene(nextCurrentScene)
    }
  }, [yOffset, prevScrollHeight, setCurrentScene, currentScene, sceneInfo])

  useEffect(() => {
    if (!enterNewScene) {
      playAnimation()
    }
    return () => {}
  }, [enterNewScene, playAnimation])

  /**
   * normal 타입 처리 , setLayout 역활
   */
  useEffect(() => {
    // 각 스크롤 섹션의 높이 세팅
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'stick') {
        sceneInfo[i].scrollHeight =
          sceneInfo[i].heightNum! * windowDimensions.height
      } else if (sceneInfo[i].type === 'normal') {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container?.scrollHeight!
      }
      sceneInfo[
        i
      ].objs.container!.style.height = `${sceneInfo[i].scrollHeight}px`
    }

    let total = 0
    for (let i = 0; i < sceneInfo.length; i++) {
      total += sceneInfo[i].scrollHeight
      if (total >= yOffset) {
        setCurrentScene(i)
        break
      }
    }
    setTotalScrollHeight(total)

    const heightRatio = windowDimensions.height / 1080
    sceneInfo[0].objs.canvas!.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`

    return () => {}
  }, [sceneInfo, windowDimensions.height, yOffset])

  /**
   * currentScene 업데이트시 이벤트 처리
   */
  useEffect(() => {
    document.body.setAttribute('id', `show-scene-${currentScene}`)
    return () => {}
  }, [currentScene, totalScrollHeight])

  // useEffect(() => {
  //   console.log(currentScene)
  // }, [yOffset])

  /**
   * 최초 컨포넌드 마운트시 이벤트
   */
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowDimensions(getWindowDimensions())
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()

    function handleScroll() {
      setYOffset(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      // Remove event listener on cleanup
      // window.removeEventListener('resize', handleResize)
      window.removeEventListener('load', handleResize)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <ScrollSection0
        setSection0Ref={setSection0Ref}
        videoImageCount={sceneInfo[0].values!.videoImageCount!}
        setCanvasImages={setCanvasImages}
      />
      <ScrollSection1 setSection1Ref={setSection1Ref} />
      <ScrollSection2 setSection2Ref={setSection2Ref} />
      <ScrollSection3 setSection3Ref={setSection3Ref} />
    </>
  )
}

export default Sections
