import { useEffect, useMemo, useState } from "react";

type Page =
  | "home"
  | "movies"
  | "details"
  | "cinemas"
  | "seats"
  | "checkout"
  | "tickets"
  | "login"
  | "register";

type IconName =
  | "search"
  | "user"
  | "play"
  | "arrow"
  | "ticket"
  | "calendar"
  | "clock"
  | "pin"
  | "chevron"
  | "shield"
  | "spark"
  | "card"
  | "check"
  | "eye";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5Z" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    ticket: (
      <>
        <path d="M3 7h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4Z" />
        <path d="M13 7v12" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    shield: (
      <>
        <path d="M12 3 4.5 6v5c0 5 3.2 8.4 7.5 10 4.3-1.6 7.5-5 7.5-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.4 5.6L19 9l-5.6 1.4L12 16l-1.4-5.6L5 9l5.6-1.4Z" />
        <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7Z" />
      </>
    ),
    card: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

const movies = [
  {
    id: 1,
    title: "Eclipse Protocol",
    genre: "Fiksi Ilmiah · Thriller",
    rating: "8.9",
    duration: "2j 18m",
    poster: "/assets/eclipse-protocol.png",
    release: "Sedang tayang",
  },
  {
    id: 2,
    title: "The Last Horizon",
    genre: "Drama · Petualangan",
    rating: "8.6",
    duration: "2j 05m",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=90",
    release: "Sedang tayang",
  },
  {
    id: 3,
    title: "Neon District",
    genre: "Aksi · Kriminal",
    rating: "8.2",
    duration: "1j 56m",
    poster:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=90",
    release: "Sedang tayang",
  },
  {
    id: 4,
    title: "Silent Depths",
    genre: "Misteri · Thriller",
    rating: "7.9",
    duration: "1j 48m",
    poster:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=90",
    release: "Sedang tayang",
  },
  {
    id: 5,
    title: "Ashes of Tomorrow",
    genre: "Fantasi · Drama",
    rating: "8.4",
    duration: "2j 12m",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=90",
    release: "Sedang tayang",
  },
];

const upcoming = [
  {
    title: "Aurora",
    date: "18 OKT",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=90",
  },
  {
    title: "Beyond Earth",
    date: "26 OKT",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=90",
  },
  {
    title: "Parallax",
    date: "08 NOV",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=800&q=90",
  },
  {
    title: "The Revenant Sea",
    date: "14 NOV",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=90",
  },
];

const cinemas = [
  {
    name: "CINÉRA Grand Central",
    address: "28 Madison Avenue, Midtown",
    features: ["IMAX", "Dolby Atmos", "Recliner"],
  },
  {
    name: "CINÉRA Riverside",
    address: "114 West Pier, Hudson District",
    features: ["4DX", "Laser 2D", "Lounge"],
  },
  {
    name: "CINÉRA No. 9",
    address: "9 Mercer Street, Soho",
    features: ["IMAX", "VIP", "Dolby Atmos"],
  },
];

function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <button onClick={onClick} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
}

function Logo({ go }: { go: (p: Page) => void }) {
  return (
    <button className="logo" onClick={() => go("home")} aria-label="Beranda CINÉRA">
      <span className="logo-mark">C</span>
      <span>CINÉRA</span>
    </button>
  );
}

function Navbar({ page, go }: { page: Page; go: (p: Page) => void }) {
  const links: { label: string; page: Page }[] = [
    { label: "Beranda", page: "home" },
    { label: "Film", page: "movies" },
    { label: "Bioskop", page: "cinemas" },
  ];
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Logo go={go} />
        <nav>
          {links.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.page)}
              className={page === l.page ? "active" : ""}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              go("movies");
              setTimeout(
                () => document.getElementById("coming")?.scrollIntoView({ behavior: "smooth" }),
                20,
              );
            }}
          >
            Segera Hadir
          </button>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Cari" onClick={() => go("movies")}>
            <Icon name="search" />
          </button>
          <button className="signin" onClick={() => go("login")}>
            <Icon name="user" size={18} /> Masuk
          </button>
          <Button onClick={() => go("movies")}>
            <Icon name="ticket" size={17} /> Beli tiket
          </Button>
        </div>
      </div>
    </header>
  );
}

