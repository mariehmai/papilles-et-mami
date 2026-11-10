# Papilles & Mami

Recipe app. Remix 2, React 18, Tailwind 4, Prisma with SQLite, i18next, Google login via remix-auth. Deployed to Fly.io on every push to `main`.

## Commands

```sh
npm run dev        # local dev server
npm run lint
npm run typecheck
npm run build
```

## Agents

Issues move through labels, each label starts one agent (`.github/workflows/agents.yml`, briefs in `.github/agents/`):

`needs-triage` (planner) → `ready-for-agent` (dev, opens a draft PR) → `ready-for-qa` (QA) → `changes-requested` (dev again) or `ready-for-human` (Marie reviews and merges).

Other labels: `needs-info` (a question for Marie), `blocked` (waits on another issue).

## Writing rules

- Commit messages: one imperative line, no body, no trailers.
- Never mention an AI or an assistant in commits, PRs, issues or comments.
- Never use em dashes. Use a comma, colon or hyphen.
- Code comments only for what the code can't show, as one plain sentence.
