<template>
    <layout-one-column>
        <template #drawer>
            <base-menu-list
                v-model="menuActive"
                :menu="menu" />
        </template>
        <template #content>
            <div class="content-wrapper">
                <base-table />
            </div>
        </template>
    </layout-one-column>
</template>

<script>
import BaseTable from '../components/base/BaseTable.vue';
import BaseMenuList from '../components/base/BaseMenuList.vue';
import LayoutOneColumn from '../components/layout/LayoutOneColumn.vue';

export default {
    name: 'Home',
    components: {
        BaseTable,
        BaseMenuList,
        LayoutOneColumn,
    },
    data() {
        return {
            menu: [
                {
                    label: 'Communications',
                    items: [
                        { label: 'Standard Deliveries', icon: 'icon-bubble' },
                        { label: 'Dynamic Content Offers', icon: 'icon-price-tag' },
                    ],
                },
                {
                    label: 'Other',
                    items: [
                        { label: 'Collections', icon: 'icon-folder' },
                        { label: 'Calendar', icon: 'icon-calendar' },
                    ],
                },
            ],
            menuActive: null,
        };
    },
    created() {
        [this.menuActive] = this.menu[0].items;
    },
};
</script>
