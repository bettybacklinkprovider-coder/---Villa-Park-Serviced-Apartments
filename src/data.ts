import { Apartment, Amenity } from './types';

export const APARTMENTS_DATA: Apartment[] = [
  {
    id: 'deluxe',
    nameAr: 'شقة ديلوكس الفاخرة',
    nameEn: 'Deluxe Apartment',
    taglineAr: 'راحة عصرية وخصوصية متكاملة',
    taglineEn: 'Modern Comfort & Complete Privacy',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    size: '65 م²',
    guests: 'شخصين',
    beds: 'سرير كينج كبير',
    priceEstimate: '450 ريال',
    descriptionAr: 'شقة واسعة ومصممة بأناقة مع مطبخ مجهز بالكامل وصالة مريحة، مثالية للأزواج والمسافرين الباحثين عن إقامة تجمع بين العمل والاسترخاء بالخبر.',
    descriptionEn: 'A spacious, elegantly designed apartment featuring a fully equipped kitchen and cozy living space, perfect for couples and travelers seeking business or leisure in Al Khobar.',
    amenities: ['High-speed Wi-Fi', 'Smart TV', 'Fully Equipped Kitchen', 'Espresso Machine', 'Luxury Bath Amenities', 'In-unit Laundry'],
    amenitiesAr: ['إنترنت سريع', 'شاشة ذكية', 'مطبخ متكامل', 'آلة إسبريسو', 'مستلزمات حمام فاخرة', 'غسالة ملابس']
  },
  {
    id: 'executive',
    nameAr: 'الشقة التنفيذية الراقية',
    nameEn: 'Executive Apartment',
    taglineAr: 'بيئة مثالية للأعمال والإقامات الطويلة',
    taglineEn: 'Elite Space for Business & Long Stays',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    size: '85 م²',
    guests: 'شخصين - ٣ أشخاص',
    beds: 'سرير ملكي كينج',
    priceEstimate: '600 ريال',
    descriptionAr: 'تتميز الشقة التنفيذية بمساحة عمل متكاملة وتصميم داخلي راقٍ يعبر عن الفخامة والعملية، مع إطلالة هادئة ومطبخ عصري مزود بأحدث الأجهزة الفندقية.',
    descriptionEn: 'Featuring a fully integrated workspace and premium interiors that balance luxury and utility, complete with peaceful views and a modern high-end kitchen.',
    amenities: ['Dedicated Workspace', 'Premium Sound System', 'Fully Equipped Kitchen', 'Coffee Station', 'Bathrobes & Slippers', 'Daily Housekeeping'],
    amenitiesAr: ['مكتب عمل مخصص', 'نظام صوتي راقٍ', 'مطبخ متكامل', 'ركن قهوة متميز', 'أرواب وحذاء غرف فاخر', 'تنظيف غرف يومي']
  },
  {
    id: 'family',
    nameAr: 'شقة عائلية رحبة',
    nameEn: 'Family Apartment',
    taglineAr: 'مساحات فسيحة تضمن دفء اللقاء العائلي',
    taglineEn: 'Generous Spaces for Quality Family Time',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    size: '120 م²',
    guests: '٤ - ٦ أشخاص',
    beds: 'سرير كينج + سريرين فرديين',
    priceEstimate: '850 ريال',
    descriptionAr: 'شقة عائلية فاخرة تحتوي على غرفتي نوم وصالة معيشة فسيحة ومنطقة لتناول الطعام، صُممت بعناية لتوفير أعلى مستويات الراحة والخصوصية لجميع أفراد العائلة.',
    descriptionEn: 'A high-end two-bedroom family apartment with a grand living room and dedicated dining area, crafted beautifully to offer max comfort and absolute privacy for families.',
    amenities: ['Two Master Bedrooms', 'Spacious Dining Table', 'Child-friendly Setup', 'Full Kitchen & Oven', 'Smart LED Screens', 'Dual Bathrooms'],
    amenitiesAr: ['غرفتي نوم ماستر', 'طاولة طعام فسيحة', 'مجهزة للأطفال', 'مطبخ كامل مع فرن', 'شاشات ذكية متعددة', 'حمامين متكاملين']
  },
  {
    id: 'suite',
    nameAr: 'الجناح الرئاسي الفاخر',
    nameEn: 'Luxury Suite',
    taglineAr: 'قمة الفخامة والرفاهية لنمط حياة استثنائي',
    taglineEn: 'The Ultimate Pinnacle of Five-Star Hospitality',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    size: '150 م²',
    guests: '٢ - ٤ أشخاص',
    beds: 'سرير سوبر كينج ملكي',
    priceEstimate: '1200 ريال',
    descriptionAr: 'تجربة إقامة حصرية في أرقى أجنحة فيلا بارك، تتميز بأثاث وتصاميم إيطالية فاخرة، مع صالة استقبال رحبة، وحمام رخامي ملكي مجهز بجاكوزي خاص.',
    descriptionEn: 'An exclusive sanctuary featuring high-end Italian design, a majestic greeting hall, private dining parlor, and a royal marble bathroom with custom Jacuzzi setup.',
    amenities: ['Private Jacuzzi', 'Luxury Welcome Platter', 'Butler Service Optional', 'Espresso Machine Pro', 'Premium Toiletries', 'VIP Parking Space'],
    amenitiesAr: ['جاكوزي خاص', 'سلة ترحيبية فاخرة', 'خدمة نادل شخصي اختياري', 'جهاز إسبريسو برو', 'مستلزمات حمام VIP', 'موقف سيارة خاص VIP']
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'wifi',
    nameAr: 'إنترنت فائق السرعة',
    nameEn: 'Ultra-Fast Wi-Fi',
    descriptionAr: 'اتصال إنترنت مجاني وبسرعة فائقة متاح في جميع أرجاء فيلا بارك لتلبية احتياجات أعمالكم وتواصلكم.',
    descriptionEn: 'Complimentary high-speed fiber internet coverage across the entire residence to keep you connected seamlessly.',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'beds',
    nameAr: 'أسرة وثيرة وصحية',
    nameEn: 'Comfortable Premium Beds',
    descriptionAr: 'مراتب طبية فاخرة مع وسائد من ريش النعام الطبيعي لضمان نوم عميق ومريح واستيقاظ مفعم بالنشاط.',
    descriptionEn: 'Orthopedic custom mattresses and natural down pillows to guarantee a deeply restorative night’s sleep.',
    icon: 'Bed',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kitchen',
    nameAr: 'مطابخ مجهزة بالكامل',
    nameEn: 'Fully Equipped Kitchens',
    descriptionAr: 'أجهزة عصرية تشمل ثلاجة، فرن، غسالة صحون، غلاية، وكافة مستلزمات الطهي المتكاملة.',
    descriptionEn: 'Fully realized kitchen zones equipped with premium stove, oven, refrigerator, dinnerware, and espresso machines.',
    icon: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parking',
    nameAr: 'مواقف سيارات آمنة والمزيد',
    nameEn: 'Secure Free Parking',
    descriptionAr: 'مواقف مخصصة ومراقبة على مدار الساعة لضيوفنا تضمن سهولة الوصول والأمان التام لسيارتك.',
    descriptionEn: 'Dedicated underground and surface guest parking monitored by security cams for absolute ease of access.',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ac',
    nameAr: 'تكييف هواء ذكي مخصص',
    nameEn: 'Smart Air Conditioning',
    descriptionAr: 'نظام تكييف مركزي هادئ يمنحك التحكم الكامل في درجة الحرارة الملائمة لراحتك في كل غرفة على حدة.',
    descriptionEn: 'Silent multi-zone central air conditioning enabling temperature customization to your specific preference.',
    icon: 'Thermometer',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'support',
    nameAr: 'دعم وخدمة ضيوف 24/7',
    nameEn: '24/7 Guest Support',
    descriptionAr: 'فريق استقبال محترف متواجد على مدار الساعة لتلبية متطلباتكم وضمان أعلى درجات الضيافة.',
    descriptionEn: 'A professional hospitality team on-site 24 hours a day to handle check-ins, local tips, and housekeeping needs.',
    icon: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  }
];

export const OFFICE_HOURS = {
  ar: 'استقبال وخدمة الغرف على مدار ٢٤ ساعة، طوال أيام الأسبوع',
  en: 'Reception & Room Support 24 hours a day, 7 days a week'
};
