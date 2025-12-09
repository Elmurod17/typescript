// Quyida 10ta interface yozilgan siz ushbu interfaceda yozilgan takrorlanishlarni oldini olishingiz kerak. type, &, extendslardan foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

// ==============================
// 1. User interfeysi
// Foydalanuvchi tizimidagi asosiy ma'lumotlar uchun
// ==============================

interface IBase {
  id: number;
  createdAt: string;
  username?: string;
  email?: string;
  fullName?: string;
  isActive?: boolean;
  phoneNumber?: string;
  address?: string;
  name?: string;
  price?: number;
  category?: string;
  description?: string;
  stockQuantity?: number;
  customerId?: number;
  title?: string;
  startDate?: string;
  organizerId?: number;
  paymentMethod: string;
}

type UserRole = "user" | "admin" | "guest";
type TNumberArray = number[];
type Status =
  | "pending"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "completed"
  | "failed";

type TransactionType = "purchase" | "refund" | "deposit";
type targetType = "product" | "vendor" | "event";
interface User extends IBase {
  lastLogin: string;
  role: "user" | "admin" | "guest";
}

// ==============================
// 2. Customer interfeysi
// Mijozlar uchun maxsus ma'lumotlar, User'ga o'xshash
// ==============================
interface Customer extends IBase {
  purchaseHistory: TNumberArray;
  loyaltyPoints: number;
}

// ==============================
// 3. Vendor interfeysi
// Sotuvchilar uchun ma'lumotlar, User va Customer'ga o'xshash
// ==============================
interface Vendor extends IBase {
  companyName: string;
  vendorRating: number;
}

// ==============================
// 4. Product interfeysi
// Mahsulotlar katalogi uchun asosiy ma'lumotlar
// ==============================

interface Product extends IBase {
  isAvailable: boolean;
  vendorId: number;
  weight?: number;
}

// ==============================
// 5. InventoryItem interfeysi
// Ombor mahsulotlari uchun, Product'ga o'xshash
// ==============================
interface InventoryItem extends IBase {
  isAvailable: boolean;
  warehouseId: number;
  lastRestocked: string;
}

// ==============================
// 6. Order interfeysi
// Buyurtmalar uchun ma'lumotlar
// ==============================

interface Order {
  products: number[];
  totalPrice: number;
  status: Status;
  shippingAddress: string;
  isPaid: boolean;
  orderNotes?: string;
}

// ==============================
// 7. Transaction interfeysi
// Moliyaviy operatsiyalar uchun, Order'ga o'xshash
// ==============================
interface Transaction {
  customerId: number;
  amount: number;
  status: Status;
  isRefunded: boolean;
  transactionType: TransactionType;
  orderId?: number;
}

// ==============================
// 8. Event interfeysi
// Tadbirlar va faoliyatlar uchun ma'lumotlar
// ==============================

interface Event extends IBase {
  location: string;
  isPublic: boolean;
  maxParticipants: number;
  registrationDeadline?: string;
}

// ==============================
// 9. Campaign interfeysi
// Marketing kampaniyalari uchun, Event'ga o'xshash
// ==============================
interface Campaign extends IBase {
  targetAudience: string;
  budget: number;
  endDate?: string;
}

// ==============================
// 10. Review interfeysi
// Foydalanuvchi sharhlari uchun ma'lumotlar
// ==============================
interface Review extends IBase {
  userId: number;
  targetId: number;
  rating: number;
  comment: string;
  isApproved: boolean;
  targetType: targetType;
  helpfulVotes: number;
  reported?: boolean;
}
