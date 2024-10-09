export type Profile = {
  firstName: string
  headshot: {
    alt: string
    height: number
    id: string
    mimeType: 'image' | 'jpeg'
    type: 'image'
    url: string
    width: number
  }
  id: string
  jobTitle: string
  lastName: string
  slug: string
  socialLinks: string[]
  type: string
}
