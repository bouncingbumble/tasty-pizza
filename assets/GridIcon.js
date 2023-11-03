
import { SvgXml } from 'react-native-svg';

export default function GridIcon() {

   const xml = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>grid interface</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="#f1af4d" stroke-linejoin="round" class="nc-icon-wrapper"><rect x="2" y="2" width="8" height="8"></rect><rect x="14" y="2" width="8" height="8" stroke="#fef0d3"></rect><rect x="2" y="14" width="8" height="8" stroke="#fef0d3"></rect><rect x="14" y="14" width="8" height="8"></rect></g></svg>`

return <SvgXml xml={xml} width="100%" height="100%" />
      

}
