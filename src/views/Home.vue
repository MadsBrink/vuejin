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
                    <base-menu-pill
                        v-model="viewActive"
                        :menu="views" />
                    <div class="content-box content-top-bookmark">
                        <span class="icon-bookmark"></span>
                    </div>
                    <div class="content-top-right">
                        <base-menu-pill class="mr-20"
                            v-model="viewTypeActive"
                            :menu="viewTypes" />
                        <base-menu-pill
                            v-model="settingActive"
                            :menu="settings" />
                    </div>
                </div>
                <div class="content-main">
                    <div class="content-box content-main-view">
                        <base-table
                            v-model:selected="selectedCommunications"
                            :rows="rows"
                            :columns="columns">
                            <template #actions="{row}">
                                <base-button-actions
                                    v-if="row.actions"
                                    :actions="row.actions" />
                            </template>
                        </base-table>
                    </div>
                    <transition name="right-slide-in">
                        <div class="content-box content-main-settings"
                            v-if="settingActive">
                            <span @click="settingActive = null">x</span>
                        </div>
                    </transition>
                </div>
            </div>
        </template>
    </layout-one>
</template>

<script>
import LayoutOne from '../components/layout/LayoutOne.vue';
import BaseTable from '../components/base/BaseTable.vue';
import BaseMenuList from '../components/base/BaseMenuList.vue';
import BaseMenuPill from '../components/base/BaseMenuPill.vue';
import BaseButtonActions from '../components/base/BaseButtonActions.vue';

export default {
    name: 'Home',
    components: {
        LayoutOne,
        BaseTable,
        BaseMenuPill,
        BaseMenuList,
        BaseButtonActions,
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
            views: [
                { label: 'Draft' },
                { label: 'Submitted' },
            ],
            viewActive: null,
            viewTypes: [
                { icon: 'icon-list' },
                { icon: 'icon-images' },
            ],
            viewTypeActive: null,
            settings: [
                { icon: 'icon-cog' },
                { icon: 'icon-filter' },
            ],
            settingActive: null,
            selectedCommunications: [],
            columns: [
                { key: 'name', label: 'Delivery Name', type: 'String' },
                { key: 'id', label: 'ID', type: 'int' },
                { key: 'market', label: 'Market', type: 'String' },
                { key: 'createdDate', label: 'Created Date', type: 'datetimehour' },
                { key: 'actions', label: '', type: 'actions' },
            ],
            rows: [
                {
                    name: { label: 'Some delivery one' },
                    id: { label: '1' },
                    market: { label: 'UK', icon: 'https://test.taskdescription.com/media/1123/flag_wunderman.svg' },
                    createdDate: { label: '2021-03-10T13:39:51.353' },
                    actions: [
                        { key: 'clone', label: 'Clone', icon: 'icon-copy' },
                        { key: 'changelog', label: 'Changelog', icon: 'icon-file-text2' },
                        { key: 'edit', label: 'Edit', icon: 'icon-pencil2' },
                        { key: 'delete', label: 'Delete', icon: 'icon-bin' },
                    ],
                },
                {
                    name: { label: 'Some delivery two' },
                    id: { label: '2' },
                    market: { label: 'UK', icon: 'https://test.taskdescription.com/media/1123/flag_wunderman.svg' },
                    createdDate: { label: '2021-03-10T13:39:51.353' },
                    actions: [
                        { key: 'clone', label: 'Clone', icon: 'icon-copy' },
                        { key: 'changelog', label: 'Changelog', icon: 'icon-file-text2' },
                        { key: 'edit', label: 'Edit', icon: 'icon-pencil2' },
                        { key: 'delete', label: 'Delete', icon: 'icon-bin' },
                    ],
                },
                {
                    name: { label: 'Some delivery three' },
                    id: { label: '3' },
                    market: { label: 'UK', icon: 'https://test.taskdescription.com/media/1123/flag_wunderman.svg' },
                    createdDate: { label: '2021-03-10T13:39:51.353' },
                    actions: [
                        { key: 'clone', label: 'Clone', icon: 'icon-copy' },
                        { key: 'changelog', label: 'Changelog', icon: 'icon-file-text2' },
                        { key: 'edit', label: 'Edit', icon: 'icon-pencil2' },
                        { key: 'delete', label: 'Delete', icon: 'icon-bin' },
                    ],
                },
            ],
        };
    },
    created() {
        [this.menuActive] = this.menu[0].items;
        [this.viewActive] = this.views;
        [this.viewTypeActive] = this.viewTypes;
    },
};
</script>
<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        &-top {
            display: flex;
            margin-bottom: 20px;
            &-bookmark {
                display: flex;
                align-items: center;
                margin-left: 10px;
                padding: 8px 12px;
                cursor: pointer;
            }
            &-right {
                display: flex;
                margin-left: auto;
            }
        }
        &-main {
            flex: 1;
            display: flex;
            flex-direction: row;
            &-view {
                height: 100%;
                width: 100%;
            }
            &-settings {
                width: 250px;
                margin-left: 20px;
            }
        }
    }

    .right-slide-in-enter-active,
    .right-slide-in-leave-active {
        transition: all 0.5s;
    }

    .right-slide-in-enter-from,
    .right-slide-in-leave-to {
        width: 0;
        margin-left: 0;
    }
</style>
