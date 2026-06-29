/* ============================================================
   EYE FOCUS STUDIO — CONTENT DATA FILE
   ============================================================
   This is the ONLY file you need to touch to add new work.

   TO ADD A NEW PHOTO:
   1. Copy one of the blocks inside the `photos` array below.
   2. Set `image` to the path of your photo (put the actual photo
      file inside the /assets/photos/ folder first).
   3. Set `link` to the Facebook or Instagram post URL (so visitors
      can click through to like/comment/share on the original post).
   4. Set `album` to one of: "wedding", "portrait", "event", "commercial", "kids"

   TO ADD A NEW VIDEO:
   1. Copy one of the blocks inside the `videos` array below.
   2. Set `thumbnail` to a cover image for the video (put it in
      /assets/videos/ first) — this is the image shown on the site.
   3. Set `link` to the Facebook/YouTube/TikTok video URL.
   4. Set `platform` to "facebook", "youtube", or "tiktok"
      (this just changes the small platform icon/label shown).

   That's it — save the file, re-upload, done. No coding needed.

   TO ADD A NEW TESTIMONIAL:
   1. Copy one of the blocks inside the `testimonials` array below.
   2. Set `photo` to a photo of the couple/client (put it in
      /assets/testimonials/ first).
   3. Set `name`, `quote` (their review, keep it short-ish), and
      `rating` (1-5).
   ============================================================ */

