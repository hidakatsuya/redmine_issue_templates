import Vue from 'vue';
import JsonGenerator from './components/JsonGenerator.vue';
import { CustomFieldPlugin } from './plugins/customFields';
import { LocalePlugin } from './plugins/locales';

const TEMPLATE_FIELDS = function (props) {
  const {
    loadSelectableFieldsPath,
    templateId,
    projectId,
    locales,
    spriteIconConfig = {},
  } = props;

  const {
    supportsSpriteIcons = false,
    spritePath = '',
    pluginSpritePath = '',
  } = spriteIconConfig;

  Vue.use(LocalePlugin, locales);
  Vue.use(CustomFieldPlugin, {
    baseUrl: loadSelectableFieldsPath,
    templateId,
    projectId,
  });

  const componentProps = { ...props };
  delete componentProps.spriteIconConfig;

  new Vue({
    provide() {
      return {
        spriteIconConfig: {
          supportsSpriteIcons,
          spritePath,
          pluginSpritePath,
        },
      };
    },
    render: (h) => h(JsonGenerator, { props: componentProps })
  }).$mount('#json_generator');
};

window.TEMPLATE_FIELDS = TEMPLATE_FIELDS;
