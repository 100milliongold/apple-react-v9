export interface SceneInfo {
  type: 'stick' | 'normal'
  heightNum: number // 브라우저 높이의 scrollHeight 세팅
  scrollHeight: number
  objs: {
    container?: HTMLElement
    messageA?: HTMLDivElement
    messageB?: HTMLDivElement
    messageC?: HTMLDivElement
    messageD?: HTMLDivElement
  }
}
