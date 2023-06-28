
import {spawn} from 'node:child_process'

export const downloadAndUnzipVscode = async (vscodeVersion) => {
  const { downloadAndUnzipVSCode } = await import("@vscode/test-electron");
  const path = await downloadAndUnzipVSCode(vscodeVersion);
  spawn(path, {
    stdio:'inherit'
  })
};


downloadAndUnzipVscode('1.79.2')