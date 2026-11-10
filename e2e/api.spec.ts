import { expect, test } from "@playwright/test";

for (const path of ["/api/recipes", "/api/tags", "/api/popular-categories"]) {
  test(`${path} returns JSON`, async ({ request }) => {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/json");
    expect(Array.isArray(await response.json())).toBe(true);
  });
}
