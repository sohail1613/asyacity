export const SITE_CONFIG = {
  company: {
    name: 'Asya City',
    email: process.env.REACT_APP_EMAIL || 'sohail1613@gmail.com',
    phone: process.env.REACT_APP_PHONE || '0 (850) 480 05 25',
    address: process.env.REACT_APP_ADDRESS || 'Ankara, Türkiye',
    whatsapp: process.env.REACT_APP_WHATSAPP || '905XXXXXXXXX',
  },
  developer: {
    name: 'Sohail',
    email: process.env.REACT_APP_DEVELOPER_EMAIL || 'sohail1613@gmail.com',
    linkedin: process.env.REACT_APP_DEVELOPER_LINKEDIN || 'https://www.linkedin.com/in/mohammad-sohail-ansari-3b3316132/',
  },
  forms: {
    endpoint: process.env.REACT_APP_FORM_ENDPOINT || 'https://formsubmit.co/ajax/sohail1613@gmail.com',
    recipient: process.env.REACT_APP_FORM_RECIPIENT || 'sohail1613@gmail.com',
    subjects: {
      contact: 'New contact request',
      site: 'New site quote request',
      career: 'New career application',
    },
  },
  office: {
    locations: 'Eryaman & Çankaya Bölge Ofisleri',
    weekdays: 'Pzt-Cum: 09:00 - 18:00',
    saturday: 'Cmt: 10:00 - 14:00',
    sunday: 'Paz: Kapalı',
  },
};
