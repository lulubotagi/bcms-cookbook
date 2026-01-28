"use client";

import { useState } from "react";
import Link from "next/link";

export default function SubmitRecipe() {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    childName: "",
    childAge: "",
    classroom: "",
    recipeName: "",
    ingredients: "",
    instructions: "",
    story: "",
    photoConsent: false,
    printConsent: false,
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Wire up actual submission
    console.log("Form data:", formData);
    console.log("Photo:", photoFile);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    window.location.href = "/thank-you";
  };

  return (
    <main className="min-h-screen page-shell">
      {/* Mobile-friendly header */}
      <header className="px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <Link href="/" className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[var(--olive)] hover:text-[var(--clay)] transition-colors">
            ← Back to Cookbook
          </Link>
          <span className="eyebrow">BCMS Fundraiser</span>
        </div>
      </header>

      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto form-panel p-5 sm:p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="eyebrow mb-3 sm:mb-4">Recipe Submission</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
              Share a family favorite
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--ink-soft)]">
              Help us build a timeless cookbook that celebrates BCMS children and their kitchens.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">
            {/* About Your Family */}
            <fieldset className="space-y-4 sm:space-y-6">
              <legend className="text-xl sm:text-2xl mb-4 sm:mb-6 pb-2 border-b border-[var(--sand)] w-full">
                About Your Family
              </legend>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="form-label">Child&apos;s Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <label className="form-label">Age *</label>
                  <select
                    required
                    value={formData.childAge}
                    onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                    className="form-input"
                  >
                    <option value="">Select</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Classroom</label>
                  <input
                    type="text"
                    value={formData.classroom}
                    onChange={(e) => setFormData({...formData, classroom: e.target.value})}
                    className="form-input"
                  />
                </div>
              </div>
            </fieldset>

            {/* The Recipe */}
            <fieldset className="space-y-4 sm:space-y-6">
              <legend className="text-xl sm:text-2xl mb-4 sm:mb-6 pb-2 border-b border-[var(--sand)] w-full">
                The Recipe
              </legend>
              
              <div>
                <label className="form-label">Recipe Name *</label>
                <input
                  type="text"
                  required
                  value={formData.recipeName}
                  onChange={(e) => setFormData({...formData, recipeName: e.target.value})}
                  className="form-input"
                  placeholder="e.g., Grandma's Mac & Cheese"
                />
              </div>

              <div>
                <label className="form-label">Ingredients *</label>
                <p className="form-hint">One per line, with amounts</p>
                <textarea
                  required
                  rows={5}
                  value={formData.ingredients}
                  onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                  className="form-input resize-none"
                  placeholder={"1 lb pasta\n2 cups cheddar\n1 cup milk"}
                />
              </div>

              <div>
                <label className="form-label">Instructions *</label>
                <p className="form-hint">Step by step</p>
                <textarea
                  required
                  rows={6}
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  className="form-input resize-none"
                />
              </div>
            </fieldset>

            {/* Photo & Story */}
            <fieldset className="space-y-4 sm:space-y-6">
              <legend className="text-xl sm:text-2xl mb-4 sm:mb-6 pb-2 border-b border-[var(--sand)] w-full">
                Photo & Story
              </legend>
              
              <div>
                <label className="form-label">Photo of Your Child *</label>
                <p className="form-hint">High quality, please</p>
                
                {photoPreview ? (
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 mt-3">
                    <img 
                      src={photoPreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => {setPhotoFile(null); setPhotoPreview(null);}}
                      className="absolute -top-2 -right-2 w-7 h-7 bg-[var(--ink)] text-white text-sm flex items-center justify-center hover:bg-black transition-colors rounded-full"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-36 sm:h-40 mt-3 border-2 border-dashed border-[var(--sand)] rounded-2xl cursor-pointer hover:border-[var(--olive)] transition-colors bg-[var(--paper-soft)]">
                    <span className="text-[var(--ink-soft)] text-sm">Tap to upload</span>
                    <span className="text-[var(--gold)] text-xs mt-1 uppercase tracking-[0.2em]">JPG or PNG</span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div>
                <label className="form-label">Why is this their favorite? *</label>
                <p className="form-hint">A story, a memory, the reason they love it</p>
                <textarea
                  required
                  rows={4}
                  value={formData.story}
                  onChange={(e) => setFormData({...formData, story: e.target.value})}
                  className="form-input resize-none"
                />
              </div>
            </fieldset>

            {/* Consent */}
            <fieldset className="space-y-4 bg-[var(--linen)] p-4 sm:p-6 rounded-2xl">
              <legend className="text-lg mb-3 sm:mb-4">
                Permissions
              </legend>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.photoConsent}
                  onChange={(e) => setFormData({...formData, photoConsent: e.target.checked})}
                  className="mt-1 w-5 h-5 accent-[var(--clay)]"
                />
                <span className="text-sm text-[var(--ink-soft)]">
                  I give permission for my child&apos;s photo to be included in the BCMS cookbook.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.printConsent}
                  onChange={(e) => setFormData({...formData, printConsent: e.target.checked})}
                  className="mt-1 w-5 h-5 accent-[var(--clay)]"
                />
                <span className="text-sm text-[var(--ink-soft)]">
                  I give permission for this recipe to be printed and sold as part of the school fundraiser.
                </span>
              </label>
            </fieldset>

            {/* Submit Button */}
            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Recipe"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
