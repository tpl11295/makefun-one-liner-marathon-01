// One-Liner Marathon — one comedy line, 280 characters max.
// Subject: a smart fridge that takes its job far too seriously.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My smart fridge emailed my boss that I was out of office — I only opened it at 3 a.m. for a snack, and now HR has opened a case file on my midnight snacking.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
