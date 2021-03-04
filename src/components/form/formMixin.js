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
            if (this.element.info) {
                return {
                    type: 'info',
                    text: this.element.info,
                    icon: 'icon-info',
                };
            }
            return null;
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
