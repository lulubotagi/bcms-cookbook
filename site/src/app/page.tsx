import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen page-shell">
      <section className="relative px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2] to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-flex items-center justify-center px-4 py-2 rounded-full text-[0.6rem] font-medium uppercase badge animate-fade-up">
            Big City Montessori School Fundraiser
          </p>
          <h1 className="text-5xl md:text-7xl text-[#1C1C1C] mt-6 mb-3 animate-fade-up delay-1">
            Kids&apos; Favorites
          </h1>
          <p className="text-3xl md:text-5xl text-[#B8934D] italic animate-fade-up delay-2">
            A Family Cookbook
          </p>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 animate-fade-up delay-3">
            A curated collection of recipes, stories, and little traditions from the BCMS community — warm, elegant,
            and deeply personal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-4">
            <Link
              href="/submit"
              className="button-primary px-10 py-4 text-xs tracking-[0.3em] uppercase"
            >
              Submit Your Recipe
            </Link>
            <Link
              href="#about"
              className="button-outline px-10 py-4 text-xs tracking-[0.3em] uppercase"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="section-card p-10 md:p-12 animate-fade-up delay-1">
            <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-4">
              A keepsake worthy of your shelf
            </h2>
            <p className="text-base md:text-lg mb-6">
              This cookbook is designed like a modern heirloom — clean typography, generous whitespace, and the warmth
              of a well-loved kitchen. Every recipe helps fund classroom materials and community programs.
            </p>
            <div className="section-rule h-px w-full mb-6"></div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-[#5C6B4A]">
              <span>Handwritten stories</span>
              <span>Portraits of little chefs</span>
              <span>Family classics</span>
            </div>
          </div>
          <div className="section-card p-8 md:p-10 animate-fade-up delay-2">
            <p className="text-sm uppercase tracking-[0.3em] text-[#5C6B4A] mb-3">
              Inside the book
            </p>
            <ul className="space-y-5 text-[#1C1C1C]">
              <li className="flex items-start gap-3">
                <span className="text-[#B8934D] text-xl">01</span>
                <p className="text-sm">
                  Recipes chosen by children ages 3–6, each with a story behind it.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8934D] text-xl">02</span>
                <p className="text-sm">
                  Photographs of the kids that feel natural, not staged.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#B8934D] text-xl">03</span>
                <p className="text-sm">
                  Montessori-inspired notes: why a dish matters, what it teaches.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B8934D] mb-4">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl text-[#1C1C1C]">
              Three thoughtful steps
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div
                key={item.title}
                className={`section-card p-8 text-center animate-fade-up delay-${index + 1}`}
              >
                <p className="text-4xl text-[#B8934D] mb-4">{`0${index + 1}`}</p>
                <h3 className="text-lg uppercase tracking-[0.2em] text-[#1C1C1C] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center section-card p-12 md:p-16 animate-fade-up">
          <p className="text-xs uppercase tracking-[0.35em] text-[#5C6B4A] mb-5">
            A note from the kitchen
          </p>
          <p className="text-2xl md:text-3xl italic text-[#1C1C1C] mb-6">
            &ldquo;Cooking with children reminds us that the best recipes are filled with patience, laughter, and
            imperfectly perfect moments.&rdquo;
          </p>
          <p className="text-sm uppercase tracking-[0.25em] text-[#B8934D]">
            — BCMS Parent Committee
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="animate-fade-up delay-1">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B8934D] mb-4">
              Why participate
            </p>
            <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-4">
              A collective portrait of early childhood
            </h2>
            <p className="text-base md:text-lg mb-6">
              Every recipe supports classroom materials and community scholarships. More than fundraising, it&apos;s a
              keepsake of shared meals, tiny aprons, and joyful learning.
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-[#5C6B4A]">
              Submissions close soon
            </p>
          </div>
          <div className="section-card p-10 md:p-12 animate-fade-up delay-2">
            <p className="text-xs uppercase tracking-[0.35em] text-[#5C6B4A] mb-4">
              At a glance
            </p>
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[#1C1C1C] font-medium">Who can submit</p>
                <p>All BCMS families with children ages 3–6.</p>
              </div>
              <div>
                <p className="text-[#1C1C1C] font-medium">What we need</p>
                <p>Recipe, short story, and one photo (phone photos are perfect).</p>
              </div>
              <div>
                <p className="text-[#1C1C1C] font-medium">When it ships</p>
                <p>Spring fundraiser distribution to families and friends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto section-card p-10 md:p-14 text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl text-[#1C1C1C] mb-4">
            Ready to contribute?
          </h2>
          <p className="text-base md:text-lg mb-8">
            It only takes a few minutes to share something that will be treasured for years.
          </p>
          <Link
            href="/submit"
            className="button-primary px-12 py-4 text-xs tracking-[0.3em] uppercase"
          >
            Submit a Recipe
          </Link>
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-xs uppercase tracking-[0.35em] text-[#5C6B4A]">
        Made with care for the BCMS community
      </footer>
    </main>
  );
}
