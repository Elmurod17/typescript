// Quyida 20ta type yozilgan siz ushbu typelarda yozilgan takrorlanishlarni oldini olishingiz kerak. type, & foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

// ==============================
// 1. BasicUser type
// Foydalanuvchi uchun asosiy ma'lumotlar
// ==============================

type BaseUSer = {
  id: number;
  username?: string;
  email?: string;
  title?: string;
  duration?: number;
  userId?: number;
  name?: string;
  price?: number;
  date?: string;
  rating?: number;
};

type Status =
  | "pending"
  | "shipped"
  | "delivered"
  | "success"
  | "failed"
  | "open"
  | "closed"
  | "open"
  | "closed";

type Format = "video" | "audio" | "image";
type Level = "beginner" | "intermediate" | "advanced";
type TargetType = "product" | "course";
type TType = "purchase" | "refund" | "info" | "warning";
type Duration = "monthly" | "yearly";
type Priority = "low" | "high";
type Method = "standard" | "express";
type Theme = "light" | "dark";

type BasicUser = BaseUSer & {
  createdAt: string;
  isActive: boolean;
};

// ==============================
// 2. CustomerProfile type
// Mijozlar uchun profil ma'lumotlari
// ==============================
type CustomerProfile = BaseUSer & {
  fullName: string;
  phoneNumber: string;
};

// ==============================
// 3. VendorInfo type
// Sotuvchilar uchun ma'lumotlar
// ==============================
type VendorInfo = BaseUSer & {
  companyName: string;
};

// ==============================
// 4. ProductDetails type
// Mahsulotlar uchun batafsil ma'lumot
// ==============================
type ProductDetails = BaseUSer & {
  category: string;
  stockQuantity: number;
};

// ==============================
// 5. OrderInfo type
// Buyurtma ma'lumotlari
// ==============================
type OrderInfo = BaseUSer & {
  customerId: number;
  totalPrice: number;
  status: Status;
  orderDate: string;
};

// ==============================
// 6. MediaItem type
// Media kontenti uchun ma'lumotlar
// ==============================
type MediaItem = BaseUSer & {
  format: Format;
  creator: string;
};

// ==============================
// 7. VideoContent type
// Video ma'lumotlari
// ==============================
type VideoContent = BaseUSer & {
  views: number;
  resolution: string;
};

// ==============================
// 8. EventDetails type
// Tadbir ma'lumotlari
// ==============================
type EventDetails = BaseUSer & {
  location: string;
  organizerId: number;
};

// ==============================
// 9. CourseInfo type
// Kurslar uchun ma'lumotlar
// ==============================
type CourseInfo = BaseUSer & {
  instructor: string;
  durationHours: number;
  level: Level;
};

// ==============================
// 10. ReviewItem type
// Sharhlar uchun ma'lumotlar
// ==============================
type ReviewItem = BaseUSer & {
  comment: string;
  targetType: TargetType;
};

// ==============================
// 11. TransactionRecord type
// Tranzaksiya yozuvlari
// ==============================
type TransactionRecord = BaseUSer & {
  amount: number;
  type: TType;
  status: Status;
};

// ==============================
// 12. InventoryEntry type
// Ombor yozuvlari
// ==============================
type InventoryEntry = BaseUSer & {
  productId: number;
  quantity: number;
  warehouse: string;
  lastUpdated: string;
};

// ==============================
// 13. CampaignData type
// Marketing kampaniyasi ma'lumotlari
// ==============================
type CampaignData = BaseUSer & {
  budget: number;
  startDate: string;
  targetAudience: string;
};

// ==============================
// 14. SubscriptionInfo type
// Obuna rejalari ma'lumotlari
// ==============================
type SubscriptionInfo = BaseUSer & {
  duration: Duration;
  features: string[];
};

// ==============================
// 15. NotificationData type
// Bildirishnoma ma'lumotlari
// ==============================
type NotificationData = BaseUSer & {
  message: string;
  type: TType;
  read: boolean;
};

// ==============================
// 16. SupportTicket type
// Texnik yordam chiptasi
// ==============================
type SupportTicket = BaseUSer & {
  subject: string;
  status: Status;
  priority: Priority;
};

// ==============================
// 17. BlogArticle type
// Blog maqolasi ma'lumotlari
// ==============================
type BlogArticle = BaseUSer & {
  author: string;
  status: Status;
  tags: string[];
};

// ==============================
// 18. PaymentDetails type
// To'lov usullari ma'lumotlari
// ==============================
type PaymentDetails = BaseUSer & {
  type: string;
  cardNumber: string;
  isDefault: boolean;
};

// ==============================
// 19. ShippingDetails type
// Yetkazib berish ma'lumotlari
// ==============================
type ShippingDetails = BaseUSer & {
  orderId: number;
  address: string;
  method: Method;
  cost: number;
};

// ==============================
// 20. UserSettings type
// Foydalanuvchi sozlamalari
// ==============================
type UserSettings = BaseUSer & {
  privacy: string;
  theme: Theme;
  notifications: boolean;
};
