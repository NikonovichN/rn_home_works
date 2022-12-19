interface Environment {
  launchStoryBook: boolean;
}

export const BASED_ON_ENV: Record<string, Environment> = {
  dev: {launchStoryBook: false},
  stories: {launchStoryBook: true},
};
