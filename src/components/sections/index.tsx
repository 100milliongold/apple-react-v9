import React, { ReactElement, useState, useEffect, useCallback } from 'react'
import { SceneInfo } from 'typings'

import ScrollSection0 from './scroll-section-0'
import ScrollSection1 from './scroll-section-1'
import ScrollSection2 from './scroll-section-2'
import ScrollSection3 from './scroll-section-3'

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
    },
  },
  {
    // 1
    type: 'normal',
    heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
    },
  },
  {
    // 2
    type: 'stick',
    heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
    },
  },
  {
    // 3
    type: 'stick',
    heightNum: 5, // 브라우저 높이의 scrollHeight 세팅
    scrollHeight: 0,
    objs: {
      container: undefined,
    },
  },
]

function Sections(): ReactElement {
  // window.pageYOffset 대신 쓸변수
  const [yOffset, setYOffset] = useState<number>(0)

  // 현재 스크롤 위치 (yOffset) 보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0)

  // 전체 스크롤 높이
  const [totalScrollHeight, setTotalScrollHeight] = useState<number>(0)

  // 현재 활성화된(눈 앞에 보고 있는) 씬(scroll-section)
  const [currentScene, setCurrentScene] = useState<number>(0)

  const [sceneInfo, setSceneInfo] = useState<SceneInfo[]>(initScene)

  /**
   * 최초 로딩시 높이값 설정
   * @param height
   */
  const setLayout = useCallback(
    (height: number) => {
      // 각 스크롤 섹션의 높이 세팅
      const layout = sceneInfo.map((scene) => ({
        ...scene,
        scrollHeight: scene.heightNum * height,
      }))

      layout.forEach(({ objs: { container }, scrollHeight }) => {
        if (container !== undefined) {
          container.style.height = `${scrollHeight}px`
        }
      })

      setSceneInfo(layout)

      let total = 0
      for (let i = 0; i < layout.length; i++) {
        total += layout[i].scrollHeight
        if (total >= yOffset) {
          setCurrentScene(i)
          break
        }
      }
      setTotalScrollHeight(total)
    },
    [sceneInfo]
  )

  /**
   * ScrollSection0 ~ ScrollSection3 항목들의 virtual dom 의 겍체를 적용함
   * @param index
   * @param html
   */
  const setObj = useCallback(
    (index: number, html: HTMLElement) => {
      const nextState = [...sceneInfo]
      nextState[index].objs.container = html
      nextState.forEach(({ objs: { container }, scrollHeight }) => {
        if (container !== undefined) {
          container.style.height = `${scrollHeight}px`
        }
      })
      setSceneInfo(nextState)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const setObjs = useCallback(
    (
      index: number,
      container: HTMLElement,
      messageA: HTMLDivElement,
      messageB: HTMLDivElement,
      messageC: HTMLDivElement,
      messageD: HTMLDivElement
    ) => {
      const nextState = [...sceneInfo]
      nextState[index].objs.container = container
      nextState[index].objs.messageA = messageA
      nextState[index].objs.messageB = messageB
      nextState[index].objs.messageC = messageC
      nextState[index].objs.messageD = messageD

      nextState.forEach(({ objs: { container }, scrollHeight }) => {
        if (container !== undefined) {
          container.style.height = `${scrollHeight}px`
        }
      })
      setSceneInfo(nextState)
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
   * currentScene 설정 (yOffset 이벤트 시 동작)
   */
  useEffect(() => {
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      const nextCurrentScene = currentScene + 1
      setCurrentScene(nextCurrentScene)
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return
      const nextCurrentScene = currentScene + -1
      setCurrentScene(nextCurrentScene)
    }
  }, [yOffset, prevScrollHeight, setCurrentScene])

  /**
   * currentScene 업데이트시 이벤트 처리
   */
  useEffect(() => {
    document.body.setAttribute('id', `show-scene-${currentScene}`)
    return () => {}
  }, [currentScene, totalScrollHeight])

  useEffect(() => {
    console.log(currentScene)
  }, [yOffset])

  /**
   * 최초 컨포넌드 마운트시 이벤트
   */
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setLayout(window.innerHeight)
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
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <ScrollSection0 setObjs={setObjs} setObj={setObj} />
      <ScrollSection1 setSceneInfo={setSceneInfo} setObj={setObj} />
      <ScrollSection2 setSceneInfo={setSceneInfo} setObj={setObj} />
      <ScrollSection3 setSceneInfo={setSceneInfo} setObj={setObj} />
    </>
  )
}

export default Sections
