import { SvgXml } from 'react-native-svg'

export default function HalfStarIcon() {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>star half</title><g fill="#A42229" class="nc-icon-wrapper"><path fill="#A42229" d="M8,0.365c-0.364,0-0.728,0.171-0.897,0.512l-1.93,3.911L0.856,5.415C0.039,5.534-0.292,6.541,0.302,7.121 l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.489V0.365z"></path></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}
