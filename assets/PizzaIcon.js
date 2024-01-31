import { SvgXml } from 'react-native-svg'

export default function PizzaIcon() {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>pizza slice 2</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#f1af4d" stroke-linejoin="round" class="nc-icon-wrapper"><path data-cap="butt" d="M19.387,17.51 C17.116,18.469,14.62,19,12,19s-5.116-0.531-7.387-1.49"></path> <path d="M2.837,21 c2.79,1.281,5.892,2,9.163,2s6.373-0.719,9.163-2L12,3L2.837,21z"></path> <circle cx="10.5" cy="14.5" r="1.5" stroke="none" fill="#fef0d3"></circle> <circle cx="12" cy="10" r="1" stroke="none" fill="#fef0d3"></circle> <circle cx="15" cy="15" r="1" stroke="none" fill="#fef0d3"></circle></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}
