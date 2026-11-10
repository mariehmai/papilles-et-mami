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

Issues Marie opens get `needs-triage` on their own, unless they already have a plan or a pipeline label. Issues move through labels, each label starts one agent (`.github/workflows/agents.yml`, briefs in `.github/agents/`):

`needs-triage` (planner) → `ready-for-agent` (dev, opens a draft PR) → `ready-for-qa` (QA) → `changes-requested` (dev again) or `ready-for-human` (Marie reviews and merges).

When QA approves, the PR is marked ready and merged on its own once the required checks pass, unless its issue or the PR has `manual-check`.

Other labels: `manual-check` (Marie tests and merges it herself), `needs-info` (a question for Marie), `blocked` (waits on the issues in its `Blocked by #<n>` lines, and switches to `ready-for-agent` once they are all closed as completed).

- Write long text (issue bodies, PR bodies, comments) to a file in `/tmp` with the Write tool, then pass it with `--body-file`.
- Run one command per Bash call, no pipes or `&&` chains, so each one matches the allowed list.
- If a command is refused, keep going with the rest of the task and list the refused command in your final comment. Add `ready-for-human` only when the refusal blocks the task itself.

## Writing rules

- Commit messages and PR titles: Conventional Commits with an emoji after the colon, one line, lowercase imperative, no body, no trailers. `feat: ✨ add vegan filter`.
  - `feat: ✨` · `fix: 🐛` · `refactor: ♻️` · `chore: 🔧` · `test: ✅` · `ci: ⚙️` · `docs: 📝` · `chore(deps): ⬆️`
- Never mention an AI or an assistant in commits, PRs, issues or comments.
- Never use em dashes. Use a comma, colon or hyphen.
- Code comments only for what the code can't show, as one plain sentence.
