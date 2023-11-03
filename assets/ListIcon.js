<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>paragraph</title><g fill="#fef0d3" class="nc-icon-wrapper"><path d="M9,10H2c-.552,0-1-.448-1-1V2c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1v7c0,.552-.448,1-1,1Z" fill="#f1af4d"></path><path d="M9,23H2c-.552,0-1-.448-1-1v-7c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1v7c0,.552-.448,1-1,1Z" fill="#f1af4d"></path><path data-color="color-2" d="M22,4H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path><path data-color="color-2" d="M22,9H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path><path data-color="color-2" d="M22,17H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path><path data-color="color-2" d="M22,22H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path></g></svg>

import { SvgXml } from 'react-native-svg';

export default function ListIcon() {

   const xml = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>paragraph</title><g fill="#fef0d3" class="nc-icon-wrapper"><path d="M9,10H2c-.552,0-1-.448-1-1V2c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1v7c0,.552-.448,1-1,1Z" fill="#f1af4d"></path><path d="M9,23H2c-.552,0-1-.448-1-1v-7c0-.552,.448-1,1-1h7c.552,0,1,.448,1,1v7c0,.552-.448,1-1,1Z" fill="#f1af4d"></path><path data-color="color-2" d="M22,4H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path><path data-color="color-2" d="M22,9H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path><path data-color="color-2" d="M22,17H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path><path data-color="color-2" d="M22,22H14c-.552,0-1-.447-1-1s.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1Z"></path></g></svg>
`
return <SvgXml xml={xml} width="100%" height="100%"  />

}
