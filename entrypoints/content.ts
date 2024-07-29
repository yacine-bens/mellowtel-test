import Mellowtel from "./mellowtel";

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: "document_start",
  allFrames: true,
  main() {
    const MELLOWTEL_API_KEY = import.meta.env.VITE_MELLOWTEL_API_KEY;
    const mellowtel = new Mellowtel(MELLOWTEL_API_KEY, {
      MAX_DAILY_RATE: 50000,
      diableLogs: false,
    });

    mellowtel.initContentScript();

    console.log('started mellowtel content script');
  },
});
