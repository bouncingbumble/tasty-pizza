import { SvgXml } from 'react-native-svg'

export default function StarIcon() {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>shape star</title><g fill="#A42229" class="nc-icon-wrapper"><path d="M15.144,5.439l-4.317-.628L8.9.9A1.041,1.041,0,0,0,7.1.9L5.173,4.812.856,5.439A1,1,0,0,0,.3,7.145l3.123,3.045-.737,4.3a1,1,0,0,0,1.451,1.054L8,13.513l3.861,2.029a1,1,0,0,0,1.451-1.054l-.737-4.3L15.7,7.145a1,1,0,0,0-.554-1.705Z" fill="#A42229"></path></g></svg>`
    return <SvgXml xml={xml} width="100%" height="100%" />
}
