// ==============================
// 1-masala sharti
// ==============================
// Ro‘zimuhammad yangi o‘qituvchi haqida ma’lumot kiritdi. Quyida obyekt berilgan, unga mos `Teacher` interfeysini yozing. Balki Ro‘zimuhammad bu safar o‘qituvchini eslab qolar 😊

const teacher = {
  name: "Ali Valiev",
  subject: ["Matematika", "Fizika"],
  experience: 5,
  isCertified: true,
};

interface ITeacher {
  name: string;
  subject: string[];
  experience: number;
  isCertified: boolean;
}

// ==============================
// 2-masala sharti
// ==============================
// Subhoniddin o‘zining sevimli qo‘shig‘ini TypeScript’da ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Music` interfeysini yozing. Notalar ham, Subhoniddin ham xursand bo‘lsin 🎶

const song = {
  title: "Yor-Yor",
  artist: "Ozodbek Nazarbekov",
  duration: 240,
  genre: "Folk",
};

interface ISong {
  title: string;
  artist: string;
  duration: number;
  genre: string;
}

// ==============================
// 3-masala sharti
// ==============================
// Diyorbek restoran menyusiga yangi taom qo‘shdi. Quyida obyekt berilgan, unga mos `MenuItem` interfeysini yozing. Oshqozonlar sizdan minnatdor bo‘ladi 😋

const item = {
  id: 1,
  name: "Osh",
  price: 25000,
  isVegetarian: false,
};

interface IItem {
  id: number;
  name: string;
  price: number;
  isVegetarian: boolean;
}

// ==============================
// 4-masala sharti
// ==============================
// Feruza uyidagi sevimli kitobini ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Book` interfeysini yozing. Kitobxonlar xursand bo‘lsin 📚

const book = {
  title: "Alpomish",
  author: "Xalq dastani",
  pages: 120,
  publishedYear: 1990,
};

interface IBook {
  title: string;
  author: string;
  pages: number;
  publishYear: number;
}

// ==============================
// 5-masala sharti
// ==============================
// Asilbek YouTube’da yangi video joyladi. Quyida obyekt berilgan, unga mos `Video` interfeysini yozing. Balki millionta ko‘rish to‘plar 🎥

const vlog = {
  title: "Toshkentda bir kun",
  views: 15000,
  duration: 600,
  uploadedAt: "2025-06-20",
};

interface IVlog {
  title: string;
  views: number;
  duration: number;
  uploadedAt: string;
}

// ==============================
// 6-masala sharti
// ==============================
// Nigora onlayn do‘koniga yangi mahsulot qo‘shdi. Quyida obyekt berilgan, unga mos `Product` interfeysini yozing. Iqtisodiy inqirozning oldi olinsin 💸

const product = {
  id: 101,
  name: "Smartfon",
  price: 2500000,
  description: "Eng so‘nggi model",
};

interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

// ==============================
// 7-masala sharti
// ==============================
// Sardor kino saytiga yangi film qo‘shdi. Quyida obyekt berilgan, unga mos `Movie` interfeysini yozing. Rejissor xafa bo‘lib ketmasin 🎬

const film = {
  title: "Baxt uchun kurash",
  director: "Shuhrat Abbasov",
  year: 1980,
  rating: 8.5,
};

interface IFilm {
  title: string;
  director: string;
  year: number;
  rating: number;
}

// ==============================
// 8-masala sharti
// ==============================
// Muxlisa yangi mobil ilova ishlab chiqdi. Quyida obyekt berilgan, unga mos `App` interfeysini yozing. Ilova muvaffaqiyatli bo‘lsin 📱

const application = {
  name: "ChatApp",
  version: "1.0.0",
  downloads: 5000,
  developer: "Muxlisa",
};

interface IApplication {
  name: string;
  version: string;
  downloads: number;
  developer: string;
}

// ==============================
// 9-masala sharti
// ==============================
// Behzod sport klubiga yangi a’zo sifatida qo‘shildi. Quyida obyekt berilgan, unga mos `Member` interfeysini yozing. Sportchilar xursand bo‘lsin 🏋️‍♂️

