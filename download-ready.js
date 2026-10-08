(() => {
  const apk = "https://cocosapk.arkbotita85.com/apk/DNjfxApS/1750/8HI_1750_1773.apk";
  const match = /(coming soon|download(?: the)?(?: 8hi)?(?: android)?(?: app| apk)?|view app status|app status|get (?:the )?app|install apk)/i;
  const activate = () => {
    document.querySelectorAll('a, button').forEach((el) => {
      const label = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (!match.test(label)) return;
      if (/guide|instructions|safety|how to/i.test(label) && !/download/i.test(label)) return;
      if (el.tagName === 'A') {
        el.href = apk;
        el.setAttribute('download', '8HI_1750_1773.apk');
        el.setAttribute('rel', 'nofollow');
      } else {
        el.disabled = false;
        el.removeAttribute('aria-disabled');
        el.onclick = () => { window.location.href = apk; };
      }
      if (/coming soon|view app status|app status/i.test(label)) el.textContent = 'Download 8HI APK';
      el.dataset.downloadReady = 'true';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', activate);
  else activate();
  new MutationObserver(activate).observe(document.documentElement, { childList: true, subtree: true });
})();
