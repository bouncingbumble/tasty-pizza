import { SvgXml } from 'react-native-svg'

export default function LinkIcon() {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32"><title>link on off</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#f1af4d" stroke-linejoin="round" class="nc-icon-wrapper"><g class="js-nc-int-icon nc-link-on-off"><path d="M14.314,10A6.342,6.342,0,0,1,16,7l3.136-3.136a6.364,6.364,0,0,1,9,0h0a6.364,6.364,0,0,1,0,9L25,16a6.342,6.342,0,0,1-3,1.686"></path><path d="M17.686,22A6.342,6.342,0,0,1,16,25l-3.136,3.136a6.364,6.364,0,0,1-9,0h0a6.364,6.364,0,0,1,0-9L7,16a6.342,6.342,0,0,1,3-1.686"></path><line x1="16" x2="21" y1="16" y2="11" stroke="#a42229"></line><line x1="11" x2="13.247" y1="21" y2="18.753" stroke="#a42229"></line><line x1="13.247" x2="16" y1="18.753" y2="16" data-cap="butt" stroke="#a42229"></line><line x1="3" x2="29" y1="3" y2="29" stroke-dasharray="36.77 36.77" stroke-dashoffset="36.77" stroke="#a42229"></line></g><style data-cap="butt">.nc-link-on-off{--transition-duration:0.3s}.nc-link-on-off :nth-child(5){transition:opacity 0s calc(.5 * var(--transition-duration))}.nc-link-on-off :last-child{opacity:0;transition:stroke-dashoffset var(--transition-duration) cubic-bezier(.77,0,.18,1),opacity 0s var(--transition-duration)}.nc-link-on-off.nc-int-icon-state-b :last-child{transition:stroke-dashoffset var(--transition-duration) cubic-bezier(.77,0,.18,1),opacity 0s;opacity:1;stroke-dashoffset:0}.nc-link-on-off.nc-int-icon-state-b :nth-child(5){opacity:0;transition-delay:calc(.45 * var(--transition-duration))}</style><script>function initIntIcon(i){i.classList.contains("js-nc-int-icon-loaded")||(i.classList.add("js-nc-int-icon-loaded"),i.closest("svg").addEventListener("click",function(n){i.classList.toggle("nc-int-icon-state-b")}))}for(var intIcons=document.getElementsByClassName("js-nc-int-icon"),i=0;intIcons.length>i;i++)initIntIcon(intIcons[i])</script></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}
