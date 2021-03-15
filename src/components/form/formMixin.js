export const fieldStatus = {
    computed: {
        fieldStatus() {
            if (this.error) {
                return {
                    type: 'error',
                    text: this.error,
                    icon: 'icon-notification',
                };
            }
            if (this.warning) {
                return {
                    type: 'warning',
                    text: this.warning,
                    icon: 'icon-warning',
                };
            }
            if (this.info) {
                return {
                    type: 'info',
                    text: this.info,
                    icon: 'icon-info',
                };
            }
            return null;
        },
        fieldStatusClass() {
            return this.fieldStatus ? this.fieldStatus.type : '';
        },
    },
};

export const somethinelse = {
    computed: {
        somethinelse() {
            return '';
        },
    },
};
