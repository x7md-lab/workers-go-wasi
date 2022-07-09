# WASI GO

Playaround with `tinygo` and go and wasi.

**to build**:

```sh
tinygo build -wasm-abi=generic -target=wasi -o ./src/main.wasm ./go_code/main.go
```