type EventName = 
  | 'page_view'
  | 'cta_click'
  | 'section_view'
  | 'feature_interaction'
  | 'download_pitch_deck';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

class Analytics {
  private static instance: Analytics;
  private isInitialized = false;
  private debug = import.meta.env.DEV;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  public init() {
    if (this.isInitialized) return;
    
    // Initialize external analytics providers here (e.g., GA4, PostHog)
    if (this.debug) {
      console.log('[Analytics] Initialized');
    }
    
    this.isInitialized = true;
  }

  public track(name: EventName, properties?: EventProperties) {
    if (!this.isInitialized) this.init();

    // Log to console in development
    if (this.debug) {
      console.log(`[Analytics] Track: ${name}`, properties);
    }

    // Send to external providers
    // window.gtag?.('event', name, properties);
    // posthog.capture(name, properties);
  }

  public pageView(path: string) {
    this.track('page_view', { path });
  }
}

export const analytics = Analytics.getInstance();