const member = {
  id: 23,
  name: "Behzod Xolmatov",
  membershipType: "Premium",
  isActive: true,
};

interface IMember {
  id: number;
  name: string;
  membershipType: string;
  isActive: boolean;
}

// ==============================
// 10-masala sharti
// ==============================
// Dilfuza galereya sahifasiga yangi rasm qo‘shdi. Quyida obyekt berilgan, unga mos `Image` interfeysini yozing. Rasmlar chiroyli ko‘rinsin 🖼️

const photo = {
  url: "https://example.com/image.jpg",
  alt: "Tog‘ manzarasi",
  width: 1920,
  height: 1080,
};

interface IPhoto {
  url: string;
  alt: string;
  width: number;
  height: number;
}

// ==============================
// 11-masala sharti
// ==============================
// Alisher o‘z blogiga yangi maqola yozdi. Quyida obyekt berilgan, unga mos `Post` interfeysini yozing. O‘quvchilar xursand bo‘lsin 📝

const article = {
  id: 5,
  title: "TypeScriptni o‘rganish bo‘yicha maslahatlar",
  content: "TypeScript haqida foydali maslahatlar...",
  publishedDate: "2025-06-15",
};

interface IArticle {
  id: number;
  title: string;
  content: string;
  publishDate: string;
}

// ==============================
// 12-masala sharti
// ==============================
// Zilola onlayn kurslar platformasiga yangi kurs qo‘shdi. Quyida obyekt berilgan, unga mos `Course` interfeysini yozing. Bilim ulashsin 📚

const course = {
  id: 10,
  title: "Web dasturlash asoslari",
  duration: 20,
  instructor: "Zilola Rahimova",
};

interface ICourse {
  id: number;
  title: string;
  duration: number;
  instructor: string;
}

// ==============================
// 13-masala sharti
// ==============================
// Farrux o‘zining sayohatlarini ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Trip` interfeysini yozing. Sarguzashtlar davom etsin ✈️

const trip = {
  destination: "Istanbul",
  duration: 7,
  cost: 1500,
  isInternational: true,
};

interface ITrip {
  destination: string;
  duration: number;
  cost: number;
  isInternational: boolean;
}

// ==============================
// 14-masala sharti
// ==============================
// Xurshid onlayn kutubxonaga yangi elektron kitob qo‘shdi. Quyida obyekt berilgan, unga mos `EBook` interfeysini yozing. Kitobxonlar xursand bo‘lsin 📖

const ebook = {
  title: "O‘tgan kunlar",
  author: "Abdulla Qodiriy",
  fileSize: 2.5,
  format: "PDF",
};

interface IEbook {
  title: string;
  author: string;
  fileSize: number;
  format: string;
}

// ==============================
// 15-masala sharti
// ==============================
// Madina fitnes ilovasiga yangi mashq qo‘shdi. Quyida obyekt berilgan, unga mos `Workout` interfeysini yozing. Sog‘lom hayot davom etsin 💪

const workout = {
  id: 3,
  name: "Yoga seansi",
  duration: 45,
  intensity: "O‘rtacha",
};

interface IWorkout {
  id: number;
  name: string;
  duration: number;
  intensity: string;
}

// ==============================
// 16-masala sharti
// ==============================
// Otabek onlayn do‘koniga yangi buyurtma kiritdi. Quyida obyekt berilgan, unga mos `Order` interfeysini yozing. Savdo muvaffaqiyatli bo‘lsin 💼

const order = {
  id: 202,
  customerName: "Otabek Sattorov",
  totalPrice: 350000,
  status: "Yetkazib berilmoqda",
};

interface IOrder {
  id: number;
  customerName: string;
  totalPrice: number;
  status: string;
}

// ==============================
// 17-masala sharti
// ==============================
// Gulnoza ta’lim platformasiga yangi talaba qo‘shdi. Quyida obyekt berilgan, unga mos `Student` interfeysini yozing. Ta’lim davom etsin 📚

