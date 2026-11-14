# Maharshi Navendu Literary Archive

A responsive Next.js archive for Hindi Dalit poet and writer Dr. Jai Prakash Navendu Maharshi Avtar. It includes biographical information, a searchable Hindi and English book catalogue, literary timeline, academic research, recognition, and contact details.

## Development

```bash
npm install
npm run dev
```

Book titles are maintained in `data/books.json`, biographical content in `data/info.json`, and the corresponding cover images in `public/book-covers/`.

## Search indexing and site URL

The site uses `https://www.jaiprakashnavendu.com` as its canonical public HTTPS origin. It is used for canonical metadata, absolute structured-data links, and the sitemap and robots sitemap directive. Set `NEXT_PUBLIC_SITE_URL` only if the canonical domain changes.
