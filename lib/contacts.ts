/**
 * Placeholder contact destinations.
 * Replace these values with the real links / number before publishing.
 */
export const CONTACTS = {
  telegram: 'TELEGRAM_URL',
  whatsapp: 'WHATSAPP_URL',
  max: 'MAX_URL',
  phone: 'PHONE_NUMBER',
} as const

export const PHONE_HREF = `tel:${CONTACTS.phone}`
