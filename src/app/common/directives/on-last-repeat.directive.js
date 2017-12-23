export default function($timeout) {
	"ngInject";

	return function(scope, element, attrs) {
		if (scope.$last) {
			$timeout(() => {
				scope.$emit('onRepeatLast', element, attrs);
			}, 1);
		}
	};
}
