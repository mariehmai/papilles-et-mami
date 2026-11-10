import { expect, test } from "@playwright/test";

test("home renders in French by default", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Nos meilleures recettes" })
  ).toBeVisible();
  await expect(page.getByPlaceholder("Chercher une recette...")).toBeVisible();
});

test("home renders in English", async ({ page }) => {
  await page.goto("/en");
  await expect(
    page.getByRole("heading", { name: "Our best recipes" })
  ).toBeVisible();
  await expect(page.getByPlaceholder("Search recipes...")).toBeVisible();
});

test("language switch moves from French to English", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "Change language" }).click();
  await page.getByRole("button", { name: "English" }).click();
  await expect(page).toHaveURL(/\/en\/?$/);
  await expect(
    page.getByRole("heading", { name: "Our best recipes" })
  ).toBeVisible();
});
