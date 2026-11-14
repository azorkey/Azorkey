# AZORKEY Store Homepage

A static, responsive, animated homepage built with HTML, CSS, and JavaScript. No build step or dependencies required.

## Files

```
azorkey/
├── index.html    Page structure
├── styles.css    All styling, animations, and mobile layout
├── script.js     Particle effect, scroll reveal, mobile menu, cart counter
├── vercel.json   Vercel configuration
└── README.md     This file
```

## Run locally

Open `index.html` in a browser. That's it.

## Deploy to Vercel

### Option A: Drag and drop (easiest)
1. Go to https://vercel.com and sign in.
2. Unzip `azorkey.zip`.
3. On the Vercel dashboard, click **Add New > Project** and choose **Deploy from folder** or drag the `azorkey` folder in.
4. Click **Deploy**. You get a live URL in about a minute.

### Option B: Vercel CLI
```bash
npm i -g vercel
cd azorkey
vercel          # first deploy (follow the prompts)
vercel --prod   # publish to production
```

### Option C: GitHub
1. Create a new GitHub repository and push the `azorkey` folder contents.
2. In Vercel, click **Add New > Project**, import the repository, and click **Deploy**.
3. Every future push to the main branch redeploys automatically.

## Customize

- **Store name:** search for `AZORKEY` in `index.html` and replace it.
- **Products:** edit the `.product` blocks in `index.html`. Change the name, price, and `data-name` attribute.
- **Colors:** edit the variables at the top of `styles.css` (`--gold`, `--gold-light`, `--gold-dark`, `--bg`).
- **Product photos:** replace the emoji inside `.product-img` with an `<img src="...">` tag. Put image files in the project folder.
- **Shop Now links:** change `href="#"` to your real product or checkout page URLs.

## Notes

- The cart counter and toast are front-end only. For real payments, connect a store platform such as Shopify, Stripe Checkout, or a backend API.
- The page respects the visitor's "reduce motion" accessibility setting.
