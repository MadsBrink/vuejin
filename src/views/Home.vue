<template>
    <layout-one>
        <template #drawer>
            <base-menu-list
                v-model="menuActive"
                :menu="menu" />
        </template>
        <template #content>
            <div class="content-wrapper">
                stuff!
            </div>
            <div class="content-wrapper content-wrapper-fill-height">
                <base-table />
            </div>
        </template>
    </layout-one>
</template>

<script>
import BaseTable from '../components/base/BaseTable.vue';
import BaseMenuList from '../components/base/BaseMenuList.vue';
import LayoutOne from '../components/layout/LayoutOne.vue';

export default {
    name: 'Home',
    components: {
        BaseTable,
        BaseMenuList,
        LayoutOne,
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
