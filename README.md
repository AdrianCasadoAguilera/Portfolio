# 💼 Personal Portfolio – Adrián Casado
![Tests](https://github.com/AdrianCasadoAguilera/Portfolio/actions/workflows/test.yml/badge.svg?branch=preprod)

Welcome! This is my personal portfolio, where I showcase some of my work and demonstrate how I build, organize, and maintain projects. You’ll get a sense of the technologies I use and my approach to development.

🌐 [adrian-casado.com](https://adrian-casado.com)

---

## 🧑‍💻 Technologies

As a fully frontend-oriented project, the stack includes:

- **React**
- **Next.js**
- **Tailwind CSS**
- **TypeScript**
- **i18next** for internationalization

---

## 🛠️ Running Locally

To run the project locally:

```bash
git clone https://github.com/AdrianCasadoAguilera/Portfolio.git
cd Portfolio
pnpm install
pnpm dev
```

---

## 🧪 Testing

Coming soon. The test suite will include:

- Unit and integration tests using **Jest**
- E2E tests with **Playwright**

Run tests with:

```bash
pnpm test
```

---

## 🔁 CI/CD Pipeline

This project includes automated workflows using **GitHub Actions**, covering:

- Linting and formatting (`ESLint`, `Prettier`)
- Unit tests before merging
- Auto-deploy from `main` branch (to Vercel)
- Branch protection for `main` and `preprod`

CI/CD config is under `.github/workflows/`.

---

## 🌿 Git Workflow

The repository is organized in three main branches:

- `dev` – Active development (not necessarily stable)
- `preprod` – Staging version for testing (stable)
- `main` – Production-ready, auto-deployed

Other feature/support branches may be created when needed.

---

## 📁 Project Structure

```bash
.
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   ├── app/             # Next.js routing and pages
│   ├── styles/          # Global and Tailwind styles
│   ├── tests/           # Test files
├── .github/             # GitHub Actions workflows
├── README.md
└── package.json
```

---

## 🌍 Languages

This project uses `i18next` to support multiple languages. As a Catalan developer, I am committed to preserving and promoting the Catalan language. All my personal projects are always translated to at least **Catalan** and **English**.

### Available:
- 🟡 Catalan
- 🇪🇸 Spanish
- 🇬🇧 English

---

## 📜 License

This project is released under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

---

## 📫 Contact

Feel free to connect:

- 🌐 [adrian-casado.com](https://adrian-casado.com)
- 📧 acasadoag2@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/adri%C3%A1n-casado-aguilera-133a38238/)
