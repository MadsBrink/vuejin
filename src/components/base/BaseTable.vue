<template>
    <table class="base-table">
        <thead>
            <tr>
                <th class="base-table-checkbox">
                    <label class="form-element-checkbox">
                        <input type="checkbox"
                            @input="onSelectAll($event.target.checked)" />
                        <svg width="20px" height="20px" viewBox="0 0 18 18">
                            <polyline points="3 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                </th>
                <th v-for="column in columns" :key="column.id">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id"
                :class="{ selected : selectedRows.includes(row.id)}">
                <td class="base-table-checkbox">
                    <label class="form-element-checkbox">
                        <input type="checkbox"
                            v-model="selectedRows"
                            :value="row.id" />
                        <svg width="20px" height="20px" viewBox="0 0 18 18">
                            <polyline points="3 9 7 14 15 4"></polyline>
                        </svg>
                    </label>
                </td>
                <td v-for="column in columns" :key="column.key"
                    :class="column.key" >
                    <img v-if="row[column.key].image"
                        :class="column.key"
                        :src="row[column.key].image" >
                    {{ formatLabel(row[column.key].label, column.type) }}
                    <slot name="actions" :row="row" v-if="column.key === 'actions'" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import moment from 'moment';

export default {
    name: 'BaseTable',
    props: {
        rows: Array,
        columns: Array,
        selected: Array,
    },
    emits: ['update:selected'],
    computed: {
        selectedRows: {
            get() {
                return this.selected;
            },
            set(value) {
                this.$emit('update:selected', value);
            },
        },
    },
    methods: {
        onSelectAll(value) {
            if (value) {
                this.selectedRows = this.rows.map((e) => e.id);
            } else {
                this.selectedRows = [];
            }
        },
        formatLabel(label, type) {
            if (type === 'datetime') {
                return moment(label).format('DD MMM YYYY');
            }
            if (type === 'datetimehour') {
                return moment(label).format('DD MMM YYYY, HH:mm');
            }
            return label;
        },
    },
};
</script>
<style lang="scss" scoped>
    .base-table {
        width: 100%;
        font-size: 14px;
        border-spacing: 0;
        position: relative;
        th, td {
            height: 44px;
            text-align: left;
            padding: 0 20px;
            position: relative;
            img {
                width: 20px;
                vertical-align: middle;
                vertical-align: -2px;
            }
            &.base-table-checkbox {
                width: 1%;
                padding-right: 1px;
                :deep(.form-element-checkbox) {
                    margin-bottom: 0;
                }
            }
            &.actions {
                width: 1%;
            }
        }
        th {
            background-color: $white;
            border-bottom: 2px solid $grey-light;
        }
        td {
            border-bottom: 1px solid $grey-light;
        }
        tbody tr {
            &.selected {
                background-color: $grey-extra-light;
            }
            &:hover td {
                &::before {
                    content: "";
                    position: absolute;
                    top: -4px;
                    left: 0;
                    height: 4px;
                    width: 100%;
                    background: linear-gradient(0,
                        rgba(9,30,66,0.0) 0,
                        rgba(9,30,66,0.0) 1px,
                        rgba(9,30,66,0.05) 1px,
                        rgba(9,30,66,0) 4px);
                }
                &::after {
                    content: "";
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    height: 4px;
                    width: 100%;
                    background: linear-gradient(180deg,
                        rgba(9,30,66,0.05) 0,
                        rgba(9,30,66,0.05) 1px,
                        rgba(9,30,66,0.1) 1px,
                        rgba(9,30,66,0) 4px);
                }
                z-index: 1;
            }
        }
    }
</style>
