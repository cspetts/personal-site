import { ContactClient } from './client'
 
export function generateStaticParams() {
  return [{ slug: [] }]
}
 
export default function Contact() {
  return <ContactClient />
}

