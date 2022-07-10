# WASI GO

Playaround with `tinygo` and go and wasi.

**to build**:

```sh
tinygo build -wasm-abi=generic -target=wasi -o ./src/main.wasm ./go_code/main.go
```

**to run**

Using wasmer, download it from here [wasmer.io](https://wasmer.io/)

```sh
wasmer ./src/main.wasm
```

**or** 
(updated wrangler config)
(experimental support for WASI on Worker.dev)
```sh
cd ./src/
npx wrangler@wasm dev main.wasm
#to deploy
# wrangler.toml (should have) => main = "./src/main.wasm"
npx wrangler@wasm publish
```
