<template>
	<div :class="avatarGroupClasses">
		<div v-if="avatarRemainders > 0" class="avatar avatar-number">
			<span v-text="`+${avatarRemainders}`" />
		</div>
		<KtAvatar
			v-if="index < showItems"
			v-for="(item, index) in reversedItems"
			:key="index"
			:name="item.name"
			:src="item.src"
			:hoverable="hoverable"
			:selected="item.selected"
			:small="item.small"
			:showTooltip="showTooltip"
		/>
	</div>
</template>

<script>
import KtAvatar from '../../kotti-avatar'

export default {
	name: 'KtAvatarGroup',
	components: {
		KtAvatar,
	},
	props: {
		items: Array,
		showItems: {
			type: Number,
			default: 2,
		},
		isStack: {
			type: Boolean,
			default: false,
		},
		showTooltip: {
			type: Boolean,
			default: false,
		},
		hoverable: Boolean,
	},
	computed: {
		avatarGroupClasses() {
			return {
				'avatar-group': true,
				stack: this.isStack,
			}
		},
		avatarRemainders() {
			return this.items.length - this.showItems
		},
		reversedItems() {
			return this.items.reverse()
		},
	},
}
</script>
