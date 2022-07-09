# WASI GO

Playaround with `tinygo` and go and wasi.

**to build**:

```sh
tinygo build -wasm-abi=generic -target=wasi -o ./src/main.wasm ./go_code/main.go
```

**to run**
```sh
wasmer ./src/main.wasm
```

**or**
(experimental support for WASI on Worker.dev)
```sh
cd ./src/
# first rm -f wrangler.toml or rename it to anything else...
npx wrangler@wasm dev main.wasm
```
