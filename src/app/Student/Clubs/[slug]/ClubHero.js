"use client";

import { Mail, User, GraduationCap } from "lucide-react";

const ClubHero = ({ club }) => {
  const name = club?.name || "Club";

  const leaders = [
    {
      title: "Patna Campus PI",
      name: club?.patnaPiName,
      email: club?.patnaPiEmail,
      department: club?.patnaPiDepartment,
      icon: GraduationCap,
    },
    {
      title: "Bihta Campus PI",
      name: club?.bihtaPiName,
      email: club?.bihtaPiEmail,
      department: club?.bihtaPiDeptartment,
      icon: GraduationCap,
    },
    {
      title: "President",
      name: club?.president,
      email: club?.presidentEmail,
      department: club?.presidentDeptartment,
      icon: User,
    },
    {
      title: "Secretary",
      name: club?.secretary,
      email: club?.secretaryEmail,
      department: club?.secretaryDeptartment,
      icon: User,
    },
  ];

  // Stats data - only show if available
  const stats = [
    { label: "Members", value: club?.members },
    { label: "Events", value: club?.events },
    { label: "Awards", value: club?.awards },
  ].filter((stat) => stat.value !== undefined && stat.value !== null && stat.value > 0);

  return (
    <section className="overflow-hidden min-h-screen rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col border-t-4 border-red-600 p-6 min-h-full">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {/* Logo */}
          <div className="shrink-0">
            {club?.logo ? (
              <img
                src={club.logo}
                alt={name}
                className="h-16 w-16 rounded-xl border border-gray-100 object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-600 text-xl font-bold text-white">
                {name.replace(/^dr\.?\s+/i, "").charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Club Info */}
          <div className="min-w-0 flex-1">
            {club?.category && (
              <span className="inline-flex rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                {club.category}
              </span>
            )}

            <h1 className="mt-2 break-words text-xl font-bold tracking-tight text-gray-900">
              {name}
            </h1>

            <p className="mt-2 max-w-2xl break-words text-sm leading-relaxed text-gray-500">
              {club?.description ||
                "A student-led club fostering innovation, collaboration, leadership, and professional growth."}
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">
              Leadership
            </h2>
            <div className="hidden sm:block h-px flex-1 bg-gray-200 ml-4" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => {
              const Icon = leader.icon;

              return (
                <div
                  key={leader.title}
                  className="min-w-0 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-red-50 p-1.5">
                      <Icon className="h-3.5 w-3.5 text-red-700" />
                    </div>
                  </div>

                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    {leader.title}
                  </p>

                  {/* Department (Only for PIs) */}
                  {leader.department && (
                    <p className="mt-1 text-xs font-medium text-red-600">
                      {leader.department}
                    </p>
                  )}

                  <p className="mt-1 break-words text-sm font-semibold text-gray-900">
                    {leader.name || "TBA"}
                  </p>

                  {leader.email && (
                    <a
                      href={`mailto:${leader.email}`}
                      className="mt-1 block break-all text-xs text-red-600 hover:text-red-700 hover:underline"
                    >
                      {leader.email}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-grow" />

        {/* Contact & Stats Section - Pinned to bottom */}
        <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6">
          {/* Email Contact */}
          {club?.email && (
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-red-600" />
              <a
                href={`mailto:${club.email}`}
                className="text-sm font-medium text-gray-700 hover:text-red-600"
              >
                {club.email}
              </a>
            </div>
          )}

          {/* Stats - Only show if available */}
          {stats.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                >
                  {stat.value} {stat.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClubHero;