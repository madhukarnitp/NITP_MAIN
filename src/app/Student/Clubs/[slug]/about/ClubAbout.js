"use client";

import { useState } from "react";
import { Info, ChevronDown, ChevronUp } from "lucide-react";

export default function ClubAbout({ club }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    club?.about ||
    `Welcome to ${club?.name || "our club"}. We are dedicated to excellence, fostering deep passions, skill development, and building a highly collaborative community among our members. Our organization provides an inclusive environment where individuals of all backgrounds can safely connect, share ideas, and grow together. Through scheduled events, hands-on workshops, peer mentoring, structured training programs, competitions, and community initiatives, we continuously strive to deliver meaningful experiences and create lasting impact for every member.`;

  const maxWords = 55;
  const words = fullText.split(" ");
  const isLongText = words.length > maxWords;

  const displayText =
    isLongText && !isExpanded
      ? words.slice(0, maxWords).join(" ") + "..."
      : fullText;

  return (
    <section className="overflow-hidden min-h-screen rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-t-4 border-red-600 p-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <Info className="h-5 w-5 text-red-700" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              About {club?.name}
            </h2>

            <p className="text-sm text-gray-500">
              Learn more about our mission and community.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-200" />

        {/* Content */}
        <div className="transition-all duration-300">
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
            {displayText}
          </p>
        </div>

        {/* Footer */}
        {isLongText && (
          <div className="mt-5 flex justify-start">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 transition-colors hover:bg-red-100"
            >
              {isExpanded ? (
                <>
                  Show Less
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}