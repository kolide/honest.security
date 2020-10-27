import AsideController from 'js/controllers/aside_controller';
import highlight from 'js/vendor/highlight_to_tweet';

const application = Stimulus.Application.start();

application.register('aside', AsideController);

highlight({
  cssClassess: ["tweet"],
  extra: "#honestsecurity " + window.location
});
