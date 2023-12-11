import uiux_dibimbing from '@/assets/certificate/uiux-dibimbing.png'
import jwd_bnsp from '@/assets/certificate/jwd-bnsp.png'
import jwd_digitalent from '@/assets/certificate/jwd-digitalent.png'
import aws_architecting from '@/assets/certificate/aws-architecting-dicoding.png'
import backend_pemula from '@/assets/certificate/backend-pemula-dicoding.png'
import cloud_practitioner from '@/assets/certificate/cloud-practitioner-essential-dicoding.png'
import frontend_pemula from '@/assets/certificate/frontend-pemula-dicoding.png'
import javascript_fundamental from '@/assets/certificate/javascript-dasar-dicoding.png'
import reactjs_sanber from '@/assets/certificate/react-sanbercode.png'
import adonis_sanber from '@/assets/certificate/adonis-sanbercode.png'
import laravel_sanber from '@/assets/certificate/laravel-sanbercode.png'
import golang_sanber from '@/assets/certificate/golang-backend-sanbercode.png'
import react_beginner from '@/assets/certificate/react-beginner-dicoding.png'

import web_app_competition from '@/assets/certificate/web-unm.png'
import web_lo from '@/assets/certificate/web-lokreatif.png'

export const certificates = [
  {
    title: '3rd Winner Web App Competition',
    company: 'Universitas Nusa Mandiri',
    image: web_app_competition,
    href: '#',
    type: 'competition',
  },
  {
    title: 'Finalist Web/Mobile App Competition',
    company: 'Aptisi',
    image: web_lo,
    href: '#',
    type: 'competition',
  },
  {
    title: 'UIUX For Beginner',
    company: 'dibimbing',
    image: uiux_dibimbing,
    href: '#',
    type: 'course',
  },
  {
    title: 'Junior Web Developer',
    company: 'badan nasional sertifikasi profesional',
    image: jwd_bnsp,
    href: '#',
    type: 'competence',
  },
  {
    title: 'VSGA Junior Web Developer',
    company: 'digital talent scholarship',
    image: jwd_digitalent,
    href: '#',
    type: 'course',
  },
  {
    title: 'React JS Web Frontend',
    company: 'Sanbercode',
    image: reactjs_sanber,
    href: '#',
    type: 'course',
  },
  {
    title: 'Backend Development With AdonisJS',
    company: 'Sanbercode',
    image: adonis_sanber,
    href: '#',
    type: 'course',
  },
  {
    title: 'Laravel Web Development',
    company: 'Sanbercode',
    image: laravel_sanber,
    href: '#',
    type: 'course',
  },
  {
    title: 'Golang Backend Development',
    company: 'Sanbercode',
    image: golang_sanber,
    href: '#',
    type: 'course',
  },
  {
    title: 'Architecting on AWS',
    company: 'dicoding',
    image: aws_architecting,
    href: 'https://www.dicoding.com/certificates/0LZ0Q8JQ3Z65',
    type: 'course',
  },
  {
    title: 'Back-End Beginner',
    company: 'dicoding',
    image: backend_pemula,
    href: 'https://www.dicoding.com/certificates/6RPN4NOW4X2M',
    type: 'course',
  },
  {
    title: 'Cloud Practitioner Essentials',
    company: 'dicoding',
    image: cloud_practitioner,
    href: 'https://www.dicoding.com/certificates/QLZ9R0R4MP5D',
    type: 'course',
  },
  {
    title: 'Front-End Beginner',
    company: 'dicoding',
    image: frontend_pemula,
    href: 'https://www.dicoding.com/certificates/6RPNDGQG8Z2M',
    type: 'course',
  },
  {
    title: 'Javascript Fundamental',
    company: 'dicoding',
    image: javascript_fundamental,
    href: 'https://www.dicoding.com/certificates/ERZRMEORNPYV',
    type: 'course',
  },
  {
    title: 'React Beginner',
    company: 'dicoding',
    image: react_beginner,
    href: 'https://www.dicoding.com/certificates/1RXYMJ6EMXVM',
    type: 'course',
  },
]

export const imagesPreview = certificates.map(
  (certificate) => certificate.image.src,
)