const student = {
  id: 45,
  name: "Gulnoza Saidova",
  grade: 85,
  isEnrolled: true,
};

interface IStudent {
  id: number;
  name: string;
  grade: number;
  isEnrolled: boolean;
}

// ==============================
// 18-masala sharti
// ==============================
// Shaxzod o‘yin platformasiga yangi o‘yin qo‘shdi. Quyida obyekt berilgan, unga mos `Game` interfeysini yozing. O‘yinchilar xursand bo‘lsin 🎮

const game = {
  title: "Cyber Quest",
  platform: "PC",
  releaseYear: 2023,
  genre: "Action",
};

interface IGame {
  title: string;
  platform: string;
  releaseYear: number;
  genre: string;
}

// ==============================
// 19-masala sharti
// ==============================
// Sevara tadbirlar ro‘yxatiga yangi tadbir qo‘shdi. Quyida obyekt berilgan, unga mos `Event` interfeysini yozing. Bayramlar davom etsin 🎉

const phonomenon = {
  id: 15,
  name: "Yangi yil kechasi",
  date: "2025-12-31",
  location: "Toshkent",
};

interface IPhonomenon {
  id: number;
  name: string;
  date: string;
  location: string;
}

// ==============================
// 20-masala sharti
// ==============================
// Jamol yangi musiqa albomini ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Album` interfeysini yozing. Musiqa yangilansin 🎼

const album = {
  title: "Yulduzlar ostida",
  artist: "Sevara Nazarkhan",
  tracks: 12,
  releaseDate: "2025-03-10",
};

interface IAlbum {
  title: string;
  artist: string;
  tracks: number;
  releaseDate: string;
}

// ==============================
// 21-masala sharti
// ==============================
// Laziza ta’lim platformasiga yangi dars qo‘shdi. Quyida obyekt berilgan, unga mos `Lesson` interfeysini yozing. Ta’lim sifatli bo‘lsin 🎓

const lesson = {
  id: 7,
  title: "React asoslari",
  duration: 90,
  topic: "Frontend dasturlash",
};

interface ILesson {
  id: number;
  title: string;
  duration: number;
  topic: string;
}

// ==============================
// 22-masala sharti
// ==============================
// Nodir blog saytiga yangi maqola joyladi. Quyida obyekt berilgan, unga mos `Blog` interfeysini yozing. O‘quvchilar xursand bo‘lsin 📝

const blogPost = {
  id: "post-123",
  title: "JavaScriptda xatolar bilan ishlash",
  author: "Nodir Xasanov",
  publishDate: "2025-06-22",
};

interface IBlogPost {
  id: string;
  title: string;
  author: string;
  publishDate: string;
}

// ==============================
// 23-masala sharti
// ==============================
// Shohjahon sayohat agentligiga yangi tur qo‘shdi. Quyida obyekt berilgan, unga mos `Tour` interfeysini yozing. Sarguzashtlar boshlansin 🌍

const tour = {
  id: 8,
  destination: "Parij",
  price: 2000,
  durationDays: 5,
};

interface ITour {
  id: number;
  destination: string;
  price: number;
  durationDays: number;
}

// ==============================
// 24-masala sharti
// ==============================
// Ma’mura restoran menyusiga yangi taom qo‘shdi. Quyida obyekt berilgan, unga mos `Dish` interfeysini yozing. Oshxona shuhrati oshirila! 😋

const dish = {
  id: 12,
  name: "Manti",
  price: 20000,
  isSpicy: false,
};

interface IDish {
  id: number;
  name: string;
  price: number;
  isSpicy: boolean;
}

// ==============================
// 25-masala sharti
// ==============================
// Ulug‘bek kutubxonaga yangi jurnal qo‘shdi. Quyida obyekt berilgan, unga mos `Magazine` interfeysini yozing. Nashriyot xursand bo‘lsin 📇

const magazine = {
  id: 101,
  title: "Ilm va Fan",
  issue: 45,
  publisher: "O‘zbekiston nashriyoti",
};

interface IMagazine {
  id: number;
  title: string;
  issue: number;
  publisher: string;
}

