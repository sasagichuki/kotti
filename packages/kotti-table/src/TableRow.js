import TableCell from './TableRowCell'
import { KT_TABLE, KT_STORE, KT_LAYOUT } from './constants'

export default {
	name: 'KtTableRow',
	props: {
		rowIndex: Number,
		row: Object,
	},
	inject: { KT_TABLE, KT_STORE, KT_LAYOUT },
	render(h) {
		const {
			row,
			rowIndex,
			isExpandable,
			expandToggleIcon,
			isInteractive,
			_trClasses,
			isSelectable,
			isSelected,
			tableColumns,
			handleSelect,
			handleClick,
			handleFocus,
			handleBlur,
			handleExpand,
			hasActions,
			renderActions,
		} = this
		return (
			<tr
				class={_trClasses}
				role={isInteractive ? 'button' : false}
				tabindex={isInteractive ? 0 : false}
				onClick={$event => handleClick($event, row, rowIndex)}
				onFocus={$event => handleFocus($event, row, rowIndex)}
				onBlur={$event => handleBlur($event, row, rowIndex)}
			>
				{isExpandable && (
					<td
						class="c-hand"
						onClick={$event => handleExpand($event, row, rowIndex)}
					>
						<div class="toggle">
							<i class="yoco">{expandToggleIcon}</i>
						</div>
					</td>
				)}
				{isSelectable && (
					<td
						class="td-selectable kt-table__checkbox-col"
						onClick={$event => $event.stopPropagation()}
					>
						<div class="form-group">
							<label class="form-checkbox">
								<input
									type="checkbox"
									checked={isSelected}
									onChange={$event => handleSelect($event, row, rowIndex)}
								/>
								<i class="form-icon" />
							</label>
						</div>
					</td>
				)}
				{tableColumns.map((column, columnIndex) => (
					<TableCell
						key={column.prop || columnIndex}
						column={column}
						row={row}
						rowIndex={rowIndex}
						columnIndex={columnIndex}
					/>
				))}
				{hasActions && (
					<td>
						<div class="table-actions">
							{renderActions(h, { row, data: row, rowIndex })}
						</div>
					</td>
				)}
			</tr>
		)
	},

	computed: {
		_trClasses() {
			const classes = []

			if (this.isInteractive) classes.push('clickable')
			if (this.isSelected) classes.push('selected')
			if (this[KT_TABLE].trClasses) classes.push(this[KT_TABLE].trClasses)

			return classes
		},
		isExpanded() {
			return this[KT_STORE].get('isExpanded', this.row)
		},
		expandToggleIcon() {
			return this.isExpanded ? 'chevron_down' : 'chevron_right'
		},
		isInteractive() {
			return this[KT_TABLE].isInteractive
		},
		isSelectable() {
			return this[KT_TABLE].isSelectable
		},
		selection() {
			return this[KT_STORE].state.selection
		},
		tableColumns() {
			return this[KT_STORE].state.columns
		},
		isExpandable() {
			return this[KT_TABLE].isExpandable
		},
		hasActions() {
			return this[KT_TABLE].hasActions
		},
		renderActions() {
			return this[KT_TABLE]._renderActions
		},
		isSelected() {
			return this[KT_STORE].get('isSelected', this.row)
		},
	},
	methods: {
		handleSelect($event, row) {
			$event.stopPropagation()
			this[KT_STORE].commit('selectRow', row, $event.target.checked)
		},
		handleExpand($event, row) {
			$event.stopPropagation()
			this[KT_STORE].commit('expandRow', row)
		},
		handleClick($event, row, index) {
			this[KT_TABLE].$emit('rowClick', row, index)
			if (this[KT_TABLE].isInteractive) {
				this[KT_TABLE].$emit('activateRow', row, index)
			}
		},
		handleFocus($event, row, index) {
			if (this[KT_TABLE].isInteractive) {
				this[KT_TABLE].$emit('activateRow', row, index)
				this[KT_TABLE].$emit('rowFocus', row, index)
			}
		},
		handleBlur($event, row, index) {
			if (this[KT_TABLE].isInteractive) {
				this[KT_TABLE].$emit('rowBlur', row, index)
			}
		},
	},
}
