export default function($filter) {
	"ngInject";

	return {
		restrict: 'A',
		scope: {
			errorLegend: '='
		},
		link: (scope, element, attrs) => {
			let modelTouched = false;

			scope.$watch('errorLegend.$touched', (touched) => {
				modelTouched = touched;
				handleModelChange()
			});

			scope.$watch('errorLegend.$viewValue', (modelValue) => {
				handleModelChange();
			});


			function handleModelChange() {
				let model = scope.errorLegend;
				if (model.$error && modelTouched) {
					let errorText = $filter('errorText')(model.$error);
					attrs.$set('error-legend-text', errorText);
				}
			}
		}
	};


}