// ==============================
// 26-masala sharti
// ==============================
// Dilbar fitnes dasturiga yangi mashq qo‘shdi. Quyida obyekt berilgan, unga mos `Exercise` interfeysini yozing. Sog‘lom turmush tarzi targ‘ib qilinsin 💪

const exercise = {
  id: 4,
  name: "Push-ups",
  reps: 20,
  equipment: "Hech narsa",
};

interface IExercise {
  id: number;
  name: string;
  reps: number;
  equipment: string;
}

// ==============================
// 27-masala sharti
// ==============================
// Sherzod kino portaliga yangi film qo‘shdi. Quyida obyekt berilgan, unga mos `Film` interfeysini yozing. Kinosevarlar xursand bo‘lsin 🎥

const movie = {
  id: 25,
  title: "Yulduzli osmon",
  genre: "Drama",
  duration: 120,
};

interface IMovie {
  id: number;
  title: string;
  genre: string;
  duration: number;
}

// ==============================
// 28-masala sharti
// ==============================
// Nilufar onlayn do‘konga yangi kiyim qo‘shdi. Quyida obyekt berilgan, unga mos `Clothing` interfeysini yozing. Moda olami porlasin 🌟

const clothing = {
  id: 305,
  name: "Klassik ko‘ylak",
  price: 150000,
  size: "M",
};

interface IClothing {
  id: number;
  name: string;
  price: number;
  size: string;
}

// ==============================
// 29-masala sharti
// ==============================
// Oybek musiqa festivallariga yangi konsert qo‘shdi. Quyida obyekt berilgan, unga mos `Concert` interfeysini yozing. Musiqa oqimi to‘xtamasin 🎸

const concert = {
  id: 9,
  name: "Rock Fest",
  date: "2025-07-15",
  venue: "Toshkent Stadioni",
};

interface IConcert {
  id: number;
  name: string;
  date: string;
  venue: string;
}

// ==============================
// 30-masala sharti
// ==============================
// Gulchehra ta’lim markaziga yangi guruh qo‘shdi. Quyida obyekt berilgan, unga mos `Class` interfeysini yozing. Ta’lim sifati oshirila! 🎓

const classObj = {
  id: 3,
  name: "Python dasturlash",
  capacity: 20,
};

interface IClassObj {
  id: number;
  name: string;
  capacity: number;
}

// ==============================
// 31-masala sharti
// ==============================
// Miraziz sayohat blogiga yangi maqola yozdi. Quyida obyekt berilgan, unga mos `TravelPost` interfeysini yozing. Sarguzashtlar o‘quvchilarga yetib borsin! 🌍

const travelPost = {
  id: 17,
  title: "Samarqandda bir hafta",
  destination: "Samarqand",
  author: "Miraziz",
};

interface ITravelPost {
  id: number;
  title: string;
  destination: string;
  author: string;
}

// ==============================
// 32-masala sharti
// ==============================
// Xadicha onlayn kutubxonaga yangi audiokitob qo‘shdi. Quyida obyekt berilgan, unga mos `Audiobook` interfeysini yozing. Tinglovchilar xursand bo‘lsin 🎧

const audiobook = {
  title: "Xamsa",
  author: "Alisher Navoiy",
  duration: 10,
  narrator: "Zokir aka",
};

interface IAudiobook {
  title: string;
  author: string;
  duration: number;
  narrator: string;
}

// ==============================
// 33-masala sharti
// ==============================
// Rustam restoran menyusiga yangi ichimlik qo‘shdi. Quyida obyekt berilgan, unga mos `Beverage` interfeysini yozing. Chanqoqlar quvonsin 🍹

const beverage = {
  id: 7,
  name: "Mojito",
  price: 15000,
  isCarbonated: true,
};

interface IBeverage {
  id: number;
  name: string;
  price: number;
  isCarbonated: boolean;
}

// ==============================
// 34-masala sharti
// ==============================
// Mohira onlayn o‘yin platformasiga yangi o‘yin qo‘shdi. Quyida obyekt berilgan, unga mos `OnlineGame` interfeysini yozing. O‘yinchilar xursand bo‘lsin 🕹️

