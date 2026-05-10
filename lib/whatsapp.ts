export const TEAM_NUMBERS = {
  hemant: "918178363761",
  vijay: "917042067976",
} as const;

/**
 * Builds a wa.me deep-link. Both `phone` and `message` are accepted
 * unformatted; encoding is applied here.
 *
 * @param phone  E.164 digits only, no "+" (e.g. "918178363761")
 * @param message Plain-text prefill message
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Convenience: builds a service-specific WhatsApp link for a given partner.
 */
export function buildServiceWhatsAppUrl(
  phone: string,
  serviceName: string
): string {
  return buildWhatsAppUrl(
    phone,
    `Hi, I need help with ${serviceName}. Please share more details.`
  );
}
