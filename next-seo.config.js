const title = 'Software Engineer - Desarrollador Web Fullstack ';
const titleTemplate = 'Ken Sanchez | %s';
const description =
  'Mi pasión es ayudar a startups a crear plataformas web escalables con arquitectura solidas.';

// const canonical = 'https://kenblog.netlify.app/';

const thumbnail = 'https://res.cloudinary.com/craftwebs/image/upload/v1577304588/temrinal_jn42nr.png';

export default {
  title,
  titleTemplate,
  description,
  canonical,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    // url: canonical,
    site_name: description,
    images: [
      {
        url: thumbnail,
        width: 600,
        height: 300,
        alt: description
      }
    ]
  },
  twitter: {
    handle: '@createdbyken',
    site: '@createdbyken',
    cardType: 'summary_large_image'
  }
};