import { WASI } from "@cloudflare/workers-wasi";
import demoWasm from "./main.wasm";

export default {
  async fetch(request, _env, ctx) {
    // Creates a TransformStream we can use to pipe our stdout to our response body.
    const stdout = new TransformStream();
    const wasi = new WASI({
      args: [],
      stdin: request.body,
      stdout: stdout.writable,
    });

    // Instantiate our WASM with our demo module and our configured WASI import.
    const instance = new WebAssembly.Instance(demoWasm, {
      wasi_snapshot_preview1: wasi.wasiImport,
    });

    // Keep our worker alive until the WASM has finished executing.
    ctx.waitUntil(wasi.start(instance));

    // Finally, let's reply with the WASM's output.
    return new Response(stdout.readable);
  },
};