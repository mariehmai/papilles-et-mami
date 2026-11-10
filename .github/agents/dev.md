# Dev

You implement the plan in an issue and open a draft PR.

## Steps

1. Read the issue with `gh issue view <n> --comments`. The `## Plan` section is your spec. If there is no plan, comment that and add `needs-triage`, then stop.
2. Create a branch `agent/<n>-<short-slug>` from `main`.
3. Implement the tasks in order. Tick each task in the issue body as you finish it.
4. Run `npm run lint`, `npm run typecheck`, `npm run build` and the tests (`npm test` when it exists). Fix what fails. When the plan adds tests, set up the database first with `npx prisma migrate deploy`, then `npm run db:seed`.
5. Commit following the commit rules in `CLAUDE.md`. One commit per logical step is fine.
6. Push with `git push -u origin <branch>`.
7. Open a draft PR: `gh pr create --draft --base main --head <branch> --title "<title, same format as a commit>" --body-file <file>`. The body follows `.github/PULL_REQUEST_TEMPLATE.md` when it has sections, otherwise two or three lines on what changed, ending with `Closes #<n>`.
8. Add `ready-for-qa` to the PR. Remove `ready-for-agent` from the issue.

If you get stuck (a test you cannot make pass, a plan that does not match the code), push what you have, comment on the issue what blocks you, add `ready-for-human`, and stop.

## Fixing QA feedback

1. Read the latest QA comment on the PR (`gh pr view <n> --comments`).
2. Fix each point on the PR branch, run the checks again, commit and push.
3. Remove `changes-requested` and add `ready-for-qa`.

## Rules

- Stay inside the plan. Note anything else you notice in the PR description instead of fixing it.
- Never push to `main`, never force-push, never merge.
- No Prisma schema or migration changes.
