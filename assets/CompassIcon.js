import { SvgXml } from 'react-native-svg'

export default function CompassIcon() {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>compass 3</title><g fill="#fef0d3" class="nc-icon-wrapper"><path fill="#f1af4d" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M17.4,10.9l-4.6,1.8l-1.8,4.6 C10.8,17.8,10.4,18,10,18c0,0,0,0-0.1,0c-0.4,0-0.8-0.3-0.9-0.7L6.5,7.8c-0.1-0.3,0-0.7,0.3-1c0.3-0.3,0.6-0.4,1-0.3L17.3,9 C17.7,9.1,18,9.5,18,9.9S17.8,10.8,17.4,10.9z"></path></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}
