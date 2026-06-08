import { t } from "../i18n";

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      <div className="footer-content">

        <p className="footer-copy">
          © {new Date().getFullYear()} Antonio Florea — {t(lang, "footer.rights")}
        </p>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/antonio-florea-b2b611292" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/Anto037" target="_blank">
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
