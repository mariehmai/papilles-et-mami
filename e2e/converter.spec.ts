import { expect, test } from "@playwright/test";

test("converter turns 2 cups into 500 mL", async ({ page }) => {
  await page.goto("/converter");
  await page.waitForLoadState("networkidle");
  await page.locator('input[type="number"]').first().fill("2");
  await page.getByRole("button", { name: "Convertir" }).first().click();
  await expect(page.getByText("500 mL")).toBeVisible();
});
