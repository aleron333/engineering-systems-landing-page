export const CONTACTS = {
  telegram: 'https://t.me/ShustovIA',
  whatsapp: 'https://wa.me/79637717371',
  max: 'https://max.ru/u/f9LHodD0cOKNWX3pRZvJpevWnNOMAN55KqxIYNQxJP9dsY7sOMmcy3EXhy4',
  phone: '+7 917 569 49 18',
} as const

export const PHONE_HREF = `tel:${CONTACTS.phone.replace(/[^+\d]/g, '')}`
