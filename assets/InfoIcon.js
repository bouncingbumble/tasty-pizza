import { SvgXml } from 'react-native-svg'

export default function InfoIcon() {
    const xml = `
<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>info</title><g fill="#a42229" class="nc-icon-wrapper"><circle data-color="color-2" cx="8" cy="2.5" r="1.5"></circle><path d="M8,15c-.553,0-1-.447-1-1V7c0-.553,.447-1,1-1s1,.447,1,1v7c0,.553-.447,1-1,1Z" fill="#a42229"></path></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}
