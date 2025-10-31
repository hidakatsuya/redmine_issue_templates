<template>
  <span class="sprite-icon-or-label">
    <template v-if="computedSupportsSpriteIcons">
      <svg :class="svgClass" aria-hidden="true">
        <use :href="spriteHref"></use>
      </svg>
      <span v-if="!iconOnly && label" class="icon-label">
        {{ label }}
      </span>
    </template>
    <template v-else>
      <template v-if="!iconOnly">
        {{ label }}
      </template>
    </template>
  </span>
</template>

<script>
export default {
  name: 'SpriteIconOrLabel',
  inject: {
    injectedSpriteIconConfig: {
      from: 'spriteIconConfig',
      default: () => ({}),
    },
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
    supportsSpriteIcons: {
      type: Boolean,
      default: null,
    },
    spritePath: {
      type: String,
      default: null,
    },
    pluginSpritePath: {
      type: String,
      default: null,
    },
    usePluginSprite: {
      type: Boolean,
      default: null,
    },
    size: {
      type: Number,
      default: 18,
    },
  },
  computed: {
    resolvedConfig() {
      return this.injectedSpriteIconConfig || {};
    },
    computedSupportsSpriteIcons() {
      if (this.supportsSpriteIcons !== null) {
        return this.supportsSpriteIcons;
      }
      return this.resolvedConfig.supportsSpriteIcons ?? false;
    },
    computedSpritePath() {
      if (this.spritePath !== null) {
        return this.spritePath;
      }
      return this.resolvedConfig.spritePath ?? '';
    },
    computedPluginSpritePath() {
      if (this.pluginSpritePath !== null) {
        return this.pluginSpritePath;
      }
      return this.resolvedConfig.pluginSpritePath ?? '';
    },
    computedUsePluginSprite() {
      if (this.usePluginSprite !== null) {
        return this.usePluginSprite;
      }
      return false;
    },
    svgClass() {
      return `s${this.size} icon-svg`;
    },
    spriteHref() {
      const pluginPath = this.computedPluginSpritePath;
      const basePath = this.computedUsePluginSprite && pluginPath
        ? pluginPath
        : this.computedSpritePath;
      return `${basePath}#icon--${this.icon}`;
    },
  },
};
</script>
