# Eye Focus Studio — Website Guide (කොහොමද site eka maintain karanna)

## File Structure

```
eyefocus/
├── index.html        ← Page structure (don't need touch karanna unless major changes)
├── style.css          ← All design/colors/animations
├── script.js          ← All interactivity (gallery, filters, form)
├── data.js            ← ⭐ THIS IS THE FILE YOU EDIT — photos & videos
└── assets/
    ├── logo.png
    ├── photos/        ← Put your real photos here
    └── videos/        ← Put your video cover images (thumbnails) here
```

## New Photo ekak Add Karanna (Step by Step)

1. ඔයාගේ photo eka `assets/photos/` folder ekata copy karanna.
   (Eka example: `assets/photos/wedding-shanika-kasun.jpg`)

2. `data.js` file eka open karanna (any text editor — Notepad, VS Code, ඕනවට).

3. `photos` array eke uda copy karanna, paste karanna **ekak** widiyata, mehema:

```js
{
  album: "wedding",
  title: "Shanika & Kasun's Wedding",
  image: "assets/photos/wedding-shanika-kasun.jpg",
  link: "https://www.facebook.com/share/p/XXXXXXXXX/"
},
```

4. `album` eka one of: `"wedding"`, `"portrait"`, `"event"`, `"commercial"`
5. `link` eka — ඔයාගේ Facebook/Instagram post eke link eka (click karama yana eka)
6. Save karala upload කරන්න. **Site ekenma update wenawa, code touch karanna ona na.**

## New Video ekak Add Karanna

Same widiyatama, ඒත් `videos` array eke:

```js
{
  platform: "facebook",
  title: "Nimal & Priya's Wedding Film",
  thumbnail: "assets/videos/nimal-priya-cover.jpg",
  link: "https://www.facebook.com/share/v/XXXXXXXXX/"
},
```

- `thumbnail` eka — video eke cover/thumbnail image ekak (FB/YT eken screenshot ekak ganna pluwan)
- `platform` — `"facebook"`, `"youtube"`, or `"tiktok"`
- `link` — actual video eke link eka

## Important — Photo/Video Links Gana

ඔයා dunna Facebook video/photo links tika **private share links** (`facebook.com/share/...`) widiyatay thiyenne — eka නිසා mata ඒවායින් actual thumbnail image eka automatic ganna බෑ වුණා. Eka නිසා දැන් site eke gradient-color placeholder images තියෙනවා.

**ඔයාට කරන්න ඕන දේ:** ඒ photo/video posts walට ගිහින් screenshot ගන්න (or download the actual photo), ඒක `assets/photos/` හරි `assets/videos/` folder ekata දාන්න, `data.js` eke `image`/`thumbnail` path eka ඒකට point කරන්න.

## Logo Gana

ඔයාගේ logo eka (`Eye Focus Studio` + eye icon + "Beyond Clicks, Into Feelings" tagline) site eke header eke සහ footer eke use කරලා තියෙනවා — dark background ekata perfect match.

## Hosting (Site eka Live Karanna)

Meka static website ekak — kohomahari free/cheap hosting ekakata upload karanna pluwan:
- **Netlify** or **Vercel** — free, drag-and-drop the whole `eyefocus` folder
- **GitHub Pages** — free
- Any normal web hosting (Hostinger, GoDaddy, etc.) — just upload all files via FTP

Domain ekak (e.g. `eyefocusstudio.lk` or `.com`) ganna ona — eka separate ekක් ගන්න ඕන (Anthropic/Claude eken ganna බෑ).

## Booking Form Gana

Form eka submit කරාම, visitor ge email client eka open wela, ඔයාගේ email ekata (`eyefocusphotography95@gmail.com`) pre-filled details ekක්ක message ekak send karanna ready wenawa. Server/backend ekak ona na meka වැඩ කරන්න.

WhatsApp button eka (floating + contact section eke) direct `+94 71 618 1293` ekට chat eka open karanawa.

## Need Changes?

Color/text/section ekak change karanna ona nam, mata kiyanna — mama update karala dennම්.
