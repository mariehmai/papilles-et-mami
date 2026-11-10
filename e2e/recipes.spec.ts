import { expect, test } from "@playwright/test";

test("recipe list shows the seeded recipes", async ({ page }) => {
  await page.goto("/recipes");
  await expect(page.getByRole("button", { name: /^Toutes \(8\)/ })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Crêpes sucrées" })
  ).toBeVisible();
  await expect(page.getByText("8 recettes")).toBeVisible();
});

test("category filter narrows the list", async ({ page }) => {
  await page.goto("/recipes");
  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: /^Dessert \(2\)/ }).click();
  await expect(page.getByText("2 recettes")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Crêpes sucrées" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Paella Valenciana" })
  ).toHaveCount(0);
});

test("recipe page shows title, ingredients and steps", async ({ page }) => {
  await page.goto("/recipes/crepes-sucrees");
  await page.waitForLoadState("networkidle");
  await expect(
    page.getByRole("heading", { name: "Crêpes sucrées" }).first()
  ).toBeVisible();
  await expect(page.getByText("farine tout usage")).toBeVisible();

  await page.getByRole("button", { name: /^Instructions \(12\)/ }).click();
  await expect(
    page.getByText("Mélanger farine, sel et sucre dans un grand bol.")
  ).toBeVisible();
});
