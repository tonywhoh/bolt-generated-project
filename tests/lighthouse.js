import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['pwa', 'performance'],
    port: chrome.port
  };

  const runnerResult = await lighthouse('http://localhost:4173', options);
  const reportHtml = runnerResult.report;
  
  await chrome.kill();
  return runnerResult.lhr;
}

export { runLighthouse };
