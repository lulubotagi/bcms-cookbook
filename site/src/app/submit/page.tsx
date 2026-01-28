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

  const inputClasses = "w-full px-4 py-3 input-field text-sm";
  const labelClasses = "block text-[0.7rem] font-medium text-[#5C6B4A] mb-2 tracking-[0.3em] uppercase";

  return (
    <main className="min-h-screen page-shell">
      <header className="px-6 py-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm uppercase tracking-[0.3em] text-[#5C6B4A] hover:text-[#C65D3B] transition-colors">
            ← Back to Cookbook
          </Link>
          <span className="text-xs uppercase tracking-[0.35em] text-[#B8934D]">BCMS Fundraiser</span>
        </div>
      </header>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto form-panel p-8 md:p-12">
          <div className="text-center mb-12 animate-fade-up">
            <p className="text-xs uppercase tracking-[0.35em] text-[#B8934D] mb-4">
              Recipe Submission
            </p>
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4">
              Share a family favorite
            </h1>
            <p className="text-base md:text-lg">
              Help us build a timeless cookbook that celebrates BCMS children and their kitchens.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* About Your Family */}
            <fieldset className="space-y-6 animate-fade-up delay-1">
              <legend className="text-2xl text-[#1C1C1C] mb-6 pb-2 border-b border-[#E8DFD3] w-full">
                About Your Family
              </legend>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className={inputClasses}
                  />
                </div>
                
                <div>
                  <label className={labelClasses}>Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({...formData, parentEmail: e.target.value})}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClasses}>Child&apos;s Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    className={inputClasses}
                  />
                </div>
                
                <div>
                  <label className={labelClasses}>Age *</label>
                  <select
                    required
                    value={formData.childAge}
                    onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                    className={inputClasses}
                  >
                    <option value="">Select</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <div>
                  <label className={labelClasses}>Classroom</label>
                  <input
                    type="text"
                    value={formData.classroom}
                    onChange={(e) => setFormData({...formData, classroom: e.target.value})}
                    className={inputClasses}
                  />
                </div>
              </div>
            </fieldset>

            {/* The Recipe */}
            <fieldset className="space-y-6 animate-fade-up delay-2">
              <legend className="text-2xl text-[#1C1C1C] mb-6 pb-2 border-b border-[#E8DFD3] w-full">
                The Recipe
              </legend>
              
              <div>
                <label className={labelClasses}>Recipe Name *</label>
                <input
                  type="text"
                  required
                  value={formData.recipeName}
                  onChange={(e) => setFormData({...formData, recipeName: e.target.value})}
                  className={inputClasses}
                  placeholder="e.g., Grandma's Mac & Cheese"
                />
              </div>

              <div>
                <label className={labelClasses}>Ingredients *</label>
                <p className="text-xs text-[#8D857E] mb-2">One per line, with amounts</p>
                <textarea
                  required
                  rows={6}
                  value={formData.ingredients}
                  onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
                  className={`${inputClasses} resize-none`}
                  placeholder={"1 lb pasta\n2 cups cheddar\n1 cup milk"}
                />
              </div>

              <div>
                <label className={labelClasses}>Instructions *</label>
                <p className="text-xs text-[#8D857E] mb-2">Step by step</p>
                <textarea
                  required
                  rows={8}
                  value={formData.instructions}
                  onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </fieldset>

            {/* Photo & Story */}
            <fieldset className="space-y-6 animate-fade-up delay-3">
              <legend className="text-2xl text-[#1C1C1C] mb-6 pb-2 border-b border-[#E8DFD3] w-full">
                Photo & Story
              </legend>
              
              <div>
                <label className={labelClasses}>Photo of Your Child *</label>
                <p className="text-xs text-[#8D857E] mb-4">High quality, please</p>
                
                {photoPreview ? (
                  <div className="relative w-40 h-40">
                    <img 
                      src={photoPreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => {setPhotoFile(null); setPhotoPreview(null);}}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-[#1C1C1C] text-white text-xs flex items-center justify-center hover:bg-black transition-colors rounded-full"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-40 border border-dashed border-[#CFC5B8] cursor-pointer hover:border-[#5C6B4A] transition-colors bg-[#FFFCF7]">
                    <span className="text-[#6B6560] text-sm">Click to upload</span>
                    <span className="text-[#B8934D] text-xs mt-1 uppercase tracking-[0.25em]">JPG or PNG</span>
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
                <label className={labelClasses}>Why is this their favorite? *</label>
                <p className="text-xs text-[#8D857E] mb-2">A story, a memory, the reason they love it</p>
                <textarea
                  required
                  rows={4}
                  value={formData.story}
                  onChange={(e) => setFormData({...formData, story: e.target.value})}
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </fieldset>

            {/* Consent */}
            <fieldset className="space-y-4 bg-[#F5F1EB] p-6 rounded-xl animate-fade-up delay-4">
              <legend className="text-lg text-[#1C1C1C] mb-4">
                Permissions
              </legend>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.photoConsent}
                  onChange={(e) => setFormData({...formData, photoConsent: e.target.checked})}
                  className="mt-1"
                />
                <span className="text-sm text-[#6B6560]">
                  I give permission for my child&apos;s photo to be included in the BCMS cookbook.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.printConsent}
                  onChange={(e) => setFormData({...formData, printConsent: e.target.checked})}
                  className="mt-1"
                />
                <span className="text-sm text-[#6B6560]">
                  I give permission for this recipe to be printed and sold as part of the school fundraiser.
                </span>
              </label>
            </fieldset>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-primary py-4 text-xs tracking-[0.35em] uppercase disabled:bg-[#CCC] disabled:shadow-none"
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
