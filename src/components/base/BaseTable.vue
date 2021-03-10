<template>
    <table class="base-table">
        <thead>
            <tr>
                <th>Delivery name</th>
                <th>ID</th>
                <th>Market</th>
                <th>Created By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Some delivery name</td>
                <td>12345</td>
                <td>EN</td>
                <td>Mads Nybye</td>
            </tr>
            <tr>
                <td>Some delivery name</td>
                <td>12345</td>
                <td>EN</td>
                <td>Mads Nybye</td>
            </tr>
            <tr>
                <td>Some delivery name</td>
                <td>12345</td>
                <td>EN</td>
                <td>Mads Nybye</td>
            </tr>
            <tr>
                <td>Some delivery name</td>
                <td>12345</td>
                <td>EN</td>
                <td>Mads Nybye</td>
            </tr>
            <tr>
                <td>Some delivery name</td>
                <td>12345</td>
                <td>EN</td>
                <td>Mads Nybye</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'BaseTable',
};
</script>
<style lang="scss" scoped>
    table {
        width: 100%;
        font-size: 14px;
        border-spacing: 0;
        th, td {
            height: 44px;
            text-align: left;
            padding:0 20px;
        }
        th {
            border-bottom: 2px solid $grey-light;
        }
        td {
            border-bottom: 1px solid $grey-light;
        }
        tbody tr {
            &:hover {
                background-color: $grey-extra-light;
            }
        }
    }
</style>
