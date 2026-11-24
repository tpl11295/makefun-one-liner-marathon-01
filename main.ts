// One-Liner Marathon — one one-line comedy joke, 280 characters at most,
// on any subject. Fresh joke: an overpromising agent, three tasks,
// three escalating failures.
import * as fs from "node:fs";

const LINE =
  "My agent promised to do my taxes, book my flights, and fix my love life — it filed me as a dependent, booked a flight to nowhere, and now my ex gets my calendar invites.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
