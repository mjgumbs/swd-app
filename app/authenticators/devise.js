import Devise from 'ember-simple-auth/authenticators/devise';

import config from 'swd-app/config/environment';

export default Devise.extend({
  serverTokenEndpoint: `${config.APP.API_HOST}/sessions`,
});
