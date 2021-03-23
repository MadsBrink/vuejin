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
                    <div class="content-main-view">
                        <div class="content-main-view-grid"
                            v-if="viewTypeActive === 'grid'">
                            <base-masonry :tiles="rows">
                                <template #tile="{tile}">
                                    <overview-grid-tile
                                        :name="tile.name.label"
                                        :previews="tile.snapshots" />
                                </template>
                            </base-masonry>
                        </div>
                        <base-table v-else-if="viewTypeActive === 'list'"
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
                        <div class="content-main-settings"
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
import BaseMasonry from '../components/base/BaseMasonry.vue';
import BaseButtonActions from '../components/base/BaseButtonActions.vue';
import OverviewGridTile from '../components/overview/OverviewGridTile.vue';

export default {
    name: 'Home',
    components: {
        LayoutOne,
        BaseTable,
        BaseMasonry,
        BaseMenuPill,
        BaseMenuList,
        BaseButtonActions,
        OverviewGridTile,
    },
    data() {
        return {
            menu: [
                {
                    key: 'communications',
                    label: 'Communications',
                    items: [
                        { key: 'deliveries', label: 'Standard Deliveries', icon: 'icon-bubble' },
                        { key: 'offers', label: 'Dynamic Content Offers', icon: 'icon-price-tag' },
                    ],
                },
                {
                    key: 'other',
                    label: 'Other',
                    items: [
                        { key: 'collections', label: 'Collections', icon: 'icon-folder' },
                        { key: 'calendar', label: 'Calendar', icon: 'icon-calendar' },
                    ],
                },
            ],
            menuActive: 'deliveries',
            views: [
                { key: 'draft', label: 'Draft' },
                { key: 'submitted', label: 'Submitted' },
            ],
            viewActive: 'draft',
            viewTypes: [
                { key: 'list', icon: 'icon-list' },
                { key: 'grid', icon: 'icon-images' },
            ],
            viewTypeActive: 'list',
            settings: [
                { key: 'settings', icon: 'icon-cog' },
                { key: 'filter', icon: 'icon-filter' },
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
                    key: 0,
                    name: { label: 'Some delivery with a long delivery name' },
                    id: { label: '1' },
                    market: { label: 'UK', image: 'https://test.taskdescription.com/media/1123/flag_wunderman.svg' },
                    createdDate: { label: '2021-03-10T13:39:51.353' },
                    actions: [
                        { key: 'clone', label: 'Clone', icon: 'icon-copy' },
                        { key: 'changelog', label: 'Changelog', icon: 'icon-file-text2' },
                        { key: 'edit', label: 'Edit', icon: 'icon-pencil2' },
                        { key: 'delete', label: 'Delete', icon: 'icon-bin' },
                    ],
                    snapshots: [
                        {
                            key: 'desktop', label: 'Desktop', icon: 'icon-display', image: 'https://picsum.photos/200/400',
                        },
                        {
                            key: 'mobile', label: 'Mobile', icon: 'icon-mobile', image: 'https://picsum.photos/200/300',
                        },
                    ],
                },
                {
                    key: 1,
                    name: { label: 'Some delivery two' },
                    id: { label: '2' },
                    market: { label: 'UK', image: 'https://test.taskdescription.com/media/1123/flag_wunderman.svg' },
                    createdDate: { label: '2021-03-10T13:39:51.353' },
                    actions: [
                        { key: 'clone', label: 'Clone', icon: 'icon-copy' },
                        { key: 'changelog', label: 'Changelog', icon: 'icon-file-text2' },
                        { key: 'edit', label: 'Edit', icon: 'icon-pencil2' },
                        { key: 'delete', label: 'Delete', icon: 'icon-bin' },
                    ],
                    snapshots: [
                        {
                            key: 'desktop', label: 'Desktop', icon: 'icon-display', image: 'https://picsum.photos/200/600',
                        },
                        {
                            key: 'mobile', label: 'Mobile', icon: 'icon-mobile', image: 'https://picsum.photos/200/500',
                        },
                    ],
                },
                {
                    key: 2,
                    name: { label: 'Some delivery three' },
                    id: { label: '3' },
                    market: { label: 'UK', image: 'https://test.taskdescription.com/media/1123/flag_wunderman.svg' },
                    createdDate: { label: '2021-03-10T13:39:51.353' },
                    actions: [
                        { key: 'clone', label: 'Clone', icon: 'icon-copy' },
                        { key: 'changelog', label: 'Changelog', icon: 'icon-file-text2' },
                        { key: 'edit', label: 'Edit', icon: 'icon-pencil2' },
                        { key: 'delete', label: 'Delete', icon: 'icon-bin' },
                    ],
                    snapshots: [
                        {
                            key: 'desktop', label: 'Desktop', icon: 'icon-display', image: 'https://picsum.photos/200/500',
                        },
                        {
                            key: 'mobile', label: 'Mobile', icon: 'icon-mobile', image: 'https://picsum.photos/200/400',
                        },
                    ],
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
    .content {
        &-top {
            &-bookmark {
                display: flex;
                align-items: center;
                margin-left: 10px;
                padding: 8px 12px;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    color: var(--primary);
                }
            }
            &-right {
                display: flex;
                margin-left: auto;
            }
        }
        &-main {
            &-view {
                height: 100%;
                width: 100%;
                overflow-y: auto;
                &-grid {
                    margin: 20px;
                }
            }
            &-settings {
                width: 300px;
                border-left: 1px solid $grey-light;
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
    }
</style>
