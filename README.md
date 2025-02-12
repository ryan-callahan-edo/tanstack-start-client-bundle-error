# tanstack-start-client-bundle-error

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

## issues

when loading any page `Uncaught ReferenceError: Buffer is not defined` is hit. dizzle is leaking into the client bundle.
