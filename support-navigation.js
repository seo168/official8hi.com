(() => {
  const mainUrl = "https://8hiapp.com/";
  const apkUrl = "https://cocosapk.arkbotita85.com/apk/DNjfxApS/1750/8HI_1750_1773.apk";
  const mainHost = new URL(mainUrl).hostname;
  const style = document.createElement("style");
  style.textContent = `
    :root { --support-cta-space: 96px; }
    body { padding-bottom: var(--support-cta-space) !important; }
    .support-route-note { position: relative; z-index: 9997; display:flex; justify-content:center; align-items:center; gap:8px; padding:9px 16px; background:#071c1b; color:#d9fffa; font:700 12px/1.3 system-ui,-apple-system,sans-serif; text-align:center; border-bottom:1px solid rgba(57,221,196,.38); }
    .support-route-note a { color:#56f0d4; text-decoration:underline; text-underline-offset:3px; }
    .support-main-cta { position:fixed; z-index:9999; left:50%; bottom:14px; transform:translateX(-50%); width:min(720px,calc(100% - 28px)); display:grid; grid-template-columns:1fr auto; gap:10px; align-items:center; padding:10px; background:rgba(3,20,19,.97); border:1px solid rgba(69,235,208,.55); border-radius:18px; box-shadow:0 14px 42px rgba(0,0,0,.4); backdrop-filter:blur(12px); font-family:system-ui,-apple-system,sans-serif; }
    .support-main-cta__copy { min-width:0; padding-left:8px; color:#fff; }
    .support-main-cta__copy strong { display:block; font-size:14px; line-height:1.2; }
    .support-main-cta__copy span { display:block; margin-top:3px; color:#a9c9c4; font-size:11px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .support-main-cta__actions { display:flex; gap:8px; }
    .support-main-cta a { display:inline-flex; min-height:48px; align-items:center; justify-content:center; border-radius:12px; padding:0 17px; font-weight:900; font-size:13px; line-height:1; text-decoration:none !important; white-space:nowrap; }
    .support-main-cta__main { background:#35e0c1; color:#031513 !important; box-shadow:0 7px 22px rgba(53,224,193,.25); }
    .support-main-cta__download { background:#fff; color:#081716 !important; }
    .support-main-cta a:focus-visible { outline:3px solid #fff; outline-offset:2px; }
    @media (max-width:640px) {
      :root { --support-cta-space: 148px; }
      .support-route-note { padding:8px 12px; font-size:11px; }
      .support-main-cta { bottom:max(8px,env(safe-area-inset-bottom)); width:calc(100% - 16px); grid-template-columns:1fr; gap:8px; padding:10px; border-radius:16px; }
      .support-main-cta__copy { text-align:center; padding:0 4px; }
      .support-main-cta__copy strong { font-size:13px; }
      .support-main-cta__actions { display:grid; grid-template-columns:1.25fr .75fr; width:100%; }
      .support-main-cta a { min-height:52px; padding:0 10px; font-size:13px; }
    }
  `;
  document.head.appendChild(style);

  const note = document.createElement("div");
  note.className = "support-route-note";
  note.setAttribute("role", "note");
  note.innerHTML = `8HI support guide · Main website: <a href="${mainUrl}">${mainHost}</a>`;
  document.body.prepend(note);

  const cta = document.createElement("aside");
  cta.className = "support-main-cta";
  cta.setAttribute("aria-label", "Official 8HI destinations");
  cta.innerHTML = `
    <div class="support-main-cta__copy">
      <strong>Continue to the official 8HI main website</strong>
      <span>This support page belongs to ${mainHost}</span>
    </div>
    <div class="support-main-cta__actions">
      <a class="support-main-cta__main" href="${mainUrl}">Open Main Site →</a>
      <a class="support-main-cta__download" href="${apkUrl}" download="8HI_1750_1773.apk" rel="nofollow">Download APK</a>
    </div>
  `;
  document.body.appendChild(cta);
})();

