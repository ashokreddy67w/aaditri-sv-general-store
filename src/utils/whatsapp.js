import { ADMIN_WHATSAPP_NUMBER, STORE } from "../constants/config";

export function buildOrderMessage({ items, phone, plot }) {
  const lines = [];

  const totalItems = items.reduce(
    (sum, item) => sum + Number(item.qty),
    0
  );

  const totalAmount = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  lines.push(`🛒 *${STORE.name}*`);
  lines.push("");
  lines.push("📦 *NEW GROCERY ORDER*");
  lines.push("");
  lines.push(`📱 Phone : ${phone}`);
  lines.push(`🏠 Plot No : ${plot}`);
  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push("🛍️ *Order Items*");
  lines.push("");

  items.forEach((item, index) => {
    const price = Number(item.price);
    const qty = Number(item.qty);
    const total = price * qty;

    lines.push(
      `${index + 1}. ${item.name}${item.weight ? ` (${item.weight})` : ""}`
    );
    lines.push(`   ₹${price} × ${qty} = ₹${total}`);
    lines.push("");
  });

  lines.push("━━━━━━━━━━━━━━━━━━━━");
  lines.push(`📦 Total Items : ${totalItems}`);
  lines.push(`💰 Total Amount : ₹${totalAmount}`);
  lines.push("");
  lines.push("🙏 Thank you!");

  return lines.join("\n");
}

export function getWhatsAppOrderLink({ items, phone, plot }) {
  const message = buildOrderMessage({ items, phone, plot });

  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}