export default function ErrorText() {
	"ngInject";

	return (errors) => {

		if (!errors) {
			return;
		}

		if (errors.required) {
			return 'Is required';
		}

		if (errors.email) {
			return 'Must be a valid email';
		}

	};
}
