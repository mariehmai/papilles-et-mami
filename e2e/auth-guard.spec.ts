import { expect, test } from "@playwright/test";

for (const path of ["/recipes/new", "/profile"]) {
  test(`logged-out visit to ${path} ends on the login page`, async ({
    page,
  }) => {
    await page.goto(path);
    await expect(page).toHaveURL(/\/login$/);
  });
}

test("login page shows the Google button", async ({ page }) => {
  await page.goto("/login");
  await expect(
    page.getByRole("button", { name: "Continuer avec Google" })
  ).toBeVisible();
});
