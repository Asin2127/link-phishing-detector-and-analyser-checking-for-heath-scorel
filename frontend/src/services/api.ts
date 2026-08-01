export interface ScanResult {
  score: number;
  risk: string;
  https: boolean;
  ssl: boolean;
  redirects: number;
}

export function calculateHealthScore(url: string): ScanResult {
  let score = 100;
  const https = url.startsWith("https://");

  if (!https) {
    score -= 20;
  }

  const suspiciousWords = [
    "login",
    "verify",
    "secure",
    "bank",
    "update",
    "free",
    "gift",
    "bonus",
    "paypal",
    "account",
  ];

  const lower = url.toLowerCase();
  suspiciousWords.forEach((word) => {
    if (lower.includes(word)) {
      score -= 10;
    }
  });

  if (score < 0) score = 0;

  let risk = "Safe";
  if (score >= 81) risk = "Safe";
  else if (score >= 61) risk = "Low Risk";
  else if (score >= 41) risk = "Medium Risk";
  else if (score >= 21) risk = "High Risk";
  else risk = "Danger";

  return {
    score,
    risk,
    https,
    ssl: https,
    redirects: 0,
  };
}
