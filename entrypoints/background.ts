import Mellowtel from "./mellowtel";

export default defineBackground(() => {
  
  (async () => {
    const MELLOWTEL_API_KEY = import.meta.env.VITE_MELLOWTEL_API_KEY;
    const mellowtel = new Mellowtel(MELLOWTEL_API_KEY, {
      MAX_DAILY_RATE: 50000,
      disableLogs: false,
    });

    await mellowtel.initBackground();

    await mellowtel.optIn();
    await mellowtel.start();

    console.log('started mellowtel background script');
  })();
});
