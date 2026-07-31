let url = "https://google.com";

let score = 100;

if (!url.startsWith("https://")) score -= 30;
if (url.includes("@")) score -= 20;
if (url.length > 50) score -= 10;

let status = "Safe";

if (score < 80) status = "Suspicious";
if (score < 50) status = "Dangerous";

console.log("Health Score:", score + "/100");
console.log("Status:", status);