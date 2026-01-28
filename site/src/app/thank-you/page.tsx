import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen page-shell flex items-center justify-center px-6 py-16">
      <div className="max-w-lg text-center section-card p-10 md:p-14 animate-fade-up">
        <p className="text-xs uppercase tracking-[0.35em] text-[#B8934D] mb-4">
          Submission received
        </p>
        <div className="text-6xl text-[#5C6B4A] mb-6">✓</div>
        <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4">
          Thank you
        </h1>
        <p className="text-base md:text-lg mb-3">
          Your recipe has been submitted successfully.
        </p>
        <p className="text-sm text-[#8D857E] mb-10">
          We&apos;re honored to include your family&apos;s favorite in the BCMS cookbook.
        </p>
        <div className="space-y-4">
          <Link
            href="/submit"
            className="inline-block button-primary px-10 py-3 text-xs tracking-[0.3em] uppercase"
          >
            Submit Another
          </Link>
          <p className="text-xs uppercase tracking-[0.3em] text-[#5C6B4A]">
            Multiple kids? Multiple favorites? We&apos;d love them all.
          </p>
          <Link
            href="/"
            className="inline-block button-outline px-8 py-3 text-xs tracking-[0.3em] uppercase"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