function Rating({ value }: { value: string }) {
  return (
    <span className="rating">
      <span>★</span> {value}
    </span>
  );
}

function MovieCard({ movie, go }: { movie: (typeof movies)[0]; go: (p: Page) => void }) {
  return (
    <article className="movie-card" onClick={() => go("details")}>
      <div className="poster-wrap">
        <img src={movie.poster} alt={`Poster ${movie.title}`} />
        <div className="poster-rating">
          <Rating value={movie.rating} />
        </div>
        <button className="poster-play" aria-label={`Lihat ${movie.title}`}>
          <Icon name="play" />
        </button>
      </div>
      <div className="movie-meta">
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>
        <button
          className="book-link"
          onClick={(e) => {
            e.stopPropagation();
            go("cinemas");
          }}
        >
          Pesan sekarang <Icon name="arrow" size={15} />
        </button>
      </div>
    </article>
  );
}

function SectionHeading({
  eyebrow,
  title,
  action,
  onAction,
}: {
  eyebrow?: string;
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {action && (
        <button onClick={onAction}>
          {action} <Icon name="arrow" size={17} />
        </button>
      )}
    </div>
  );
}

function Home({ go }: { go: (p: Page) => void }) {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src="/assets/eclipse-protocol.png" alt="" />
        <div className="hero-shade" />
        <div className="hero-content container">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span>PREMIER UNGGULAN</span>
              <span className="line" />
            </div>
            <h1>
              ECLIPSE
              <br />
              <em>PROTOCOL</em>
            </h1>
            <div className="hero-facts">
              <Rating value="8.9" />
              <span>FIKSI ILMIAH · THRILLER</span>
              <span>2J 18M</span>
              <span className="age">PG-13</span>
            </div>
            <p>
              Saat matahari lenyap tanpa peringatan, seorang astronot harus melintasi tepi alam
              semesta yang dikenal untuk membawa cahaya pulang.
            </p>
            <div className="hero-buttons">
              <Button onClick={() => go("cinemas")}>
                <Icon name="ticket" size={19} /> Pesan tiket
              </Button>
              <Button variant="outline">
                <Icon name="play" size={19} /> Tonton trailer
              </Button>
            </div>
          </div>
          <div className="hero-index">
            <span>01</span>
            <div>
              <i />
              <i />
              <i />
            </div>
            <small>05</small>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="DI BIOSKOP"
          title="Sedang tayang"
          action="Lihat semua film"
          onAction={() => go("movies")}
        />
        <div className="movie-grid">
          {movies.slice(0, 5).map((m) => (
            <MovieCard movie={m} go={go} key={m.id} />
          ))}
        </div>
      </section>

      <section className="section coming-section" id="coming">
        <div className="container">
          <SectionHeading
            eyebrow="CATAT TANGGALNYA"
            title="Segera hadir"
            action="Jelajahi rilis mendatang"
            onAction={() => go("movies")}
          />
          <div className="upcoming-grid">
            {upcoming.map((m) => (
              <article className="upcoming-card" key={m.title}>
                <img src={m.image} alt="" />
                <div className="date-badge">
                  <b>{m.date.split(" ")[0]}</b>
                  <span>{m.date.split(" ")[1]}</span>
                </div>
                <div className="upcoming-overlay">
                  <h3>{m.title}</h3>
                  <p>Pemesanan segera dibuka</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience container">
        <SectionHeading eyebrow="LEBIH DARI SEKADAR FILM" title="Pengalaman CINÉRA" />
        <div className="feature-grid">
          <article>
            <span className="feature-no">01</span>
            <Icon name="ticket" size={28} />
            <h3>Pemesanan tanpa ribet</h3>
            <p>Kursi terbaikmu, terpesan hanya dengan beberapa klik. Tanpa antre, tanpa repot.</p>
          </article>
          <article>
            <span className="feature-no">02</span>
            <Icon name="spark" size={28} />
            <h3>Imersif sepenuhnya</h3>
            <p>Proyeksi laser, suara spasial, dan kursi mewah yang dirancang untuk kenyamanan.</p>
          </article>
          <article>
            <span className="feature-no">03</span>
            <Icon name="shield" size={28} />
            <h3>Aman sejak dirancang</h3>
            <p>Pembayaran terlindungi dan tiket digital instan, setiap saat.</p>
          </article>
        </div>
      </section>
    </>
  );
}

function Movies({ go }: { go: (p: Page) => void }) {
  const [tab, setTab] = useState<"now" | "soon">("now");
  return (
    <main className="page container">
      <div className="page-title">
        <span className="eyebrow">TEMUKAN KISAH BERIKUTNYA</span>
        <h1>Film</h1>
        <p>Dari premier tak terlupakan hingga kisah abadi — dikurasi untuk layar lebar.</p>
      </div>
      <div className="catalog-tools">
        <div className="tabs">
          <button className={tab === "now" ? "active" : ""} onClick={() => setTab("now")}>
            Sedang tayang <span>12</span>
          </button>
          <button className={tab === "soon" ? "active" : ""} onClick={() => setTab("soon")}>
            Segera hadir <span>08</span>
          </button>
        </div>
        <div className="filters">
          <label className="search-field">
            <Icon name="search" size={18} />
            <input placeholder="Cari film" />
          </label>
          {["Semua genre", "Rating", "Ketersediaan"].map((f) => (
            <button className="filter-button" key={f}>
              {f}
              <span>⌄</span>
            </button>
          ))}
        </div>
      </div>
      {tab === "now" ? (
        <div className="catalog-grid">
          {[...movies, ...movies.slice(1, 4)].map((m, i) => (
            <MovieCard movie={{ ...m, id: i + 20 }} go={go} key={i} />
          ))}
        </div>
      ) : (
        <div className="catalog-grid" id="coming">
          {upcoming.concat(upcoming).map((m, i) => (
            <article className="movie-card" key={i}>
              <div className="poster-wrap">
                <img src={m.image} alt="" />
                <div className="release-ribbon">{m.date}</div>
              </div>
              <div className="movie-meta">
                <div>
                  <h3>{m.title}</h3>
                  <p>Fiksi Ilmiah · Drama</p>
                </div>
                <button className="book-link">Ingatkan aku</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

function Details({ go }: { go: (p: Page) => void }) {
  return (
    <main className="details-page">
      <div className="detail-backdrop">
        <img src="/assets/eclipse-protocol.png" alt="" />
      </div>
      <div className="container detail-layout">
        <div className="detail-poster">
          <img src="/assets/eclipse-protocol.png" alt="Eclipse Protocol" />
          <button>
            <Icon name="play" /> Putar trailer
          </button>
        </div>
        <div className="detail-copy">
          <div className="hero-kicker">
            <span>SEDANG TAYANG</span>
            <span className="line" />
          </div>
          <h1>
            Eclipse <em>Protocol</em>
          </h1>
          <div className="hero-facts">
            <Rating value="8.9" />
            <span>FIKSI ILMIAH · THRILLER</span>
            <span>2J 18M</span>
            <span className="age">PG-13</span>
          </div>
          <p className="synopsis">
            Saat matahari lenyap tanpa peringatan, seorang astronot yang dipermalukan direkrut untuk
            satu misi mustahil: melintasi tepi alam semesta dan membawa cahaya pulang sebelum
            Bumi terdiam selamanya.
          </p>
          <dl className="detail-list">
            <div>
              <dt>Sutradara</dt>
              <dd>Elena Voss</dd>
            </div>
            <div>
              <dt>Tanggal rilis</dt>
              <dd>27 September 2025</dd>
            </div>
            <div>
              <dt>Pemeran</dt>
              <dd>Mara Chen, Elliot Reeve, Soren Vale</dd>
            </div>
            <div>
              <dt>Bahasa</dt>
              <dd>Inggris, Prancis</dd>
            </div>
          </dl>
          <Button onClick={() => go("cinemas")}>
            <Icon name="ticket" size={18} /> Pilih jam tayang
          </Button>
        </div>
      </div>
      <section className="container trailer-strip">
        <SectionHeading eyebrow="TRAILER RESMI" title="Perjalanan melampaui cahaya" />
        <div className="trailer-frame">
          <img src="/assets/eclipse-protocol.png" alt="" />
          <button>
            <Icon name="play" size={28} />
          </button>
        </div>
      </section>
    </main>
  );
}

function Progress({ current }: { current: number }) {
  return (
    <div className="progress-bar">
      {["Jam tayang", "Kursi", "Pembayaran"].map((label, i) => (
        <div className={i + 1 <= current ? "done" : ""} key={label}>
          <span>{i + 1 < current ? <Icon name="check" size={14} /> : i + 1}</span>
          <b>{label}</b>
          {i < 2 && <i />}
        </div>
      ))}
    </div>
  );
}

function Cinemas({ go }: { go: (p: Page) => void }) {
  const [cinema, setCinema] = useState(0);
  const [date, setDate] = useState(1);
  const [time, setTime] = useState("19.20");
  const dates = [
    ["JUM", "27"],
    ["SAB", "28"],
    ["MIN", "29"],
    ["SEN", "30"],
    ["SEL", "01"],
    ["RAB", "02"],
  ];
  return (
    <main className="page container booking-page">
      <Progress current={1} />
      <div className="booking-heading">
        <div>
          <span className="eyebrow">PESAN TIKET</span>
          <h1>Pilih jam tayangmu</h1>
        </div>
        <div className="mini-movie">
          <img src="/assets/eclipse-protocol.png" alt="" />
          <div>
            <h3>Eclipse Protocol</h3>
            <p>Fiksi Ilmiah · Thriller · 2j 18m</p>
          </div>
        </div>
      </div>
      <div className="booking-grid">
        <section>
          <h3 className="step-title">
            <span>01</span>Pilih tanggal
          </h3>
          <div className="date-row">
            {dates.map((d, i) => (
              <button
                className={date === i ? "active" : ""}
                onClick={() => setDate(i)}
                key={d.join()}
              >
                <span>{d[0]}</span>
                <b>{d[1]}</b>
                <small>{i === 1 ? "HARI INI" : "SEP"}</small>
              </button>
            ))}
          </div>
          <h3 className="step-title">
            <span>02</span>Pilih bioskop
          </h3>
          <div className="cinema-list">
            {cinemas.map((c, i) => (
              <article
                onClick={() => setCinema(i)}
                className={cinema === i ? "active" : ""}
                key={c.name}
              >
                <div className="radio">
                  <i />
                </div>
                <div className="cinema-info">
                  <h3>{c.name}</h3>
                  <p>
                    <Icon name="pin" size={15} /> {c.address}
                  </p>
                  <div>
                    {c.features.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                </div>
                <span className="distance">{(1.2 + i * 1.5).toFixed(1)} mil</span>
              </article>
            ))}
          </div>
        </section>
        <aside className="showtime-panel">
          <span className="eyebrow">JAM TERSEDIA</span>
          <h2>{cinemas[cinema].name}</h2>
          <p>Sabtu, 28 September</p>
          {["IMAX · LASER", "2D · DOLBY ATMOS", "VIP · RECLINER"].map((format, i) => (
            <div className="time-group" key={format}>
              <h4>{format}</h4>
              <div>
                {[
                  ["16.10", "19.20", "22.30"],
                  ["15.40", "18.50", "21.55"],
                  ["17.20", "20.35"],
                ][i].map((t) => (
                  <button className={time === t ? "active" : ""} onClick={() => setTime(t)} key={t}>
                    {t}
                    <small>{i === 1 ? "$18" : "$24"}</small>
                  </button>
                ))}
              </div>
            </div>
          ))}
          <Button onClick={() => go("seats")}>
            Pilih kursi <Icon name="arrow" size={18} />
          </Button>
        </aside>
      </div>
    </main>
  );
}

function Seats({ go }: { go: (p: Page) => void }) {
  const [selected, setSelected] = useState(["F7", "F8"]);
  const occupied = [
    "A4",
    "A5",
    "B8",
    "B9",
    "C3",
    "C12",
    "D6",
    "E4",
    "E5",
    "E10",
    "G2",
    "G11",
    "H7",
  ];
  const toggle = (seat: string) =>
    setSelected((s) => (s.includes(seat) ? s.filter((x) => x !== seat) : [...s, seat]));
  return (
    <main className="page container booking-page seats-page">
      <Progress current={2} />
      <div className="booking-heading">
        <div>
          <span className="eyebrow">CINÉRA GRAND CENTRAL · IMAX</span>
          <h1>Pilih kursimu</h1>
          <p>Sab, 28 Sep · 19.20</p>
        </div>
        <button className="change-link" onClick={() => go("cinemas")}>
          Ubah jam tayang
        </button>
      </div>
      <div className="seat-layout">
        <section className="seat-map">
          <div className="screen">
            <span>LAYAR</span>
          </div>
          <div className="seats">
            {"ABCDEFGH".split("").map((row, r) => (
              <div className="seat-row" key={row}>
                <b>{row}</b>
                {Array.from({ length: 12 }, (_, i) => `${row}${i + 1}`).map((s, i) => (
                  <button
                    disabled={occupied.includes(s)}
                    onClick={() => toggle(s)}
                    className={`${selected.includes(s) ? "selected" : ""} ${i === 2 || i === 10 ? "aisle" : ""}`}
                    aria-label={`Kursi ${s}`}
                    key={s}
                  >
                    {i + 1}
                  </button>
                ))}
                <b>{row}</b>
              </div>
            ))}
          </div>
          <div className="seat-legend">
            <span>
              <i className="available" />
              Tersedia
            </span>
            <span>
              <i className="chosen" />
              Dipilih
            </span>
            <span>
              <i className="occupied" />
              Terisi
            </span>
          </div>
        </section>
        <aside className="summary-card">
          <span className="eyebrow">PESANANMU</span>
          <div className="summary-movie">
            <img src="/assets/eclipse-protocol.png" alt="" />
            <div>
              <h3>Eclipse Protocol</h3>
              <p>IMAX · PG-13</p>
            </div>
          </div>
          <dl>
            <div>
              <dt>
                <Icon name="calendar" /> Tanggal
              </dt>
              <dd>Sab, 28 Sep</dd>
            </div>
            <div>
              <dt>
                <Icon name="clock" /> Waktu
              </dt>
              <dd>19.20</dd>
            </div>
            <div>
              <dt>
                <Icon name="pin" /> Bioskop
              </dt>
              <dd>Grand Central</dd>
            </div>
          </dl>
          <div className="selected-box">
            <span>Kursi dipilih</span>
            <div>
              {selected.length ? (
                selected.map((s) => <b key={s}>{s}</b>)
              ) : (
                <small>Pilih kursi</small>
              )}
            </div>
          </div>
          <div className="total">
            <span>
              Total <small>{selected.length} × $24.00</small>
            </span>
            <strong>${(selected.length * 24).toFixed(2)}</strong>
          </div>
          <Button onClick={() => selected.length && go("checkout")}>
            Lanjut ke pembayaran <Icon name="arrow" size={17} />
          </Button>
        </aside>
      </div>
    </main>
  );
}

function Checkout({ go }: { go: (p: Page) => void }) {
  const [paid, setPaid] = useState(false);
  if (paid)
    return (
      <main className="page success-page container">
        <div className="success-icon">
          <Icon name="check" size={38} />
        </div>
        <span className="eyebrow">PEMBAYARAN DIKONFIRMASI</span>
        <h1>Kamu akan nonton film.</h1>
        <p>Tiketmu sudah siap. Kami juga sudah mengirim konfirmasi ke emailmu.</p>
        <div className="confirmation-no">
          KODE PEMESANAN <b>CNR-2809-EP7F</b>
        </div>
        <Button onClick={() => go("tickets")}>
          Lihat tiketku <Icon name="ticket" />
        </Button>
        <button className="text-link" onClick={() => go("home")}>
          Kembali ke beranda
        </button>
      </main>
    );
  return (
    <main className="page container booking-page">
      <Progress current={3} />
      <div className="booking-heading">
        <div>
          <span className="eyebrow">CHECKOUT AMAN</span>
          <h1>Selesaikan pemesananmu</h1>
        </div>
        <span className="secure-note">
          <Icon name="shield" size={17} /> Pembayaran aman
        </span>
      </div>
      <div className="checkout-grid">
        <section className="payment-form">
          <h3 className="step-title">
            <span>01</span>Informasi kontak
          </h3>
          <div className="form-row">
            <label>
              Nama lengkap
              <input placeholder="Alex Morgan" />
            </label>
            <label>
              Alamat email
              <input type="email" placeholder="alex@example.com" />
            </label>
          </div>
          <h3 className="step-title">
            <span>02</span>Metode pembayaran
          </h3>
          <div className="payment-methods">
            <button className="active">
              <Icon name="card" /> Kartu
            </button>
            <button>◉ Pay</button>
            <button>PayPal</button>
          </div>
          <div className="card-form">
            <label>
              Nomor kartu
              <div className="input-icon">
                <input placeholder="1234  5678  9012  3456" />
                <Icon name="card" />
              </div>
            </label>
            <div className="form-row">
              <label>
                Tanggal kedaluwarsa
                <input placeholder="BB / TT" />
              </label>
              <label>
                Kode keamanan
                <input placeholder="CVV" />
              </label>
            </div>
            <label className="save-card">
              <input type="checkbox" /> Simpan kartu ini untuk pemesanan berikutnya
            </label>
          </div>
        </section>
        <aside className="summary-card checkout-summary">
          <span className="eyebrow">RINGKASAN PESANAN</span>
          <div className="summary-movie">
            <img src="/assets/eclipse-protocol.png" alt="" />
            <div>
              <h3>Eclipse Protocol</h3>
              <p>IMAX · 2j 18m</p>
              <Rating value="8.9" />
            </div>
          </div>
          <dl>
            <div>
              <dt>Tanggal & waktu</dt>
              <dd>Sab, 28 Sep · 19.20</dd>
            </div>
            <div>
              <dt>Bioskop</dt>
              <dd>CINÉRA Grand Central</dd>
            </div>
            <div>
              <dt>Kursi</dt>
              <dd>F7, F8</dd>
            </div>
          </dl>
          <div className="price-lines">
            <p>
              <span>Tiket (2)</span>
              <b>$48.00</b>
            </p>
            <p>
              <span>Biaya pemesanan</span>
              <b>$3.50</b>
            </p>
          </div>
          <div className="total">
            <span>Total</span>
            <strong>$51.50</strong>
          </div>
          <Button onClick={() => setPaid(true)}>
            <Icon name="shield" size={17} /> Konfirmasi pembayaran
          </Button>
          <p className="terms">Dengan mengonfirmasi, kamu menyetujui syarat pemesanan dan kebijakan pengembalian dana kami.</p>
        </aside>
      </div>
    </main>
  );
}

function Tickets({ go }: { go: (p: Page) => void }) {
  return (
    <main className="page container tickets-page">
      <div className="page-title">
        <span className="eyebrow">CINÉRA-MU</span>
        <h1>Tiket saya</h1>
        <p>Semua yang kamu butuhkan untuk kunjunganmu berikutnya.</p>
      </div>
      <div className="ticket-card">
        <div className="ticket-visual">
          <img src="/assets/eclipse-protocol.png" alt="" />
        </div>
        <div className="ticket-info">
          <span className="ticket-status">
            <i /> AKAN DATANG
          </span>
          <h2>Eclipse Protocol</h2>
          <p>IMAX · Inggris · PG-13</p>
          <div className="ticket-facts">
            <div>
              <span>TANGGAL</span>
              <b>Sab, 28 Sep</b>
            </div>
            <div>
              <span>WAKTU</span>
              <b>19.20</b>
            </div>
            <div>
              <span>KURSI</span>
              <b>F7, F8</b>
            </div>
            <div>
              <span>BIOSKOP</span>
              <b>Grand Central</b>
            </div>
          </div>
          <small>ID Pemesanan: CNR-2809-EP7F</small>
        </div>
        <div className="ticket-perf" />
        <div className="qr-side">
          <div className="qr">
            {Array.from({ length: 64 }, (_, i) => (
              <i key={i} className={(i * 7 + (i % 5)) % 3 ? "dark" : ""} />
            ))}
          </div>
          <b>PINDAI SAAT MASUK</b>
          <span>Untuk 2 orang</span>
        </div>
      </div>
      <div className="empty-note">
        <Icon name="ticket" size={26} />
        <div>
          <h3>Siap untuk kisah berikutnya?</h3>
          <p>Jelajahi film yang sedang tayang di CINÉRA terdekat.</p>
        </div>
        <Button variant="outline" onClick={() => go("movies")}>
          Jelajahi film
        </Button>
      </div>
    </main>
  );
}

function Auth({ mode, go }: { mode: "login" | "register"; go: (p: Page) => void }) {
  const register = mode === "register";
  return (
    <main className="auth-page">
      <div className="auth-art">
        <img src="/assets/eclipse-protocol.png" alt="" />
        <div className="auth-quote">
          <span>“</span>
          <p>
            Cerita terasa berbeda
            <br />
            di layar lebar.
          </p>
          <small>SELAMAT DATANG DI CINÉRA</small>
        </div>
      </div>
      <div className="auth-panel">
        <Logo go={go} />
        <div className="auth-form">
          <span className="eyebrow">{register ? "GABUNG CINÉRA" : "SELAMAT DATANG KEMBALI"}</span>
          <h1>{register ? "Buat akunmu" : "Masuk ke akunmu"}</h1>
          <p>
            {register
              ? "Satu akun. Setiap pengalaman bioskop yang tak terlupakan."
              : "Tiket, kursi favorit, dan momen bioskopmu sedang menunggu."}
          </p>
          {register && (
            <label>
              Nama lengkap
              <input placeholder="Nama lengkapmu" />
            </label>
          )}
          <label>
            Alamat email
            <input type="email" placeholder="kamu@example.com" />
          </label>
          <label>
            Kata sandi
            <div className="input-icon">
              <input type="password" placeholder="••••••••" />
              <Icon name="eye" size={18} />
            </div>
          </label>
          {!register && (
            <div className="form-help">
              <label>
                <input type="checkbox" /> Ingat aku
              </label>
              <button>Lupa kata sandi?</button>
            </div>
          )}
          <Button onClick={() => go("home")}>
            {register ? "Buat akun" : "Masuk"} <Icon name="arrow" size={17} />
          </Button>
          <div className="or">
            <span />
            ATAU LANJUTKAN DENGAN
            <span />
          </div>
          <div className="socials">
            <button>G&nbsp;&nbsp; Google</button>
            <button>●&nbsp;&nbsp; Apple</button>
          </div>
          <p className="switch-auth">
            {register ? "Sudah jadi anggota?" : "Baru di CINÉRA?"}{" "}
            <button onClick={() => go(register ? "login" : "register")}>
              {register ? "Masuk" : "Buat akun"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}

function Footer({ go }: { go: (p: Page) => void }) {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <Logo go={go} />
          <p>Cerita layak tampil di layar lebar.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => go("movies")}>Film</button>
          <button onClick={() => go("cinemas")}>Bioskop</button>
          <button onClick={() => go("tickets")}>Tiket saya</button>
          <button>Bantuan</button>
        </div>
        <small>© 2025 CINÉRA CINEMAS</small>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const go = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    document.title = "CINÉRA — Cerita di layar lebar";
  }, []);
  const content = useMemo(() => {
    if (page === "home") return <Home go={go} />;
    if (page === "movies") return <Movies go={go} />;
    if (page === "details") return <Details go={go} />;
    if (page === "cinemas") return <Cinemas go={go} />;
    if (page === "seats") return <Seats go={go} />;
    if (page === "checkout") return <Checkout go={go} />;
    if (page === "tickets") return <Tickets go={go} />;
    return <Auth mode={page} go={go} />;
  }, [page]);
  const auth = page === "login" || page === "register";
  return (
    <div className="app">
      {!auth && <Navbar page={page} go={go} />}
      {content}
      {!auth && <Footer go={go} />}
    </div>
  );
}
