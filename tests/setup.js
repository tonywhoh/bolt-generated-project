import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

const customConfig = {
  customDiffConfig: {
    threshold: 0.1,
  },
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
};

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot(customConfig),
});
