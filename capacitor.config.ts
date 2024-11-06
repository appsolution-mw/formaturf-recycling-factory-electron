import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.formaturf.recycling-factory',
  appName: 'Formaturf Recylcing Factory',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
};

export default config;
