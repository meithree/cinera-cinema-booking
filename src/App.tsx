          <p>
            {register
              ? "Satu akun untuk setiap pengalaman menonton yang tak terlupakan."
              : "Tiket, pilihan kursi, dan pengalaman menonton Anda menanti."}
          </p>
          {register && (
            <label>
              Nama lengkap
              <input placeholder="Nama lengkap Anda" />
            </label>
          )}
          <label>
            Alamat email
            <input type="email" placeholder="you@example.com" />
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
                <input type="checkbox" /> Ingat saya
              </label>
              <button>Lupa kata sandi?</button>
            </div>
          )}
          <Button onClick={() => go("home")}>
            {register ? "Buat akun" : "Sign in"} <Icon name="arrow" size={17} />
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
            {register ? "Sudah punya akun?" : "Baru di CINÉRA?"}{" "}
            <button onClick={() => go(register ? "login" : "register")}>
              {register ? "Sign in" : "Buat akun"}
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
          <p>Setiap cerita layak hadir di layar lebar.</p>
        </div>
        <div className="footer-links">
          <button onClick={() => go("movies")}>Movies</button>
          <button onClick={() => go("cinemas")}>Cinemas</button>
          <button onClick={() => go("tickets")}>Tiket saya</button>
          <button>Bantuan</button>
        </div>
        <small>© 2025 CINÉRA BIOSKOPS</small>
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
    if (page === "seats") return <Kursi go={go} />;
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
