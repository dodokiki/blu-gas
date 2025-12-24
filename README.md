# Blu Gas Website

เว็บไซต์ของบริษัทบลูแกส สร้างด้วย React

## การติดตั้ง

```bash
npm install
```

## การรันโปรเจกต์

```bash
npm start
```

เว็บไซต์จะเปิดที่ http://localhost:3000

## การ Build สำหรับ Production

```bash
npm run build
```

## การ Deploy บน Vercel

1. เชื่อมต่อ GitHub repository กับ Vercel
2. Vercel จะ detect React app อัตโนมัติ
3. Build Command: `npm run build`
4. Output Directory: `build`
5. Deploy!

หรือใช้ Vercel CLI:
```bash
npm i -g vercel
vercel
```

## โครงสร้างโปรเจกต์

- `src/components/` - คอมโพเนนต์ต่างๆ ของเว็บไซต์
- `public/` - ไฟล์สาธารณะ
- `Banner.png` - ภาพ Banner สำหรับหน้าแรก
- `vercel.json` - Configuration สำหรับ Vercel

## หน้าเว็บไซต์

- หน้าแรก (Hero Banner)
- เกี่ยวกับเรา
- ผลิตภัณฑ์และบริการ
- ผลงานของเรา
- ข่าวสารองค์กร
- ติดต่อเรา

## Features

- ✅ Responsive Design
- ✅ Modern UI/UX
- ✅ Smooth Scrolling Navigation
- ✅ Image Carousels
- ✅ Contact Form
- ✅ Google Maps Integration

