// Master contact configuration
// Update these values with your actual business information

export const contactConfig = {
  // WhatsApp Configuration
  whatsapp: {
    number: "6287780797042", // Format: country code + number (no + or spaces)
    defaultMessage: "Halo, saya ingin merencanakan perjalanan kustom di Lombok",
  },

  // Phone Numbers
  phone: {
    primary: "+62 877-8079-7042",
    secondary: "+62",
    primaryRaw: "+6287780797042", // For tel: links
    secondaryRaw: "+6281",
  },

  // Email Addresses
  email: {
    info: "info@mandalikatour.com",
    booking: "booking@mandalikatour.com",
  },

  // Physical Address
  address: {
    street: "Merembu, Kec. Labuapi,",
    city: "Lombok",
    province: "Nusa Tenggara Barat",
    postalCode: "83511",
    full: "Kabupaten Lombok Barat, Nusa Tenggara Bar 83511",
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/mandalikatour",
    instagram: "https://instagram.com/mandalikatour",
    twitter: "https://twitter.com/mandalikatour",
  },

  // Google Maps Embed URL
  // Get this from: https://www.google.com/maps -> Share -> Embed a map
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3944.8287600533013!2d116.15467831!3d-8.61243359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb926f43e0d9d%3A0x1f1a3b79f34b0d6e!2sThe%20Mandalika%20Rent%20Car!5e0!3m2!1sen!2sid!4v1765425111164!5m2!1sen!2sid",
  },

  // Company Information
  company: {
    name: "Mandalika Tour Lombok",
    tagline: "Perusahaan rental mobil terpercaya di Lombok",
    description:
      "Perusahaan rental mobil terpercaya di Lombok dengan layanan profesional dan armada lengkap.",
  },
};

// Helper function to generate WhatsApp link
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || contactConfig.whatsapp.defaultMessage;
  return `https://wa.me/${
    contactConfig.whatsapp.number
  }?text=${encodeURIComponent(message)}`;
};
