:root {
  --navy: #082e67;
  --navy-dark: #061f49;
  --blue: #244d83;
  --orange: #ff5d1b;
  --green: #20c866;
  --text: #11284c;
  --muted: #65748b;
  --soft: #f5f8fc;
  --line: #dfe6ef;
  --white: #ffffff;
  --shadow: 0 14px 34px rgba(6, 31, 73, 0.09);
  --radius: 16px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Poppins", Arial, sans-serif;
  color: var(--text);
  background: var(--white);
  line-height: 1.55;
  overflow-x: hidden;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button, select { cursor: pointer; }
section[id] { scroll-margin-top: 96px; }
.container { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
.narrow-container { width: min(860px, 100%); }

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid #edf0f4;
  box-shadow: 0 3px 14px rgba(9, 34, 70, 0.08);
  backdrop-filter: blur(10px);
}
.nav-wrap { min-height: 82px; display: flex; align-items: center; gap: 24px; }
.brand { width: 145px; flex: 0 0 auto; }
.brand img { width: 100%; height: 52px; object-fit: contain; object-position: left center; }
.main-nav { display: flex; gap: 24px; align-items: center; margin-left: auto; font-size: 13px; color: #3b4a61; }
.main-nav a { white-space: nowrap; transition: color 0.2s; }
.main-nav a:hover, .main-nav a:focus-visible { color: var(--orange); }
.nav-cta { margin-left: 8px; }
.menu-toggle { display: none; margin-left: auto; border: 0; background: transparent; color: var(--navy); padding: 8px; }
.menu-toggle svg { width: 28px; height: 28px; }

.btn {
  border: 0;
  border-radius: 10px;
  min-height: 46px;
  padding: 11px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 5px 14px rgba(6, 31, 73, 0.08);
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 9px 20px rgba(6, 31, 73, 0.14); }
.btn svg { width: 18px; height: 18px; }
.btn-orange { background: var(--orange); color: #fff; }
.btn-navy { background: var(--navy); color: #fff; }
.btn-whatsapp { background: var(--green); color: #fff; }
.btn-outline-light { border: 1px solid rgba(255, 255, 255, 0.55); color: #fff; background: rgba(255, 255, 255, 0.06); }
.btn-outline-navy { border: 1px solid var(--navy); color: var(--navy); background: #fff; }
.btn-outline-green { border: 1px solid #12b956; color: #08943f; background: #fff; }
.btn-outline-orange { border: 1px solid var(--orange); color: var(--orange); background: #fff; }
.full { width: 100%; }
.disabled { pointer-events: none; opacity: 0.55; }

.hero {
  min-height: 650px;
  position: relative;
  color: #fff;
  background-image: url("assets/hero-truck.jpg");
  background-size: cover;
  background-position: center 45%;
  overflow: hidden;
}
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(5, 38, 84, 0.98) 0%, rgba(8, 48, 102, 0.92) 48%, rgba(8, 44, 90, 0.5) 100%); }
.hero-inner { position: relative; z-index: 1; padding-top: 82px; padding-bottom: 70px; }
.hero-copy { max-width: 760px; }
.eyebrow { display: inline-flex; align-items: center; gap: 8px; color: var(--orange); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.hero-eyebrow { text-transform: none; border: 1px solid rgba(255, 93, 27, 0.6); border-radius: 999px; padding: 7px 16px; background: rgba(255, 255, 255, 0.08); font-size: 12px; }
.hero h1 { font-size: clamp(38px, 5vw, 58px); line-height: 1.12; margin: 28px 0 18px; letter-spacing: -0.04em; }
.hero h1 em { color: var(--orange); font-style: normal; }
.hero p { font-size: 16px; max-width: 700px; margin: 0 0 30px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
.hero-features { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 44px; max-width: 850px; }
.hero-features article { border: 1px solid rgba(255, 255, 255, 0.22); background: rgba(255, 255, 255, 0.1); border-radius: 11px; padding: 13px 15px; display: flex; align-items: center; gap: 12px; }
.hero-features svg { color: var(--orange); width: 22px; flex: 0 0 auto; }
.hero-features span { font-size: 12px; font-weight: 600; }

.section { padding: 86px 0; }
.section-soft { background: var(--soft); }
.section-heading { max-width: 760px; margin: 0 auto 42px; }
.section-heading.centered { text-align: center; }
.section-heading.centered .eyebrow { justify-content: center; }
.section-heading h2, .about-copy h2, .mission-section h2, .operation-section h2 { margin: 10px 0 14px; font-size: clamp(28px, 4vw, 40px); line-height: 1.18; letter-spacing: -0.035em; color: var(--navy); }
.section-heading p, .about-copy > p, .mission-section > .container > p { color: var(--muted); margin: 0; }
.compact-heading { margin-bottom: 28px; }
.light-pill { padding: 8px 13px; border-radius: 999px; background: #eaf0f8; color: var(--navy); }

.about-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr); gap: 52px; align-items: center; }
.about-image { width: 100%; aspect-ratio: 1.25 / 1; object-fit: cover; border-radius: var(--radius); box-shadow: var(--shadow); }
.about-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 28px; }
.about-cards article { border: 1px solid var(--line); border-radius: 13px; padding: 18px; background: #fff; }
.about-cards svg { width: 25px; color: var(--navy); }
.about-cards h3 { margin: 11px 0 5px; font-size: 14px; color: var(--navy); }
.about-cards p { margin: 0; color: var(--muted); font-size: 12px; }

.mission-section { background: var(--navy); color: #fff; padding: 76px 0; }
.mission-section h2 { color: #fff; max-width: 660px; }
.mission-section > .container > p { color: #dce6f4; max-width: 760px; }
.mission-cards { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 38px; }
.mission-cards article { min-height: 112px; padding: 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.07); display: flex; flex-direction: column; justify-content: space-between; gap: 15px; }
.mission-cards svg { width: 24px; color: var(--orange); }
.mission-cards strong { font-size: 13px; }

.service-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.service-grid article { min-height: 210px; padding: 24px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; transition: 0.2s; }
.service-grid article:hover { transform: translateY(-3px); box-shadow: var(--shadow); }
.service-grid article.featured { border-color: #ffc3a7; box-shadow: var(--shadow); }
.service-grid svg { width: 48px; height: 48px; padding: 12px; color: #fff; background: var(--navy); border-radius: 10px; }
.service-grid .featured svg { background: var(--orange); }
.service-grid h3 { margin: 20px 0 8px; font-size: 16px; color: var(--navy); }
.service-grid p { margin: 0; color: var(--muted); font-size: 13px; }

.mapa-cobertura-section { padding: 82px 0; background: var(--soft); }
.map-link { display: block; position: relative; width: min(980px, 100%); margin: 0 auto; }
.mapa-cobertura-imagem { width: 100%; height: auto; border-radius: 18px; box-shadow: 0 18px 48px rgba(4, 31, 80, 0.13); }
.map-link > span { position: absolute; right: 14px; bottom: 14px; display: inline-flex; align-items: center; gap: 7px; padding: 9px 12px; border-radius: 999px; background: rgba(6, 31, 73, 0.9); color: #fff; font-size: 11px; }
.map-link > span svg { width: 15px; }

.difference-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.difference-grid article { min-height: 145px; padding: 21px; display: grid; grid-template-columns: 42px 1fr; gap: 15px; align-items: start; border: 1px solid var(--line); border-radius: 14px; background: #fff; }
.difference-grid article.accent { border-color: #ffb38e; }
.difference-grid svg { width: 38px; height: 38px; padding: 9px; color: var(--orange); background: #fff0e9; border-radius: 10px; }
.difference-grid h3 { margin: 0 0 7px; font-size: 14px; color: var(--navy); }
.difference-grid p { margin: 0; color: var(--muted); font-size: 12px; }

.panel { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow); }
.calculator-layout { display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 24px; align-items: start; }
.form-panel { padding: 28px; }
fieldset { border: 0; padding: 0; margin: 0 0 28px; }
legend { margin-bottom: 16px; font-weight: 700; font-size: 16px; color: var(--navy); }
.form-grid { display: grid; gap: 15px; }
.form-grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.form-grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
label { display: grid; gap: 7px; color: #132d55; font-size: 12px; font-weight: 600; }
input, select, textarea { width: 100%; border: 1px solid #ccd7e5; border-radius: 9px; min-height: 44px; padding: 10px 12px; color: var(--text); background: #fff; outline: 0; }
textarea { resize: vertical; }
input:focus, select:focus, textarea:focus { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(36, 77, 131, 0.1); }
.box-diagram { margin: 0 0 28px; border: 1px solid var(--line); border-radius: 12px; background: #f8fafe; min-height: 220px; display: grid; place-items: center; }
.box-diagram svg { max-width: 430px; width: 100%; height: auto; }
.toggle-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 18px; }
.toggle-row { position: relative; min-height: 48px; padding: 12px 58px 12px 13px; border: 1px solid var(--line); border-radius: 9px; display: flex; align-items: center; font-size: 12px; font-weight: 500; }
.toggle-row input { position: absolute; opacity: 0; pointer-events: none; }
.switch { position: absolute; right: 12px; width: 38px; height: 22px; border-radius: 999px; background: #d9e2ee; transition: 0.2s; }
.switch::after { content: ""; position: absolute; width: 18px; height: 18px; top: 2px; left: 2px; border-radius: 50%; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.18); transition: 0.2s; }
.toggle-row input:checked + .switch { background: var(--green); }
.toggle-row input:checked + .switch::after { transform: translateX(16px); }
.form-error { color: #b42318; font-size: 12px; min-height: 18px; }
.result-panel { overflow: hidden; position: sticky; top: 105px; }
.result-title { padding: 17px 20px; display: flex; align-items: center; gap: 9px; background: var(--navy); color: #fff; font-weight: 700; font-size: 14px; }
.result-title svg { color: var(--orange); width: 19px; }
.result-total { padding: 28px 20px 20px; text-align: center; border-bottom: 1px solid #e8edf4; }
.result-total small { display: block; color: var(--muted); }
.result-total strong { display: block; margin-top: 8px; font-size: 36px; color: var(--navy); }
.result-total strong span { font-size: 15px; }
.result-list { padding: 18px 20px; margin: 0; }
.result-list div { display: flex; justify-content: space-between; gap: 10px; margin: 8px 0; color: var(--muted); font-size: 12px; }
.result-list dd { margin: 0; color: var(--text); text-align: right; }
.result-warning { margin: 0 18px 16px; padding: 13px; border: 1px solid #ffb18c; border-radius: 9px; background: #fff3ed; color: #b14b20; font-size: 11px; }
.result-panel .btn { margin: 0 18px 12px; width: calc(100% - 36px); }
.text-link { margin: 3px 18px 18px; display: flex; justify-content: center; align-items: center; gap: 7px; color: var(--muted); font-size: 12px; }
.text-link svg { width: 16px; }

.operation-section { background: #fff; }
.operation-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 52px; align-items: center; }
.check-list { margin: 26px 0 0; padding: 0; list-style: none; display: grid; gap: 14px; }
.check-list li { position: relative; padding-left: 28px; color: #40516a; }
.check-list li::before { content: "✓"; position: absolute; left: 0; top: 0; color: var(--orange); font-weight: 800; }
.operation-photo-placeholder { min-height: 360px; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 30px; text-align: center; color: #62708a; background: linear-gradient(135deg, #f6f8fc, #edf2f8); border: 2px dashed #cbd5e1; border-radius: 18px; }
.operation-photo-placeholder svg { width: 44px; height: 44px; color: var(--orange); }
.operation-photo-placeholder strong { color: var(--navy); font-size: 18px; }
.operation-photo-placeholder span { max-width: 330px; font-size: 13px; }

.quote-form { padding: 30px; }
.quote-form > label { margin-top: 16px; }
.consent { margin: 20px 0 8px; grid-template-columns: 18px 1fr; align-items: start; gap: 10px; padding: 14px; border: 1px solid var(--line); border-radius: 10px; background: #f8fafe; font-weight: 500; }
.consent input { width: 18px; min-height: 18px; margin-top: 2px; }

.contact-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 26px; }
.contact-card { padding: 26px; }
.contact-card dl { margin: 0; display: grid; gap: 18px; }
.contact-card dl > div { display: grid; grid-template-columns: 22px 1fr; column-gap: 12px; }
.contact-card svg { grid-row: 1 / 3; width: 20px; color: var(--orange); }
.contact-card dt { color: var(--muted); font-size: 12px; }
.contact-card dd { margin: 2px 0 0; font-weight: 600; font-size: 14px; }
.contact-buttons { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 24px; }
.map-frame { min-height: 500px; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); box-shadow: var(--shadow); }
.map-frame iframe { width: 100%; height: 100%; min-height: 500px; border: 0; }

.footer { background: var(--navy-dark); color: #d9e5f4; padding: 58px 0 20px; }
.footer-grid { display: grid; grid-template-columns: 1.1fr 0.8fr 1.35fr 1fr; gap: 42px; }
.footer h3 { color: #fff; font-size: 13px; text-transform: uppercase; margin: 0 0 18px; }
.footer a { display: block; margin: 9px 0; font-size: 12px; }
.footer a:hover { color: var(--orange); }
.footer p { margin: 9px 0; font-size: 12px; }
.footer p svg { width: 15px; vertical-align: -3px; color: var(--orange); margin-right: 7px; }
.footer-brand img { width: 155px; background: #fff; border-radius: 9px; padding: 8px; }
.footer-brand p { color: var(--orange); font-style: italic; }
.footer-bottom { margin-top: 36px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.12); font-size: 11px; color: #9eb0c7; }

.floating-whatsapp { position: fixed; right: 22px; bottom: 22px; z-index: 950; width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center; background: var(--green); color: #fff; box-shadow: 0 10px 26px rgba(0,0,0,.2); }
.floating-whatsapp svg { width: 27px; }

@media (max-width: 1080px) {
  .main-nav { gap: 15px; font-size: 12px; }
  .nav-cta { padding-inline: 14px; }
  .mission-cards { grid-template-columns: repeat(3, 1fr); }
  .service-grid, .difference-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .calculator-layout { grid-template-columns: minmax(0, 1fr) 300px; }
}

@media (max-width: 860px) {
  .container { width: min(100% - 28px, 760px); }
  .nav-wrap { min-height: 72px; }
  .brand { width: 126px; }
  .nav-cta { display: none; }
  .menu-toggle { display: inline-flex; }
  .main-nav { position: absolute; top: 72px; left: 14px; right: 14px; display: none; flex-direction: column; align-items: stretch; gap: 0; padding: 10px; border: 1px solid var(--line); border-radius: 13px; background: #fff; box-shadow: var(--shadow); }
  .main-nav.open { display: flex; }
  .main-nav a { padding: 12px 13px; border-radius: 8px; }
  .main-nav a:hover { background: var(--soft); }
  .hero { min-height: 610px; }
  .hero-inner { padding-top: 65px; }
  .hero-features { grid-template-columns: repeat(2, 1fr); }
  .about-grid, .operation-grid, .contact-layout { grid-template-columns: 1fr; }
  .about-image { max-height: 520px; }
  .calculator-layout { grid-template-columns: 1fr; }
  .result-panel { position: static; }
  .map-frame, .map-frame iframe { min-height: 380px; }
  .footer-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .container { width: min(100% - 24px, 520px); }
  .section { padding: 58px 0; }
  .mapa-cobertura-section { padding: 58px 0; }
  .mission-section { padding: 58px 0; }
  .hero { min-height: auto; background-position: 60% center; }
  .hero-inner { padding: 52px 0 48px; }
  .hero h1 { font-size: 38px; }
  .hero p { font-size: 14px; }
  .hero-actions { flex-direction: column; align-items: stretch; }
  .hero-actions .btn { width: 100%; }
  .hero-features { gap: 9px; margin-top: 32px; }
  .hero-features article { padding: 11px; }
  .hero-features span { font-size: 11px; }
  .about-cards, .service-grid, .difference-grid, .mission-cards, .form-grid.two, .form-grid.three, .toggle-grid, .contact-buttons, .footer-grid { grid-template-columns: 1fr; }
  .about-cards article, .service-grid article, .difference-grid article { min-height: auto; }
  .form-panel, .quote-form, .contact-card { padding: 20px; }
  .box-diagram { min-height: 170px; }
  .box-diagram svg { max-width: 320px; }
  .map-link > span { position: static; margin: 10px auto 0; width: max-content; background: var(--navy); }
  .operation-photo-placeholder { min-height: 260px; }
  .map-frame, .map-frame iframe { min-height: 330px; }
  .footer-grid { gap: 28px; }
  .floating-whatsapp { width: 50px; height: 50px; right: 14px; bottom: 14px; }
}

@media (max-width: 390px) {
  .hero h1 { font-size: 34px; }
  .hero-features { grid-template-columns: 1fr 1fr; }
  .hero-features article { align-items: flex-start; }
  .result-total strong { font-size: 32px; }
}