const onlineGame = {
  id: 50,
  title: "Battle Arena",
  genre: "Multiplayer",
  playersOnline: 1000,
};

interface IOnlineGame {
  id: number;
  title: string;
  genre: string;
  playersOnline: number;
}

// ==============================
// 35-masala sharti
// ==============================
// Anvar kino festivaliga yangi film qo‘shdi. Quyida obyekt berilgan, unga mos `FilmEntry` interfeysini yozing. Kinosevarlar xursand bo‘lsin 🎞

const filmEntry = {
  id: 33,
  title: "Hayot yo‘li",
  director: "Zoir Xolmatov",
  category: "Drama",
};

interface IFilmEntry {
  id: number;
  title: string;
  director: string;
  category: string;
}

// ==============================
// 36-masala sharti
// ==============================
// Zuhra onlayn jurnalga yangi maqola qo‘shdi. Quyida obyekt berilgan, unga mos `Feature` interfeysini yozing. O‘quvchilar xursand bo‘lsin ✍️

const feature = {
  id: 22,
  title: "Yangi texnologiyalar",
  author: "Zuhra",
  topic: "Innovatsiyalar",
};

interface IFeature {
  id: number;
  title: string;
  author: string;
  topic: string;
}

// ==============================
// 37-masala sharti
// ==============================
// Tohir sport musobaqalariga yangi musobaqa qo‘shdi. Quyida obyekt berilgan, unga mos `Competition` interfeysini yozing. Sportchilar xursand bo‘lsin 🏆

const competition = {
  id: 12,
  name: "Toshkent Marathon",
  date: "2025-09-10",
  prizePool: 5000000,
};

interface ICompetition {
  id: number;
  name: string;
  date: string;
  prizePool: number;
}

// ==============================
// 38-masala sharti
// ==============================
// Mavluda moda katalogiga yangi kiyim qo‘shdi. Quyida obyekt berilgan, unga mos `FashionItem` interfeysini yozing. Moda olami porlasin 🌟

const fashionItem = {
  id: 108,
  name: "Yozgi libos",
  brand: "Local Brand",
  price: 200000,
};

interface IFashionItem {
  id: number;
  name: string;
  brand: string;
  price: number;
}

// ==============================
// 39-masala sharti
// ==============================
// Shavkat kutubxonaga yangi kitob sharhi qo‘shdi. Quyida obyekt berilgan, unga mos `BookReview` interfeysini yozing. O‘quvchilar xursand bo‘lsin 📝

const bookReview = {
  id: 9,
  bookTitle: "Boburnoma",
  rating: 9,
  comment: "Ajoyib tarixiy asar",
};

interface IBookReview {
  id: number;
  bookTitle: string;
  rating: number;
  comment: string;
}

// ==============================
// 40-masala sharti
// ==============================
// Dilrabo sayohat rejalariga yangi reja qo‘shdi. Quyida obyekt berilgan, unga mos `Itinerary` interfeysini yozing. Sarguzashtlar boshlansin ✈️

const itinerary = {
  id: 6,
  destination: "Buxoro",
  days: 3,
  activities: "Tarixiy joylarni ziyorat",
};

interface IItinerary {
  id: number;
  destination: string;
  days: number;
  activities: string;
}

// ==============================
// 41-masala sharti
// ==============================
// Kamola onlayn do‘konga yangi aksessuar qo‘shdi. Quyida obyekt berilgan, unga mos `Accessory` interfeysini yozing. Do‘kon porlasin 🛍️

const accessory = {
  id: 45,
  name: "Soat",
  price: 300000,
  material: "Zanglamas po‘lat",
};

interface IAccessory {
  id: number;
  name: string;
  price: number;
  material: string;
}

// ==============================
// 42-masala sharti
// ==============================
// Shohzod o‘yin turnirlariga yangi turnir qo‘shdi. Quyida obyekt berilgan, unga mos `Tournament` interfeysini yozing. O‘yinchilar xursand bo‘lsin 🏆

