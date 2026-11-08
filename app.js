(() => {
  const SKINS = {
    usa: { name: "the USA app", url: "https://kq4cin.github.io/MESHCORE_SKINZ/" },
    taco: { name: "the Taco app", url: "https://kq4cin.github.io/meshcore-_skinz_taco/" },
    alien: { name: "the Alien app", url: "https://kq4cin.github.io/meshcore_skinz_ufo/" },
    gameday: { name: "the Game Day app", url: "https://kq4cin.github.io/meshcore_skinz_game_day/" },
  };
  const KEY = "meshcore-skinz:last";

  const store = {
    get() { try { return localStorage.getItem(KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch { /* storage unavailable */ } },
  };

  // Elephant: remember which skin a returning visitor launched last.
  const showWelcomeBack = (skin) => {
    const info = SKINS[skin];
    if (!info) return;
    const banner = document.getElementById("welcome-back");
    banner.querySelector('[data-slot="name"]').textContent = info.name;
    const link = banner.querySelector('[data-slot="link"]');
    link.href = info.url;
    link.dataset.launch = skin;
    banner.hidden = false;
    document.querySelectorAll(".pick").forEach((el) => el.classList.toggle("is-last", el.dataset.skin === skin));
  };

  showWelcomeBack(store.get());

  document.addEventListener("click", (e) => {
    const launch = e.target.closest("[data-launch]");
    if (launch) store.set(launch.dataset.launch);
  });

  // Lightbox for screenshots.
  const dialog = document.getElementById("lightbox");
  if (dialog && typeof dialog.showModal === "function") {
    const big = dialog.querySelector("img");
    const caption = dialog.querySelector(".lightbox-caption");
    document.querySelectorAll(".shot").forEach((btn) => {
      const img = btn.querySelector("img");
      btn.setAttribute("aria-label", `Enlarge screenshot: ${img.alt}`);
      btn.addEventListener("click", () => {
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        caption.textContent = img.alt;
        dialog.showModal();
      });
    });
    dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });
  }
})();
