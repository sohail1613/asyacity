export const SITE_CONFIG = {
  company: {
    name: 'Asya City',
    email: process.env.REACT_APP_EMAIL || 'av.halilsahinn@gmail.com',
    phone: process.env.REACT_APP_PHONE || '+90 536 296 75 02',
    address: process.env.REACT_APP_ADDRESS || 'Çankaya / Ankara',
    whatsapp: process.env.REACT_APP_WHATSAPP || '+905362967502',
  },
  developer: {
    name: 'Sohail',
    email: process.env.REACT_APP_DEVELOPER_EMAIL || 'sohail1613@gmail.com',
    linkedin: process.env.REACT_APP_DEVELOPER_LINKEDIN || 'https://www.linkedin.com/in/mohammad-sohail-ansari-3b3316132/',
  },
  forms: {
    endpoint: process.env.REACT_APP_FORM_ENDPOINT || 'https://formsubmit.co/ajax/av.halilsahinn@gmail.com',
    recipient: process.env.REACT_APP_FORM_RECIPIENT || 'av.halilsahinn@gmail.com',
    subjects: {
      contact: 'New contact request',
      site: 'New site quote request',
      career: 'New career application',
    },
  },
  office: {
    locations: 'Eryaman & Çankaya Bölge Ofisleri',
    weekdays: 'Pzt-Cum: 09:00 - 17:00',
    saturday: 'Cmt: 10:00 - 14:00',
    sunday: 'Paz: Kapalı',
  },
};
