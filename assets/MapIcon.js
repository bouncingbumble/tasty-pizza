<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>map pin</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#f1af4d" stroke-linejoin="round" class="nc-icon-wrapper"><polyline points="23,5 23,20 15,22 9,20 1,22 1,7 "></polyline> <path stroke="#fef0d3" d="M18,7 c0,3.703-6,10-6,10S6,10.703,6,7c0-3.797,3.101-6,6-6S18,3.203,18,7z"></path> <circle stroke="#fef0d3" cx="12" cy="7" r="1"></circle> <circle cx="12" cy="7" r="1" stroke-linejoin="miter" stroke="none" fill="#fef0d3"></circle></g></svg>

import { SvgXml } from 'react-native-svg';

export default function MapIcon() {

   const xml = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>map pin</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#f1af4d" stroke-linejoin="round" class="nc-icon-wrapper"><polyline points="23,5 23,20 15,22 9,20 1,22 1,7 "></polyline> <path stroke="#fef0d3" d="M18,7 c0,3.703-6,10-6,10S6,10.703,6,7c0-3.797,3.101-6,6-6S18,3.203,18,7z"></path> <circle stroke="#fef0d3" cx="12" cy="7" r="1"></circle> <circle cx="12" cy="7" r="1" stroke-linejoin="miter" stroke="none" fill="#fef0d3"></circle></g></svg>
`
return <SvgXml xml={xml} width="100%" height="100%"  />

}
