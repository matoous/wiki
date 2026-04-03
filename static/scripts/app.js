const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const searchDialog = document.getElementById("search-dialog");
const searchOpen = document.getElementById("search-open");
const searchClose = document.getElementById("search-close");

const applyTheme = (theme) => {
  root.dataset.theme = theme;
  if (themeToggle instanceof HTMLButtonElement) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    themeToggle.title = `Switch to ${nextTheme} theme`;
  }
};

const storedTheme = localStorage.getItem("theme-preference") || "dark";
applyTheme(storedTheme);

if (themeToggle instanceof HTMLButtonElement) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme-preference", nextTheme);
    applyTheme(nextTheme);
  });
}

document.querySelectorAll("[data-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("aria-controls");
    const target = targetId ? document.getElementById(targetId) : null;
    const expanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", expanded ? "false" : "true");
    target?.classList.toggle("expanded", !expanded);
  });
});

searchOpen?.addEventListener("click", () => {
  if (typeof searchDialog?.showModal === "function") {
    searchDialog.showModal();
  } else {
    searchDialog?.setAttribute("open", "true");
  }

  if (!window.__pagefind?.initialized && typeof PagefindUI !== "undefined") {
    window.__pagefind = {
      initialized: true,
      ui: new PagefindUI({
        element: "#search",
        bundlePath: "/pagefind/",
        showSubResults: true,
        resetStyles: false,
      }),
    };
  }
});

searchClose?.addEventListener("click", () => {
  searchDialog?.close();
});

searchDialog?.addEventListener("click", (event) => {
  if (event.target === searchDialog) {
    searchDialog.close();
  }
});