const SITE_DATA = {

  testimonials: [
    {
      name: "Anoj Mahanama",
      rating: 5,
      quote: "The experience we had working with Shan ayya and the team was absolutely fabulous. His creativity, talent and dedication took each and every video to the next level. We trusted him with our engagement, pre-shoot, and our wedding — he truly brought our expectations into reality.",
      photo: "assets/testimonials/testimonial-1.jpg"
    },
    {
      name: "Dasuni Senadheera",
      rating: 5,
      quote: "Thank you so much for capturing our special day so perfectly. Every moment was beautifully filmed and edited, and watching the video brings back so many emotions. Truly grateful for your hard work and talent.",
      photo: "assets/testimonials/testimonial-2.jpg"
    },
    {
      name: "Malinda Ranathunga",
      rating: 5,
      quote: "Whatever I say isn't enough — the whole team balanced everything and made the work 100% perfect. Truly grateful for the love you all put into it.",
      photo: "assets/testimonials/testimonial-3.jpg"
    },
    {
      name: "Lipuni Mirani",
      rating: 5,
      quote: "Thank you so much for the beautiful video. We are absolutely thrilled with how you captured every special moment of our day. Your creativity, attention to detail, and ability to tell our story exceeded our expectations — something we will cherish for a lifetime.",
      photo: "assets/testimonials/testimonial-4.jpg"
    },
    {
      name: "Happy Bride, 2026",
      rating: 5,
      quote: "You all do our work so well, we're genuinely so happy. Thank you so much — you've always supported us throughout.",
      photo: "assets/testimonials/testimonial-5.jpg"
    }
  ],

  photos: [
    {
      album: "event",
      title: "Graduation Day — The Scroll",
      image: "assets/photos/event-graduation-1.jpg",
      link: "https://www.facebook.com/share/p/1KdZgJoVft/"
    },
    {
      album: "event",
      title: "Graduation Portrait",
      image: "assets/photos/event-graduation-2.jpg",
      link: "https://www.facebook.com/share/p/1D6BPFd7yh/"
    },
    {
      album: "event",
      title: "A Spin to Celebrate",
      image: "assets/photos/event-graduation-3.jpg",
      link: "https://www.facebook.com/share/p/1TS8pEY73P/"
    },
    {
      album: "event",
      title: "Diploma in Focus",
      image: "assets/photos/event-graduation-4.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "event",
      title: "Flowers for the Graduate",
      image: "assets/photos/event-graduation-5.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "The Groom & His Ride",
      image: "assets/photos/wedding-1.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Bride in Blue",
      image: "assets/photos/wedding-2.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Just the Two of Us",
      image: "assets/photos/wedding-3.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Side by Side",
      image: "assets/photos/wedding-4.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Doves Take Flight",
      image: "assets/photos/wedding-5.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Golden Hour Bride",
      image: "assets/photos/wedding-6.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Behind the Lens",
      image: "assets/photos/portrait-1.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Lakeside in White",
      image: "assets/photos/portrait-2.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Golden Hour Glow",
      image: "assets/photos/portrait-3.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Field of Light",
      image: "assets/photos/portrait-4.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Through the Viewfinder",
      image: "assets/photos/portrait-5.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "A Little Heart for the Camera",
      image: "assets/photos/portrait-6.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Dance Floor Moment",
      image: "assets/photos/wedding-dance-1.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Dancing the Night Away",
      image: "assets/photos/wedding-dance-2.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Lost in the Music",
      image: "assets/photos/wedding-dance-3.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Reception Energy",
      image: "assets/photos/wedding-dance-4.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Joy on the Dance Floor",
      image: "assets/photos/wedding-dance-5.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "Celebration in Motion",
      image: "assets/photos/wedding-dance-6.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "wedding",
      title: "One Last Dance",
      image: "assets/photos/wedding-dance-7.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "kids",
      title: "First Birthday Cuddles",
      image: "assets/photos/kids-birthday-1.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "kids",
      title: "A Father's Watchful Eye",
      image: "assets/photos/kids-2.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "kids",
      title: "Family Under the Old Tree",
      image: "assets/photos/kids-3.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "kids",
      title: "Up in Daddy's Arms",
      image: "assets/photos/kids-4.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "kids",
      title: "A Walk by the Lake",
      image: "assets/photos/kids-5.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "kids",
      title: "Little One, Big Smiles",
      image: "assets/photos/kids-6.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Golden Hour in White",
      image: "assets/photos/portrait-saree-1.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "commercial",
      title: "Lakeside Editorial",
      image: "assets/photos/portrait-saree-2.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Resting by the Tree",
      image: "assets/photos/portrait-saree-3.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "commercial",
      title: "Soft Light Portrait",
      image: "assets/photos/portrait-saree-4.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "A Glance Back",
      image: "assets/photos/portrait-saree-5.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "commercial",
      title: "Looking Up",
      image: "assets/photos/portrait-saree-6.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    },
    {
      album: "portrait",
      title: "Under the Falling Leaves",
      image: "assets/photos/portrait-saree-7.jpg",
      link: "https://www.instagram.com/eye_focus_studio1/"
    }
  ],

  videos: [
    {
      platform: "facebook",
      title: "Pamaa Nowu Adare — Wedding Film",
      thumbnail: "assets/videos/wedding-film-1.jpg",
      link: "https://www.facebook.com/share/v/1FSoLk3Vve/"
    },
    {
      platform: "facebook",
      title: "Soyaa Aawa — Wedding Film",
      thumbnail: "assets/videos/wedding-film-2.jpg",
      link: "https://www.facebook.com/share/v/18yuSq7WCZ/"
    },
    {
      platform: "facebook",
      title: "Pradeep & Imesha — Wedding Film",
      thumbnail: "assets/videos/wedding-film-3.jpg",
      link: "https://www.facebook.com/share/v/1JEL1yzGYy/"
    },
    {
      platform: "facebook",
      title: "Heritage Home Wedding Film",
      thumbnail: "assets/videos/wedding-film-4.jpg",
      link: "https://www.facebook.com/share/v/1E1TxS2WNN/"
    },
    {
      platform: "facebook",
      title: "The Bridal Walk — Wedding Film",
      thumbnail: "assets/videos/wedding-film-5.jpg",
      link: "https://www.facebook.com/share/v/1EZ7n4b7AT/"
    },
    {
      platform: "facebook",
      title: "City Lights — Pre-Shoot Film",
      thumbnail: "assets/videos/preshoot-film-1.jpg",
      link: "https://www.facebook.com/share/v/1DSjg3kwDb/"
    },
    {
      platform: "facebook",
      title: "Mountain Embrace — Pre-Shoot Film",
      thumbnail: "assets/videos/preshoot-film-2.jpg",
      link: "https://www.facebook.com/share/v/1E2PwQbYAB/"
    }
  ]

};
