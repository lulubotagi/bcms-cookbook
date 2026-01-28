import Link from "next/link";

const recipeIndex = [
  {
    id: "A-014",
    title: "Sunset Tomato Pasta",
    kid: "Milo, age 4",
    note: "We stir until it sings.",
    time: "25 min",
    tag: "Weeknight",
    shelf: "Family Table",
  },
  {
    id: "B-031",
    title: "Golden Lentil Soup",
    kid: "Ari, age 5",
    note: "Best with big hugs.",
    time: "40 min",
    tag: "Cozy Bowl",
    shelf: "Shared Pots",
  },
  {
    id: "C-072",
    title: "Cinnamon Apple Toast",
    kid: "Lena, age 3",
    note: "Crunchy corners only.",
    time: "10 min",
    tag: "Snack",
    shelf: "Morning Light",
  },
  {
    id: "D-118",
    title: "Garden Green Wraps",
    kid: "Noah, age 6",
    note: "Add extra cucumbers.",
    time: "15 min",
    tag: "Fresh",
    shelf: "Little Hands",
  },
  {
    id: "E-204",
    title: "Cloudy Lemon Squares",
    kid: "Iris, age 4",
    note: "Zesty like sunshine.",
    time: "55 min",
    tag: "Bake",
    shelf: "Sweet Shelf",
  },
  {
    id: "F-255",
    title: "Terracotta Bean Chili",
    kid: "Ezra, age 5",
    note: "We sprinkle cheese on top.",
    time: "60 min",
    tag: "Big Batch",
    shelf: "Community Pot",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen page-shell">
      <header className="hero">
        <div className="container hero-inner">
          <div className="masthead staggered-fade">
            <span className="eyebrow">BCMS Fundraiser Edition 2026</span>
            <h1 className="hero-title">Kids&apos; Favorites Cookbook</h1>
            <p className="hero-subtitle">A warm editorial archive of little hands, family tables, and joyful mess.</p>
            <p className="hero-body">
              Every recipe is cataloged like a keepsake: shelf marks, tiny notes, and kid-tested approvals. A book that
              feels like a scrapbook and reads like a love letter to the community kitchen.
            </p>
            <div className="hero-actions">
              <Link href="/submit" className="button-primary">
                Submit Your Recipe
              </Link>
              <Link href="#recipe-index" className="button-outline">
                Browse the Index
              </Link>
            </div>
            <p className="handwritten hero-note">curated with crayons, aprons, and care</p>
          </div>
          <aside className="hero-card">
            <div className="card-topline">
              <span className="chip">Archive Drawer</span>
              <span className="chip outline">Issue No. 06</span>
            </div>
            <h2 className="card-title">Kitchen Notes</h2>
            <p className="card-body">
              Handwritten stories, family photos, and little chef quotes. A cookbook that reads like a magazine, meant to
              be kept on the counter.
            </p>
            <div className="rule"></div>
            <div className="card-grid">
              <div>
                <p className="card-label">Stories</p>
                <p className="card-value">52 families</p>
              </div>
              <div>
                <p className="card-label">Recipes</p>
                <p className="card-value">120 keepsakes</p>
              </div>
              <div>
                <p className="card-label">Shots</p>
                <p className="card-value">Kitchen photos</p>
              </div>
              <div>
                <p className="card-label">Ship</p>
                <p className="card-value">Spring 2026</p>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <section id="recipe-index" className="index">
        <div className="container">
          <div className="index-head">
            <div>
              <p className="eyebrow">Archival Index</p>
              <h2 className="section-title">Recipe preview gallery</h2>
            </div>
            <p className="index-copy">
              Each recipe is treated like a treasured document. Labeled, annotated, and ready for your family shelf.
            </p>
          </div>
          <div className="recipe-grid">
            {recipeIndex.map((recipe, index) => (
              <article key={recipe.id} className="recipe-card">
                <div className="recipe-meta">
                  <span className="chip">Index {recipe.id}</span>
                  <span className="chip outline">{recipe.tag}</span>
                </div>
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-shelf">{recipe.shelf}</p>
                <p className="recipe-kid">{recipe.kid}</p>
                <p className="handwritten recipe-note">&ldquo;{recipe.note}&rdquo;</p>
                <div className="recipe-foot">
                  <span>Prep {recipe.time}</span>
                  <span>Card {String(index + 1).padStart(2, "0")}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <div className="process-head">
            <p className="eyebrow">Creative Process</p>
            <h2 className="section-title">Three thoughtful steps</h2>
          </div>
          <div className="process-grid">
            {[
              {
                title: "Share a recipe",
                copy: "Something your child loves. A family staple or a brand-new favorite.",
              },
              {
                title: "Add a photo",
                copy: "A candid moment of your little chef or a finished dish on the counter.",
              },
              {
                title: "Tell the story",
                copy: "Why it matters. A memory, a tradition, a delight.",
              },
            ].map((item, index) => (
              <div key={item.title} className="process-card">
                <span className="process-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <div className="quote-panel">
            <p className="eyebrow">A note from the kitchen</p>
            <p className="quote-text">
              &ldquo;Cooking with children reminds us that the best recipes are filled with patience, laughter, and
              imperfectly perfect moments.&rdquo;
            </p>
            <p className="handwritten quote-sign">- BCMS Parent Committee</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Why participate</p>
              <h2 className="section-title">A collective portrait of early childhood</h2>
              <p className="cta-copy">
                Every recipe supports classroom materials and community scholarships. More than fundraising, it&apos;s a
                keepsake of shared meals, tiny aprons, and joyful learning.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/submit" className="button-primary">
                Submit a Recipe
              </Link>
              <p className="cta-note">Submissions close soon</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">Made with care for the BCMS community</footer>
    </main>
  );
}
