import { analytics } from '@/lib/analytics';
import { useEffect } from 'react';

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics on mount
    analytics.init();
  }, []);

  const trackEvent = (name: Parameters<typeof analytics.track>[0], properties?: Parameters<typeof analytics.track>[1]) => {
    analytics.track(name, properties);
  };

  const trackPageView = (path: string) => {
    analytics.pageView(path);
  };

  return {
    trackEvent,
    trackPageView,
  };
};
