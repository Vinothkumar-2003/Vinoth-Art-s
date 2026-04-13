# 🖨️ Banner Shop — React Vite Project

A full-featured print shop website with Banner, Flex & Frame ordering via WhatsApp.

## 🚀 Setup & Run

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
banner-shop/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx          ← Routes setup
│   ├── index.css        ← Global styles
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky navbar with WhatsApp button
│   │   ├── SizeConfigurator.jsx  ← ⭐ Custom inch/feet selector
│   │   └── Footer.jsx
│   └── pages/
│       ├── Home.jsx     ← Landing page
│       ├── Banner.jsx   ← Banner configurator
│       ├── Flex.jsx     ← Flex print configurator
│       └── Frame.jsx    ← Frame configurator
```

## ⚙️ How to Change WhatsApp Number

Search for `916381217533` across all files and replace with your number:
- Format: Country code + number (no + or spaces)
- Example: India +91 6381217533 → `6381217533`

Files to update:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/SizeConfigurator.jsx`
- `src/pages/Home.jsx`
- `src/App.jsx`

## 💡 Features
- ✅ Custom inch/feet size selector with sliders + number inputs
- ✅ Preset size buttons per product type
- ✅ Live price calculator (sq.ft based)
- ✅ WhatsApp order with size details pre-filled
- ✅ Floating WhatsApp button on all pages
- ✅ Responsive Bootstrap 5 layout
- ✅ React Router v6 navigation
