import { defineStore } from 'pinia'

export const useBenefitsStore = defineStore('benefits', {
  state: () => ({
    benefits: [
      {
        iconName: 'cable',
        genefitName: 'Amplify Insights',
        benefitDescription:
          'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
      },
      {
        iconName: 'public',
        genefitName: 'Control Your Global Presence',
        benefitDescription:
          'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
      },
      {
        iconName: 'record_voice_over',
        genefitName: 'Remove Language Barriers',
        benefitDescription:
          'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
      },
      {
        iconName: 'insights',
        genefitName: 'Visualize Growth',
        benefitDescription:
          'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
      },
    ],
    bigPictures: [
      {
        counter: '01',
        description: 'Spot Trends in Seconds: No more digging through numbers.',
      },
      {
        counter: '02',
        description:
          'Get Everyone on the Same Page: Share easy-to-understand reports with your team.',
      },
      {
        counter: '03',
        description:
          'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.',
      },
      {
        counter: '04',
        description: 'Your Global Snapshot: Get a quick, clear overview of your entire operation.',
      },
    ],
  }),
})
