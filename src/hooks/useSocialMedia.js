
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const useSocialMedia = () => {
  const socialMedias = [
    {
      id: 1,
      icon: <FaFacebook />,
      link: 'https://pt-br.facebook.com/',
      text: 'facebook'
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: 'https://br.linkedin.com/',
      text: 'linkedin'
    },
    {
      id: 3,
      icon: <FaTwitter />,
      link: 'https://twitter.com/eduahcb',
      text: 'twitter'
    }
  ]

  return socialMedias
}

export default useSocialMedia
