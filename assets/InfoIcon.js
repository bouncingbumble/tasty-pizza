import { SvgXml } from 'react-native-svg'

export default function InfoIcon() {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32"><title>c warning</title><g fill="#a42229" class="nc-icon-wrapper"><path d="M16,0C7.178,0,0,7.178,0,16s7.178,16,16,16,16-7.178,16-16S24.822,0,16,0Zm-1.492,6.5c0-.276,.224-.5,.5-.5h1.984c.276,0,.5,.224,.5,.5v12c0,.276-.224,.5-.5,.5h-1.984c-.276,0-.5-.224-.5-.5V6.5Zm1.492,19.5c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z" fill="#f1af4d"></path></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}