import { spawn } from "node:child_process";

export const downloadAndUnzipVscode = async (vscodeVersion) => {
  const { downloadAndUnzipVSCode } = await import("@vscode/test-electron");
  const path = await downloadAndUnzipVSCode(vscodeVersion);
  spawn(path, ["--user-data-dir", "/tmp"], {
    stdio: "inherit",
  });
};

downloadAndUnzipVscode("1.84.0");
