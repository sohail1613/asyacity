import { SITE_CONFIG } from '../config/site';

export const submitForm = async (form, subject) => {
  const data = Object.fromEntries(new FormData(form).entries());

  if (!SITE_CONFIG.forms.endpoint) {
    throw new Error('Form endpoint is not configured');
  }

  const payload = new FormData();
  payload.append('_subject', subject);
  payload.append('_template', 'table');
  payload.append('_captcha', 'false');
  Object.entries(data).forEach(([key, value]) => payload.append(key, value));

  const response = await fetch(SITE_CONFIG.forms.endpoint, {
    method: 'POST',
    body: payload,
  });

  if (!response.ok) {
    throw new Error('Form submission failed');
  }
};