const tournament = {
  id: 14,
  name: "eSports League",
  game: "Dota 2",
  prize: 1000000,
};

interface ITournament {
  id: number;
  name: string;
  game: string;
  prize: number;
}

// ==============================
// 43-masala sharti
// ==============================
// Gulbahor ta’lim dasturiga yangi imtihon qo‘shdi. Quyida obyekt berilgan, unga mos `Test` interfeysini yozing. Ta’lim sifati oshirila!

const test = {
  id: 8,
  subject: "Matematika",
  maxScore: 100,
  date: "2025-07-01",
};

interface ITest {
  id: number;
  subject: string;
  maxScore: number;
  date: string;
}

// ==============================
// 44-masala sharti
// ==============================
// Xurshida onlayn galereyaga yangi video qo‘shdi. Quyida obyekt berilgan, unga mos `VideoClip` interfeysini yozing. Tomoshabinlar xursand bo‘lsin 📹

const videoClip = {
  id: 19,
  title: "Toshkent kechasi",
  duration: 300,
  resolution: "4K",
};

interface IVideoClip {
  id: number;
  title: string;
  duration: number;
  resolution: string;
}

// ==============================
// 45-masala sharti
// ==============================
// O‘tkir sport jurnaliga yangi musobaqa natijasini qo‘shdi. Quyida obyekt berilgan, unga mos `Scoreboard` interfeysini yozing. Sport muxlislari xursand bo‘lsin 📊

const scoreboard = {
  id: 5,
  match: "Toshkent vs Samarqand",
  score: "3:2",
  winner: "Toshkent",
};

interface IScoreboard {
  id: number;
  match: string;
  score: string;
  winner: string;
}

// ==============================
// 46-masala sharti
// ==============================
// Ma’suma moda blogiga yangi kiyim to‘plami qo‘shdi. Quyida obyekt berilgan, unga mos `Outfit` interfeysini yozing. Moda olami yorqinlashsin! 🌟

const outfit = {
  id: 11,
  name: "Casual Look",
  price: 250000,
};

interface IOutfit {
  id: number;
  name: string;
  price: number;
}

// ==============================
// 47-masala sharti
// ==============================
// Farhod kutubxonaga yangi kitob kategoriyasi qo‘shdi. Quyida obyekt berilgan, unga mos `Genre` interfeysini yozing. O‘quvchilar xursand bo‘lsin! 📖

const genre = {
  id: 3,
  name: "Fantastika",
  description: "Ilmiy fantastika asarlari",
  popularity: 85,
};

interface IGenre {
  id: number;
  nsme: string;
  description: string;
  popularity: number;
}

// ==============================
// 48-masala sharti
// ==============================
// Nargiza sayohat agentligiga yangi ekskursiya qo‘shdi. Quyida obyekt berilgan, unga mos `Excursion` interfeysini yozing. Sayyohlar xursand bo‘lsin! 🌍

const excursion = {
  id: 22,
  name: "Xiva ziyorati",
  price: 500000,
  durationHours: 8,
};

interface IExcursion {
  id: number;
  name: string;
  price: number;
  durationHours: number;
}

// ==============================
// 49-masala sharti
// ==============================
// Zafar kino saytiga yangi serial qo‘shdi. Quyida obyekt berilgan, unga mos `TVShow` interfeysini yozing. Tomoshabinlar xursand bo‘lsin! 🎬

const tvShow = {
  id: 7,
  title: "Yangi asr",
  episodes: 24,
  genre: "Drama",
};

interface ITvShow {
  id: number;
  title: string;
  episodes: number;
  genre: string;
}

// ==============================
// 50-masala sharti
// ==============================
// Dilshoda onlayn do‘konga yangi mebel qo‘shdi. Quyida obyekt berilgan, unga mos `Furniture` interfeysini yozing. Do‘kon porlasin! 🏠

const furniture = {
  id: 99,
  name: "Divan",
  price: 1500000,
  material: "Mato",
};

interface IFurniture {
  id: number;
  name: string;
  price: number;
  material: string;
}
