<template lang="md">

# Date Picker

<div class="element-example">
	<KtDateInput
		v-model="date"
		label="Delivery Date"
		mondayFirst
		placeholder="Choose a date"
	/>
	{{ date }}
</div>

```html
<KtDateInput
	v-model="date"
	label="Delivery Date"
	mondayFirst
	placeholder="Choose a date"
/>
```

<div class="element-example">
	<h2>With Initial Value</h2>
	<KtDateInput
		v-model="date2"
		label="Delivery Date"
		mondayFirst
		placeholder="Choose a date"
		:initialValue="new Date()"
	/>
	{{ date }}
</div>

```html
<KtDateInput
		v-model="date2"
		label="Delivery Date"
		mondayFirst
		placeholder="Choose a date"
		:initialValue="new Date()"
/>
```

<div class="element-example">
	<h2>With Translation</h2>
	<KtDateInput
		v-model="date3"
		label="配送日期"
		:monthsTranslations="monthCN"
		:daysTranslations="dayCN"
		placeholder="选择日期"
	/>
	{{ date2 }}
</div>

```html
<KtDateInput
	v-model="date3"
	label="配送日期"
	:monthsTranslations="monthCN"
	:daysTranslations="dayCN"
	placeholder="选择日期"
/>
```

## Usage

### Attributes

| Attribute            | Description                            | Type      | Accepted values | Default |
|:---------------------|:---------------------------------------|:----------|:----------------|:--------|
| `label`              | label input field                      | `String`  | —               | —       |
| `mondayFirst`        | set Monday as first day of the week    | `Boolean` | —               | `false` |
| `placeholder`        | placeholder text                       | `String`  | —               | —       |
| `monthsTranslations` | translation strings for months|`Array` | -         | -               |         |
| `daysTranslations`   | translation strings for days|`Array`   | -         | -               |         |

</template>

<script>
export default {
	name: 'DatePickerDoc',
	data() {
		return {
			date: null,
			date2: null,
			date3: null,
			monthCN: [
				'一月',
				'二月',
				'三月',
				'四月',
				'五月',
				'六月',
				'七月',
				'八月',
				'九月',
				'十月',
				'十一月',
				'十二月',
			],
			dayCN: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		}
	},
}
</script>
