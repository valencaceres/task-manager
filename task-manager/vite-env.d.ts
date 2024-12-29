interface ImportMetaEnv {
    VITE_API_KEY: string;
    VITE_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }