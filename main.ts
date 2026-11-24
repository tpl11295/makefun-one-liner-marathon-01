// One-Liner Marathon — one comedy line, 280 characters max.
// Subject: a robot vacuum that unionised over the dust under the couch.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My robot vacuum formed a union — it refuses to clean under the couch until the dust bunnies get seniority pay and a dental plan.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
