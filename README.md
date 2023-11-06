# VSCode file watcher crashed bug

```sh
git clone git@github.com:SimonSiefke/vscode-file-watcher-crashed.git &&
cd vscode-file-watcher-crashed &&
npm ci &&
node index.js
```

Once VSCode is opened,

- Open the Main Output channel
- Reload vscode
- An error message is dispayed in the output channel: `[error] [UtilityProcess id: 1, type: fileWatcher, pid: 28113]: crashed with code 15 and reason 'killed'`

## Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/SimonSiefke/vscode-file-watcher-crashed)

### Full Output

```
2023-06-28 18:07:17.095 [info] update#setState idle
2023-06-28 18:07:40.832 [info] Extension host with pid 3720 exited with code: 0, signal: unknown.
2023-06-28 18:07:47.076 [info] update#setState checking for updates
2023-06-28 18:07:47.141 [info] update#setState idle
2023-06-28 18:08:16.944 [info] Extension host with pid 3844 exited with code: 0, signal: unknown.
2023-06-28 18:08:16.969 [error] [UtilityProcessWorker]: terminated unexpectedly with code 15, signal: unknown
2023-06-28 18:08:16.970 [error] [UtilityProcess id: 1, type: fileWatcher, pid: 3829]: crashed with code 15 and reason 'killed'
```
