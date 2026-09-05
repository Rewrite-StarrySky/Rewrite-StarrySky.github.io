import fs from "fs";
import path from "path";

const targetDir = path.resolve("./public/papers");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const userUploadedDir = "/home/cosmiel/.gemini/antigravity-ide/brain/c0c1b2cf-1eef-4a35-8572-419def354710/.user_uploaded";

const paperMapping = [
  {
    src: "media_1788628506393.pdf",
    dest: "itac-2026.pdf",
    name: "ITAC 2026 - Humanoid Mixed Production Lines"
  },
  {
    src: "media_1788628506374.pdf",
    dest: "tanet-2025.pdf",
    name: "TANET 2025 - BERT Prompt Injection Defense"
  },
  {
    src: "media_1788628506343.pdf",
    dest: "dlt-2025.pdf",
    name: "DLT 2025 - Automated Prompt Injection Testing"
  },
  {
    src: "media_1788628506318.pdf",
    dest: "srl-2025.pdf",
    name: "SRL 2025 - AI Interaction Behavior Analysis"
  }
];

for (const paper of paperMapping) {
  const srcPath = path.join(userUploadedDir, paper.src);
  const destPath = path.join(targetDir, paper.dest);
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${paper.name}: ${srcPath} -> ${destPath}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
}

console.log("All paper PDFs processed successfully.");
