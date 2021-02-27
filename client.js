import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ddykkpky', 
  dataset: 'production', 
  useCdn: true 
})