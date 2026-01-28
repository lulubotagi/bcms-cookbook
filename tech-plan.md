# Tech Plan: BCMS Cookbook Submission Site

## The Vibe

Simple, warm, fun. Parents land → see what it's about → submit recipe → done.

## Pages

1. **Home/Landing** — What is this, why participate, deadline
2. **Submit Recipe** — The form
3. **Thank You** — Confirmation after submit

## Tech Stack (Simple & Free)

| Layer | Tool | Why |
|-------|------|-----|
| Framework | Next.js | You have Vercel, it's fast |
| Hosting | Vercel | Free, easy deploy |
| Styling | Tailwind | Quick to make pretty |
| Image Upload | Vercel Blob or Uploadthing | Free tier works |
| Data Storage | Airtable | Free, easy to review submissions |
| Domain | TBD | bcms-cookbook.vercel.app or custom |

## Form Fields

**About the Family**
- Parent name
- Parent email
- Child's first name
- Child's age (3-6 dropdown)
- Classroom/teacher (optional)

**The Recipe**
- Recipe name
- Ingredients (textarea)
- Instructions (textarea)

**The Fun Part**
- Photo of child (upload)
- "Why this is my favorite" or fun story (textarea)

**Legal**
- [ ] Photo release checkbox
- [ ] Permission to include in printed book

## Nice-to-Haves (Later)

- Preview submissions before final submit
- Progress bar during upload
- Email confirmation to parents
- Admin view of all submissions

## MVP Timeline

| Task | Time |
|------|------|
| Scaffold Next.js + Tailwind | 30 min |
| Landing page | 1 hour |
| Form + validation | 2 hours |
| Image upload | 1 hour |
| Airtable integration | 1 hour |
| Polish + deploy | 1 hour |

**Total: ~6 hours of building**

We can knock out an MVP in one good session.

## Domain Ideas

- bcmscookbook.com
- bcms-cookbook.vercel.app (free)
- cookbook.bcms-sf.org (if school has domain)
