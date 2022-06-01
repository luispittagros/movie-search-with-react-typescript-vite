/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: number;
  readonly VITE_OMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
