export interface SceneInfo {
  type: 'stick' | 'normal'
  heightNum?: number // 브라우저 높이의 scrollHeight 세팅
  scrollHeight: number
  objs: {
    container?: HTMLElement
    content?: HTMLParagraphElement
    messageA?: HTMLDivElement
    messageB?: HTMLDivElement
    messageC?: HTMLDivElement
    messageD?: HTMLDivElement
    pinB?: HTMLDivElement
    pinC?: HTMLDivElement
    canvasCaption?: HTMLParagraphElement
  }
  values?: {
    messageA_opacity_in?: any[]
    messageB_opacity_in?: any[]
    messageC_opacity_in?: any[]
    messageD_opacity_in?: any[]
    messageA_translateY_in?: any[]
    messageB_translateY_in?: any[]
    messageC_translateY_in?: any[]
    messageD_translateY_in?: any[]
    messageA_opacity_out?: any[]
    messageB_opacity_out?: any[]
    messageC_opacity_out?: any[]
    messageD_opacity_out?: any[]
    messageA_translateY_out?: any[]
    messageB_translateY_out?: any[]
    messageC_translateY_out?: any[]
    messageD_translateY_out?: any[]
    pinB_scaleY?: any[]
    pinC_scaleY?: any[]
  }
}
