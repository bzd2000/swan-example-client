import routes from "config/routes";
import appConfig from "config/app";
import authConfig from "config/auth";
import * as entities from "config/entities";
import Backend from "i18next-xhr-backend";
import {Router} from "aurelia-router";
import {AuthorizeStep} from "aurelia-authentication";
import "bootstrap";
import "fetch";

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-validation')

    /* @see http://aurelia-api.spoonx.org/configuration.html */
    .plugin('aurelia-api', builder => {
      // Register endpoint for each endpoint in the config.
      appConfig.endpoints.forEach(endpoint => {
        builder.registerEndpoint(endpoint.name, endpoint.endpoint, endpoint.config);

        if (endpoint.default) {
          builder.setDefaultEndpoint(endpoint.name);
        }
      });
    })

    .plugin('aurelia-form')

    /* @see http://aurelia-charts.spoonx.org/configuration.html */
    .plugin('aurelia-charts-c3')

    /* @see http://aurelia-charts.spoonx.org/configuration.html */
    .plugin('aurelia-charts', chart => {
      chart.configure({
        defaults: {
          library: 'C3'
        }
      });
    })

    /* @see http://aurelia-authentication.spoonx.org/configuration.html */
    .plugin('aurelia-authentication', baseConfig => {
      baseConfig.configure(authConfig);
    })

    /* @see http://aurelia-orm.spoonx.org/configuration.html */
    .plugin('aurelia-orm', builder => {
      builder.registerEntities(entities);
    })

    /* @see https://github.com/SpoonX/aurelia-notification */
    .plugin('aurelia-notification', config => {
      config.configure({
        notifications: {
          'success': 'humane-jackedup-success',
          'error'  : 'humane-jackedup-error',
          'info'   : 'humane-jackedup-info'
        }
      });
    })

    /* @see https://github.com/aurelia/i18n */
    .plugin('aurelia-i18n', instance => {
      // adapt options to your needs (see http://i18next.com/pages/doc_init.html)

      instance.i18next.use(Backend);

      instance.setup({
        backend:     {
          loadPath: 'scripts/config/locale/{{lng}}/{{ns}}.json'
        },
        lng        : appConfig.defaultLocale.language,
        attributes : ['t'],
        fallbackLng: appConfig.defaultLocale.language,
        debug      : false
      });
    })

    /* @see https://github.com/spoonx/aurelia-datatable */
    .plugin('aurelia-datatable')

    /* @see https://github.com/spoonx/aurelia-pager */
    .plugin('aurelia-pager')

    /* @see https://github.com/spoonx/aurelia-form */
    .plugin('aurelia-form')

    /* @see https://github.com/spoonx/aurelia-datatable */
    .plugin('aurelia-view-manager', config => {
      config.configure({
        'spoonx/datatable': {
          location: 'customViews/datatable.html'
        },
        'spoonx/form': {
            map: {
              checkboxes: 'customViews/checkbox.html'
          }}
      })
    })

    /* global resources */
    .globalResources('component/value-converters/date-format');

  aurelia.use.developmentLogging();

  aurelia.start().then(a => {
    a.container.get(Router).configure(configureRouter);
    a.setRoot('app');
  });
}

function configureRouter(config) {
  config.title = appConfig.title;

  config.addPipelineStep('authorize', AuthorizeStep);

  config.map(routes);
}
