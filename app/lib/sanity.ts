
import {createClient} from "next-sanity"
import  imageUrlBuilder  from "@sanity/image-url"

export const client = createClient({
    apiVersion: '2024-03-12',
    dataset: 'production',
    projectId: 'ocu0xbm8',
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}