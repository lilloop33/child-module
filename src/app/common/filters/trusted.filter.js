export default function TrustedFilter($sce) {
	"ngInject";

	return (url) => {
		return $sce.trustAsResourceUrl(url);
	};
}
