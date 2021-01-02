import React, {
  ReactElement,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
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
    [setSceneInfo, sceneInfo]
  )

  /**
   * 스크롤시 이벤트 처리
   */
  const scrollLoop = () => {}

  useEffect(() => {
    console.log(yOffset)
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
    // Call handler right away so state gets updated with initial window size
    handleResize()

    function handleScroll() {
      setYOffset(window.pageYOffset)
      scrollLoop()
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <ScrollSection0 setObj={setObj} />
      <ScrollSection1 setObj={setObj} />
      <ScrollSection2 setObj={setObj} />
      <ScrollSection3 setObj={setObj} />
    </>
  )
}

export default Sections
