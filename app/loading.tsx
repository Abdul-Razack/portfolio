export default function Loading() {
  // Theme-safe skeleton shades derived from --foreground
  const skel = { backgroundColor: "color-mix(in srgb, var(--foreground) 10%, transparent)" } as const;
  const skelStrong = { backgroundColor: "color-mix(in srgb, var(--foreground) 14%, transparent)" } as const;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
        {/* Top / navbar area placeholder */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="h-5 w-44 rounded-lg animate-pulse" style={skelStrong} />
            <div className="h-3 w-28 rounded-lg animate-pulse" style={skel} />
          </div>

          <div className="hidden md:flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-9 w-20 rounded-xl animate-pulse" style={skel} />
            ))}
          </div>

          <div className="md:hidden h-10 w-10 rounded-xl animate-pulse" style={skel} />
        </div>

        {/* Hero placeholder */}
        <section className="space-y-4">
          <div className="h-10 w-72 max-w-full rounded-2xl animate-pulse" style={skelStrong} />
          <div className="h-5 w-[420px] max-w-full rounded-xl animate-pulse" style={skel} />
          <div className="h-5 w-[360px] max-w-full rounded-xl animate-pulse" style={skel} />

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="h-11 w-36 rounded-2xl animate-pulse" style={skelStrong} />
            <div className="h-11 w-36 rounded-2xl animate-pulse" style={skelStrong} />
          </div>
        </section>

        {/* Sections placeholder */}
        {Array.from({ length: 3 }).map((_, s) => (
          <section key={s} className="space-y-4">
            <div className="h-6 w-44 rounded-xl animate-pulse" style={skelStrong} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-3xl p-5 space-y-3"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--foreground) 12%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--foreground) 5%, transparent)",
                  }}
                >
                  <div className="h-4 w-44 rounded-lg animate-pulse" style={skelStrong} />
                  <div className="h-3 w-full rounded-lg animate-pulse" style={skel} />
                  <div className="h-3 w-5/6 rounded-lg animate-pulse" style={skel} />
                  <div className="h-9 w-28 rounded-2xl animate-pulse" style={skelStrong} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

