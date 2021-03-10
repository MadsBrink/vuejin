<template>
    <layout-one>
        <template #drawer>
            <base-menu-list
                v-model="menuActive"
                :menu="menu" />
        </template>
        <template #content>
            <div class="content">
                <div class="content-top">
                    <div class="content-box content-top-tabs">
                        <span>Draft</span>
                        <span>Submitted</span>
                    </div>
                    <div class="content-box content-top-settings">
                        <span class="icon-cog"></span>
                        <span class="icon-bookmark"></span>
                        <span class="icon-filter"></span>
                    </div>
                </div>
                <div class="content-box content-view">
                    <base-table />
                </div>
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
<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        &-view {
            flex: 1;
        }
        &-top {
            display: flex;
            margin-bottom: 20px;
            > div {
                display: flex;
                align-items: center;
            }
            &-tabs {
                font-size: 14px;
                padding: 0 6px;
                span {
                    text-align: center;
                    padding: 8px 16px;
                    &:not(:last-child) {
                        border-right: 1px solid $grey-light;
                    }
                }
            }
            &-settings {
                margin-left: auto;
                padding: 8px 6px;
                span {
                    padding: 0 6px;
                }
            }
        }
    }
    .menu {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        margin-left: 20px;
        span {
            display: block;
            padding: 6px;
            &:not(:last-child) {
                border-bottom: 1px solid $grey-light;
            }
        }
    }
</style>
